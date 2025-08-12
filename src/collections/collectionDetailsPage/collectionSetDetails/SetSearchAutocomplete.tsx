import { TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useState } from 'react';

interface SetSearchResult {
  no: string;
  year?: string;
  name?: string;
}

// Would be nice to have an API for searching sets by name or code.
// But for now user needs to know set code to search it.
// So this autocomplete is just a mockup for demonstration purposes.
export const SetSearchAutocomplete = () => {
  const [value, setValue] = useState<SetSearchResult | null>(null);
  const [options, setOptions] = useState<SetSearchResult[]>([]);

  const fetchSets = async (query: string) => {
    if (!query) {
      setOptions([]);
      return;
    }
    // Replace with your API endpoint
    const response = await searchMock(query);
    setOptions(response);
  };

  const searchMock = async (query: string): Promise<SetSearchResult[]> => {
    return new Promise<SetSearchResult[]>((resolve) => {
      setTimeout(() => {
        const mockData: SetSearchResult[] = [
          { no: `${query}-111`, year: '2020', name: `${query}-1` },
          { no: `${query}-222`, year: '2021', name: `${query}-2` },
          { no: `${query}-333`, year: '2022', name: `${query}-3` },
          { no: `${query}-444`, year: '2023', name: `${query}-4` },
          { no: `${query}-555`, year: '2024', name: `${query}-5` },
          { no: `${query}-666`, year: '2025', name: `${query}-6` },
          { no: `${query}-777`, year: '2026', name: `${query}-7` },
          { no: `${query}-888`, year: '2027', name: `${query}-8` },
          { no: `${query}-999`, year: '2028', name: `${query}-9` },
        ];
        resolve(mockData);
      }, 500);
    });
  }

  return (
    <Autocomplete
      value={value}
      onChange={(_, newValue) => {
        if (typeof newValue === 'string') {
          setValue({
            no: newValue,
          });
        } else if (newValue && newValue.inputValue) {
          // Create a new value from the user input
          setValue({
            no: newValue.inputValue,
          });
        } else {
          setValue(newValue);
        }
      }}
      onInputChange={(_, newInputValue) => {
        fetchSets(newInputValue);
      }}
      selectOnFocus
      clearOnBlur
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={options}
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === 'string') {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option.name;
      }}
      renderOption={(props, option) => {
        const { key, ...optionProps } = props;
        return (
          <li key={key} {...optionProps}>
            {option.name}
          </li>
        );
      }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} label="Search set by name or code" />
      )}
    />
  );
}

import {Box, TextField, Typography} from '@mui/material';
import {Controller, useForm} from 'react-hook-form';
import Button from '@mui/material/Button';
import type { ICollectionSet } from '../../../shared/models/collections';

export const CollectionSetDetailsForm = ({ collectionSet, onSubmit, onCancel }: {
  collectionSet?: ICollectionSet;
  onSubmit: (set: ICollectionSet) => void;
  onCancel?: () => void;
}) => {
  const {handleSubmit, control} = useForm<ICollectionSet>({
    defaultValues: { ...collectionSet }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box display="flex" flexDirection="column">
        <Typography variant="body2">
          Create a new collection to start organizing your sets. Just provide a name and a description.
        </Typography>
        <Controller
          name="code"
          control={control}
          defaultValue=""
          rules={{}}
          render={({field, fieldState}) => (
            <TextField
              {...field}
              label="Code"
              fullWidth
              margin="normal"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{required: 'Collection name is required'}}
          render={({field, fieldState}) => (
            <TextField
              {...field}
              label="Set name"
              fullWidth
              margin="normal"
              error={!!fieldState.error}
              helperText={fieldState.error?.message}
            />
          )}
        />

        <Box display="flex" justifyContent="flex-end" alignItems="center" gap={1} pt={2}>
          <Button onClick={onCancel}>Cancel</Button>
          <Button variant="contained" color="primary" type="submit">
            Save Set
          </Button>
        </Box>
      </Box>
    </form>
  );
};
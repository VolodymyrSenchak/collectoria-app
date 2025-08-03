import {Box, Typography} from '@mui/material';
import {useForm} from 'react-hook-form';
import Button from '@mui/material/Button';
import type { ICollectionSet } from '@shared/models/collections';
import { SetSearch } from './SetSearch';
import type { ISetIntegration } from '@shared/models/integration';
import { NumberControl, TextControl } from '@shared/components/form';
import { DateControl } from '@shared/components/form';

export const CollectionSetDetailsForm = ({ collectionSet, onSubmit, onCancel }: {
  collectionSet?: ICollectionSet;
  onSubmit: (set: ICollectionSet) => void;
  onCancel?: () => void;
}) => {
  const {handleSubmit, control, setValue} = useForm<ICollectionSet>({
    defaultValues: { ...collectionSet }
  });

  const handlePickIntegrationSet = (set: ISetIntegration) => {
    setValue('no', set.no);
    setValue('name', set.name);
    setValue('categoryId', set.category_id);
    setValue('imageUrl', set.image_url);
    setValue('weight', set.weight);
    setValue('dimX', set.dim_x);
    setValue('dimY', set.dim_y);
    setValue('dimZ', set.dim_z);
    setValue('yearReleased', set.year_released);
    setValue('buyPrice', 0);
    setValue('buyDate', '');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <SetSearch onPickIntegrationSet={handlePickIntegrationSet} />
      <Box display="flex" flexDirection="column">
        <Typography variant="body2">
          Create a new collection to start organizing your sets. Just provide a name and a description.
        </Typography>

        <TextControl<ICollectionSet> control={control} label='Set no' name='no' rules={{ required: 'Set no is required'}}/>
        <TextControl<ICollectionSet> control={control} label='Set name' name='name' rules={{ required: 'Set name is required'}}/>
        <DateControl<ICollectionSet> control={control} label='Date of buy' name='buyDate'/>
        <NumberControl<ICollectionSet> control={control} label='Dimention X' name='dimX'/>
        <NumberControl<ICollectionSet> control={control} label='Dimention Y' name='dimY'/>
        <NumberControl<ICollectionSet> control={control} label='Dimention Z' name='dimZ'/>

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
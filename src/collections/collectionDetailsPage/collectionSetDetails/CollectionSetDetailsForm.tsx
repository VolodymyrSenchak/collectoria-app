import {Box, Typography} from '@mui/material';
import {useForm} from 'react-hook-form';
import Button from '@mui/material/Button';
import type { ICollectionSet } from '@shared/models/collections';
import { SetSearch } from './SetSearch';
import type { ISetIntegration } from '@shared/models/integration';
import { NumberControl, TextControl } from '@shared/components/form';
import { DateControl } from '@shared/components/form';
import imagePlaceholder from "../../../assets/set-image-placeholder.jpg";
import {isNil} from "@shared/utils/objectUtils.ts";

export const CollectionSetDetailsForm = ({ collectionSet, onSubmit, onCancel }: {
  collectionSet?: ICollectionSet;
  onSubmit: (set: ICollectionSet) => void;
  onCancel?: () => void;
}) => {
  const {handleSubmit, control, setValue, watch} = useForm<ICollectionSet>({
    defaultValues: { ...collectionSet }
  });
  const imageUrl = watch('imageUrl') || imagePlaceholder;

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
      {isNil(collectionSet?.no) && (
        <SetSearch onPickIntegrationSet={handlePickIntegrationSet} />
      )}

      <Box display="flex" flexDirection="column">
        <Box display="flex" gap={2}>
          <Box>
            <Typography variant="subtitle2" mb={1}>
              Fill details of your set to save it in your collection.
            </Typography>

            <Box display="flex" gap={2}>
              <TextControl<ICollectionSet> control={control} label='Set no' name='no' rules={{ required: 'Set no is required'}}/>
              <TextControl<ICollectionSet> control={control} label='Set name' name='name' rules={{ required: 'Set name is required'}}/>
            </Box>
            <Box display="flex" gap={2}>
              <DateControl<ICollectionSet> control={control} label='Date of buy' name='buyDate'/>
              <NumberControl<ICollectionSet> control={control} label='Buy price' name='buyPrice'/>
            </Box>
            <Box display="flex" gap={2}>
              <NumberControl<ICollectionSet> control={control} label='Year released' name='yearReleased'/>
              <NumberControl<ICollectionSet> control={control} label='Weight' name='weight'/>
            </Box>
            <Typography variant="body2" mt="0.5rem" mb="-0.5rem">Dimensions</Typography>
            <Box display="flex" gap={2}>
              <NumberControl<ICollectionSet> control={control} label='X' name='dimX'/>
              <NumberControl<ICollectionSet> control={control} label='Y' name='dimY'/>
              <NumberControl<ICollectionSet> control={control} label=' Z' name='dimZ'/>
            </Box>
          </Box>
          <Box display="flex" alignItems="center">
            <img style={{ borderRadius: '1rem' }} src={imageUrl ?? imagePlaceholder} alt="Set" width={380} height={380}/>
          </Box>
        </Box>
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
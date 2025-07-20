import {Box, TextField,Typography} from '@mui/material';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router';
import {NAV_LINKS} from '../../shared/utils';
import type {ICollection} from '../../shared/models/collections';
import {Controller, useForm} from 'react-hook-form';
import {AppModal, Loading} from '../../shared/components';
import {useCollectionSaver} from '../../shared/hooks/collections';

export const NewCollectionModal = (params: {
  open: boolean;
  onClose: () => void;
}) => {
  const navigate = useNavigate();
  const { saveCollection, collectionSavingStatus } = useCollectionSaver();
  const {handleSubmit, control} = useForm<ICollection>();

  const onSubmit = async (data: ICollection) => {
    try {
      const id = await saveCollection(data);
      navigate(NAV_LINKS.collection(id));
    } catch (error) {
      console.error(error);
      control.setError('root', {message: 'Collection with such name has been already created'});
    }
  };

  return (
    <AppModal title="New collection" open={params.open} onClose={params.onClose} width="min(400px, 95vw)">
      {collectionSavingStatus === 'pending' && (
        <Loading title="Creating collection..." />
      )}
      {collectionSavingStatus !== 'pending' && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" flexDirection="column">
            <Typography variant="body2">
              Create a new collection to start organizing your sets. Just provide a name and a description.
            </Typography>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{required: 'Collection name is required'}}
              render={({field, fieldState}) => (
                <TextField
                  {...field}
                  label="Collection name"
                  fullWidth
                  margin="normal"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
            <Controller
              name="description"
              control={control}
              defaultValue=""
              rules={{}}
              render={({field, fieldState}) => (
                <TextField
                  {...field}
                  rows={3}
                  multiline={true}
                  label="Description"
                  fullWidth
                  margin="normal"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            <Box display="flex" justifyContent="flex-end" alignItems="center" gap={1} pt={2}>
              <Button onClick={params.onClose}>Cancel</Button>
              <Button variant="contained" color="primary" type="submit">
                Create Collection
              </Button>
            </Box>
          </Box>
        </form>
      )}
    </AppModal>
  );
};

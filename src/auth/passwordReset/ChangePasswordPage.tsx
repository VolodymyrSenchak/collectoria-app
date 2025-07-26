import Box from '@mui/material/Box';
import {Card, TextField} from '@mui/material';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router';
import {Controller, type SubmitHandler, useForm} from 'react-hook-form';
import {CardTitle} from '../../shared/components';
import {authApi} from '../../shared/api/authApi.ts';
import {NAV_LINKS} from "../../shared/utils";

interface ResetPasswordFormData {
  password: string;
  confirmPassword: string;
}

export const ChangePasswordPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<ResetPasswordFormData>();

  const onSubmit: SubmitHandler<ResetPasswordFormData> = async (data) => {
    try {
      await authApi.changePassword({password: data.password});
      navigate(NAV_LINKS.auth.login);
    } catch (error) {
      console.error(error);
      alert('Failed to change password. Try again later.');
    }
  };

  return (
    <Box>
      <Card>
        <CardTitle title='Change Password' />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" flexDirection="column" py={2}>
            <Controller
              name="password"
              control={control}
              defaultValue=""
              rules={{required: 'Password is required'}}
              render={({field, fieldState}) => (
                <TextField
                  {...field}
                  label="Password"
                  type="password"
                  fullWidth
                  margin="normal"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            <Controller
              name="confirmPassword"
              control={control}
              defaultValue=""
              rules={{
                required: 'Confirm password is required',
                validate: (value, formValues) =>
                  value === formValues.password || 'Passwords do not match',
              }}
              render={({field, fieldState}) => (
                <TextField
                  {...field}
                  label="Confirm password"
                  type="password"
                  fullWidth
                  margin="normal"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            <Button size="large" sx={{ marginTop: '1rem' }} variant="contained" color="primary" type="submit">
              Change password
            </Button>
          </Box>
        </form>
      </Card>
    </Box>
  );
};

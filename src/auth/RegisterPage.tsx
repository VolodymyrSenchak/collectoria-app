﻿import Box from '@mui/material/Box';
import {Card, TextField} from '@mui/material';
import Button from '@mui/material/Button';
import {NavLink, useNavigate} from 'react-router';
import {Controller, type SubmitHandler, useForm} from 'react-hook-form';
import {CardTitle} from '../shared/components';
import {authApi} from '../shared/store/api/authApi.ts';

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<RegisterFormData>();

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    try {
      await authApi.register({
        email: data.email,
        password: data.password,
      });
      navigate('/auth/registrationFinished');
    } catch (error) {
      console.error(error);
      alert('Failed to register. Try again later.');
    }
  };

  return (
    <Box>
      <Card>
        <CardTitle title='Register' />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" flexDirection="column" py={2}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{required: 'Email is required'}}
              render={({field, fieldState}) => (
                <TextField
                  {...field}
                  label="Email"
                  fullWidth
                  margin="normal"
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />
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
              Register
            </Button>

            <Box display="flex" alignItems="center" pt={2}>
              <NavLink to="/auth/login">
                <Button variant="text">Back to login</Button>
              </NavLink>
            </Box>
          </Box>
        </form>
      </Card>
    </Box>
  );
};

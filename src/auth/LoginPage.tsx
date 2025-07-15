import {Card, TextField, Box} from '@mui/material';
import Button from '@mui/material/Button';
import {NavLink, useNavigate} from 'react-router';
import {Controller, type SubmitHandler, useForm} from 'react-hook-form';
import {CardTitle} from '../shared/components';
import {authApi} from '../shared/store/api/authApi.ts';
import Typography from '@mui/material/Typography';
import {NAV_LINKS} from '../shared/utils';

interface LoginFormData {
  email: string;
  password: string;
}

export const LoginPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<LoginFormData>();

  const onSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      await authApi.login(data);
      navigate(NAV_LINKS.collections);
    } catch (error) {
      console.error(error);
      control.setError('password', { message: 'Invalid login or password' });
    }
  };

  return (
    <Box>
      <Card>
        <CardTitle title='Login' />
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

            <Button size="large" sx={{ marginTop: '1rem' }} variant="contained" color="primary" type="submit">
              Login
            </Button>

            <Box>
              <Box display="flex" alignItems="center" pt={2}>
                <Typography variant="body2" color="secondary">Don't have account?</Typography>
                <NavLink to="/auth/register">
                  <Button variant="text">Register</Button>
                </NavLink>
              </Box>
              <Box display="flex" alignItems="center" pb={1}>
                <Typography variant="body2" color="secondary">Forgot password?</Typography>
                <NavLink to="/auth/register">
                  <Button variant="text">Recover</Button>
                </NavLink>
              </Box>
            </Box>
          </Box>
        </form>
      </Card>
    </Box>
  );
};

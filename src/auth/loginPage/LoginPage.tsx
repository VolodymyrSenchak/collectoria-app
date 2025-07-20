import {Card, TextField, Box, Divider} from '@mui/material';
import Button from '@mui/material/Button';
import {NavLink} from 'react-router';
import {Controller} from 'react-hook-form';
import {CardTitle} from '../../shared/components';
import Typography from '@mui/material/Typography';
import {useLoginPage} from "./useLoginPage.ts";

export const LoginPage = () => {
  const { handleSubmit, googleButtonRef, loginWithCredentials, control } = useLoginPage();

  return (
    <Box>
      <Card sx={{ p: 3 }}>
        <CardTitle title='Login' />
        <form onSubmit={handleSubmit(loginWithCredentials)}>
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
            <Box>
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
              <NavLink to="/auth/resetPasswordRequest">
                <Typography mt={-0.5} color="secondary" variant="body2">Forgot password?</Typography>
              </NavLink>
            </Box>


            <Button size="large" sx={{ marginTop: '1.5rem' }} variant="contained" color="primary" type="submit">
              Login
            </Button>

            <Divider sx={{ my: '1rem' }}>or</Divider>

            <Box>
              <div ref={googleButtonRef}></div>
            </Box>

            <Divider sx={{ my: '1rem' }}></Divider>

            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body2" color="secondary">Don't have account?</Typography>
              <NavLink to="/auth/register">
                <Button variant="outlined">Register</Button>
              </NavLink>
            </Box>
          </Box>
        </form>
      </Card>
    </Box>
  );
};

import {NavLink, useNavigate} from "react-router";
import {Controller, type SubmitHandler, useForm} from "react-hook-form";
import {authApi} from "../../shared/api/authApi.ts";
import Box from "@mui/material/Box";
import {Card, Divider, TextField} from "@mui/material";
import {CardTitle} from "../../shared/components";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface RegisterFormData {
  email: string;
  password: string;
  confirmPassword: string;
}

export const ResetPasswordRequestPage = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } = useForm<RegisterFormData>();

  const onSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    try {
      await authApi.resetPassword({
        email: data.email,
        redirectTo: `${window.location.origin}/auth/resetPasswordValidation`
      });
      navigate('/auth/resetPasswordRequestSent');
    } catch (error) {
      alert('Failed to send password recovery request. Try again later.');
    }
  };

  return (
    <Box>
      <Card>
        <CardTitle title='Register' />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box display="flex" flexDirection="column" py={2}>
            <Typography variant="caption">
              Enter your email address and we’ll send you a link to reset your password.
            </Typography>
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

            <Button size="large" sx={{ marginTop: '1rem' }} variant="contained" color="primary" type="submit">
              Request Password Reset
            </Button>

            <Divider sx={{ my: '1rem' }}></Divider>

            <Box display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body2" color="secondary">Remembered your password?</Typography>
              <NavLink to="/auth/login">
                <Button variant="outlined">Login</Button>
              </NavLink>
            </Box>
          </Box>
        </form>
      </Card>
    </Box>
  );
};
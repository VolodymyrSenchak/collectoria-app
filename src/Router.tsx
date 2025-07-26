import { createBrowserRouter, Navigate } from 'react-router';
import { MarketingPage } from './marketing';
import { App } from './App.tsx';
import { CollectionsPage } from './collections';
import { CollectionDetailsPage } from './collections/collectionDetailsPage';
import { NotFoundPage } from './layout/notFoundPage';
import {
  AuthLayout,
  EmailConfirmationPage,
  LoginPage,
  RegisterPage,
  RegistrationFinishedPage,
  RequireAuthPageWrapper, ChangePasswordPage,
  ResetPasswordRequestPage, ResetPasswordRequestSentPage, ResetPasswordValidationPage
} from './auth';
import {ProfilePage} from './profile/ProfilePage.tsx';
import {QueryClientApp} from './QueryClientApp.tsx';

export const Router = createBrowserRouter([
  { path: '/', element: <MarketingPage /> },
  { path: '*', element: <NotFoundPage /> },
  {
    path: '/app',
    element: (
      <RequireAuthPageWrapper>
        <QueryClientApp>
          <App/>
        </QueryClientApp>
      </RequireAuthPageWrapper>
    ),
    children: [
      { index: true, element: <Navigate to="collections" replace />},
      { path: 'collections', element: <CollectionsPage /> },
      { path: 'collections/:id', element: <CollectionDetailsPage /> },
      { path: 'profile', element: <ProfilePage /> }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to="login" replace />},
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'registrationFinished', element: <RegistrationFinishedPage/> },
      { path: 'emailConfirmation', element: <EmailConfirmationPage /> },
      { path: 'resetPasswordRequest', element: <ResetPasswordRequestPage/> },
      { path: 'resetPasswordRequestSent', element: <ResetPasswordRequestSentPage/> },
      { path: 'resetPasswordValidation', element: <ResetPasswordValidationPage /> },
      { path: 'changePassword', element: <RequireAuthPageWrapper><ChangePasswordPage /></RequireAuthPageWrapper>}
    ]
  }
]);

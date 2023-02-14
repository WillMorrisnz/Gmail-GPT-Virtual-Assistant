import React from 'react';
import GoogleLogin, {
  GoogleLoginResponse,
  GoogleLoginResponseOffline,
} from 'react-google-login';

const clientId =
  '622243764343-4aq0tk3o18j9iues2eellj1d8926c43m.apps.googleusercontent.com'; // Replace with your own client ID

function Login() {
  const onSuccess = (
    response: GoogleLoginResponse | GoogleLoginResponseOffline
  ) => {
    // Handle successful login
    console.log('Logged in successfully!', response);
  };

  const onFailure = (error: any) => {
    console.error('Login failed!', error);
    console.error('Error details:', error.details);
    console.error('Error message:', error.message);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default Login;

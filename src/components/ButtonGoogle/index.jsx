import React from 'react';
import GoogleLogin from 'react-google-login';

function ButtonGoogle() {
  const responseGoogle = (response) => {
    console.log(response);
  }

  return (
    <GoogleLogin
      className="componentButtonGoogle"
      clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
      buttonText="Sign up with Google"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default ButtonGoogle;
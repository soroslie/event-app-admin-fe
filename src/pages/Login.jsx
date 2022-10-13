import React from 'react';
import image from '../assets/login_logo.png';
import InputAuth from '../components/inputs/InputAuth';
import PrimarryButton from '../components/inputs/PrimaryButton';

function Login() {
  return (
    <div className="container h-screen px-12 py-12 -mt-12">
      <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
        <div className="md:w-8/12 lg:w-6/12 mb-8 md:mb-0">
          <img
            src={image}
            className="w-full"
            alt="login logo"
          />
        </div>
        <div className="md:w-8/12 lg:w-5/12 lg:ml-5">
          <h1 className="text-center text-5xl mb-4 font-bold text-orange-600">Event App Admin</h1>
          <form>
            <InputAuth placeholder="Email" type="text" />
            <InputAuth placeholder="Pasword" type="password" />
            <PrimarryButton title="Signin" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

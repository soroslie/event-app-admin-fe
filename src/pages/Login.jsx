import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import image from '../assets/images/login_logo.png';
import InputAuth from '../components/inputs/InputAuth';
import PrimarryButton from '../components/inputs/PrimaryButton';
import LocalStorageConstant from '../constants/local_storage';
import { useAuthLoginMutation } from '../store/slices/apiSlice';

function Login() {
  const navigate = useNavigate();
  const [buttonLoading, setButtonLoading] = useState(false);
  const [login] = useAuthLoginMutation();

  const [input, setInput] = useState({
    email: '',
    password: '',
  });

  const [inputError, setInputError] = useState({
    email: '',
    password: '',
    formError: '',
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const onHandleLogin = (e) => {
    e.preventDefault();

    setInputError({
      ...inputError,
      email: '',
      password: '',
      formError: '',
    });

    if (!input.email) {
      return setInputError({
        ...inputError,
        email: 'Please fill the email field',
      });
    }
    if (!input.password) {
      return setInputError({
        ...inputError,
        password: 'Please fill the password field',
      });
    }

    setButtonLoading(true);
    login({
      email: input.email,
      password: input.password,
    })
      .unwrap()
      .then((data) => {
        setButtonLoading(false);
        localStorage.setItem(LocalStorageConstant.tokenKey, data.data.id_token);
        navigate('/');
      })
      .catch((error) => {
        if (error.data.message) {
          setInputError({
            ...inputError,
            formError: error.data.message,
          });
        } else {
          setInputError({
            ...inputError,
            formError: 'something went wrong',
          });
        }
        setButtonLoading(false);
      });

    return setInputError({
      ...inputError,
      email: '',
      password: '',
      formError: '',
    });
  };

  return (
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div className="flex items-center mb-6 text-2xl font-semibold text-gray-900">
        <img className="w-40 h-40 mr-2" src={image} alt="logo" />
      </div>
      <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-2xl md:text-4xl text-center font-bold leading-tight tracking-tight text-orange-600 ">
            Event App Admin
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={onHandleLogin}>
            <InputAuth placeholder="Email" type="text" onChange={handleChange} name="email" error={inputError.email} value={input.email} />
            <InputAuth placeholder="Pasword" type="password" onChange={handleChange} name="password" error={inputError.password} value={input.password} />
            <div className="my-3" />
            <p className={`${inputError.formError ? 'visible' : 'invisible'} text-center mt-1 text-red-500`}>{!inputError.formError ? '-' : inputError.formError}</p>

            <PrimarryButton title="sign in" onClick={onHandleLogin} isLoading={buttonLoading} />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

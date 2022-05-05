import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useLocation, useNavigate } from 'react-router-dom';
import { loginRequest } from '../../services/AuthService';
import InputGroup from '../../components/InputGroup/InputGroup';
import { useAuthContext } from '../../contexts/AuthContext';
import Plant from '../../assets/images/login-plant.png'
import './Login.scss';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8, 'Provide at least 8 characters').required(),
}).required();

const Login = () => {
  const navigate = useNavigate();
  
  let location = useLocation(); // por qué let??
  let from = location.state?.from?.pathname || "/"; 

  const { login } = useAuthContext();
   
  const [error, setError] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, formState:{ errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    setIsSubmitting(true);
    setError(undefined);

   loginRequest(data)
    .then((user) => {
        // console.log(user) // objeto con el token - ¿el token es el user?
        login(user.access_token, () => navigate(from, { replace: true }))
    })
    .catch(err => {
      setError(err?.response?.data?.message)
    })
    .finally(() => {
      setIsSubmitting(false)
    })
  };

  return (
    <div className="login wrapper">
      <div className="login__form">
        <h1>Login</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="login__submit">
        <InputGroup
          label="Email:"
          id="email"
          type="email"
          register={register}
          error={error || errors.email?.message}
          />
          
          <InputGroup
          label="Password:"
          id="password"
          type="text"
          register={register}
          error={error || errors.password?.message}
          />

          <button className="login__btn">{isSubmitting ? 'Login...' : 'Submit'}</button> 
        </form>
      </div>

      <div className="login__capture">
        <img className="login__image" src={Plant} alt="" />
      </div>

    </div>
  )
}

export default Login;
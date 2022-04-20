import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useLocation, useNavigate } from 'react-router-dom';
import { login as loginRequest } from '../../services/AuthService';
import InputGroup from '../../components/InputGroup/InputGroup';
import { useAuthContext } from '../../contexts/AuthContext';
import './Login.scss';

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().min(8, 'Provide at least 8 characters').required(),
}).required();

const Login = () => {

  const navigate = useNavigate();
  let location = useLocation(); // por qué let??

  let from = location.state?.from?.pathname || '/profile'; // esta línea es WTF

  const { login } = useAuthContext();
   

  const [backErrors, setBackErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, formState:{ errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {

    setBackErrors({});
    setIsSubmitting(true);

   loginRequest(data)
   .then((user) => {
     console.log(user)
     login(user.access_token, () => navigate(from, { replace: true })) // esto WTF también
   })
   .catch(err => {
     setBackErrors(err?.response?.data?.errors)
   })
   .finally(() => {
    setIsSubmitting(false)
   })
  };

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

      <InputGroup
        label="Email:"
        id="email"
        type="email"
        register={register}
        error={backErrors?.email || errors.email?.message}
        />
        
        <InputGroup
        label="Password:"
        id="password"
        type="text"
        register={register}
        error={backErrors?.password || errors.password?.message}
        />

        <button>{isSubmitting ? 'Login...' : 'Submit'}</button> 

      </form>
    </>
  )
}

export default Login;
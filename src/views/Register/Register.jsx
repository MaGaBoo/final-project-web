import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { registerRequest } from '../../services/AuthService';
import InputGroup from '../../components/InputGroup/InputGroup';
import People from '../../assets/images/register-people.png'
import './Register.scss';


const schema = yup.object({
  name: yup.string().required(),
  location: yup.string().required(),
  email: yup.string().email().required(),
  address: yup.string().required(),
  password: yup.string().min(8, 'Provide at least 8 characters').required(),
}).required();

const Register = () => {
  
  const [backErrors, setBackErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, formState:{ errors }, handleSubmit } = useForm({ resolver: yupResolver(schema) });
  const navigate = useNavigate()

  const onSubmit = (data) => {
    setBackErrors({});
    setIsSubmitting(true);

   registerRequest(data)
   .then((user) => {
     navigate('/login')
   })
   .catch(err => {
     setBackErrors(err?.response?.data?.errors)
   })
   .finally(() => {
    setIsSubmitting(false)
   })
  };
  
return (
    <div className="register wrapper">
      <div className="register__form">
        <h1>Register</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="register__inputs">
        
          <InputGroup
          label="Name:"
          id="name"
          type="text"
          register={register}  
          error={backErrors?.name || errors.name?.message}
          />
      

          <InputGroup
          label="Location:"
          id="location"
          type="text"
          register={register}
          error={backErrors?.location || errors.location?.message}
          />

          <InputGroup
          label="Address"
          id="address"
          type="text"
          register={register}
          error={backErrors.address || errors.address?.message}
          />
          
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
          type="password"
          register={register}
          error={backErrors?.password || errors.password?.message}
          />
          
          <button className="register__btn">{isSubmitting ? 'Submiting...' : 'Submit'}</button>
        </form>
      </div>

        <img src={People} alt="" className="register__image" />
    </div>
  )
}

export default Register;

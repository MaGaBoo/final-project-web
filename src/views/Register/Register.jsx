import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { register } from '../../services/UsersService';
import InputGroup from '../../components/InputGroup/InputGroup';
import './Register.scss';

const Register = () => {
  
  const { register, handleSubmit } = useForm();
  const { submit, setSubmit } = useState('');
  const [errors, setErrors] = useState(false);

  const onSubmit = (data) => {
    console.log(data)
    const { name, location, email, password } = data;

    if (!name || !location || !email || !password) {
      console.log('Must provide required fields, darling', errors)
      setErrors(true)
    } else {
      console.log('Yeah!!')
    }

   
  }
  
return (
    <>
      <h1>Register</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      
        <InputGroup
        label="Name:"
        id="name"
        type="text"
        register={register}
        />

        <InputGroup
        label="Location:"
        id="location"
        type="text"
        register={register}
        />

        <InputGroup
        label="Email:"
        id="email"
        type="email"
        register={register}
        />

        <InputGroup
        label="Password:"
        id="password"
        type="text"
        register={register}
        />

        <button>Submit</button>

      </form>
    </>
  )
}

export default Register;
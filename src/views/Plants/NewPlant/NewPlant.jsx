import InputGroup from '../../../components/InputGroup/InputGroup';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { createPlant } from '../../../services/PlantService';
import './NewPlant.scss';
import { useNavigate } from 'react-router';
import { useAuthContext } from '../../../contexts/AuthContext';
import DropDownGroup from '../../../components/DropDownGroup/DropDownGroup';

const NewPlant = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { user, getUser } = useAuthContext();

  const onSubmit = (data) => {
    console.log('mi data', data)
    const { commonName, scientificName, description, height, image, price, difficulty, petFriendly } = data
    const { temperature, light, watering } = data.plantCare


    if (!commonName || !description || !height || !image || !price || !temperature || !light || !watering || !difficulty || !petFriendly) {
      console.log('pa tu casa')
      setErrors(true)
    } else {
      createPlant({...data, user})
      .then((plant) => {
        getUser()
        navigate('/profile')
      })
        .catch(err => console.log(err?.response?.data))
    }
  }

  return (
    <>
      <h1>Create plant</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
      
        <InputGroup
          label="Name:"
          id="commonName"
          type="text"
          register={register}
        />

        <InputGroup
          label="Scientific name:"
          id="scientificName"
          type="text"
          register={register}
        />

        <InputGroup
          label="Description:"
          id="description"
          type="text"
          register={register}
        />

        <InputGroup
          label="Height:"
          id="height"
          type="number"
          register={register}
        />

        <InputGroup
          label="Image:"
          id="image"
          type="text"
          register={register}
        />

        <DropDownGroup
          label="Category:"
          id="category"
          values={["Evergreen", "Orchids", "Cactus and Succulents"]}
          register={register}
        />

        <InputGroup
          label="Price:"
          id="price"
          type="number"
          register={register}
        />

        <InputGroup
          label="Temperature:"
          id="plantCare.temperature"
          type="text"
          register={register}
        />
        
        <InputGroup
          label="Light:"
          id="plantCare.light"
          type="text"
          register={register}
        />

        <InputGroup
          label="Watering:"
          id="plantCare.watering"
          type="text"
          register={register}
        />

        <InputGroup
          label="Difficulty:"
          id="difficulty"
          type="text"
          register={register}
        />

        <InputGroup
          label="Pet Friendly:"
          id="petFriendly"
          type="checkbox"
          register={register}
        />

        <button>Create</button>
      </form>
    </>
  )
}

export default NewPlant;
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { createPlant } from '../../../services/PlantService';
import { useNavigate } from 'react-router';
import { useAuthContext } from '../../../contexts/AuthContext';
import InputGroup from '../../../components/InputGroup/InputGroup';
import DropDownGroup from '../../../components/DropDownGroup/DropDownGroup';
import Plant from '../../../assets/images/login-plant.png'
import './NewPlant.scss';

const NewPlant = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState(false);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { user, getUser } = useAuthContext();

  const onSubmit = (data) => {

    const bodyFormData = new FormData()
    const { image, plantCare, ...rest } = data

    Object.keys(rest).forEach(key => {
      bodyFormData.append(key, rest[key])
    })
    
    if ('temperature' in plantCare && 'light' in plantCare && 'watering' in plantCare) {
      bodyFormData.append('plantCare', JSON.stringify(plantCare))
    }

    if (image[0]) {
      bodyFormData.append('image', image[0])
    }

    bodyFormData.append('user', user.id)

    if (!data) {
      console.log('pa tu casa')
      setErrors(true)
    } else {
      createPlant(bodyFormData)
      .then((plant) => {
        getUser()
        navigate('/profile')
      })
        .catch(err => setErrors(err?.response?.data?.errors))
    } 
  }

  return (
    <div className="new-plant wrapper">
      <div className="new-plant__form">
        <h1>Create plant</h1>
        {errors && <div>Check all fields!</div>}
        <form onSubmit={handleSubmit(onSubmit)} className="new-plant__inputs">    
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
            type="file"
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

          <button className="new-plant__btn">Create</button>
        </form>   
      </div>

      <div className="new-plant__capture">
        <img src={Plant} alt="" className="new-plant__image" />
      </div>
    </div>
  )
}

export default NewPlant;
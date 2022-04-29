import { getPlant, updatePlant } from '../../../services/PlantService';
import { useForm } from 'react-hook-form';
import InputGroup from '../../../components/InputGroup/InputGroup';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import DropDownGroup from '../../../components/DropDownGroup/DropDownGroup';
import { useAuthContext } from '../../../contexts/AuthContext';
import './EditPlant.scss';

const EditPlant = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState(false);
  const { getUser } = useAuthContext();
  const [plant, setPlant] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    getPlant(id)
      .then(plant => {
        if (typeof (plant.plantCare) === 'string') {
          plant.plantCare = JSON.parse(plant.plantCare)
        }
        setPlant(plant) // probar destructuring

        reset({ commonName: plant.commonName, scientificName: plant.scientificName, description: plant.description, height: plant.height, image: plant.image, category: plant.category, price: plant.price, "plantCare.temperature": plant.plantCare.temperature, "plantCare.light": plant.plantCare.light, "plantCare.watering": plant.plantCare.watering, difficulty: plant.difficulty, petFriendly: plant.petFriendly })
      })
    }, [id, reset])


  const onSubmit = (data) => {
    const bodyFormData = new FormData()
    const { image, plantCare, commonName, description, difficulty, height, petFriendly, price, scientificName, category } = data

    bodyFormData.append('commonName', commonName)
    bodyFormData.append('description', description)
    bodyFormData.append('difficulty', difficulty)
    bodyFormData.append('height', height)
    bodyFormData.append('petFriendly', petFriendly)
    bodyFormData.append('price', price)
    bodyFormData.append('scientificName', scientificName)
       bodyFormData.append('category', category)
    
    if ('temperature' in plantCare && 'light' in plantCare && 'watering' in plantCare) {
      bodyFormData.append('plantCare', JSON.stringify(plantCare))
    }

    if (image === plant.image) {
      bodyFormData.append('image', image)
    } else {
      bodyFormData.append('image', image[0])
    }

    if (!data) {
      console.log('falta info para actualizar')
      setErrors(true)
    } else {
      updatePlant(plant.id, bodyFormData)
      .then((plant) => {
        getUser()
        navigate('/profile')
      })
        .catch(err => setErrors(err?.response?.data?.errors))
    } 
  }

  return (
    <>
      <h1>Edit your plant</h1>
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
          label="Image"
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

        <button>Update plant</button>
      </form>
    </>
  )
}

export default EditPlant;
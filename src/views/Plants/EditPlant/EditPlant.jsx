import { getPlant, updatePlant } from '../../../services/PlantService';
import { useForm } from 'react-hook-form';
import InputGroup from '../../../components/InputGroup/InputGroup';
import { useNavigate, useParams } from 'react-router';
import { useEffect, useState } from 'react';
import './EditPlant.scss';

const EditPlant = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState(false)
  const [plant, setPlant] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const { register, handleSubmit, reset } = useForm();

  useEffect(() => {
    getPlant(id)
      .then(plant => {
        setPlant(plant) // probar destructuring
        reset({ commonName: plant.commonName, scientificName: plant.description, description: plant.description, height: plant.height, image: plant.image, category: plant.category, price: plant.price, "plantCare.temperature": plant.plantCare.temperature, "plantCare.light": plant.plantCare.light, "plantCare.watering": plant.plantCare.watering, difficulty: plant.difficulty, petFriendly: plant.petFriendly })
      })
    }, [id, reset])

  const onSubmit = (data) => {

    const { commonName, scientificName, description, height, image, price, difficulty, petFriendly, category, plantCare } = data
    const { temperature, light, watering } = data.plantCare

    if (!commonName || !description || !height || !image || !price || !temperature || !light || !watering || !difficulty || !petFriendly || !category) {
      console.log('falta info para actualizar')
      setErrors(true)
    } else {
      const updatedPlant = {commonName, scientificName, description, height, image, price, difficulty, petFriendly,category, plantCare}
      updatePlant(plant.id, updatedPlant)
        .then((plant) => {
          navigate('/')
        })
        .catch(err => console.log(err?.response?.data))
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
          type="text"
          register={register}
        />

        <InputGroup
          label="Category:"
          id="category"
          type="text"
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
          type="text"
          register={register}
        />

        <button>Update plant</button>
      </form>
    </>
  )
}

export default EditPlant;
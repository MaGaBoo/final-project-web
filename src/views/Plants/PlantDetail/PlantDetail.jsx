import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPlant } from '../../../services/PlantService';
import './PlantDetail.scss';

const PlantDetail = () => {
  const [plant, setPlant] = useState({})
  const { id } = useParams();

  useEffect(() => {
    getPlant(id)
      .then(plant => setPlant(plant))
  },[id])

  return (
    <>
      <h1>Plant detail</h1>
      {plant && plant.plantCare &&
        <>
        <p>Name: {plant.commonName}</p>
        <p>Scientific name: {plant.scientificName}</p>
        <p>Description: {plant.description}</p>
        <p>Description: {plant.category}</p>
        <p>Height: {plant.height}</p>
        <img src={plant.image} alt={plant.commonName} />
        <p>Price: {plant.price}€</p>
        <p>Temperature: {plant.plantCare.temperature}</p>
        <p>Light: {plant.plantCare.light}</p>
        <p>Watering: {plant.plantCare.watering}</p>
        <p>Difficulty: {plant.difficulty}</p>
        <p>Pet Friendly: {plant.petFriendly}</p>
        </>
      }
    </>
  )
}

export default PlantDetail;
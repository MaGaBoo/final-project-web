import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useCartContext } from '../../../contexts/CartContext';
import { getPlant } from '../../../services/PlantService';
import './PlantDetail.scss';

const PlantDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { addCart } = useCartContext();

  useEffect(() => {
    getPlant(id)
      .then(plant => setProduct(plant))
  },[id])

  const addToCart = () => {
    addCart(product)
  }

  return (
    <>
      <h1>Plant detail</h1>
      {product && product.plantCare &&
        <>
<<<<<<< HEAD
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
        <p>Belongs to: {plant.user.name}</p>
=======
        <p>Name: {product.commonName}</p>
        <p>Scientific name: {product.scientificName}</p>
        <p>Description: {product.description}</p>
        <p>Description: {product.category}</p>
        <p>Height: {product.height}</p>
        <img src={product.image} alt={product.commonName} />
        <p>Price: {product.price}€</p>
        <p>Temperature: {product.plantCare.temperature}</p>
        <p>Light: {product.plantCare.light}</p>
        <p>Watering: {product.plantCare.watering}</p>
        <p>Difficulty: {product.difficulty}</p>
        <p>Pet Friendly: {product.petFriendly}</p>
        <button onClick={addToCart}>Add to cart</button>
>>>>>>> adaac6b9054c9b4944d7a531744d505a7949eb4b
        </>
      }
    </>
  )
}

export default PlantDetail;
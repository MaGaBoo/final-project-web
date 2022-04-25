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
        </>
      }
    </>
  )
}

export default PlantDetail;
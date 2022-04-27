import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useCartContext } from '../../../contexts/CartContext';
import { getPlant } from '../../../services/PlantService';
import './PlantDetail.scss';

const PlantDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const { addCart } = useCartContext();

  useEffect(() => {
    getPlant(id)
      .then(plant => {
        if (typeof (plant.plantCare) === 'string') {
          plant.plantCare = JSON.parse(plant.plantCare)
        }
        setProduct(plant)
      })
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
        <p>Category: {product.category}</p>
        <p>Height: {product.height}</p>
        <img src={product.image} alt={product.commonName} />
        <p>Price: {product.price}€</p>
        <p>Temperature: {product.plantCare.temperature}</p>
        <p>Light: {product.plantCare.light}</p>
        <p>Watering: {product.plantCare.watering}</p>
        <p>Difficulty: {product.difficulty}</p>
        <p>Pet Friendly: {product.petFriendly ? 'Yes' : 'No'}</p>
        <p>Owner: {product.user.name}</p>
        <Link to={`/plant/${product.id}/edit`}>Edit plant</Link>
        <button onClick={addToCart}>Add to cart</button>
        </>
      }
    </>
  )
}

export default PlantDetail;
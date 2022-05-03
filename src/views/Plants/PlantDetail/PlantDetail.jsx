import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useCartContext } from "../../../contexts/CartContext";
import { getPlant } from "../../../services/PlantService";

import "./PlantDetail.scss";

const PlantDetail = () => {
  const [product, setProduct] = useState(null);
  const [buy, setBuy] = useState(true);
  const { id } = useParams();
  const { addCart, cartItems } = useCartContext();
  const { user, getUser } = useAuthContext();

  useEffect(() => {
    getPlant(id).then((plant) => {
      if (typeof plant.plantCare === "string") {
        plant.plantCare = JSON.parse(plant.plantCare);
      }
      setProduct(plant);
    });
  }, [id]);

  const addToCart = () => {
    if (!cartItems.includes(product)) {
      addCart(product);
      setBuy(false);
    }
  };

  useEffect(() => {
    product && cartItems && cartItems.find(item => {
      if (item.id === product.id) {
        setBuy(false)
      }
    })
  }, [product, cartItems])


  return (
    <>
      <h1>Plant detail</h1>
      {product && product.plantCare && (
        <>
          <div className="container">
            <img className="image" src={product.image} alt={product.commonName} />
            <div className="product-info">
              <p className="name">{product.commonName}</p>
              <p>Price: {product.price}€</p>
              <p>Scientific name: {product.scientificName}</p>
              <p>Description: {product.description}</p>
              <p>Category: {product.category}</p>
              <p>Height: {product.height}</p>
              <p>Temperature: {product.plantCare.temperature}</p>
              <p>Light: {product.plantCare.light}</p>
              <p>Watering: {product.plantCare.watering}</p>
              <p>Difficulty: {product.difficulty}</p>
              <p>Pet Friendly: {product.petFriendly ? "Yes" : "No"}</p>
              <p>Owner: {product.user.name}</p>
              <Link to={`/plant/${product.id}/edit`}>Edit plant</Link>
              <br />
              <br />
              {!user ? (
                <p>You have to log in to buy this product</p>
              ) : (
                <>
                  {user && buy ? (
                    <button className="add-button" onClick={addToCart}>
                      Add to cart
                    </button>
                  ) : (
                    <p>✅ You have adopted this plant!</p>
                  )}
                </>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default PlantDetail;

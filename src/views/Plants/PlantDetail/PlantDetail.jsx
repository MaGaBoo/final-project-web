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
      {product && product.plantCare && (
        <>
          <div className="container">
            <div className="product-image">
              <img
                className="image"
                src={product.image}
                alt={product.commonName}
              />
            </div>
            <div className="product-info">
              <div className="product-name">
                <p>{product.commonName}</p>
              </div>
              <div className="product-price">
                <p>{product.price}€</p>
              </div>
              <div className="product-description">
                <p>Description: {product.description}</p>
              </div>
              <div className="product-details">
                <p>Scientific name: {product.scientificName}</p>
                <p>Category: {product.category}</p>
                <p>Height: {product.height}</p>
                <p>Difficulty: {product.difficulty}</p>
              </div>
              <div className="product-cares">
                <p><i className="fa-solid fa-temperature-half"></i>  Temperature: {product.plantCare.temperature}</p>
                <p><i className="fa-solid fa-sun"></i>  Light: {product.plantCare.light}</p>
                <p><i className="fa-solid fa-droplet"></i>  Watering: {product.plantCare.watering}</p>
                <p><i className="fa-solid fa-paw"></i>  Pet Friendly: {product.petFriendly ? "Yes" : "No"}</p>
              </div>
              <div className="product-owner">
    
                <p>Owner: {product.user.name}</p>
              </div>
              <div>
                <Link className="edit-product" to={`/plant/${product.id}/edit`}>
                  Edit details
                </Link>
              </div>

              <br />
              <br />
              <div className="add-button">
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
          </div>
        </>
      )}
    </>
  );
};

export default PlantDetail;

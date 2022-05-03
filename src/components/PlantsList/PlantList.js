import { Link } from "react-router-dom";
import "./PlantList.scss";

const PlantsList = ({ plants }) => {
  return (
    <>
      {plants.map((plant) => {
        return (
          <div key={plant.id} className="product">
            <div className="product__capture">
              <Link to={`/plant/${plant.id}`}>
                <img src={plant.image} alt={plant.commonName} className="product__img" />
              </Link>
            </div>

            <div className="product__info">
              <p className="product__name">{plant.commonName}</p>
              <p className="product__price">{plant.price}€</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PlantsList;

import { Link } from "react-router-dom";
import "./PlantList.scss";

const PlantsList = ({ plants }) => {
  return (
    <div>
      {plants.map((plant) => {
        return (
          <li key={plant.id}>
            <Link to={`/plant/${plant.id}`} key={plant.id}>
              {plant.commonName}
            </Link>
            ;
          </li>
        );
      })}
    </div>
  );
};

export default PlantsList;

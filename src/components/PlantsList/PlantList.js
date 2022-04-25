import { Link } from 'react-router-dom';
import './PlantList.scss';

const PlantsList = ({ plants }) => {

  
  return (
    <div>
      {plants.map((plant) => {
        return <li>
        <Link to={`/plant/${plant.id}`} key={plant.id}>{plant.commonName}</Link>;
      
        </li>
      })}
    </div>
  );
};

export default PlantsList;


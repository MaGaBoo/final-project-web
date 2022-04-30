import { useEffect, useState } from "react";
import { filterPlants } from "../../../services/PlantService";
import PlantsList from "../../../components/PlantsList/PlantList";
import "./Evergreen.scss";

const Evergreen = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    filterPlants().then((plants) => setPlants(plants));
  }, []);

  return (
    <div>
      <h1>My fucking plants</h1>
      <PlantsList plants={plants} />
    </div>
  );
};

export default Evergreen;

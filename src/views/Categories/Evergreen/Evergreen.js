import { useEffect, useState } from "react";
import { filterEvergreen } from "../../../services/PlantService";
import PlantsList from "../../../components/PlantsList/PlantList";
import "./Evergreen.scss";

const Evergreen = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    filterEvergreen().then((plants) => setPlants(plants));
  }, []);

  return (
    <div>
    <h1>Evergreen plants</h1>
      <PlantsList plants={plants} />
    </div>
  );
};

export default Evergreen;

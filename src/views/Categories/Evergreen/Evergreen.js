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
    <div className="evergreen-category wrapper">
      <h1>Evergreen plants</h1>
      <div className="evergreen-category__plants">
        <PlantsList plants={plants} />
      </div>
    </div>
  );
};

export default Evergreen;

import { useEffect, useState } from "react";
import { filterOrchids } from "../../../services/PlantService";
import PlantsList from "../../../components/PlantsList/PlantList";
import "./Orchids.scss";

const Orchids = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    filterOrchids().then((plants) => setPlants(plants));
  }, []);

  return (
    <div className="orchids-category wrapper">
      <h1>Orchids</h1>
      <div className="orchids-category__plants">
        <PlantsList plants={plants} />
      </div>
    </div>
  );
};

export default Orchids;

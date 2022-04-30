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
    <div>
    <h1>Evergreen plants</h1>
      <PlantsList plants={plants} />
    </div>
  );
};

export default Orchids;

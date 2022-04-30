import { useEffect, useState } from "react";
import { filterCactus } from "../../../services/PlantService";
import PlantsList from "../../../components/PlantsList/PlantList";
import "./CactusAndSucculents.scss";

const Cactus = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    filterCactus().then((plants) => setPlants(plants));
  }, []);

  return (
    <div>
    <h1>Evergreen plants</h1>
      <PlantsList plants={plants} />
    </div>
  );
};

export default Cactus;
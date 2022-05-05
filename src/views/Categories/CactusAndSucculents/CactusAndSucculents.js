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
    <div className="cactus-category wrapper">
      <h1>Evergreen plants</h1>
      <div className="cactus-category__plants">
        <PlantsList plants={plants} />
      </div>
    </div>
  );
};

export default Cactus;
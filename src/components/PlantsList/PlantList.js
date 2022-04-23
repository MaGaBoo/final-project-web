import plants from "../../data/plants.json";

const PlantsList = () => {
  return (
    <div>
      <ul>
        {plants.map((plant) => {
          return <li key={plant.id}>{plant.scientificName}</li>;
        })}
      </ul>
    </div>
  );
};

export default PlantsList;

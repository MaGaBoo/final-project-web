import './Shop.scss';
import PlantsList from '../../components/PlantsList/PlantList'
import { useEffect, useState } from 'react';
import { listPlants } from '../../services/PlantService';

const Shop = () => {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    listPlants()
      .then(plants => setPlants(plants))
  }, [])

  return (
    <div className="shop wrapper">
      <PlantsList plants={plants}/>
    </div>
  )

}

export default Shop;
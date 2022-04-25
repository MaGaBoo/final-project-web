import '../../components/PlantsList/PlantList';
import { Link } from 'react-router-dom';
import PlantsList from '../../components/PlantsList/PlantList';
import './Home.scss';
import { useEffect, useState } from 'react';
import { listPlants } from '../../services/PlantService';

const Home = () => {
  const [plants, setPlants] = useState([])
  
  useEffect(() => {
    listPlants()
      .then(plants => setPlants(plants))
  }, [])

  return (
    <>
      <h1>Home</h1>
      <PlantsList plants={plants}/>

      <h2>Categories</h2>
      <Link to='/evergreen'>Evergreen</Link>
      <br/>
      <Link to='/orchids'>Orchids</Link>
      <br/>
      <Link to='/cactus-and-succulents'>Cactus and Succulents</Link>
      
    </>
  )
}

export default Home;
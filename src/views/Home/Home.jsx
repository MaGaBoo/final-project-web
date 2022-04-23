import '../../components/PlantsList/PlantList';
import { Link } from 'react-router-dom';
import PlantsList from '../../components/PlantsList/PlantList';
import './Home.scss';

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <PlantsList />

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
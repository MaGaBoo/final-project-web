import { Link } from 'react-router-dom';
import PlantsList from '../../components/PlantsList/PlantList';
import { useEffect, useState } from 'react';
import { listPlants } from '../../services/PlantService';
import Conditions from '../../components/Conditions/Conditions';
import Categories from '../../components/Categories/Categories';
import handsPlants from '../../assets/images/hands-plants.png';
import everGreen from '../../assets/images/evergreen-category.jpg';
import cactus from '../../assets/images/cactus-and-succulents-category.jpg';
import orchids from '../../assets/images/orchids-category.jpg';
import headerPlant from '../../assets/images/header-plant.png';
import leftPlant from '../../assets/images/conditions-plant-left.png';
import rightPlant from '../../assets/images/conditions-plant-right.png'
import './Home.scss';

const Home = () => {
  const [plants, setPlants] = useState([])
  
  useEffect(() => {
    listPlants()
      .then(plants => setPlants(plants.filter((plant, index) => index < 8)))
  }, [])

  return (
    <>
      {/* HEADER */}
      <div className="header">
        <div className="header__left">
          <h1 className="header__title">Get your plants from people who love plants</h1>
          <p>The place where individuals buy and sell house plants to build a more sustainable world.</p>
          <Link to="/shop" className="header__btn">Shop plants</Link>
        </div>

        <div className="header__right">
          <img src={headerPlant} alt="" className="header__img" />
        </div>
      </div>


      {/* CONDITIONS */}
      <div className="conditions">
        <h2 className="conditions__title">Circular economy and plants</h2>
        <div className="conditions__cols">
          <div className="conditions__left">
            <img src={leftPlant} alt="" className="conditions__image" />
          </div>

          <div className="conditions__single">
            <Conditions
              img=""
              title="Sustainability"
              text="Let's give new life and enjoy what we already have"
            />

            <Conditions
              img=""
              title="Quality"
              text="Buy healthier plants (and pay less!)"
            />

            <Conditions
              img=""
              title="Ethics"
              text="Help us create a business model that respects the natural cycles of plants"
            />
          </div>

          <div className="conditions__right">
            <img src={rightPlant} alt="" className="conditions__image" />
          </div>
        </div> 
      </div>
     

      {/* CATEGORIES */}
      <div className="categories wrapper">
        <Categories
          img= {everGreen}
          title="Evergreen"
          link="evergreen"
        />

        <Categories
          img={cactus}
          title="Cactus and Succulents"
          link="cactus-and-succulents"
        />

        <Categories
          img={orchids}
          title="Orchids"
          link="orchids"
        />
      </div>


      {/* PRODUCTS */}
      <div className="products wrapper">
        <h2>Products</h2>
        <p>Order it for you or for your beloved ones </p>

        <div className="products__single">
          <PlantsList plants={plants}/>
        </div>

        <Link to="/shop" className="products__btn">View all plants</Link>
      </div>


      {/* LAST IMAGE */}
      <div className="wrapper">
        <img src={handsPlants} alt="hands-plants" className="hands" />
      </div>
        
    </>
  )
}

export default Home;
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
      .then(plants => setPlants(plants))
  }, [])

  return (
    <>
      {/* HEADER */}
      <div className="header">
        <div className="header__left">
          <h1 className="header__title">The easy way to make healthy life by buying your favourite plantes</h1>
          <p>Very beautiful plant decorations to make your home environment so that the atmohphere becomes calmer.</p>
          <button className="header__btn">Shop plants</button>
        </div>

        <div className="header__right">
          <img src={headerPlant} alt="" className="header__img" />
        </div>
      </div>


      {/* CONDITIONS */}
      <div className="conditions">
        <h2 className="conditions__title">Steps to start taking care of your plants</h2>
        <div className="conditions__cols">
          <div className="conditions__left-image">
            <img src={leftPlant} alt="" />
          </div>

          <div className="conditions__single">
            <Conditions
              img=""
              title="Fastest delivery"
              text="Your food is delivered on time anywhere in the city."
            />

            <Conditions
              img=""
              title="Pest Anticipation"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />

            <Conditions
              img=""
              title="Lorem Ipsum"
              text="Nulla placerat neque sed lacus porttitor bibendum."
            />
          </div>

          <div className="conditions__right-image">
            <img src={rightPlant} alt="" />
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
      </div>


      {/* LAST IMAGE */}
      <img src={handsPlants} alt="hands-plants" className="hands" />
        
    </>
  )
}

export default Home;
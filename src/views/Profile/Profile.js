import { useAuthContext } from "../../contexts/AuthContext";
import { deletePlant } from "../../services/PlantService";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { listOrders } from "../../services/OrdersService";
import './Profile.scss';

const Profile = () => {
  const [orders, setOrders] = useState([])
  const { user, getUser } = useAuthContext();

  const handleDelete = (id) => {
    deletePlant(id)
      .then(() => {
        getUser();
      })
  }

  useEffect(() => {
    listOrders()
      .then(orders => setOrders(orders))
  },[user])

  return (
    <div className="profile">
      <div className="profile__info">
        <h2>{user.name}</h2>
        <p>{user.address}</p>
        <p>{user.location}</p>
      </div>


      <div className="profile__orders wrapper">
        <h3>My Orders:</h3>
        {orders && orders.map(order => {
          return (
            <div key={order.id} className="profile__order">
              <div className="profile__order-info">
                <h4>Order {orders.indexOf(order) + 1}</h4>
                <Link to={`/order/${order.id}`} key={order.id}>View order</Link>
              </div>

              <div className="profile__order-status">
                <p>Complete</p>
              </div>
              
              <div className="profile__order-capture">
                <img src={order.items[0].image} alt="" className="profile__order-image" />
              </div>
            </div>
            )
        })
        }
      </div>
    
      <div className="profile__plants wrapper">
        <h3>My Plants:</h3>

        <div className="profile__plants-cards">
          {user.plants.map(plant => {
            return (
              <div key={plant.id} className="profile__card">
                <div className="profile__card-capture">
                  <img src={plant.image} alt={plant.commonName} className="profile__card-image" />
                </div>

                <div className="profile__card-info">
                  <p className="profile__card-name">{plant.commonName}</p>

                  <div className="profile__card-btns">
                    <Link to={`/plant/${plant.id}/edit`} className="profile__card-edit">Edit
                    </Link>
                    <button onClick={() => handleDelete(plant.id)} className="profile__card-btn">Delete</button>
                  </div>
                </div>
              </div>
            )
          })}

        </div>
      </div>
    </div>
  )
}

export default Profile

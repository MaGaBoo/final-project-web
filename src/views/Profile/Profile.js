import { useAuthContext } from "../../contexts/AuthContext";
import { deletePlant } from "../../services/PlantService";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { listOrders } from "../../services/OrdersService";

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
      <h4 className="mt-3">Profile</h4>

      <h2>Name: {user.name}</h2>
      <p>Address: {user.address}</p>
      <p>Location: {user.location}</p>

      <h2>Orders:</h2>
      {orders && orders.map(order => <Link to={`/order/${order.id}`} key={order.id}>View order</Link>)}

      <h2>Plants:</h2>
      {user.plants.map(plant => {
        return (
          <div key={plant.id}>
            <Link to={`/plant/${plant.id}`}>{plant.commonName}</Link>
            <button onClick={() => handleDelete(plant.id)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}

export default Profile

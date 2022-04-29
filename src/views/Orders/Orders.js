import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { listOrders } from '../../services/OrdersService';

const Orders = () => {
  const [orders, setOrders] = useState([])
  const { user } = useAuthContext();
  
  useEffect(() => {
    listOrders()
      .then(orders => setOrders(orders))
  },[user])


  return (
    <>
      <div className='container' />
        <h1>Hi {user.name}!</h1>
        <h3>Congrats! Your payment has been received.</h3>

        <div>
          <h3>Your current orders:</h3>
          {orders && orders.map(order => {
            return (
              <Link to={`/order/${order.id}`} key={order.id}>View order</Link>
            )
          })}
        </div>
      <div />
    </>
  );
};

export default Orders;

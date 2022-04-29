import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useAuthContext } from "../../contexts/AuthContext";
import { getOrder, listOrders } from "../../services/OrdersService";

const Orders = () => {
  const [orders, setOrders] = useState([])
  const { user, getUser } = useAuthContext();
  const [order, setOrder] = useState();
  const { id } = useParams();

/*   useEffect(() => {
    getOrder(id)
    .then((order) => {
      setOrder(order)
    })
  }, [id])
 */

  useEffect(() => {
    listOrders()
      .then(orders => setOrders(orders))
  },[])


  return (
    <>
      <div className="container" />
        <h1>Hi {user.name}!</h1>
        <h3>Congrats! Your payment has been received.</h3>

        <div>
          <h3>Your current orders:</h3>
          {orders && orders.map(order => {
            return (
              <Link to={`/order/${order.id}`}>View order</Link>
            )
          })}
        </div>
      

      <div />
    </>
  );
};

export default Orders;

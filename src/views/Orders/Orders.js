import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useAuthContext } from "../../contexts/AuthContext";
import { createOrder, getOrder } from "../../services/OrdersService";

const Orders = () => {
  const { user, getUser } = useAuthContext();
  const [order, setOrder] = useState();
  const { id } = useParams();

  useEffect(() => {
    getOrder(id)
    .then((order) => {
      setOrder(order)
    })
  }, [id])

  return (
    <>
      <div className="container" />
      <h1>Hi {user.name}!</h1>
      <h3>Congrats! Your payment has been received.</h3>

      <div>
   <h3>Your current orders:</h3>
   {order && order.items.map(item => {
     return(
       <h3>{item.commonName}</h3>
     )
   })}
  
      </div>
      

      <div />
    </>
  );
};

export default Orders;

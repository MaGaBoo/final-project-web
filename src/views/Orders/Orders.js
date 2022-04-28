import { useAuthContext } from "../../contexts/AuthContext";
import { createOrder } from "../../services/OrdersService";

const Orders = () => {
  const { user, getUser } = useAuthContext();

  const newOrder = () => createOrder()
  .then((orderCreated) => {
      getUser(orderCreated)
     // aquí aún no estoy trayendo nada que se pueda mapear
  })
 
  return (
    <>
      <div className="container" />
      <h1>Hi {user.name}!</h1>
      <h3>Congrats! Your payment has been received.</h3>

      <div>
   <h3>Your current orders:</h3>
   {newOrder} {console.log('llegamos aquí', newOrder)}

   {/* {user.newOrder.map(order => {
        return (
          <div key={order.id}>
        {order.id} //para ver que llega algo
          </div>
        )
      })} */}
      </div>
      

      <div />
    </>
  );
};

export default Orders;

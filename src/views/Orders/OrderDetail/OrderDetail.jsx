import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOrder } from "../../../services/OrdersService";

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    getOrder(id)
      .then(order => setOrder(order))
  },[id])

  console.log(order)

  return (
    <>
      <p>Products:</p>

      <ul>
        {order && order.items.map(item => <li key={item.id}>{item.commonName} - {item.price}€</li>)}
      </ul>
      
      
      {order && (
        <>
          <p>Total: {order.totalCart}€</p>
          <p>Date: {order.updatedAt.slice(0, 10)}</p>
        </>
      )}
    </>
  )
}

export default OrderDetail;
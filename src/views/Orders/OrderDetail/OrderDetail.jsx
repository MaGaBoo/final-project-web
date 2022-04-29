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

  return (
    <>
      {order && order.items.map((item) => {
        return (
          <p key={item.id}>{item.commonName}</p>
        )
      })}
    </>
  )
}

export default OrderDetail;
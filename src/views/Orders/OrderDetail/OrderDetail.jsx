import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOrder } from "../../../services/OrdersService";
import "./OrderDetail.scss";

const OrderDetail = () => {
  const { id } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    getOrder(id).then((order) => setOrder(order));
  }, [id]);

  console.log(order);

  return (
    <>
      <div className="container">
        <h3 className="title">My orders</h3>

        <div className="order-info">

          {order && (
            <>
              <p className="order-date">Date: {order.updatedAt.slice(0, 10)}</p>
              <p className="total-price">Total: {order.totalCart}€</p>
            </>
          )}
          <ul className="ul-list">
            {order &&
              order.items.map((item) => (
                <li key={item.id}>
                  {item.commonName} - {item.price}€
                </li>
              ))}
          </ul>
          <div className="pics-container">
            {order &&
            order.items.map((pic) => (
              <img className="pics" src={pic.image} alt={pic.commonName} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderDetail;

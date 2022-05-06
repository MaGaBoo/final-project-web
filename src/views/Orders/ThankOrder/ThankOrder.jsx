import { Link } from 'react-router-dom';
import './ThankOrder.scss';

const ThankOrder = () => {
  return (
    <div className="thanks-order wrapper">
      <div className="thanks-order__info">
        <iframe src="https://giphy.com/embed/1goSMgloqNK3CjUCYb" width="301" height="480" frameBorder="0" className="giphy-embed" allowFullScreen></iframe>
        <h2>Payment Confirmed</h2>
        <p> Thank you for buying in Oh My Plants. The nature is grateful to you.</p>
        <p> Now that your order is confirmed it will be ready to ship in 2 days.</p>
        <Link to="/profile" className="thanks-order__btn">My profile</Link>
      </div>
    </div>
  )
}

export default ThankOrder;
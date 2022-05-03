import { Link } from 'react-router-dom';
import './Categories.scss';

const Categories = ({ title, img, link }) => {
  return (
    <Link to={link} className="category" style={{ backgroundImage: `url(${img})`}}>
      <h3 className="category__title">{title}</h3>
    </Link>
  )
}

export default Categories;
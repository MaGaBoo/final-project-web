import './Conditions.scss';

const Conditions = ({ img, title, text }) => {
  return (
    <div className="condition">
      <div className="condition__circle"></div>
{/*       <img src={img} alt={title} /> */}
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Conditions;
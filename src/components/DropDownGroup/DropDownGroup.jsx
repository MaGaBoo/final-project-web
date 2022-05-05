import './DropDownGroup.scss';


const DropDownGroup = ({ label, id, type, register, error, values }) => {
  return (
    <div className="form-inputs">
      <label htmlFor={id}>{label}</label>
      <select id={id} {...register(id)} className="form-inputs__select">
        {values.map(value => {
          return (
            <option key={value} value={value}>{value}</option>
          )
        })}
      </select>
      <p>{error}</p>
    </div>
  )
}

export default DropDownGroup;
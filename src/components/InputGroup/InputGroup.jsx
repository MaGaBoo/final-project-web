import './InputGroup.scss';

const InputGroup = ({ label, id, register, error, type }) => {
  return (
    <div className="form-inputs">
      <label className="form-inputs__label" htmlFor={id}><p>{label}</p></label>
      <input className="form-inputs__input" type={type} id={id} {...register(id)} />
      <p>{error}</p>
    </div>
  )
}

export default InputGroup;
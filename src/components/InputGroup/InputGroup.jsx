import './InputGroup.scss';

const InputGroup = ({ label, id, register, error, type }) => {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} {...register(id)} />
      <p>{error}</p>
    </div>
  )
}

export default InputGroup;
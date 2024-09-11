/* eslint-disable react/prop-types */
const Input = ({changeHandler, value , hint}) => {
  return (
    <div className="input">
      <label htmlFor="input" >
        {hint}
      </label>
      <input
        type="text"
        id="input"
        onChange={changeHandler}
        value={value}
      />
    </div>
  );
};

export default Input;

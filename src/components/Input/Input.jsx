/* eslint-disable react/prop-types */
import styles from "./input.module.css"
const Input = ({changeHandler, value , hint}) => {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor="input" >
        {hint}
      </label>
      <input
        type="text"
        id="input"
        onChange={changeHandler}
        value={value}
        className={styles.input}
      />
    </div>
  );
};

export default Input;

import { useEffect, useRef, useState } from "react";
import "./Form.scss";

const Form = () => {
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    password: "",
  });

  const countOfChars = useRef(-1);

  const valuesOnChange = (e) => {
    setFormValues((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  useEffect(() => {
    console.log(formValues);
    countOfChars.current++;
  }, [formValues]);

  return (
    <form
      className="form"
      onSubmit={(e) => {
        e.preventDefault();
        console.log(formValues);
        console.log(countOfChars.current);
      }}
    >
      <div className="form-row">
        <label htmlFor="f-name">First Name</label>
        <input
          type="text"
          id="f-name"
          value={formValues.first_name}
          name="first_name"
          onChange={valuesOnChange}
        />
      </div>
      <div className="form-row">
        <label htmlFor="l-name">Last Name</label>
        <input
          type="text"
          id="l-name"
          value={formValues.last_name}
          name="last_name"
          onChange={valuesOnChange}
        />
      </div>
      <div className="form-row">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formValues.password}
          name="password"
          onChange={valuesOnChange}
        />
      </div>
      <button>Submit</button>
    </form>
  );
};

export default Form;

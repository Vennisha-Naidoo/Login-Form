import { useState } from "react";
import Input from "./Input";
import { hasMinLength, isEmail, isNotEmpty } from "../util/validation";

export default function Login() {

  const [enteredCredentials, setEnteredCredentials] = useState({
    email: '',
    password: ''
  });

  const [didEdit, setDidEdit] = useState({
    email: false,
    password: false
  });

  const emailInvalid = didEdit.email && !isEmail(enteredCredentials.email) && isNotEmpty(enteredCredentials.email);
  const passwordIsInvalid = didEdit.password && !hasMinLength(enteredCredentials.password, 6);

  function handleSubmit(event) {
    event.preventDefault();
    console.log("Values: ", enteredCredentials);
  }

  function handleInputChange(identifer, value) {
    setEnteredCredentials(prevCreds => ({
      ...prevCreds,
      [identifer]: value
    }));

    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifer]: false
    }));
  }

  function handleInputBlur(identifer) {
    setDidEdit(prevEdit => ({
      ...prevEdit,
      [identifer]: true
    }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input
          label="Email"
          id="email"
          type="email"
          name="email"
          onBlur={() => handleInputBlur('email')}
          onChange={(event) => handleInputChange('email', event.target.value)}
          value={enteredCredentials.email}
          error={ emailInvalid && 'Please enter valid email address.' }
        />

        <Input
          label="Password"
          id="password"
          type="password"
          name="password"
          onBlur={() => handleInputBlur('password')}
          onChange={(event) => handleInputChange('password', event.target.value)}
          value={enteredCredentials.password}
          error={ passwordIsInvalid && 'Please enter valid password.' }
        />
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}

import { useState } from "react";
import "./Form.css";

export default function Form() {
    let emailLabel,
        emailInput,
        passwordLabel,
        passwordInput = "";

    const [email, setEmail] = useState("");
    const [emailIsValid, setEmailIsValid] = useState(true);
    const [password, setPassword] = useState("");
    const [passwordIsValid, setPasswordIsValid] = useState(true);

    function emailUpdateHandler(event) {
        setEmail(event.target.value);
    }

    function passwordUpdateHandler(event) {
        setPassword(event.target.value);
    }

    function validateInput() {
        if (!email.includes("@")) {
            setEmailIsValid(false);
        } else {
            setEmailIsValid(true);
        }
        if (password.length < 8) {
            setPasswordIsValid(false);
        } else {
            setPasswordIsValid(true);
        }
    }

    if (emailIsValid === false) {
        emailLabel = "red";
        emailInput = "border-red";
    }

    if (passwordIsValid === false) {
        passwordLabel = "red";
        passwordInput = "border-red";
    }

    return (
        <div>
            <form action="">
                <label htmlFor="email" className={emailLabel}>
                    Your email
                </label>
                <input
                    type="text"
                    className={emailInput}
                    id="email"
                    value={email}
                    onChange={emailUpdateHandler}
                />
                <label htmlFor="password" className={passwordLabel}>
                    Your password
                </label>
                <input
                    type="text"
                    className={passwordInput}
                    id="password"
                    value={password}
                    onChange={passwordUpdateHandler}
                />
                <button type="button" onClick={validateInput}>
                    Submit
                </button>
            </form>
        </div>
    );
}

/* import { useState } from 'react';

function Form() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(true);

  function changeEmailHandler(event) {
    setEnteredEmail(event.target.value);
  }
  function changePasswordHandler(event) {
    setEnteredPassword(event.target.value);
  }

  function submitFormHandler(event) {
    event.preventDefault();

    const emailIsValid = enteredEmail.includes('@');
    const passwordIsValid = enteredPassword.trim().length >= 6;

    setEmailIsValid(emailIsValid);
    setPasswordIsValid(passwordIsValid);

    if (!emailIsValid || !passwordIsValid) {
      return;
    }

    // do something...
    console.log('Inputs are valid, form submitted!');
  }

  return (
    <form onSubmit={submitFormHandler}>
      <div>
        <label htmlFor="email" className={!emailIsValid && 'invalid'}>
          Your email
        </label>
        <input
          id="email"
          type="email"
          onChange={changeEmailHandler}
          className={!emailIsValid && 'invalid'}
        />
      </div>
      <div>
        <label htmlFor="password" className={!passwordIsValid && 'invalid'}>
          Your password
        </label>
        <input
          id="password"
          type="password"
          onChange={changePasswordHandler}
          className={!passwordIsValid && 'invalid'}
        />
      </div>
      <button>Submit</button>
    </form>
  );
}

export default Form; */

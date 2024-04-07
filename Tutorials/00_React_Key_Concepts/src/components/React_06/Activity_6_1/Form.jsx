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
                <button type="button" onClick={validateInput}>Submit</button>
            </form>
        </div>
    );
}

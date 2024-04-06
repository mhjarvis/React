import { useState } from "react";
import "./Form.css";

export default function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function emailUpdateHandler(event) {
        setEmail(event.target.value);
        testInputs();
    }

    function passwordUpdateHandler(event) {
        setPassword(event.target.value);
        testInputs();
    }

    function testInputs() {
        if (email.length < 8) {
            emailClass = "newRed";
        }
        if (email.length >= 8) {
            emailClass = "";
        }
    }

    let emailClass = "";
    let passwordClass = "";

    return (
        <div>
            <form action="">
                <label htmlFor="email" className="newRed">Your email</label>
                <input
                    type="email"
                    className={emailClass}
                    id="email"
                    value={email}
                    onChange={emailUpdateHandler}
                />
                <label htmlFor="password">Your password</label>
                <input
                    type="text"
                    className={passwordClass}
                    id="password"
                    value={password}
                    onChange={passwordUpdateHandler}
                />
            </form>
        </div>
    );
}

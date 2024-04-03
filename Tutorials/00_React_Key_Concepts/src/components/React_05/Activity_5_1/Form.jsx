import { useState } from "react";

export default function Form() {
    const [email, setEmail] = useState("");
    const [showError, setShowError] = useState(false);

    function emailInputHandler(event) {
        setEmail(event.target.value);
    }

    function emailAddressHandler() {
        if (email.includes("@")) {
            setShowError(false);
        } else {
            setShowError(true);
        }
    }

    return (
        <div className="form_5_1">
            <label>Your Email</label>
            <input
                type="text"
                placeholder="Enter email"
                onChange={emailInputHandler}
                value={email}
            />
            <p className="error-message">
                {showError ? "Invalid email address entered" : ""}
            </p>
            <button onClick={emailAddressHandler}>Submit</button>
        </div>
    );
}

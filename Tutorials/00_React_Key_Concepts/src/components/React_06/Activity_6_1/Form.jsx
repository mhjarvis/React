import { useState } from "react";

export default function Form() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function emailUpdateHandler(event) {
        setEmail(event.target.value);
    }

    function passwordUpdateHandler(event) {
        setPassword(event.target.value);
    }
    return (
        <div>
            <form action="">
                <label htmlFor="email">Your email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={emailUpdateHandler}
                />
                <label htmlFor="password">Your password</label>
                <input
                    type="text"
                    id="password"
                    value={password}
                    onChange={passwordUpdateHandler}
                />
            </form>
        </div>
    );
}

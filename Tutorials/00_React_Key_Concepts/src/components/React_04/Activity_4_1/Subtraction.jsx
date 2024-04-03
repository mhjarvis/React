/* eslint-disable no-unused-vars */

import { useState } from "react";

export default function Subtraction() {
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);

    function handleFirst(event) {
        setFirstValue(Number(event.target.value));
    }

    function handleSecond(event) {
        setSecondValue(+event.target.value);
    }

    const finalValue = firstValue - secondValue;

    return (
        <div>
            <input onChange={handleFirst}></input> -
            <input onChange={handleSecond}></input> = {finalValue}
        </div>
    );
}

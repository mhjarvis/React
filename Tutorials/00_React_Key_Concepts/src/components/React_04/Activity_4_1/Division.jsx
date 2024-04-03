import { useState } from "react";

/* eslint-disable no-unused-vars */
export default function Division() {
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);

    function handleFirst(event) {
        setFirstValue(Number(event.target.value));
    }

    function handleSecond(event) {
        setSecondValue(+event.target.value);
    }

    const finalValue = firstValue / secondValue;

    return (
        <div>
            <input onChange={handleFirst}></input> /
            <input onChange={handleSecond}></input> = {finalValue}
        </div>
    );
}

import { useState } from "react";
import Results from "./Result";

/* eslint-disable no-unused-vars */
export default function Operations() {
    const [firstValue, setFirstValue] = useState(0);
    const [secondValue, setSecondValue] = useState(0);
    const [operator, setOperator] = useState("+");

    function handleFirst(event) {
        setFirstValue(Number(event.target.value));
    }

    function handleSecond(event) {
        setSecondValue(+event.target.value);
    }

    function handleOperator(event) {
        setOperator(event.target.value);
    }

    let finalValue = setFinalValue;

    function setFinalValue() {}

    return (
        <div>
            <input onChange={handleFirst}></input>
            <select
                name="operator"
                id="calc-operator"
                onChange={handleOperator}
            >
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
            </select>
            <input onChange={handleSecond}></input> =
            <Results
                first={firstValue}
                second={secondValue}
                operator={operator}
            />
        </div>
    );
}

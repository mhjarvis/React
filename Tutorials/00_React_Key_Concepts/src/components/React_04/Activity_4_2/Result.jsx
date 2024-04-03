/* eslint-disable react/prop-types */
export default function Results({ first, second, operator }) {
    let result;

    if (operator === "+") {
        result = first + second;
    } else if (operator === "-") {
        result = first - second;
    } else if (operator === "*") {
        result = first * second;
    } else {
        result = first / second;
    }

    return <div>Result: {result}</div>;
}

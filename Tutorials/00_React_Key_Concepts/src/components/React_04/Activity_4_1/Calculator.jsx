import Addition from "./Addition";
import Subtraction from "./Subtraction";
import Multiplication from "./Multiplication";
import Division from "./Division";
/* eslint-disable no-unused-vars */

export default function Calculator() {
    return (
        <div className="activity">
            <h2>Activity 4.1: Building a Simple Calculator</h2>

            <Addition />
            <Subtraction />
            <Multiplication />
            <Division />
        </div>
    );
}

import { questions } from "./react_01_questions";
import './React_01.css';
import Title from "../Title";

export default function React_01() {
    return (
        <div>
            <Title>React - What and Why?</Title>
            <ul>
                {questions.map((question, index) => {
                    return (
                        <li key={index}>
                            <p className="bold">{question[0]}</p>
                            <p>{question[1]}</p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}

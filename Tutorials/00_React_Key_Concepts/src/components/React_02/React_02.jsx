import Title from "../Title";
import "./React_02.css";
import { questions_02 } from "./react_02_questions";
import TestYourKnowledge from "../TestYourKnowledge";

export default function React_02() {
    return (
        <div>
            <Title>2. Understanding React Components and JSX</Title>
            <TestYourKnowledge questions={questions_02} />
        </div>
    );
}

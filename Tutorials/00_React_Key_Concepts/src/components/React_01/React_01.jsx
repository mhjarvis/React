import { questions_01 } from "./react_01_questions";
import "./React_01.css";
import Title from "../Title";
import TestYourKnowledge from "../TestYourKnowledge";

export default function React_01() {
    return (
        <div>
            <Title>1. React - What and Why?</Title>
            <TestYourKnowledge questions={questions_01} />
        </div>
    );
}

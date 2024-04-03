import Title from "../Title";
import "./React_03.css";
import { questions_03 } from "./react_03_questions";
import TestYourKnowledge from "../TestYourKnowledge";

export default function React_02() {
    return (
        <div className="sect">
            <Title>3. Components and Props</Title>
            <TestYourKnowledge questions={questions_03} />
        </div>
    );
}

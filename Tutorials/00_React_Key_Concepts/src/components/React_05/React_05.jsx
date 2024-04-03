import Title from "../Title";
import "./React_05.css";
import { questions_05 } from "./react_05_questions";
import TestYourKnowledge from "../TestYourKnowledge";

export default function React_04() {
    return (
        <div className="sect">
            <Title>5. Rendering Lists and Conditional Content</Title>
            <TestYourKnowledge questions={questions_05} />
        </div>
    );
}

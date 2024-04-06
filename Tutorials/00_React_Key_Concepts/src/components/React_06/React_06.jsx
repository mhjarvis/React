import Title from "../Title";
import "./React_06.css";
import { questions_06 } from "./react_06_questions";
import TestYourKnowledge from "../TestYourKnowledge";
import Form from "./Activity_6_1/Form";

export default function React_06() {
    return (
        <div className="sect">
            <Title>6. Styling React Apps</Title>
            <TestYourKnowledge questions={questions_06} />
            <Form />
        </div>
    );
}

import Title from "../Title";
import "./React_04.css";
import { questions_04 } from "./react_04_questions";
import TestYourKnowledge from "../TestYourKnowledge";
import Calculator from "./Activity_4_1/Calculator";
import EnhancedCalculator from "./Activity_4_2/EnhancedCalculator";

export default function React_04() {
    return (
        <div className="sect">
            <Title>4. Working With Events and States</Title>
            <TestYourKnowledge questions={questions_04} />
            <Calculator />
            <EnhancedCalculator />
        </div>
    );
}

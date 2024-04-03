import Title from "../Title";
import "./React_05.css";
import { questions_05 } from "./react_05_questions";
import TestYourKnowledge from "../TestYourKnowledge";
import ErrorMessage from "./Activity_5_1/ErrorMessage";
import ListOfProducts from "./Activity_5_2/ListOfProducts";

export default function React_04() {
    return (
        <div className="sect">
            <Title>5. Rendering Lists and Conditional Content</Title>
            <TestYourKnowledge questions={questions_05} />
            <ErrorMessage />
            <ListOfProducts />
        </div>
    );
}

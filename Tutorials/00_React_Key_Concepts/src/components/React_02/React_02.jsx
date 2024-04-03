import Title from "../Title";
import "./React_02.css";
import { questions_02 } from "./react_02_questions";
import TestYourKnowledge from "../TestYourKnowledge";
import Activity_2_1 from "./Activity_2_1";
import Activity_2_2 from "./Actibity_2_2";

export default function React_02() {
    return (
        <div>
            <Title>2. Understanding React Components and JSX</Title>
            <TestYourKnowledge questions={questions_02} />
            <Activity_2_1 />
            <Activity_2_2 />
        </div>
    );
}

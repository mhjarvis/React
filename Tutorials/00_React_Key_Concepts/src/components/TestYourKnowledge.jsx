/* eslint-disable react/prop-types */

export default function TestYourKnowledge({ questions }) {
    return (
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
    );
}

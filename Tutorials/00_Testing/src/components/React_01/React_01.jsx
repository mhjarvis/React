export default function React_01() {
    const questions = [
        [
            "What is React?",
            "React is a JavaScript library that simplifies building user interfaces and allows you to create highly interactive and reactive web user interfaces. It can be used with many platforms.",
        ],
    ];

    return (
        <div>
            <h1>1. React - What and Why?</h1>
            <div>
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
                <p>{questions.map((question) => question[0])}</p>
                <p>{questions.map((answer) => answer[1])}</p>
            </div>
        </div>
    );
}

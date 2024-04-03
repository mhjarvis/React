const questions_05 = [
    [
        "1. What is 'conditional content'?",
        "Content that should only be displayed under certain circumstances.",
    ],
    [
        "2. Name at least two different ways of rendering JSX elements conditionally.",
        "Using ternary expressions, Abusing JavaScript logical operators (&& and ||), if/then statements, etc.",
    ],
    [
        "3. Which elegant approach can be used to define element tags conditionally?",
        "Element types can be stored in a (conditionally set) variable. For example, you could store a <p></p> element by storing tag names (p) in variables.",
    ],
    [
        "4. What's a potential downside of using only ternary expressions (for conditional content)?",
        "It can make everything hard to read and understand.",
    ],
    [
        "5. How can lists of data be rendered as JSX elements?",
        "By using the .map method. You could also use a for loop, though this is not the ideal.",
    ],
    [
        "6. Why should keys be added to rendered list items?",
        "Keys help identifying rendered DOM elements. This helps React avoid re-rendering unchanged JSX elements unnecessarily.",
    ],
    [
        "7. Give one example each for a good and a bad key.",
        "Good - unique id attached to some data or a uniquely generated on. Bad - random number that is re-generated frequently.",
    ],
];

export { questions_05 };

const questions_04 = [
    [
        "What problem does state solve?",
        "State manages and updates internal data. It also updates the UI and any parts of the UI affected by that change. ",
    ],
    [
        "What's the difference between props and state?",
        "State focuses on internal data (to that component function) while props focus on external data, or the data that is passed between components.",
    ],
    [
        "How is state registered in a component?",
        "With the useState() call: const [val, updateVal] = useState('initial state')",
    ],
    [
        "Which values does the useState() Hook provide?",
        "The initial value of the variable that individual state tracks.",
    ],
    [
        "How many state values can be registered for a single component?",
        "As many as you like.",
    ],
    [
        "Does state affect components other than the component in which it was registered?",
        "Yes, it will affect any component that makes use of the state it tracks internally. Any of those components will then be updated upon a change.",
    ],
    [
        "How should state be updated if the new state depends on the previous state?",
        "With a function. This is critical because of the stack. If you do not use a function, the state update function will be pushed to the stack with the 'current' value of that state; if this happens more than once, you run the risk of the wrong state getting pushed. Usuing a function to retrieve the current state value at the time of execution makes sure you get the actual `current` state value.",
    ],
    [
        "8. How can state be shared across multiple components?",
        "By lifting state up to a common ancestor, then passing state as props. This way, the parent element tracks the state and sends updates to whatever components need it when a change is encountered.",
    ],
];

export { questions_04 };

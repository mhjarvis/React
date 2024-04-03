const questions = [
    [
        "1. What is React?",
        "React is a JavaScript library that simplifies building user interfaces and allows you to create highly interactive and reactive web user interfaces. It can be used with many platforms.",
    ],
    [
        "2. Which advantage does React offer over vanilla JavaScript projects?",
        "React simplifies the process of building complex apps by generating and executing DOM-manipulating instructions under the hood.",
    ],
    [
        "3. What's the difference between imperative and declarative code?",
        "With imperative code, you write down incstuctions step by step. Think of all the steps involved with adding a button that changes some text on-screen (eventListeners, functions, etc.). Declarative code allows you to describe the target states and let some library figure out how to get there. Less overhead.",
    ],
    [
        "What is a Single-Page-Application (SPA)?",
        "A SPA is a web app that is technically served on one page (one HTML document) only. That page loads some JavaScript code (typically combined with some library like React) that takes care about updating the page content based on different user actions. To the user, it might seem like they are navigating different pages but technically, it's the same page's DOM getting updated behind the scenes.",
    ],
    [
        "How can you create new React projects and why do you need such a more complex project setup?",
        "New projects can be created with that tool by running npx create-react-app project-name.",
    ],
];

export { questions }
const questions_06 = [
    ["1. With which language are styles for React components defined?", "CSS"],
    [
        "2. Which important difference between projects with and without React has to be kept in mind when assigning classes to elements?",
        "In react, use the `className` variable instead of `class`.",
    ],
    [
        "3. How can styles be assigned dynamically and conditionally?",
        "Just as any value can be set or assigned dynamically / conditionally. You can set the style or className props to both hard-coded / static and dynamic or conditional values (by using single curly braces).",
    ],
    ["4. What does 'scoping' mean in the context of styling?", "Out of the box, every CSS class will be universal. Elements with the same className will be styled, regardless of where the CSS is imported into. In order to prevent this, look into scoping CSS to React components."],
    [
        "5. How could styles be scoped to components? Briefly explain at least one concept that helps with scoping.",
        "Use CSS Modules. ",
    ],
];

export { questions_06 };

const questions_03 = [
    [
        "What 'problem' do props solve?",
        "Props allow components to be configurable and thus, reusable. Different prop values can be passed to the same component, yielding different results.",
    ],
    [
        "How are props passed into components?",
        "As attributes on the JSX tags of custom components. There also exists the `children` prop, that passes whatever is between opening/closing elements.",
    ],
    [
        "How are props consumed inside a component function?",
        "Props are passed as an argument to component functions by React - automatically and grouped as an object. Inside the component function, props can be consumed by accepting a 'props' parameter.",
    ],
    [
        "Which options exist for passing (multiple) props into components?",
        "You can provide multiple attributes (key-value pairs) and / or group prop values in an object / array. There is also 'object-destructuring'.",
    ],
];

export { questions_03 };

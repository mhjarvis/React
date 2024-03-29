<h1 style="text-align:center">React Notes</h1>

## Creating React Projects

    npm create vite@latest my-first-react-app -- --template react       // replace app name

    Need to install the following packages:
        create-vite@5.X.X
    Ok to proceed?  (y)                         // enter 'y'

    cd my-first-react-app                       // enter the folder
    npm install
    npm run dev                                 // creates live server on localhost:5173

## React Essentials (Components, JSX, Props)

### Best Practices

1. Components must always return only 1 element.
2. Break down components as much as possible.
3. Store Components with their respective .css files in seperate folders (under `src/components/`).
4.

### Import / Export

    import App from './App.jsx';                    // import element
    export default function SomeComponent() {}      // export a component

### Dynamic Output

    let htmlSource = 'https://www.x.com';

    <img src={htmlSource}>          // htmlSource is a variable that can be changed
    <p>{1 + 1}</p>                  // 2
    <p>{textArray[0]} gets information from an array</p>

### Using Images

Use an import statement to create a relative path.

    import reactImg from './assets/react-core.png';         // import image as 'reactImg'
    <img src={reactImg} alt='Some random image'>            // use the variable as reference

### `props` Reusability

    <CoreConcept title="Component" description={someVariable}>      // title and description are 'props'

    function CoreConcept(props) {               // use props in component functions
        <li>
            <h3>{props.title}</h3>              // props in use
            <p>{props.description}</p>
        </li>
    }

An alternative method:

    const SOME_VAR = [ {title: 'components', description: 'soemthing des', ...}];       // array

    <CoreConcept
        title={SOME_VAR[0].title}
        description={SOME_VAR[0].description}
    />

    // or it can be shortened if keys are the same

    <CoreConcept {...SOME_VAR[0]} />

### Destructuring with `props`

    function CoreConcept( { title, description } ) {        // destructure to use direct variables

        <h3>{ title }</h3>          // instead of props.title
        <p>{ description }</p>      // exclude `props` again
    }

### The `children` Prop

The `children` prop is the only prop which you can't destructure and call something else.

    <TabButton>Component</TabButton>                // this is not output by default
                                                    // use this with props.children

    export default function TabButton(props) {
        return <h2>{props.children}</h2>            // h2 with content 'Component'
    }

### Reacting to Events

    export default function TabButton({children}) {
        function handleClick() {    // function that executes onClick

        }

        return (
            <button onClick={handleClick}>{children}</button>   // onClick takes a function
        );
    }

### Passing Functions as Values to Props

In the parent component, we can have a function that we pass as a prop to the child component, which then is called based on the event it is attached to.

    function handleSelect() { // do something }
    <TabButton onSelect={handleSelect}>Components</TabButton>       // create button with onSelect

In the child component, we accep that function and attach it to the `onClick` handler.

    export default function TabButton({ children, onSelect }) {
        return (
            <li>
                <button onClick={onSelect}>{children}</button>
            </li>
        );
    }

### Passing Custom Arguments to Event Functions

Using the previous syntax, we can pass values to those functions. These will not execute, since the only thing being passes is the anonymous function.

    // create a function to be called by the component

    function handleSelect(selectedButton) {
        console.log(selectedButton)
    }

    // onSelect is the prop that is passed down to the component; when that component executes, it will
    // call the handSelect function with whatever variable in it.

    <TabButton onSelect={() => handleSelect('someValue')}>Components</TabButton>
    <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>

    // or you can use the longer version...

    <TabButton onSelect={function() { handleSelect }}>Components</TabButton>    // longer version

### Managing `state` and Using Hooks

-   `state` will update the entire component to which it belongs in the event that it changes.
-   Only call hooks inside of Component Functions.
-   Only call hooks on the top level.

    function App() {
    const [val, setVal] = useState('Text or whatever for the initial value');
    }

### Rendering Content Conditionally

    const [selectedTopic, setSelectedTopic] = useState();

    // Component code

    {!selectedTopic ? <p>Please select a topic.</p> : null}

    {selectedTopic ? (
        <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
        </div>
    ) : null}

Or, we can use a trick in JavaScript...

    {!selectedTopic && <p>Please select a topic.</p>}
    {selectedTopic && <div>...code...</div>}

Or, we can use a variable...

    let tabContent = <p>Please select a topic.</p>

    if (selectedTopic) {
        tabContent = <div id="tab-content">
                        <h3>{EXAMPLES[selectedTopic].title}</h3>
                        <p>{EXAMPLES[selectedTopic].description}</p>
                        <pre>
                            <code>{EXAMPLES[selectedTopic].code}</code>
                        </pre>
                    </div>
    }

    ...code...
    {tabContent}

### CSS Styling and Dynamic Styling

    <TabButton
        isSelected={selectedTopic === "components"}     // set prop value
        onSelect={() => handleSelect("components")}
    >

    // in the TabButton component...

    <button className={isSelected ? 'active' : ''} onClick={onSelect}>{children}</button>

    // where active is the css class to highlight content

### Outputting List Data Dynamically

This can help prevent apps breaking if some data is removed. This is achieved using the .map() method...

    <CoreConcept
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}
    />

    // or this...

    <CoreConcept {...CORE_CONCEPTS[1]} />

    // will instead be written as...

    {CORE_CONCEPTS.map((conceptItem) => <CoreConcept {...conceptItem} />)}

Another example...

    export const DUMMY_TODOS = [        // this is the array which will
        'Learn React',                  // be mapped over
        'Practice React',
        'Profit!'
    ];

    export default function App() {
        return (
            <ul>
                {DUMMY_TODOS.map((item) => (<Todo text={item}></Todo>))}
            </ul>
            )
    }

    export default function Todo(props) {
        return <li>{props.text}</li>;
    }

## React Essentials - Deep Dive

## Fragments

    import Fragment from 'react';       // older project syntax
    <Fragment></Fragment>

    // or, for newer projects, you can just write fragments like this...

    <> </>      // can be used and will not show in DOM

## Forwarded `props` or Proxy `props`

Note that props (such as `id` or `className`) are not automatically forwarded to inner elements. For example...

    export default function Section({ title, children, ...props }) {
        return (
            <section {...props}>
                <h2>{title}</h2>
                {children}
            </section>
        );
    }


Here, the ...props allows us to merge all other values into an object ('props'). Then, using the ...props in the 'section' element, all remaining props are then applied to this 'section' element.

### Working With Multiple JSX Slots
You can pass content as a prop to other components. Wrap them...

    <Tabs
        buttons={
            <>
                <TabButton
                    isSelected={selectedTopic === "components"}
                    onClick={() => handleSelect("components")}
                >
                Components
                </TabButton>
                <TabButton
                    isSelected={selectedTopic === "jsx"}
                    onClick={() => handleSelect("jsx")}

        // more code

            </>
        }>
    </Tabs>

### Setting Component Types Dynamically
You can set coponent types (e.g. <menu>, <div>, etc.) dynamically.

    // code...

    ButtonsContainer="menu"
    // or as a custom component:
    // ButtonsContainer={Section}

    export default function Tabs({ children, buttons, ButtonsContainer }) {

        // const ButtonContainer = buttonsContainer; - this can also be used if remaping
        
        return (
        <>
            <ButtonsContainer>{buttons}</ButtonsContainer>
            {children}
        </>
    );
}

### Setting Default Prop Values

Default `prop` values can also be set...

    export default function SomeComponent(someVar, ButtonContainer = 'menu') {}


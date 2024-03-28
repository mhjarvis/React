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

-   Only call hooks inside of Component Functions.
-   Only call hooks on the top level.

    function App() {
    const [val, setVal] = useState('Text or whatever for the initial value');
    }


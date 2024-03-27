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

    <TabButton>Component</TabButton>                // this is not output by default
                                                    // use this with props.children

    export default function TabButton(props) {
        return <h2>{props.children}</h2>            // h2 with content 'Component'
    }

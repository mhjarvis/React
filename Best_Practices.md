<h1 style='text-align:center'> React Best Practices</h1>

## 1. Update State Based on the Old State Correctly

To ensure that state gets updated correctly, calling state update function should be performed with a function:

    export default function SomeComponent() {
        const [value, setValue] = useState(false);

        function handleClick() {
            setValue(() => !value);
        }
    }

The reason we need to set the value this way has to do with what is passed to the setValue function when the function is initiated. Anything that is calling the setValue function is passing the current value to the update function, and because of time delays, this may result in the wrong value being passed.

## 2. 
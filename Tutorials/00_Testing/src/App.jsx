import "./App.css";
import React_01 from "./components/React_01/React_01";
import GoalItem from "./components/GoalItem";

function App() {
    return (
        <>
            <React_01 />
            <div>
                <h2>ACTIVITY 3.1: GOAL ITEM COMPONENT AND PRACTICE</h2>
                <GoalItem
                    title="Learn React"
                    description="Learn it all...more text"
                />
                <GoalItem
                    title="Practice, etc."
                    description="some additional text... more text... more text"
                />
            </div>
        </>
    );
}

export default App;

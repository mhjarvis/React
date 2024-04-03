/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */

export default function Activity_2_2() {
    return (
        <div className="activity_2_2">
            <h2>
                Activity 2.2: Creating a React App to Log Your Goals for This
                Book
            </h2>
            <h3>My Goals for this Course:</h3>
            <GoalList
                goal="1. Learn React"
                description="Blah blah blah blah..."
            />
            <GoalList
                goal="2. Learn .map()"
                description="Blah blah blah blah..."
            />
        </div>
    );
}

function GoalList({ goal, description }) {
    return (
        <>
            <h4>{goal}</h4>
            <p>{description}</p>
        </>
    );
}

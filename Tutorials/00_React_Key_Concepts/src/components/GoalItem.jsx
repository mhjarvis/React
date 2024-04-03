/* eslint-disable react/prop-types */

export default function GoalItem({ title, description }) {
    return (
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

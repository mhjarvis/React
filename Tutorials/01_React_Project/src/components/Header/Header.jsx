import reactImg from "../../assets/react-core-concepts.png";
// Import Header.css element directly into the 
import "./Header.css";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
    // This is a dynamic variable used with the getRandomInt function
    // Remove variables from jsx code for a leaner approach
    const description = reactDescriptions[genRandomInt(3)];

    return (
        <header>
            {/* 
                `reactImg` is brought into the application after importing it
                It is a variable that acts as a pointer to the path where the image is stored
            */}
            <img src={reactImg} alt="Stylized atom" />
            <h1>React Essentials</h1>
            <p>
                {description} React concepts you will need for almost any app
                you are going to build!
            </p>
        </header>
    );
}

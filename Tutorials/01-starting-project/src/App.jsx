// This imports a image file into the javascript file - a better approach to getting images in
import reactImg from "./assets/react-core-concepts.png";

const reactDescriptions = ["Fundamental", "Crucial", "Core"];

function genRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
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

function App() {
    return (
        <div>
            <Header />
            <main>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;

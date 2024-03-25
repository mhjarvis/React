// This imports a image file into the javascript file - a better approach to getting images in
import reactImg from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data";

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

// This example uses OBJECT DESTRUCTURING for importing object variables
function CoreConcept({ image, title, description }) {
    return (
        <li>
            <img src={image} alt="..." />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}

function App() {
    return (
        <div>
            <Header />
            <main>
                <section id="core-concepts">
                    <h2>Core Concepts</h2>
                    <ul>
                        <CoreConcept
                            title={CORE_CONCEPTS[0].title}
                            description={CORE_CONCEPTS[0].description}
                            image={CORE_CONCEPTS[0].image}
                        />
                        {/* 
                        This will work if naems are similar - this will work
                        if the object names equate to prop values.
                        */}
                        <CoreConcept {...CORE_CONCEPTS[1]} />
                        <CoreConcept
                            title={CORE_CONCEPTS[2].title}
                            description={CORE_CONCEPTS[3].description}
                            image={CORE_CONCEPTS[2].image}
                        />{" "}
                        <CoreConcept
                            title={CORE_CONCEPTS[3].title}
                            description={CORE_CONCEPTS[3].description}
                            image={CORE_CONCEPTS[3].image}
                        />
                    </ul>
                </section>
                <h2>Time to get started!</h2>
            </main>
        </div>
    );
}

export default App;

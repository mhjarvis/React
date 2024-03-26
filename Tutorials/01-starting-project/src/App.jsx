// This imports a image file into the javascript file - a better approach to getting images in
import { CORE_CONCEPTS } from "./data";
import Header from './components/Header.jsx'
import CoreConcept from "./components/CoreConcepts.jsx";

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

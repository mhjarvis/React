// This imports a image file into the javascript file - a better approach to getting images in
import { CORE_CONCEPTS } from "./data";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcepts.jsx";
import TabButton from "./components/Header/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data.js";

function App() {
    const [selectedTopic, setSelectedTopic] = useState();

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton);
    }

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
                <section id="examples">
                    <h2>Time to get started!</h2>
                    <menu>
                        <TabButton onSelect={() => handleSelect("components")}>
                            Components
                        </TabButton>
                        <TabButton onSelect={() => handleSelect("jsx")}>
                            JSX
                        </TabButton>
                        <TabButton onSelect={() => handleSelect("props")}>
                            Props
                        </TabButton>
                        <TabButton onSelect={() => handleSelect("state")}>
                            State
                        </TabButton>
                    </menu>
                    {!selectedTopic ? <p>Please select a topic.</p> : null}

                    {selectedTopic ? (
                        <div id="tab-content">
                            <h3>{EXAMPLES[selectedTopic].title}</h3>
                            <p>{EXAMPLES[selectedTopic].description}</p>
                            <pre>
                                <code>{EXAMPLES[selectedTopic].code}</code>
                            </pre>
                        </div>
                    ) : null}

                </section>
            </main>
        </div>
    );
}
export default App;

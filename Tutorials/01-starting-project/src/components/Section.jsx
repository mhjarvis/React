export default function Section({ title, children, ...poop }) {
    return (
        <section id={poop.id}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

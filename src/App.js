import ContactForm from "./ContactForm";
import ContactsList from "./ContactsList";

const contacts = [
    {
        id: 1,
        firstName: "Jan",
        lastName: "Nowak",
        email: "jan.nowak@example.com"
    },
    {
        id: 2,
        firstName: "Adam",
        lastName: "Kowalski",
        email: "adam.kowalski@example.com"
    },
    {
        id: 3,
        firstName: "Zbigniew",
        lastName: "Koziol",
        email: "zbigniew.koziol@example.com"
    }
];

const contactForm = {
    firstName: "",
    lastName: "",
    email: ""
};

const App = React.createClass({
    render: () => (
        <div className="app">
            <ContactForm contact={contactForm} />
            <ContactsList items={contacts} />
        </div>
    )
});

export default App;

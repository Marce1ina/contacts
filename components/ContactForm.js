const ContactForm = React.createClass({
    render: function() {
        const { firstName, lastName, email } = this.props.contact;

        return (
            <form className="contactForm">
                <input type="text" placeholder="Imię" value={firstName} />
                <input type="text" placeholder="Nazwisko" value={lastName} />
                <input type="text" placeholder="email" value={email} />
                <button type="submit">Dodaj kontakt</button>
            </form>
        );
    },

    propTypes: {
        contact: React.PropTypes.object.isRequired
    }
});

export default ContactForm;

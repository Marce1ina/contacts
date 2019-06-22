const Contact = React.createClass({
    render: function() {
        const { firstName, lastName, email } = this.props.item;

        return (
            <div className="contactItem">
                <i className="contactIcon far fa-address-card" />
                <p className="contactLabel">Imię: {firstName}</p>
                <p className="contactLabel">Nazwisko: {lastName}</p>
                <a className="contactEmail" href={"mailto: " + email}>
                    {email}
                </a>
            </div>
        );
    },

    propTypes: {
        item: React.PropTypes.object.isRequired
    }
});

export default Contact;

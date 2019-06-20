import Contact from "./Contact";

const ContactsList = React.createClass({
    render: function() {
        const contacts = this.props.items.map(function(contact) {
            return <Contact item={contact} key={contact.id} />;
        });

        return <ul className="contactsList">{contacts}</ul>;
    },

    propTypes: {
        items: React.PropTypes.array.isRequired
    }
});

export default ContactsList;

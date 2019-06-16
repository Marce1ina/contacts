import Contact from "./Contact";

const ContactsList = React.createClass({
    render: function() {
        const contacts = this.props.items.map(function(contact) {
            return React.createElement(Contact, { item: contact, key: contact.id });
        });

        return React.createElement("ul", { className: "contactsList" }, contacts);
    },

    propTypes: {
        items: React.PropTypes.array.isRequired
    }
});

export default ContactsList;

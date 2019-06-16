const Contact = React.createClass({
    render: function() {
        return React.createElement(
            "div",
            { className: "contactItem" },
            React.createElement("i", {
                className: "contactIcon far fa-address-card"
            }),
            React.createElement("p", { className: "contactLabel" }, "Imię: " + this.props.item.firstName),
            React.createElement("p", { className: "contactLabel" }, "Nazwisko: " + this.props.item.lastName),
            React.createElement(
                "a",
                { className: "contactEmail", href: "mailto:" + this.props.item.email },
                this.props.item.email
            )
        );
    },

    propTypes: {
        item: React.PropTypes.object.isRequired
    }
});

export default Contact;

import React from "react";

class AddContact extends React.Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
  };

  componentDidUpdate(prevProps) {
    if (
      this.props.editContact &&
      this.props.editContact !== prevProps.editContact
    ) {
      this.setState({ ...this.props.editContact });
    }
  }
  add = (e) => {
    e.preventDefault();
    if (this.state.firstname === "" || this.state.email === "") {
      alert("All fields are mandatory!");
      return;
    }

    const existingContact = this.props.contacts.find(
    (contact) => contact.email === this.state.email
  );

  if (existingContact && existingContact.id !== this.props.editContact?.id) {
    alert("Email ID already exists!");
    return;
  }

    this.props.addContactHandler(this.state);
    this.setState({ firstname: "", lastname: "", email: "" });
  };

  render() {
    return (
      <div className="ui main">
        <h2>{this.props.editContact ? "Edit Contact" : "Add Contact"}</h2>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              value={this.state.firstname}
              onChange={(e) => this.setState({ firstname: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              value={this.state.lastname}
              onChange={(e) => this.setState({ lastname: e.target.value })}
            />
          </div>
          <div className="field">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue" type="submit">
            {this.props.editContact ? "Update" : "Add"}
          </button>
        </form>
      </div>
    );
  }
}

export default AddContact;
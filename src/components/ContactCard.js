import React from "react";
import user from "../images/user.png";

const ContactCard = (props) => {
  const { id, firstname, lastname, email } = props.contact;
  return (
    <div className="item">
      <img className="ui avatar image" src={user} alt="user" />
      <div className="content">
        <div className="header">{firstname} {lastname}</div>
        <div>{email}</div>
      </div>
      <i
        className="trash alternate outline icon"
        style={{ color: "red", marginTop: "7px" }}
        onClick={() => props.clickHandler(id)}
      ></i>
      <i
        className="edit alternate outline icon"
        style={{ color: "blue", marginTop: "7px", marginLeft: "10px" }}
        onClick={() => props.editHandler(props.contact)}
      ></i>
    </div>
  );
};

export default ContactCard;
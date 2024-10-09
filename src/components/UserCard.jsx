import React from "react";
import "../components/UserCard.css";
import Ranjit from "../assets/Ranjit.jpg";

const UserCard = (props) => {
  return (
    <div className="user-container">
      <p id="user-name">{props.name}</p>
      <img id="user-img" src={Ranjit} alt="sahab" />
      <p id="user-disc">{props.description}</p>
    </div>
  );
};

export default UserCard;

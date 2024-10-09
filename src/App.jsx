import React from "react";
import "./App.css";
import UserCard from "./components/UserCard";
import Counter from "./components/Counter";
import Yaar from "./components/Yaar";

const App = () => {
  return (
    <>
      <div className="container">
        <UserCard
          name="Ranjeet_Yadav"
          description="Description of Ranjeet Yadav"
        />
        <UserCard
          name="Ayush Agrahari"
          description="Description of Ayush Agrahari"
        />
        <UserCard
          name="Abhay Mishra"
          description="Description of Abhay Mishra"
        />
        <Counter />
      </div>
      <div>
        <Yaar name="Hacker">
          <h1>Hello bachho</h1>
          <p>Kaise ho sare k sare</p>
          <span>i hope and belive achhe honge aap sb</span>
        </Yaar>
      </div>
    </>
  );
};

export default App;

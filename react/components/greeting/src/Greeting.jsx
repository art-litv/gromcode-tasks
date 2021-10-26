import React from "react";
import moment from "moment";

const getAge = (birthDate) => moment(new Date()).diff(birthDate, "years");

const Greeting = (props) => {
  const { firstName, lastName, birthDate } = props;
  const age = getAge(birthDate);
  return (
    <div className="greeting">
      My name is {firstName} {lastName}. I'm {age} years old
    </div>
  );
};

export default Greeting;

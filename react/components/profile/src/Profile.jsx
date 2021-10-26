import React from "react";
import moment from "moment";

const Profile = (props) => {
  const { firstName, lastName, birthDate, birthPlace } = props.userData;
  const formattedBirthDate = moment(birthDate).format("DD MMM YY");
  return (
    <div className="profile">
      <div className="profile__name">
        {firstName} {lastName}
      </div>
      <div className="profile__birth">
        Was born {formattedBirthDate} in {birthPlace}
      </div>
    </div>
  );
};

export default Profile;

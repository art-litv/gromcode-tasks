import React from "react";
import { connect } from "react-redux";

import Spinner from "../Spinner";

import { userDataSelector, isFetchingSelector } from "./users.selectors";

function UserInfo({ userData, isFetching }) {
  if (!userData) return null;
  return isFetching ? (
    <Spinner />
  ) : (
    <div className="user">
      <img
        alt="User Avatar"
        src={userData.avatar_url}
        className="user__avatar"
      />
      <div className="user__info">
        <span className="user__name">{userData.name}</span>
        <span className="user__location">{userData.location}</span>
      </div>
    </div>
  );
}

const mapState = (state) => ({
  userData: userDataSelector(state),
  isFetching: isFetchingSelector(state),
});

export default connect(mapState)(UserInfo);

import React from "react";
import { connect } from "react-redux";

import * as usersActions from "../users/users.actions";

const createUser = () => {
  const id = Math.round(Math.random() * 1000000);
  console.log(id);
  return {
    id,
    name: `User # ${id}`,
  };
};

const Users = ({ users, addUser, deleteUser }) => {
  return (
    <div className="users">
      <button
        className="users__create-btn"
        onClick={() => addUser(createUser())}
      >
        Create user
      </button>
      <ul className="users__list">
        {users.map((user) => (
          <li key={user.id} className="users__list-item">
            <span>{user.name}</span>
            <button
              className="users__delete-btn"
              onClick={() => deleteUser(user.id)}
            >
              +
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => ({ users: state.users.usersList });

const mapDispatch = {
  addUser: usersActions.addUser,
  deleteUser: usersActions.deleteUser,
};

export default connect(mapState, mapDispatch)(Users);

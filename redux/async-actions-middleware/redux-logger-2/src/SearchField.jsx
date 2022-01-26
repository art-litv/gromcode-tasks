import React, { useState } from "react";
import { connect } from "react-redux";

import * as usersActions from "./users/users.actions";

function SearchField({ fetchUsers }) {
  const [input, setInput] = useState("");
  return (
    <div className="name-form">
      <input
        type="text"
        className="name-form__input"
        onChange={({ target }) => setInput(target.value)}
      />
      <button className="name-form__btn btn" onClick={() => fetchUsers(input)}>
        Show
      </button>
    </div>
  );
}

const mapDispatch = {
  fetchUsers: usersActions.fetchUsers,
};

export default connect(null, mapDispatch)(SearchField);

import React from "react";
import { connect } from "react-redux";

import { filteredUsersSelector, filterTextSelector } from "./users.selectors";
import { setFilterText } from "./users.actions";

import Filter from "../Filter";
import User from "./User";

function UsersList({ filteredUsers, filterText, onFilterTextChange }) {
  return (
    <div>
      <Filter
        filterText={filterText}
        count={filteredUsers.length}
        onChange={onFilterTextChange}
      />
      <ul className="users">
        {filteredUsers.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
}

const mapState = (state) => ({
  filteredUsers: filteredUsersSelector(state),
  filterText: filterTextSelector(state),
});

const mapDispatch = {
  onFilterTextChange: setFilterText,
};

export default connect(mapState, mapDispatch)(UsersList);

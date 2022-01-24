import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import * as usersActions from "../users/users.actions";

import Pagination from "./Pagination";
import User from "./User";

const UsersList = ({ users, goPrev, goNext, currentPage }) => {
  const itemsPerPage = 3;
  const start = currentPage * itemsPerPage;
  const usersToDisplay = users.slice(start, start + itemsPerPage);

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {usersToDisplay.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => ({
  users: state.users.usersList,
  currentPage: state.users.currentPage,
});

const mapDispatch = {
  goPrev: usersActions.goPrev,
  goNext: usersActions.goNext,
};

export default connect(mapState, mapDispatch)(UsersList);

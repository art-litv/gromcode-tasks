import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import * as usersActions from "../users/users.actions";

import Pagination from "./Pagination";
import User from "./User";

function getPageUsers(array, page_size, page_number) {
  return array.slice(page_number * page_size, (page_number + 1) * page_size);
}

const UsersList = ({ users, goPrev, goNext, currentPage, perPage }) => {
  const [activeUsers, setActiveUsers] = useState([]);

  useEffect(() => {
    setActiveUsers(getPageUsers(users, perPage, currentPage));
  }, [currentPage]);

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={users.length}
        itemsPerPage={perPage}
      />
      <ul className="users">
        {activeUsers.map((user) => (
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

UsersList.defaultProps = {
  perPage: 3,
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

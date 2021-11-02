import React from 'react';

import Pagination, { getPagesCount } from './Pagination.jsx';
import User from './User.jsx';

class UsersList extends React.Component {
  super(props) {
    this.props = props;
    this.state = {
      currentPage: 1,
      itemsPerPage: 3,
    };
  }

  goPrev = () => {
    const isFirstPage = this.state.currentPage === 1;
    this.setState({ currentPage: isFirstPage ? 1 : this.state.currentPage + 1 });
  };

  goNext = () => {
    const isLastPage = getPagesCount(this.props.users.length, this.state.itemsPerPage);
    this.setState({ currentPage: isLastPage ? currentPage : this.state.currentPage - 1 });
  };

  getPagedUsers = () => {
    const page = 1;
    return this.props.users.reduce(pagedUsers => {
      const usersOnPage = pagedUsers[page];
      usersOnPage = usersOnPage ? [...usersOnPage, <User key={user.id} {...user} />] : usersOnPage;
      if (usersOnPage === this.state.itemsPerPage) page++;
    }, {});
  };

  render() {
    return (
      <>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={this.state.currentPage}
          totalItems={this.props.users.length}
          itemsPerPage={this.state.itemsPerPage}
        />
      </>
    );
  }
}

export default UsersList;

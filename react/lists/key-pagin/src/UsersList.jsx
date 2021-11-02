import React from 'react';

import Pagination, { getPagesCount } from './Pagination.jsx';
import User from './User.jsx';

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      itemsPerPage: 3,
    };
  }

  goPrev = () => {
    const isFirstPage = this.state.currentPage === 1;
    this.setState({ currentPage: isFirstPage ? 1 : this.state.currentPage - 1 });
  };

  goNext = () => {
    const totalPages = getPagesCount(this.props.users.length, this.state.itemsPerPage);
    const isLastPage = totalPages === this.state.currentPage;

    this.setState({
      currentPage: isLastPage ? this.state.currentPage : this.state.currentPage + 1,
    });
  };

  getPagedUsers = () => {
    let page = 1;
    return this.props.users.reduce((pagedUsers, user) => {
      const userElement = <User key={user.id} {...user} />;
      pagedUsers[page] = pagedUsers[page] ? [...pagedUsers[page], userElement] : [userElement];

      if (pagedUsers[page].length === this.state.itemsPerPage) page++;
      return pagedUsers;
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
        {this.getPagedUsers()[this.state.currentPage]}
      </>
    );
  }
}

export default UsersList;

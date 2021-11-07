import React from 'react';

export default class Expand extends React.Component {
  state = {
    isExpanded: false,
  };

  switchExpended = () => {
    this.setState(({ isExpanded }) => ({ isExpanded: !isExpanded }));
  };

  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button className="expand__toggle-btn" onClick={this.switchExpended}>
            {this.state.isExpanded ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </button>
        </div>
        <div className="expand__content">{this.state.isExpanded && this.props.children}</div>
      </div>
    );
  }
}

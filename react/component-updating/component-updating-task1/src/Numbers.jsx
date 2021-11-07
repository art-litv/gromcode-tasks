import React from 'react';
import PropTypes from 'prop-types';

export default class Numbers extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { title, number } = this.props;
    return (
      <div className="number">
        <span className="number__title">{title}</span>
        <span className="number__value">{number}</span>
      </div>
    );
  }
}

Numbers.propTypes = {
  title: PropTypes.string,
  number: PropTypes.number.isRequired,
};

Numbers.defaultProps = {
  title: 'Numbers',
};

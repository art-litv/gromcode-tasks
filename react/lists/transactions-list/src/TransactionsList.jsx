import React from 'react';

import Transaction from './Transaction.jsx';

const TransactionsList = ({ transactions }) => {
  return (
    <ul className="transactions">
      {transactions.map(({ id, ...rest }) => (
        <Transaction key={id} {...rest} />
      ))}
    </ul>
  );
};

export default TransactionsList;

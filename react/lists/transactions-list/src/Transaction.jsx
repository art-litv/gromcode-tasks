import React from 'react';

import moment from 'moment';

const Transaction = ({ from, to, amount, rate, time }) => {
  const momentTime = moment(time);
  return (
    <li className="transaction">
      <span className="transaction__date">{momentTime.format('DD MMM')}</span>
      <span className="transaction__time">{momentTime.format('HH:mm')}</span>
      <span className="transaction__assets">
        {from} → {to}
      </span>
      <span className="transaction__rate">{rate}</span>
      <span className="transaction__amount">{new Intl.NumberFormat('en-GB').format(amount)}</span>
    </li>
  );
};

export default Transaction;

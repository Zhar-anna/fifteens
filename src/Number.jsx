import React from 'react';

const number = (num) => (
  <td id={num} key={num} className="p-3">{num}</td>
);

export default number;

import React from 'react';
import _ from 'lodash';
import App from './App.jsx';

export default async () => {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const shuffle = _.shuffle(values);
  return (
    <App>{shuffle}</App>
  );
};

'use strict';
const jwt = require('jsonwebtoken');

module.exports.main = async (event) => {
  const token = jwt.sign({ foo: 'bar' }, 'shhhhh');
  console.log(`Token: ${token}...`);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from function C!", token }),
  };
};
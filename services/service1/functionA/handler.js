'use strict';
const uuid = require('uuid');

module.exports.main = async (event) => {
  const _uuid = uuid.v4();
  console.log(`Request ID: ${_uuid}`);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello from function A! - _uuid: ${_uuid}` }),
  };
};
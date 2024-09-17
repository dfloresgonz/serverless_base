'use strict';

const datefns = require('date-fns');
const axios = require('axios');

module.exports.main = async (event) => {
  const fecha = datefns.format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  console.log(`Fecha: ${fecha}...`);
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
  console.log(`Response: ${JSON.stringify(response.data)}...`);
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello from function B!", fecha }),
  };
};
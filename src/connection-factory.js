'use strict';
const mongoose = require('mongoose');
const config = require('config');

exports.dbConnectionFactory = function dbConnectionFactory(server) {
  mongoose.Promise = Promise;
  
  return new Promise((resolve, reject) => {
    let conn = mongoose.createConnection(server.req.webtaskContext.secrets.MONGO_URL);
    conn.once('connected', () => resolve(conn));
    conn.once('error', err => reject(err));
  });
};

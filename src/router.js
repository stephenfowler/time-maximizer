'use strict';
const {
  mediaItemBrowseHandler,
  mediaItemPutHandler
} = require('./handlers/media-item');

exports.initRoutes = function initRoutes(server) {
  server.get('/mediaItem',       mediaItemBrowseHandler);
  server.put('/mediaItem/:id',   mediaItemPutHandler);

  return server;
};

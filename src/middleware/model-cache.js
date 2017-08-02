'use strict';
const { mediaItemModelFactory } = require('../model/media-item');

exports.modelCache = function modelCache(server, conn) {
  let MediaItem;

  server.models = {
    get MediaItem() {
      if (!MediaItem) {
        MediaItem = mediaItemModelFactory(conn);
      }
      return MediaItem;
    },
  };

  return server;
};

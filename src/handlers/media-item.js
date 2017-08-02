'use strict';
const { mediaItemValidatorFactory } = require('../validators/media-item');

exports.mediaItemBrowseHandler = function mediaItemBrowseHandler(req, res, next) {
  this.models.MediaItem.find({ time: req.time })
    .then(res.json.bind(res))
    .then(next)
    .catch(next);
};

exports.mediaItemPutHandler = function mediaItemPutHandler(req, res, next) {
  let MediaItem = this.models.MediaItem;
  mediaItemValidatorFactory(req)
    .then(model => MediaItem.findOneAndUpdate(
      { link: req.params.link, consumeTime: req.params.consumeTime },
      { upsert: true }))
    .then(() => res.send(201))
    .then(next)
    .catch(next);
};

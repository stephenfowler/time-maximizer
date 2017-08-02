'use strict';
const { Schema }       = require('mongoose');
const { modelFactory } = require('./model-factory');

const mediaItemSchema = new Schema({
  link: {
    type: String,
    required: true
  },
  consumeTime: {
    type: Number,
    required: true
  }
});

exports.mediaItemModelFactory = function mediaItemModelFactory(db) {
  return modelFactory(db, mediaItemSchema, 'MediaItem');
};

'use strict';
const { validatorFactory } = require('./validator-factory');
const Joi                  = require('joi');

const schema = Joi.object().keys({
  value: Joi.string()
});

exports.mediaItemValidatorFactory = function mediaItemValidatorFactory(req) {
  return validatorFactory(schema, req.body);
};

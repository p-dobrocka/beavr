'use strict';

var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.respond = respond;
exports.convertAndRespond = convertAndRespond;

var _logfilename = require('logfilename');

var _logfilename2 = _interopRequireDefault(_logfilename);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var log = new _logfilename2['default'](__filename);

function respond(context, me, callback, args) {
  var statusCode = arguments.length <= 4 || arguments[4] === undefined ? 200 : arguments[4];

  log.debug("respond ");
  //apply used to pass args to the callback
  return callback.apply(me, args).then(function (result) {
    log.debug("respond ok");
    context.status = statusCode;
    context.body = result;
  })['catch'](function (error) {
    convertAndRespond(context, error);
  });
}

function convertAndRespond(context, error) {
  if (!error.name) {
    log.error('UnknownError', error);
    context.code = 500;
    context.body = {
      name: 'UnknownError'
    };
  } else {
    log.warn('error name', error);
    var code = _lodash2['default'].isNumber(error.code) ? error.code : 400;
    context.status = code;
    context.body = error;
  }
}
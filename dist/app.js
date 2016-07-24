'use strict';

var _config = require('./conf/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = _config2.default.get('port');

_config2.default.listen(PORT, function () {
  console.log('Express server listening on port ' + _config2.default.get('port'));
});
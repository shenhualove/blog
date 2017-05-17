define('src/js/reducers/admin/index', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _redux = require('node_modules/redux/lib/index');
  
  // 利用combineReducers 合并reducers
  
  var _reactRouterRedux = require('node_modules/react-router-redux/lib/index');
  
  // 将routerReducer一起合并管理
  
  var _login = require('src/js/reducers/admin/login');
  
  var _login2 = _interopRequireDefault(_login);
  
  var _rolesAdd = require('src/js/reducers/admin/roles/add');
  
  var _rolesAdd2 = _interopRequireDefault(_rolesAdd);
  
  var _rolesRoles = require('src/js/reducers/admin/roles/roles');
  
  var _rolesRoles2 = _interopRequireDefault(_rolesRoles);
  
  var _top = require('src/js/reducers/admin/top');
  
  var _top2 = _interopRequireDefault(_top);
  
  var _user = require('src/js/reducers/admin/user');
  
  var _user2 = _interopRequireDefault(_user);
  
  var _dialog = require('src/js/reducers/admin/dialog');
  
  var _dialog2 = _interopRequireDefault(_dialog);
  
  var _columnList = require('src/js/reducers/admin/column/list');
  
  var _columnList2 = _interopRequireDefault(_columnList);
  
  var _articleList = require('src/js/reducers/admin/article/list');
  
  var _articleList2 = _interopRequireDefault(_articleList);
  
  var admin = (0, _redux.combineReducers)({
      login: _login2['default'],
      top: _top2['default'],
      addRole: _rolesAdd2['default'],
      user: _user2['default'],
      roles: _rolesRoles2['default'],
      dialog: _dialog2['default'],
      columnList: _columnList2['default'],
      articleList: _articleList2['default'],
      routing: _reactRouterRedux.routerReducer
  });
  
  exports['default'] = admin;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/index.js.map
  

});

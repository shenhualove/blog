define('src/js/components/admin/common/menu', function(require, exports, module) {

  /**
   * Created by apple on 17/5/16.
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRouter = require('node_modules/react-router/lib/index');
  
  var Menu = (function (_React$Component) {
      _inherits(Menu, _React$Component);
  
      function Menu() {
          _classCallCheck(this, Menu);
  
          _get(Object.getPrototypeOf(Menu.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(Menu, [{
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'ul',
                  { className: 'top-menu' },
                  _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                          'a',
                          { href: '#' },
                          '栏目管理'
                      ),
                      _react2['default'].createElement(
                          'ul',
                          null,
                          _react2['default'].createElement(
                              'li',
                              null,
                              _react2['default'].createElement(
                                  _reactRouter.Link,
                                  { to: '/column/list' },
                                  '栏目列表'
                              )
                          ),
                          _react2['default'].createElement(
                              'li',
                              null,
                              _react2['default'].createElement(
                                  _reactRouter.Link,
                                  { to: '/column/add' },
                                  '栏目添加'
                              )
                          )
                      )
                  ),
                  _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                          'a',
                          { href: '#' },
                          '文章管理'
                      ),
                      _react2['default'].createElement(
                          'ul',
                          null,
                          _react2['default'].createElement(
                              'li',
                              null,
                              _react2['default'].createElement(
                                  _reactRouter.Link,
                                  { to: '/article/list' },
                                  '文章列表'
                              )
                          ),
                          _react2['default'].createElement(
                              'li',
                              null,
                              _react2['default'].createElement(
                                  _reactRouter.Link,
                                  { to: '/article/add' },
                                  '文章添加'
                              )
                          )
                      )
                  ),
                  _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                          'a',
                          { href: '#' },
                          '链接管理'
                      ),
                      _react2['default'].createElement(
                          'ul',
                          null,
                          _react2['default'].createElement(
                              'li',
                              null,
                              _react2['default'].createElement(
                                  _reactRouter.Link,
                                  { to: '/link/list' },
                                  '链接列表'
                              )
                          ),
                          _react2['default'].createElement(
                              'li',
                              null,
                              _react2['default'].createElement(
                                  _reactRouter.Link,
                                  { to: '/link/add' },
                                  '链接添加'
                              )
                          )
                      )
                  )
              );
          }
      }]);
  
      return Menu;
  })(_react2['default'].Component);
  
  exports['default'] = Menu;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/common/menu.js.map
  

});

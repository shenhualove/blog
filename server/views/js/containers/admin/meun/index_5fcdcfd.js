define('src/js/containers/admin/meun/index', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/3/31.
   *
   * 顶部菜单 接受PROPS参数 ，遍历出多级菜单
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
          key: 'getList',
          value: function getList(data) {
              var menuName = {
                  ReportForm: { title: "数据报表", type: "ReportForm" },
                  HelpLoan: { title: "助贷", type: "HelpLoan" },
                  //Customer:{title:"400 客服",type:"Customer"},
                  System: { title: "系统管理", type: "System" },
                  Photovoltaic: { title: '光伏', type: 'Photovoltaic' }
              };
              var menuList = [];
              for (var key in menuName) {
                  //循环一级菜单
                  if (data[key] && data[key].menus.length > 0) {
                      //循环二级菜单
                      var listArray = [];
                      listArray = this.mapChildren(data[key].menus, key);
                      menuList.push(_react2['default'].createElement(
                          'li',
                          { className: key, key: key },
                          _react2['default'].createElement(
                              'a',
                              { href: '#' },
                              menuName[key].title
                          ),
                          _react2['default'].createElement(
                              'ul',
                              null,
                              listArray
                          )
                      ));
                  }
              }
              return menuList;
          }
  
          //递归循环子菜单
      }, {
          key: 'mapChildren',
          value: function mapChildren(arr, url) {
              var childrenArray = [];
              for (var i = 0; i < arr.length; i++) {
                  if (arr[i].children && arr[i].children.length > 0) {
                      childrenArray.push(_react2['default'].createElement(
                          'li',
                          { key: i },
                          _react2['default'].createElement(
                              'a',
                              { href: '#' },
                              arr[i].name
                          ),
                          _react2['default'].createElement(
                              'ul',
                              null,
                              this.mapChildren(arr[i].children, url + '/' + arr[i].routerStr)
                          )
                      ));
                  } else {
                      childrenArray.push(_react2['default'].createElement(
                          'li',
                          { key: i },
                          _react2['default'].createElement(
                              _reactRouter.Link,
                              { to: "/" + url + "/" + arr[i].routerStr },
                              arr[i].name
                          )
                      ));
                  }
              }
              return childrenArray;
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'ul',
                  { className: 'top-menu' },
                  _react2['default'].createElement(
                      'li',
                      null,
                      _react2['default'].createElement(
                          _reactRouter.Link,
                          { to: '/' },
                          '首页'
                      )
                  ),
                  this.getList(this.props.list)
              );
          }
      }]);
  
      return Menu;
  })(_react2['default'].Component);
  
  exports['default'] = Menu;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/containers/admin/meun/index.js.map
  

});

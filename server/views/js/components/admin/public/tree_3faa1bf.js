define('src/js/components/admin/public/tree', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/7.
   *
   * 菜单树形结构生成
   *
   * 传入数据格式
   * {
       id:"System",//栏目ID
       name:"系统管理",//栏目名称
       pid:"0",//父栏目
       open:true/false,//是否展开
       checked:true/false,//是否勾选
       children:[] //子菜单
   * }
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
  
  var CreatTree = (function (_React$Component) {
      _inherits(CreatTree, _React$Component);
  
      function CreatTree() {
          _classCallCheck(this, CreatTree);
  
          _get(Object.getPrototypeOf(CreatTree.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(CreatTree, [{
          key: 'showList',
          value: function showList(data) {
              if (data.length > 0) {
                  var html = [];
                  for (var i = 0; i < data.length; i++) {
                      if (i == data.length - 1) {
                          html.push(_react2['default'].createElement(
                              'li',
                              { key: i, className: data[i].open ? 'bottom_open li_last' : 'bottom_close li_last' },
                              _react2['default'].createElement('span', { onClick: this.props.showCall.bind(this, data[i].id, data[i].open, data), className: data[i].open ? 'bottom_open' : 'bottom_close' }),
                              _react2['default'].createElement('span', { onClick: this.props.checkShow.bind(this, data[i].id, true, data), className: data[i].checked ? data[i].middleCheck ? 'checkbox_middle_full' : 'checkbox_true_full' : 'checkbox_false_full' }),
                              _react2['default'].createElement(
                                  'a',
                                  { className: "parent " + this.judgeIcon(data[i].icon), href: '#' },
                                  data[i].name
                              ),
                              _react2['default'].createElement(
                                  'ul',
                                  null,
                                  data[i].children && this.getChildrenList(data[i].children, data)
                              )
                          ));
                      } else {
                          html.push(_react2['default'].createElement(
                              'li',
                              { key: i, className: data[i].open ? 'bottom_open' : 'bottom_close' },
                              _react2['default'].createElement('span', { onClick: this.props.showCall.bind(this, data[i].id, data[i].open, data), className: data[i].open ? 'bottom_open' : 'bottom_close' }),
                              _react2['default'].createElement('span', { onClick: this.props.checkShow.bind(this, data[i].id, true, data), className: data[i].checked ? data[i].middleCheck ? 'checkbox_middle_full' : 'checkbox_true_full' : 'checkbox_false_full' }),
                              _react2['default'].createElement(
                                  'a',
                                  { className: "parent " + this.judgeIcon(data[i].icon), href: '#' },
                                  data[i].name
                              ),
                              _react2['default'].createElement(
                                  'ul',
                                  { className: 'line' },
                                  data[i].children && this.getChildrenList(data[i].children, data)
                              )
                          ));
                      }
                  }
                  return html;
              }
          }
      }, {
          key: 'judgeIcon',
          value: function judgeIcon(type) {
              var className = "";
              switch (type) {
                  case "M":
                      //页面
                      className = "page";
                      break;
                  case "N":
                      //节点
                      className = "show";
                      break;
                  case "O":
                      //操作
                      className = "no-children";
                      break;
              }
              return className;
          }
  
          //递归渲染树形结构
      }, {
          key: 'getChildrenList',
          value: function getChildrenList(data, configData) {
              for (var i = 0; i < data.length; i++) {
                  var html = [];
                  for (var _i = 0; _i < data.length; _i++) {
                      if (data[_i].children.length > 0) {
                          if (_i == data.length - 1) {
                              html.push(_react2['default'].createElement(
                                  'li',
                                  { key: _i, className: data[_i].open ? 'bottom_open li_child_last' : 'bottom_close li_child_last' },
                                  _react2['default'].createElement('span', { onClick: this.props.showCall.bind(this, data[_i].id, data[_i].open, configData), className: data[_i].open ? 'bottom_open' : 'bottom_close' }),
                                  _react2['default'].createElement('span', { onClick: this.props.checkShow.bind(this, data[_i].id, true, configData), className: data[_i].checked ? data[_i].middleCheck ? 'checkbox_middle_full' : 'checkbox_true_full' : 'checkbox_false_full' }),
                                  _react2['default'].createElement(
                                      'a',
                                      { className: "parent " + this.judgeIcon(data[_i].icon), href: '#' },
                                      data[_i].name
                                  ),
                                  _react2['default'].createElement(
                                      'ul',
                                      { className: 'line clearfix' },
                                      this.getChildrenList(data[_i].children, configData)
                                  )
                              ));
                          } else {
                              html.push(_react2['default'].createElement(
                                  'li',
                                  { key: _i, className: data[_i].open ? 'bottom_open' : 'bottom_close' },
                                  _react2['default'].createElement('span', { onClick: this.props.showCall.bind(this, data[_i].id, data[_i].open, configData), className: data[_i].open ? 'bottom_open' : 'bottom_close' }),
                                  _react2['default'].createElement('span', { onClick: this.props.checkShow.bind(this, data[_i].id, true, configData), className: data[_i].checked ? data[_i].middleCheck ? 'checkbox_middle_full' : 'checkbox_true_full' : 'checkbox_false_full' }),
                                  _react2['default'].createElement(
                                      'a',
                                      { className: "parent " + this.judgeIcon(data[_i].icon), href: '#' },
                                      data[_i].name
                                  ),
                                  _react2['default'].createElement(
                                      'ul',
                                      { className: 'line clearfix' },
                                      this.getChildrenList(data[_i].children, configData)
                                  )
                              ));
                          }
                      } else {
                          if (_i == data.length - 1) {
                              html.push(_react2['default'].createElement(
                                  'li',
                                  { className: 'no-childrem-last', key: _i },
                                  _react2['default'].createElement('span', { className: 'center_docu' }),
                                  _react2['default'].createElement('span', { onClick: this.props.checkShow.bind(this, data[_i].id, false, configData), className: data[_i].checked ? 'checkbox_true_full' : 'checkbox_false_full' }),
                                  _react2['default'].createElement(
                                      'a',
                                      { className: this.judgeIcon(data[_i].icon), href: '#' },
                                      data[_i].name
                                  )
                              ));
                          } else {
                              html.push(_react2['default'].createElement(
                                  'li',
                                  { key: _i },
                                  _react2['default'].createElement('span', { className: 'center_docu' }),
                                  _react2['default'].createElement('span', { onClick: this.props.checkShow.bind(this, data[_i].id, false, configData), className: data[_i].checked ? 'checkbox_true_full' : 'checkbox_false_full' }),
                                  _react2['default'].createElement(
                                      'a',
                                      { className: this.judgeIcon(data[_i].icon), href: '#' },
                                      data[_i].name
                                  )
                              ));
                          }
                      }
                  }
                  return html;
              }
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'ul',
                  { className: 'creat-tree' },
                  this.showList(this.props.treeData)
              );
          }
      }]);
  
      return CreatTree;
  })(_react2['default'].Component);
  
  exports['default'] = CreatTree;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/public/tree.js.map
  

});

define('src/js/components/admin/user/selectPeople', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/17.
   *
   * 用户分配角色页面的选择角色功能
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
  
  var SelectPeople = (function (_React$Component) {
      _inherits(SelectPeople, _React$Component);
  
      function SelectPeople(props) {
          _classCallCheck(this, SelectPeople);
  
          _get(Object.getPrototypeOf(SelectPeople.prototype), 'constructor', this).call(this, props);
          console.log('shows');
          console.log(this.props);
          this.state = {
              show: false,
              roleOldList: this.props.roleOldList,
              bList: this.props.oldList
          };
      }
  
      //判断是否在数组里
  
      _createClass(SelectPeople, [{
          key: 'inArray',
          value: function inArray(val) {
              var userRoleList = this.state.bList;
              var flag = false;
              for (var i = 0; i < userRoleList.length; i++) {
                  if (userRoleList[i].roleCode == val.roleCode) {
                      flag = true;
                      return flag;
                  }
              }
              return flag;
          }
  
          //取消人员选择
      }, {
          key: 'cancelSelect',
          value: function cancelSelect(id, e) {
              var _this = this;
  
              e.nativeEvent.stopImmediatePropagation();
              var listArray = this.state.bList;
              for (var i = 0; i < listArray.length; i++) {
                  if (listArray[i].roleCode == id) {
                      listArray.splice(i, 1);
                  }
              }
  
              this.setState({
                  bList: listArray
              }, function () {
                  _this.props.selectCallBack(listArray);
              });
          }
  
          //选择人员列表点击事件
      }, {
          key: 'selectPeople',
          value: function selectPeople(id, name, e) {
  
              e.nativeEvent.stopImmediatePropagation();
              var mList = this.state.bList;
              var roleName = name,
                  roleCode = id;
              if (roleName == "请选择") {
                  return false;
              } else {
                  if (this.inArray({ roleCode: roleCode, roleName: roleName })) {//数组里存在
                  } else {
                          this.setState({
                              bList: mList.concat({ roleCode: roleCode, roleName: roleName })
                          });
                          //回调函数触发修改外面的PROPS
                          this.props.selectCallBack(mList.concat({ roleCode: roleCode, roleName: roleName }));
                      }
              }
          }
  
          //显示人员列表
      }, {
          key: 'show',
          value: function show(e) {
              e.nativeEvent.stopImmediatePropagation();
              this.setState({ show: true });
          }
  
          //返回列表数据
      }, {
          key: 'showList',
          value: function showList() {
  
              var optionHtml = []; //<li class="l-item" data-id="请选择">请选择</li>
              var roleOldList = this.state.roleOldList;
              var bList = this.state.bList;
              for (var j = 0; j < roleOldList.length; j++) {
                  var choose = false;
                  for (var k = 0; k < bList.length; k++) {
                      if (roleOldList[j].value == bList[k].roleCode) {
                          choose = true;
                      }
                  }
                  if (roleOldList[j].name == "超级管理员" || roleOldList[j].name == "普通用户") {} else {
  
                      if (choose) {
                          optionHtml.push(_react2['default'].createElement(
                              'li',
                              { key: roleOldList[j].value, className: 'l-item choose', onClick: this.selectPeople.bind(this, roleOldList[j].value, roleOldList[j].name) },
                              roleOldList[j].name
                          ));
                      } else {
                          optionHtml.push(_react2['default'].createElement(
                              'li',
                              { key: roleOldList[j].value, className: 'l-item', onClick: this.selectPeople.bind(this, roleOldList[j].value, roleOldList[j].name) },
                              roleOldList[j].name
                          ));
                      }
                  }
              }
              return optionHtml;
          }
  
          //显示插入人员列表
      }, {
          key: 'getInsertList',
          value: function getInsertList() {
              var _this2 = this;
  
              var innerHtml = [];
              if (this.state.bList.length > 0) {
                  this.state.bList.map(function (item, i) {
                      if (item.roleName == "超级管理员" || item.roleName == "普通用户") {} else {
                          innerHtml.push(_react2['default'].createElement(
                              'div',
                              { key: i, className: 'item' },
                              _react2['default'].createElement(
                                  'span',
                                  null,
                                  item.roleName
                              ),
                              _react2['default'].createElement(
                                  'span',
                                  { onClick: _this2.cancelSelect.bind(_this2, item.roleCode), className: 'cancel' },
                                  'X'
                              )
                          ));
                      }
                  });
                  return innerHtml;
              } else {
                  return '请选择';
              }
          }
  
          //隐藏列表
      }, {
          key: 'hide',
          value: function hide() {
  
              this.setState({
                  show: false
              });
          }
      }, {
          key: 'componentDidMount',
          value: function componentDidMount() {
              document.onclick = this.hide.bind(this);
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'a-c' },
                  _react2['default'].createElement(
                      'div',
                      { className: 'a-left' },
                      _react2['default'].createElement(
                          'span',
                          null,
                          '请选择角色类型：'
                      )
                  ),
                  _react2['default'].createElement(
                      'div',
                      { className: 'a-box', onClick: this.show.bind(this) },
                      _react2['default'].createElement(
                          'div',
                          { className: 'box' },
                          this.getInsertList()
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'a-s-box', style: { display: this.state.show ? 'block' : 'none' } },
                          _react2['default'].createElement(
                              'ul',
                              { className: 'list' },
                              this.showList()
                          )
                      )
                  )
              );
          }
      }]);
  
      return SelectPeople;
  })(_react2['default'].Component);
  
  exports['default'] = SelectPeople;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/user/selectPeople.js.map
  

});

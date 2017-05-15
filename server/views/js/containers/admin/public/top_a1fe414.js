define('src/js/containers/admin/public/top', function(require, exports, module) {

  /**
   * Created by zhangminglei on 2017/3/8.
   *
   * 顶部组件
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
  
  var _reactRedux = require('node_modules/react-redux/lib/index');
  
  var _reactRouter = require('node_modules/react-router/lib/index');
  
  var _actionsAdminTop = require('src/js/actions/admin/top');
  
  var _actionsAdminDialog = require('src/js/actions/admin/dialog');
  
  var _meunIndex = require('src/js/containers/admin/meun/index');
  
  var _meunIndex2 = _interopRequireDefault(_meunIndex);
  
  var Top = (function (_React$Component) {
      _inherits(Top, _React$Component);
  
      function Top() {
          _classCallCheck(this, Top);
  
          _get(Object.getPrototypeOf(Top.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(Top, [{
          key: 'editPassword',
  
          //修改密码
          value: function editPassword() {
  
              var html = [];
              html.push(_react2['default'].createElement(
                  'p',
                  { className: 'ptb15 text-c', key: 'oldPsd' },
                  _react2['default'].createElement('input', { id: 'oldPsd', type: 'password', maxLength: '32', placeholder: '请输入旧密码' })
              ));
              html.push(_react2['default'].createElement(
                  'p',
                  { className: 'ptb15 text-c', key: 'newPsd' },
                  _react2['default'].createElement('input', { id: 'newPsd', type: 'password', maxLength: '32', placeholder: '请输入新密码' })
              ));
              html.push(_react2['default'].createElement(
                  'p',
                  { className: 'ptb15 text-c', key: 'confirmPsd' },
                  _react2['default'].createElement('input', { id: 'confirmPsd', type: 'password', maxLength: '32', placeholder: '请再次输入新的密码' })
              ));
              html.push(_react2['default'].createElement('p', { key: 'editPassword-error', className: 'editPassword-error' }));
              this.props._dialogHandle({
                  show: true,
                  type: "confirm",
                  width: '400px',
                  height: '400px',
                  failBtn: false,
                  content: html,
                  title: '修改密码',
                  success: (function () {
                      var oldPsd = $("#oldPsd").val();
                      var newPsd = $("#newPsd").val();
                      var confirmPsd = $("#confirmPsd").val();
  
                      var oldPasswCheck = $.XlCheck({
                          val: oldPsd,
                          len: "6,32",
                          rule: ["Empty", "NumberAndEng", "Length"]
                      });
                      //校验密码格式
                      if (!oldPasswCheck.result) {
                          if (!oldPasswCheck.Empty) {
                              $(".editPassword-error").html("<span></span>原密码不能为空");
                              return false;
                          }
                          if (!oldPasswCheck.NumberAndEng) {
                              $(".editPassword-error").html("<span></span>请输入6-32位数字、字母格式的密码");
                              return false;
                          }
                          if (!oldPasswCheck.Length) {
                              $(".editPassword-error").html("<span></span>请输入6-32位数字、字母格式的密码");
                              return false;
                          }
                      }
  
                      var newPasswCheck = $.XlCheck({
                          val: newPsd,
                          len: "6,32",
                          rule: ["Empty", "NumberAndEng", "Length"]
                      });
                      //校验密码格式
                      if (!newPasswCheck.result) {
                          if (!newPasswCheck.Empty) {
                              $(".editPassword-error").html("<span></span>新密码不能为空");
                              return false;
                          }
                          if (!newPasswCheck.NumberAndEng) {
                              $(".editPassword-error").html("<span></span>请输入6-32位数字、字母格式的密码");
                              return false;
                          }
                          if (!newPasswCheck.Length) {
                              $(".editPassword-error").html("<span></span>请输入6-32位数字、字母格式的密码");
                              return false;
                          }
                      }
  
                      var confirmPasswCheck = $.XlCheck({
                          val: confirmPsd,
                          len: "6,32",
                          rule: ["Empty", "NumberAndEng", "Length"]
                      });
                      //校验密码格式
                      if (!confirmPasswCheck.result) {
                          if (!confirmPasswCheck.Empty) {
                              $(".editPassword-error").html("<span></span>请再次输入新的密码不能为空");
                              return false;
                          }
                          if (!confirmPasswCheck.NumberAndEng) {
                              $(".editPassword-error").html("<span></span>请输入6-32位数字、字母格式的密码");
                              return false;
                          }
                          if (!confirmPasswCheck.Length) {
                              $(".editPassword-error").html("<span></span>请输入6-32位数字、字母格式的密码");
                              return false;
                          }
                      }
  
                      if (newPsd != confirmPsd) {
                          $(".editPassword-error").html("<span></span>两次密码输入不一致");
                          return false;
                      }
  
                      this.props._setPassWord({
                          callBack: function callBack() {
                              _reactRouter.browserHistory.push('/');
                          },
                          errMesg: function errMesg() {
                              $(".editPassword-error").html("<span></span>原始密码不正确,请重新输入");
                          }
                      });
                  }).bind(this)
              });
          }
  
          //退出登录
      }, {
          key: 'signOut',
          value: function signOut() {
              this.props._logOut();
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'top-content clearfix' },
                  _react2['default'].createElement('span', { className: 'left-icon' }),
                  _react2['default'].createElement(_meunIndex2['default'], { list: this.props.login.Jurisdiction }),
                  _react2['default'].createElement(
                      'div',
                      { className: 'right clearfix' },
                      _react2['default'].createElement('span', { className: 'user-icon' }),
                      _react2['default'].createElement(
                          'span',
                          { className: 'user-name' },
                          this.props.login.account.trueName
                      ),
                      _react2['default'].createElement('span', { className: 'right-down' }),
                      _react2['default'].createElement(
                          'div',
                          { className: 'user-select' },
                          _react2['default'].createElement(
                              'ul',
                              null,
                              _react2['default'].createElement(
                                  'li',
                                  { onClick: this.editPassword.bind(this) },
                                  '修改密码'
                              ),
                              _react2['default'].createElement(
                                  'li',
                                  { onClick: this.signOut.bind(this) },
                                  '退出系统'
                              )
                          )
                      )
                  )
              );
          }
      }]);
  
      return Top;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      return state;
  }
  
  function mapDispatchToProps(dispatch) {
      return {
          _topHandle: function _topHandle(options) {
              dispatch((0, _actionsAdminTop.topHandle)(options));
          },
          _logOut: function _logOut(options) {
              dispatch((0, _actionsAdminTop.logOut)(options));
          },
          _setPassWord: function _setPassWord(options) {
              dispatch((0, _actionsAdminTop.setPassWord)(options));
          },
          _dialogHandle: function _dialogHandle(options) {
              dispatch((0, _actionsAdminDialog.dialogHandle)(options));
          }
      };
  }
  
  var TopMenu = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Top);
  
  exports['default'] = TopMenu;
  module.exports = exports['default'];
  /*用户下拉框*/
  //# sourceMappingURL=/js/containers/admin/public/top.js.map
  

});

define('src/js/containers/admin/login/index', function(require, exports, module) {

  /**
   * Created by apple on 17/3/29.
   *
   * 登录页面
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
  
  var _actionsAdmin = require('src/js/actions/admin/index');
  
  var LoginMain = (function (_React$Component) {
      _inherits(LoginMain, _React$Component);
  
      function LoginMain() {
          _classCallCheck(this, LoginMain);
  
          _get(Object.getPrototypeOf(LoginMain.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(LoginMain, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
              sessionStorage.clear(); //防止退出时候，残留SESSINO没清空
          }
  
          //直接登录点击
      }, {
          key: 'showLogin',
          value: function showLogin() {
              this.props._loginHandle({
                  currentState: "login",
                  status: 1,
                  errorShow: false, //是否展示错误信息
                  errorMsg: "" //错误信息
              });
          }
  
          //用户名文本框改变事件
      }, {
          key: 'userNameChange',
          value: function userNameChange(event) {
              this.props._loginHandle({
                  userName: event.target.value
              });
          }
  
          //登录密码文本框改变事件
      }, {
          key: 'passWordChange',
          value: function passWordChange(event) {
              this.props._loginHandle({
                  passWord: event.target.value
              });
          }
  
          //登录按钮 点击事件
      }, {
          key: 'loginBtn',
          value: function loginBtn() {
              if (!this.props.login.loginHash) {
                  return false;
              }
  
              this.props._loginHandle({
                  errorMsg: "",
                  errorShow: false,
                  loginHash: false
              });
  
              var userName = this.props.login.userName;
              var passWord = this.props.login.passWord;
  
              //校验用户名
              if (!userName) {
                  this.props._loginHandle({
                      errorMsg: "请输入帐号",
                      errorShow: true,
                      loginHash: true
                  });
                  return false;
              } else {
                  this.props._loginHandle({
                      errorMsg: "",
                      errorShow: false,
                      loginHash: true
                  });
              }
  
              //校验密码
              if (!passWord) {
                  this.props._loginHandle({
                      errorMsg: "请输入密码",
                      errorShow: true
                  });
                  return false;
              }
  
              this.props._accountLogin({
                  userName: this.props.login.userName,
                  passWord: this.props.login.passWord
              });
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'login-content' },
                  _react2['default'].createElement(
                      'div',
                      { className: 'form-content' },
                      _react2['default'].createElement('div', { className: 'login-title' }),
                      _react2['default'].createElement(
                          'div',
                          { className: 'login', id: 'loginBtn' },
                          _react2['default'].createElement('input', { className: 'user-name', type: 'text', value: this.props.login.userName, onChange: this.userNameChange.bind(this), placeholder: '请输入帐号' }),
                          _react2['default'].createElement('input', { className: 'pass-word', type: 'password', maxLength: '32', value: this.props.login.passWord, onChange: this.passWordChange.bind(this), placeholder: '请输入密码' }),
                          _react2['default'].createElement(
                              'div',
                              { className: 'error-content' },
                              _react2['default'].createElement(
                                  'div',
                                  { className: 'error', style: { display: this.props.login.errorShow ? "block" : "none" } },
                                  _react2['default'].createElement('span', { className: 'error-icon' }),
                                  _react2['default'].createElement(
                                      'span',
                                      { className: 'error-val' },
                                      this.props.login.errorMsg
                                  )
                              )
                          ),
                          _react2['default'].createElement(
                              'span',
                              { className: 'login-btn', onClick: this.loginBtn.bind(this) },
                              '登录'
                          )
                      )
                  )
              );
          }
      }]);
  
      return LoginMain;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      return state;
  }
  
  function mapDispatchToProps(dispatch) {
      return {
          _loginHandle: function _loginHandle(data) {
              dispatch((0, _actionsAdmin.loginHandle)(data));
          },
          _accountLogin: function _accountLogin(options) {
              dispatch((0, _actionsAdmin.accountLogin)(options));
          }
      };
  }
  
  var UserLogin = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LoginMain);
  
  exports['default'] = UserLogin;
  module.exports = exports['default'];
  /*登录*/
  //# sourceMappingURL=/js/containers/admin/login/index.js.map
  

});

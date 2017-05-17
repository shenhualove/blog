;/*!/src/js/containers/admin/login/index.js*/
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

;/*!/src/js/components/admin/common/menu.js*/
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

;/*!/src/js/containers/admin/public/top.js*/
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
  
  var _componentsAdminCommonMenu = require('src/js/components/admin/common/menu');
  
  var _componentsAdminCommonMenu2 = _interopRequireDefault(_componentsAdminCommonMenu);
  
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
                  _react2['default'].createElement(_componentsAdminCommonMenu2['default'], { list: this.props.login.Jurisdiction }),
                  _react2['default'].createElement(
                      'div',
                      { className: 'right clearfix' },
                      _react2['default'].createElement('span', { className: 'user-icon' }),
                      _react2['default'].createElement(
                          'span',
                          { className: 'user-name' },
                          this.props.login.account.userName
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

;/*!/src/js/containers/admin/public/dialog.js*/
define('src/js/containers/admin/public/dialog', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/12.
   *
   * 弹窗组件
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
  
  var _actionsAdminDialog = require('src/js/actions/admin/dialog');
  
  var timeHandle = undefined;
  
  var ReactDialog = (function (_React$Component) {
      _inherits(ReactDialog, _React$Component);
  
      function ReactDialog() {
          _classCallCheck(this, ReactDialog);
  
          _get(Object.getPrototypeOf(ReactDialog.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(ReactDialog, [{
          key: 'childrenSuccessAction',
  
          //子弹窗确定
          value: function childrenSuccessAction() {
              if (this.props.dialog.childrenSuccess()) {
                  this.childrenHide();
              }
          }
  
          //子弹窗取消
      }, {
          key: 'childrenFailAction',
          value: function childrenFailAction() {
              this.props.dialog.childrenFail();
              this.childrenHide();
          }
  
          //子弹窗隐藏
      }, {
          key: 'childrenHide',
          value: function childrenHide() {
              this.props._dialogHandle({
                  children: false, //是否显示子弹窗，通常用于弹窗里的表单交互，在弹窗提示信息错误之类,
                  childrenType: 'warning', //子弹窗的类型,默认为操作警告,仅限于children=true的时候才有效果 success操作成功 fail 操作失败  confirm操作确认 warning 操作警告
                  childrenContent: "", //子弹窗的内容
                  childrenFail: function childrenFail() {}, //子弹窗的关闭回调函数
                  childrenSuccess: function childrenSuccess() {
                      return true;
                  } });
          }
  
          //点击确定
      }, {
          key: 'successAction',
          //子弹窗的成功回调函数
          value: function successAction() {
              clearTimeout(timeHandle);
              //回调返回TRUE，则进行关闭弹窗
              if (this.props.dialog.success()) {
                  this.hideAction();
              }
          }
  
          //点击取消
      }, {
          key: 'failAction',
          value: function failAction() {
              clearTimeout(timeHandle);
              this.props.dialog.fail();
              this.hideAction();
          }
  
          //弹窗消失
      }, {
          key: 'hideAction',
          value: function hideAction() {
              this.props.dialog.hide();
              //弹窗消失并且初始化
              this.props._dialogHandle({
                  show: false, //默认是关闭弹窗 true打开弹窗
                  children: false, //是否显示子弹窗，通常用于弹窗里的表单交互，在弹窗提示信息错误之类,
                  childrenType: 'warning', //子弹窗的类型,默认为操作警告,仅限于children=true的时候才有效果 success操作成功 fail 操作失败  confirm操作确认 warning 操作警告
                  childrenContent: "", //子弹窗的内容
                  childrenFail: function childrenFail() {}, //子弹窗的关闭回调函数
                  childrenSuccess: function childrenSuccess() {
                      return true;
                  }, //子弹窗的成功回调函数
                  title: '', //弹窗标题
                  type: 'confirm', //弹窗类型  confirm / loading / tips / box
                  tipsType: 'success', //仅限于type=tips有效果  success操作成功 fail 操作失败  confirm操作确认 warning 操作警告
                  content: '', //弹窗内容
                  time: 0, //弹窗消失时间
                  width: "", //弹窗宽度
                  height: "", //弹窗高度
                  bgRemove: false, //遮罩层点击是否移除弹窗
                  success: function success() {
                      return true;
                  }, //弹窗确定回调函数
                  fail: function fail() {}, //弹窗取消回调函数
                  hide: function hide() {}, //遮罩层消失回调函数
                  successBtn: true, //是否显示确定按钮  默认为显示
                  failBtn: true, //是否显示取消按钮  默认为显示
                  successText: "提交", //确定按钮文字
                  failText: "关闭" //取消按钮文字
              });
          }
  
          //children
      }, {
          key: 'viewChildren',
          value: function viewChildren() {
              var content = '';
              switch (this.props.dialog.childrenType) {
                  case 'success':
                      content = _react2['default'].createElement(
                          'p',
                          { key: this.props.dialog.childrenType, className: 'msg-type success' },
                          this.props.dialog.childrenContent ? this.props.dialog.childrenContent : '操作成功!'
                      );
                      break;
                  case 'fail':
                      content = _react2['default'].createElement(
                          'p',
                          { key: this.props.dialog.childrenType, className: 'msg-type fail' },
                          this.props.dialog.childrenContent ? this.props.dialog.childrenContent : '操作失败!'
                      );
                      break;
                  case 'confirm':
                      content = _react2['default'].createElement(
                          'p',
                          { key: this.props.dialog.childrenType, className: 'msg-type doubt' },
                          this.props.dialog.childrenContent ? this.props.dialog.childrenContent : '确定要提交申请吗!'
                      );
                      break;
                  case 'warning':
                      content = _react2['default'].createElement(
                          'p',
                          { key: this.props.dialog.childrenType, className: 'msg-type warning' },
                          this.props.dialog.childrenContent ? this.props.dialog.childrenContent : '请选择数据进行操作!'
                      );
                      break;
                  default:
                      break;
              }
              return _react2['default'].createElement(
                  'div',
                  { className: 'dialog-wrap dialog-box-wrap type-mesg', style: { display: "block" } },
                  _react2['default'].createElement(
                      'div',
                      { className: 'dialog-header' },
                      _react2['default'].createElement(
                          'div',
                          { className: 'close' },
                          _react2['default'].createElement('i', { className: 'yypt-icon-close', onClick: this.childrenFailAction.bind(this) })
                      )
                  ),
                  _react2['default'].createElement(
                      'div',
                      { className: 'dialog-body' },
                      content
                  ),
                  _react2['default'].createElement(
                      'div',
                      { className: 'dialog-foot mb30' },
                      _react2['default'].createElement(
                          'button',
                          { onClick: this.childrenSuccessAction.bind(this), className: 'btn-submit' },
                          '确定'
                      )
                  )
              );
          }
  
          //confirm
      }, {
          key: 'viewConfirm',
          value: function viewConfirm() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'dialog-wrap type-cont', style: { width: this.props.dialog.width ? this.props.dialog.width : '700px', height: this.props.dialog.height ? this.props.dialog.height : '450px' } },
                  _react2['default'].createElement(
                      'div',
                      { className: 'dialog-header dialog-title' },
                      _react2['default'].createElement(
                          'p',
                          null,
                          this.props.dialog.title
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'close colse-fff' },
                          _react2['default'].createElement('i', { onClick: this.failAction.bind(this), className: 'yypt-icon-close' })
                      )
                  ),
                  _react2['default'].createElement(
                      'div',
                      { className: 'dialog-body' },
                      this.props.dialog.content
                  ),
                  _react2['default'].createElement(
                      'div',
                      { className: 'dialog-foot' },
                      this.props.dialog.failBtn ? _react2['default'].createElement(
                          'button',
                          { className: 'btn-close', onClick: this.failAction.bind(this) },
                          this.props.dialog.failText
                      ) : '',
                      this.props.dialog.successBtn ? _react2['default'].createElement(
                          'button',
                          { className: 'btn-submit', onClick: this.successAction.bind(this) },
                          this.props.dialog.successText
                      ) : ''
                  ),
                  this.props.dialog.children ? this.viewChildren() : ''
              );
          }
  
          //tips
      }, {
          key: 'viewTips',
          value: function viewTips() {
              var content = '';
              switch (this.props.dialog.tipsType) {
                  case 'success':
                      content = _react2['default'].createElement(
                          'p',
                          { key: this.props.dialog.tipsType, className: 'msg-type success' },
                          this.props.dialog.content ? this.props.dialog.content : '操作成功!'
                      );
                      break;
                  case 'fail':
                      content = _react2['default'].createElement(
                          'p',
                          { key: this.props.dialog.tipsType, className: 'msg-type fail' },
                          this.props.dialog.content ? this.props.dialog.content : '操作失败!'
                      );
                      break;
                  case 'confirm':
                      content = _react2['default'].createElement(
                          'p',
                          { key: this.props.dialog.tipsType, className: 'msg-type doubt' },
                          this.props.dialog.content ? this.props.dialog.content : '确定要提交申请吗!'
                      );
                      break;
                  case 'warning':
                      content = _react2['default'].createElement(
                          'p',
                          { key: this.props.dialog.tipsType, className: 'msg-type warning' },
                          this.props.dialog.content ? this.props.dialog.content : '请选择数据进行操作!'
                      );
                      break;
                  default:
                      break;
              }
  
              return _react2['default'].createElement(
                  'div',
                  { className: 'dialog-wrap type-mesg', style: { height: '260px', width: "300px" } },
                  _react2['default'].createElement(
                      'div',
                      { className: 'dialog-header' },
                      _react2['default'].createElement(
                          'div',
                          { className: 'close' },
                          _react2['default'].createElement('i', { onClick: this.failAction.bind(this), className: 'yypt-icon-close' })
                      )
                  ),
                  _react2['default'].createElement(
                      'div',
                      { className: 'dialog-body' },
                      content
                  ),
                  _react2['default'].createElement(
                      'div',
                      { className: 'dialog-foot' },
                      _react2['default'].createElement(
                          'button',
                          { className: 'btn-submit', onClick: this.successAction.bind(this) },
                          '确定'
                      )
                  )
              );
          }
  
          //根据弹窗类型渲染不同的VIEW
      }, {
          key: 'renderType',
          value: function renderType(type) {
              var _this = this;
  
              if (this.props.dialog.time > 0) {
                  timeHandle = setTimeout(function () {
                      _this.failAction();
                  }, this.props.dialog.time);
              }
              switch (type) {
                  case 'confirm':
                      return this.viewConfirm();
                  case 'loading':
                      return _react2['default'].createElement(
                          'div',
                          { className: 'dialog-loading' },
                          _react2['default'].createElement(
                              'div',
                              { className: 'dialog-loading-icon' },
                              _react2['default'].createElement(
                                  'div',
                                  { className: 'dialog-loading-content' },
                                  this.props.dialog.content
                              )
                          )
                      );
                  case 'tips':
                      return this.viewTips();
                  default:
                      return '';
              }
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { id: 'react-dialog', className: 'new-dialog-bg', style: { display: this.props.dialog.show ? 'block' : 'none' } },
                  this.renderType(this.props.dialog.type)
              );
          }
      }]);
  
      return ReactDialog;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      console.log(state);
      return state;
  }
  
  function mapDispatchToProps(dispatch) {
      return {
          _dialogHandle: function _dialogHandle(options) {
              dispatch((0, _actionsAdminDialog.dialogHandle)(options));
          }
      };
  }
  
  var Dialog = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ReactDialog);
  
  exports['default'] = Dialog;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/containers/admin/public/dialog.js.map
  

});

;/*!/src/js/containers/admin/index.js*/
define('src/js/containers/admin/index', function(require, exports, module) {

  /**
   * Created by apple on 17/3/30.
   *
   * 网站首页，根据用户是否登录来加载登录页面还是主页
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
  
  var _login = require('src/js/containers/admin/login/index');
  
  var _login2 = _interopRequireDefault(_login);
  
  var _publicTop = require('src/js/containers/admin/public/top');
  
  var _publicTop2 = _interopRequireDefault(_publicTop);
  
  var _publicDialog = require('src/js/containers/admin/public/dialog');
  
  var _publicDialog2 = _interopRequireDefault(_publicDialog);
  
  var Index = (function (_React$Component) {
      _inherits(Index, _React$Component);
  
      function Index() {
          _classCallCheck(this, Index);
  
          _get(Object.getPrototypeOf(Index.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(Index, [{
          key: 'render',
          value: function render() {
              if (!this.props.login.isLogin) {
                  return _react2['default'].createElement(
                      'div',
                      { className: 'h100' },
                      _react2['default'].createElement(_login2['default'], null),
                      _react2['default'].createElement(_publicDialog2['default'], null)
                  );
              } else {
                  return _react2['default'].createElement(
                      'div',
                      { className: 'h100' },
                      _react2['default'].createElement(_publicTop2['default'], null),
                      _react2['default'].createElement(
                          'div',
                          { className: 'contioner' },
                          _react2['default'].createElement(
                              'div',
                              { className: 'center-content' },
                              _react2['default'].createElement(
                                  'div',
                                  { className: 'show-content' },
                                  this.props.children
                              )
                          )
                      ),
                      _react2['default'].createElement(_publicDialog2['default'], null)
                  );
              }
          }
      }]);
  
      return Index;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      return state;
  }
  
  function mapDispatchToProps(dispatch) {
      return {};
  }
  
  var IndexMain = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Index);
  
  exports['default'] = IndexMain;
  module.exports = exports['default'];
  /*Main*/
  //# sourceMappingURL=/js/containers/admin/index.js.map
  

});

;/*!/src/js/components/admin/index.js*/
define('src/js/components/admin/index', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/3/6.
   *
   * 网站首页，根据用户是否登录来加载登录页面还是主页
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
  
  var _containersAdmin = require('src/js/containers/admin/index');
  
  var _containersAdmin2 = _interopRequireDefault(_containersAdmin);
  
  var Index = (function (_React$Component) {
  	_inherits(Index, _React$Component);
  
  	function Index() {
  		_classCallCheck(this, Index);
  
  		_get(Object.getPrototypeOf(Index.prototype), 'constructor', this).apply(this, arguments);
  	}
  
  	_createClass(Index, [{
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(_containersAdmin2['default'], { children: this.props.children });
  		}
  	}]);
  
  	return Index;
  })(_react2['default'].Component);
  
  exports['default'] = Index;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/index.js.map
  

});

;/*!/src/js/admin-router.js*/
/**
 * Created by apple on 17/4/19.
 *
 * 后台应用路由
 */
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('node_modules/react/react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('node_modules/react-dom/index');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = require('node_modules/react-router/lib/index');

var _redux = require('node_modules/redux/lib/index');

var _reactRedux = require('node_modules/react-redux/lib/index');

var _reduxThunk = require('node_modules/redux-thunk/lib/index');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reactRouterRedux = require('node_modules/react-router-redux/lib/index');

var _componentsAdmin = require('src/js/components/admin/index');

var _componentsAdmin2 = _interopRequireDefault(_componentsAdmin);

var _reducersAdmin = require('src/js/reducers/admin/index');

var _reducersAdmin2 = _interopRequireDefault(_reducersAdmin);

var store = (0, _redux.createStore)(_reducersAdmin2['default'], (0, _redux.applyMiddleware)(_reduxThunk2['default']));

var historys = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);

_reactDom2['default'].render(_react2['default'].createElement(
    _reactRedux.Provider,
    { store: store },
    _react2['default'].createElement(
        _reactRouter.Router,
        { history: historys },
        _react2['default'].createElement(
            _reactRouter.Route,
            { path: '/admin', component: _componentsAdmin2['default'] },
            '//栏目管理',
            _react2['default'].createElement(
                _reactRouter.Route,
                { path: 'column' },
                _react2['default'].createElement(_reactRouter.Route, { path: 'list', getComponent: function (location, cb) {
                        require(['src/js/containers/admin/column/list'], function (columnList) {
                            cb(null, columnList);
                        });
                    } }),
                _react2['default'].createElement(_reactRouter.Route, { path: 'add', getComponent: function (location, cb) {
                        require(['src/js/containers/admin/column/add'], function (columnAdd) {
                            cb(null, columnAdd);
                        });
                    } })
            ),
            '//文章管理',
            _react2['default'].createElement(
                _reactRouter.Route,
                { path: 'article' },
                _react2['default'].createElement(_reactRouter.Route, { path: 'list', getComponent: function (location, cb) {
                        require(['src/js/containers/admin/article/list'], function (articleList) {
                            cb(null, articleList);
                        });
                    } }),
                _react2['default'].createElement(_reactRouter.Route, { path: 'add', getComponent: function (location, cb) {
                        require(['src/js/containers/admin/article/add'], function (articleAdd) {
                            cb(null, articleAdd);
                        });
                    } })
            ),
            '//链接管理',
            _react2['default'].createElement(
                _reactRouter.Route,
                { path: 'link' },
                _react2['default'].createElement(_reactRouter.Route, { path: 'list', getComponent: function (location, cb) {
                        require(['src/js/containers/admin/link/list'], function (linkList) {
                            cb(null, linkList);
                        });
                    } }),
                _react2['default'].createElement(_reactRouter.Route, { path: 'add', getComponent: function (location, cb) {
                        require(['src/js/containers/admin/link/add'], function (linkAdd) {
                            cb(null, linkAdd);
                        });
                    } })
            ),
            '//系统管理',
            _react2['default'].createElement(
                _reactRouter.Route,
                { path: 'System' },
                '// 角色管理',
                _react2['default'].createElement(_reactRouter.Route, { path: 'RoleManager', getComponent: function (location, cb) {
                        require(['./containers/roles/index'], function (RoleManager) {
                            cb(null, RoleManager);
                        });
                    } }),
                '// 角色管理--新增角色',
                _react2['default'].createElement(_reactRouter.Route, { path: 'AddRole/:roleCode', getComponent: function (location, cb) {
                        require(['./containers/roles/add'], function (addRole) {
                            cb(null, addRole);
                        });
                    } }),
                '//用户管理',
                _react2['default'].createElement(_reactRouter.Route, { path: 'UserManager', getComponent: function (location, cb) {
                        require(['src/js/containers/user/index'], function (UserManager) {
                            cb(null, UserManager);
                        });
                    } }),
                '//站点申请审核',
                _react2['default'].createElement(_reactRouter.Route, { path: 'UserManager', getComponent: function (location, cb) {
                        require(['./containers/helpLoan/qualExam/siteAppication'], function (UserManager) {
                            cb(null, UserManager);
                        });
                    } })
            ),
            '//报表路由',
            _react2['default'].createElement(
                _reactRouter.Route,
                { path: 'ReportForm' },
                '//银行业务日报',
                _react2['default'].createElement(
                    _reactRouter.Route,
                    { path: 'bankData' },
                    '//全辖银行业务常规数据汇总报表-日',
                    _react2['default'].createElement(_reactRouter.Route, { path: 'bankAllDataDay', getComponent: function (location, cb) {
                            require(['./containers/reportForm/bankAllDataDay'], function (bankAllDataDay) {
                                cb(null, bankAllDataDay);
                            });
                        } })
                )
            )
        )
    )
), document.getElementById("container"));
//# sourceMappingURL=/js/admin-router.js.map

;/*!/src/js/components/admin/common/centerTopNav.js*/
define('src/js/components/admin/common/centerTopNav', function(require, exports, module) {

  /**
   * Created by zhangminglei on 2017/3/9.
   *
   * 中间内容 头部组件
   *
   * title="菜单名称" 必传
   * parentList={} //父栏目名字和跳转地址 可以不传  数据结构  [{name:"父栏目名字",url:"/parent"}]
   * leaveCallBack={} //回调函数，点击返回上一页的调用，可以不传,如果传入，讲回调父组件的方法
   * leaveUrl="返回上一页的URL"  可以不传，如果传入则显示上一页 否则不显示上一页
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
  
  var CenterTopNav = (function (_React$Component) {
      _inherits(CenterTopNav, _React$Component);
  
      function CenterTopNav() {
          _classCallCheck(this, CenterTopNav);
  
          _get(Object.getPrototypeOf(CenterTopNav.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(CenterTopNav, [{
          key: 'backUrl',
  
          //跳转之前是否回调
          value: function backUrl(url, fn) {
              if (typeof fn == 'function') {
                  fn();
              } else {
                  _reactRouter.browserHistory.push(url);
              }
          }
  
          //渲染父栏目名称URL
      }, {
          key: 'getParentList',
          value: function getParentList(data) {
              if (data) {
                  var _ret = (function () {
                      var html = [];
                      data.map(function (val, k) {
                          html.push(_react2['default'].createElement(
                              _reactRouter.Link,
                              { key: k, to: val.url },
                              val.name
                          ));
                          html.push(_react2['default'].createElement(
                              'span',
                              { key: k + 's' },
                              '>'
                          ));
                      });
                      return {
                          v: html
                      };
                  })();
  
                  if (typeof _ret === 'object') return _ret.v;
              }
          }
  
          //渲染 返回上一页
      }, {
          key: 'getPrev',
          value: function getPrev(url, fn) {
              if (url || fn) {
                  return _react2['default'].createElement(
                      'div',
                      { className: 'right-cont', style: { display: "inline-block" }, onClick: this.backUrl.bind(this, url, fn) },
                      '返回上一页 >>'
                  );
              }
          }
  
          /*<Link to="/">首页</Link><span>></span>*/
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'center-top-content clearfix' },
                  this.getParentList(this.props.parentList),
                  _react2['default'].createElement(
                      'span',
                      { className: 'title cur' },
                      this.props.title
                  ),
                  this.getPrev(this.props.leaveUrl, this.props.leaveCallBack)
              );
          }
      }]);
  
      return CenterTopNav;
  })(_react2['default'].Component);
  
  exports['default'] = CenterTopNav;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/common/centerTopNav.js.map
  

});

;/*!/src/js/components/admin/common/pagination.js*/
define('src/js/components/admin/common/pagination', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/1.
   *
   * 公用分页
   * 传入参数 当前页curPage  总条数totalNumber 每页显示多少条pageLimt 分页点击回调 pageClick
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
  
  var Pagination = (function (_React$Component) {
      _inherits(Pagination, _React$Component);
  
      function Pagination() {
          _classCallCheck(this, Pagination);
  
          _get(Object.getPrototypeOf(Pagination.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(Pagination, [{
          key: 'clickHandle',
  
          //导航点击
          value: function clickHandle(f, n, p) {
              typeof f == "function" && f(n, p);
          }
      }, {
          key: 'pageRender',
          value: function pageRender(options) {
              var navHtml = [],
                  pageNav = 10;
              var totalPage = Math.ceil(options.totalNumber / options.pageLimt);
              //上一页，首页
              navHtml.push(this.firstPrev(options));
  
              if (totalPage <= pageNav) {
                  //总页数小于等于导航页码10
                  for (var i = 1; i <= totalPage; i++) {
                      navHtml.push(_react2['default'].createElement(
                          'span',
                          { key: i, className: options.curPage == i ? 'curr' : 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, i, options.pageLimt) },
                          i
                      ));
                  }
              } else {
                  //总页数大于导航页码
                  if (options.curPage > 6 && options.curPage - 5 > 0) {
                      for (var i = options.curPage - 5; i < options.curPage; i++) {
                          navHtml.push(_react2['default'].createElement(
                              'span',
                              { key: i, className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, i, options.pageLimt) },
                              i
                          ));
                      }
                  } else {
                      for (var i = 1; i < options.curPage; i++) {
                          navHtml.push(_react2['default'].createElement(
                              'span',
                              { key: i, className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, i, options.pageLimt) },
                              i
                          ));
                      }
                  }
  
                  navHtml.push(_react2['default'].createElement(
                      'span',
                      { key: options.curPage, className: 'curr' },
                      options.curPage
                  ));
  
                  if (options.curPage > 6 && options.curPage + 4 > totalPage) {
                      for (var i = options.curPage + 1; i <= totalPage; i++) {
                          navHtml.push(_react2['default'].createElement(
                              'span',
                              { key: i, className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, i, options.pageLimt) },
                              i
                          ));
                      }
                  } else {
                      for (var i = options.curPage + 1; i <= (options.curPage + 4 > 10 ? options.curPage + 4 : 10); i++) {
                          navHtml.push(_react2['default'].createElement(
                              'span',
                              { key: i, className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, i, options.pageLimt) },
                              i
                          ));
                      }
                  }
              }
  
              //下一页尾页
              navHtml.push(this.endNext(options));
  
              var returnHTml = [];
              //页码信息
              returnHTml.push(this.pageText(options));
              returnHTml.push(_react2['default'].createElement(
                  'div',
                  { className: 'page-show-left', key: 'div' },
                  navHtml
              ));
              return returnHTml;
          }
  
          //上一页首页样式
      }, {
          key: 'firstPrev',
          value: function firstPrev(options) {
              var html = [];
              if (options.curPage == 1) {
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'first', className: 'disable-hover' },
                      '首页'
                  ));
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'prev', className: 'disable-hover' },
                      '上一页'
                  ));
              } else {
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'first', className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, 1, options.pageLimt) },
                      '首页'
                  ));
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'prev', className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, options.curPage - 1, options.pageLimt) },
                      '上一页'
                  ));
              }
              return html;
          }
  
          //下一页尾页
      }, {
          key: 'endNext',
          value: function endNext(options) {
              var html = [];
              var totalPage = Math.ceil(options.totalNumber / options.pageLimt);
              if (options.curPage == totalPage || totalPage == 0) {
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'next', className: 'disable-hover' },
                      '下一页'
                  ));
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'end', className: 'disable-hover' },
                      '尾页'
                  ));
              } else {
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'next', className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, options.curPage + 1, options.pageLimt) },
                      '下一页'
                  ));
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'end', className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, totalPage, options.pageLimt) },
                      '尾页'
                  ));
              }
              return html;
          }
  
          //页码信息
      }, {
          key: 'pageText',
          value: function pageText(options) {
              return _react2['default'].createElement(
                  'span',
                  { className: 'page-info', key: 'pageText' },
                  '每页',
                  this.pageSizeSelect(options.pageLimt),
                  '条　　当前',
                  options.curPage,
                  '/',
                  Math.ceil(options.totalNumber / options.pageLimt),
                  '页　　共',
                  options.totalNumber,
                  '条数据'
              );
          }
  
          //选择PAGESIZE
      }, {
          key: 'pageSizeSelect',
          value: function pageSizeSelect(n) {
              return _react2['default'].createElement(
                  'select',
                  { value: n, onChange: this.selectPage.bind(this) },
                  _react2['default'].createElement(
                      'option',
                      { key: 10, value: '10' },
                      '10'
                  ),
                  _react2['default'].createElement(
                      'option',
                      { key: 20, value: '20' },
                      '20'
                  ),
                  _react2['default'].createElement(
                      'option',
                      { key: 50, value: '50' },
                      '50'
                  ),
                  _react2['default'].createElement(
                      'option',
                      { key: 100, value: '100' },
                      '100'
                  )
              );
          }
  
          //选择页码事件
      }, {
          key: 'selectPage',
          value: function selectPage(e) {
              var n = e.target.value;
              this.clickHandle(this.props.pageClick, 1, n);
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'pagination-wrap clearfix' },
                  this.pageRender({
                      curPage: this.props.curPage ? this.props.curPage : 1,
                      pageLimt: this.props.pageLimt ? this.props.pageLimt : 10,
                      totalNumber: this.props.totalNumber ? this.props.totalNumber : 0,
                      clickCallBack: this.props.pageClick ? this.props.pageClick : null
                  })
              );
          }
      }]);
  
      return Pagination;
  })(_react2['default'].Component);
  
  exports['default'] = Pagination;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/common/pagination.js.map
  

});

;/*!/src/js/components/admin/common/plugTableLoading.js*/
define('src/js/components/admin/common/plugTableLoading', function(require, exports, module) {

  /**
   * Created by ex-wangxin on 2017/4/20.
   *
   * 例子：<PlugTableLoading status={_that.props.customerInfoLoanQuery.tbodyList} colSpanCount='7' classNameEnter=""/>;
   * status ajax 加载状态   loading 加载中  success加载成功  fail 加载失败  nothing暂无数据
   * colSpanCount 合并列数
   * classNameEnter 传入的class 名称    可为空
   *
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
  
  var PlugTableLoading = (function (_React$Component) {
      _inherits(PlugTableLoading, _React$Component);
  
      function PlugTableLoading() {
          _classCallCheck(this, PlugTableLoading);
  
          _get(Object.getPrototypeOf(PlugTableLoading.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(PlugTableLoading, [{
          key: 'creatInnerHtml',
          value: function creatInnerHtml(status) {
              var innerHtml = [];
              //loading 加载中  success加载成功  fail 加载失败  nothing暂无数据
              if (status == 'loading') {
                  innerHtml.push(_react2['default'].createElement(
                      'td',
                      { key: '0', colSpan: this.props.colSpanCount },
                      _react2['default'].createElement('span', null)
                  ));
              } else if (status == 'fail') {
                  innerHtml.push(_react2['default'].createElement(
                      'td',
                      { key: '0', className: 'fail-color', colSpan: this.props.colSpanCount },
                      '数据请求失败'
                  ));
              } else if (status == 'nothing') {
                  innerHtml.push(_react2['default'].createElement(
                      'td',
                      { key: '0', className: 'fail-color', colSpan: this.props.colSpanCount },
                      '暂无数据'
                  ));
              }
              return innerHtml;
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'tr',
                  { className: 'plug-table-loading ' + this.props.classNameEnter },
                  this.creatInnerHtml(this.props.status)
              );
          }
      }]);
  
      return PlugTableLoading;
  })(_react2['default'].Component);
  
  exports['default'] = PlugTableLoading;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/common/plugTableLoading.js.map
  

});

;/*!/src/js/components/admin/common/table.js*/
define('src/js/components/admin/common/table', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 报表公共表格生成组件
   *
   * 传入表头，数据源DATA，
   *
   *
   *
   * width 可以设置表格宽度,默认100%，可以不传
   *
   * status 设置表格数据加载状态，默认为加载中,必传
   *
   * colspan 设置加载状态占满多少个表格行，否则默认1行，样式不美观，必传
   *
   * dataList 类型 array  例如[{name:'11'},{name:222}]
   *
   * titleList 类型 array  例如 [{title:"名称",type:"name",addClass:["red","blue"],htmlType:"button"},{title:"城市",type:'city'}]
   * 参数说明
   * {
   *  title:"名称",//标题名称，必传
   *  type:"name",//标题对应的KEY，必传
   *  addClass:["red","blue"],//TD的CLASS，为数组类型，默认可以不传
   *  htmlType:[{type:"a",text:"",addClass:[],callBack:null,param:key,bindType:key}],//标签类型，默认为文字，可不传
   *  type指定标签类型,a,button,span,
   *  text指定标签是否含有文字
   *  addClass指定标签是否含有CLASS
   *  callBack指定回调函数
   *  param指定回调函数里返回的参数
   *  bindType给标签 增加属性，这个属性的值，为该行的td的某个值，
   *  format:"" //格式化单位，针对数字千分位，金额千分位等  提供2种方法(number|money)，如需增加方法，可以自己添加
   *  parent:"站点类型"//是否有父标题，默认可以不传,
   *  colspan:1,//设置列,非必传
   *  rowspan:1,//设置行，非必传
   *  }
   *
   * 如果需要一个表头合并多个标题  [{name:"名称",parent:"站点类型"},{city:"城市",parent:"站点类型"}]
   * titleList 每个KEY 对应的值，会去对应dataList里每个KEY，这样才能一一对应生成标题对应所在单元格的值，请勿顺序传错
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
  
  var _plugTableLoading = require('src/js/components/admin/common/plugTableLoading');
  
  var _plugTableLoading2 = _interopRequireDefault(_plugTableLoading);
  
  var Table = (function (_React$Component) {
      _inherits(Table, _React$Component);
  
      function Table() {
          _classCallCheck(this, Table);
  
          _get(Object.getPrototypeOf(Table.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(Table, [{
          key: 'creatHead',
  
          //渲染表头
          value: function creatHead() {
              var title = this.props.titleList;
              var isHasParent = false;
              var html = [],
                  childrenHtml = [],
                  temp_title = '';
  
              for (var i = 0; i < title.length; i++) {
                  var _name = title[i].title;
                  //判断是否含有父标题
                  if (title[i].parent) {
                      isHasParent = true;
                      _name = title[i].parent;
                      //判断单元格父标提是否一样，一样不输出TH
                      if (temp_title == title[i].parent) {
                          continue;
                      } else {
                          temp_title = title[i].parent;
                      }
                  } else {
                      temp_title = '';
                  }
                  //如果传有colspan或rowspan 设置
                  if (title[i].colspan) {
                      html.push(_react2['default'].createElement(
                          'th',
                          { className: 'text-c', colSpan: title[i].colspan, key: i },
                          _name
                      ));
                  } else if (title[i].rowspan) {
                      html.push(_react2['default'].createElement(
                          'th',
                          { rowSpan: title[i].rowspan, key: i },
                          _name
                      ));
                  } else {
                      html.push(_react2['default'].createElement(
                          'th',
                          { key: i },
                          _name
                      ));
                  }
              }
  
              if (isHasParent) {
                  for (var i = 0; i < title.length; i++) {
                      //判断是否含有父标题
                      if (title[i].parent) {
                          childrenHtml.push(_react2['default'].createElement(
                              'th',
                              { key: i },
                              title[i].title
                          ));
                      }
                  }
              }
  
              if (childrenHtml.length > 0) {
                  return _react2['default'].createElement(
                      'thead',
                      null,
                      _react2['default'].createElement(
                          'tr',
                          null,
                          html
                      ),
                      _react2['default'].createElement(
                          'tr',
                          null,
                          childrenHtml
                      )
                  );
              } else {
                  return _react2['default'].createElement(
                      'thead',
                      null,
                      _react2['default'].createElement(
                          'tr',
                          null,
                          html
                      )
                  );
              }
          }
  
          //渲染内容
      }, {
          key: 'creatBody',
          value: function creatBody() {
              var data = this.props.dataList;
              var html = [];
              for (var i = 0; i < data.length; i++) {
                  html.push(_react2['default'].createElement(
                      'tr',
                      { key: i },
                      this.getData(data[i])
                  ));
              }
              //如果有合计数据 并且 showTotal为true显示
              if (this.props.totalData && this.props.showTotal) {
                  html.push(_react2['default'].createElement(
                      'tr',
                      { key: 'total' },
                      _react2['default'].createElement(
                          'td',
                          null,
                          '合计'
                      ),
                      this.getTotal()
                  ));
              }
              return html;
          }
  
          //生成合计 样式数据
      }, {
          key: 'getTotal',
          value: function getTotal() {
              var html = [];
              for (var i = 0; i < this.props.totalTitle.length; i++) {
                  html.push(_react2['default'].createElement(
                      'td',
                      { className: 'text-r', key: i },
                      this.props.totalTitle[i].type ? this.props.totalTitle[i].format ? this.format(this.props.totalTitle[i].format, this.props.totalData[this.props.totalTitle[i].type]) : this.props.totalData[this.props.totalTitle[i].type] : ''
                  ));
              }
              return html;
          }
  
          //根据TITLE里的KEY，生成对应的TD值
      }, {
          key: 'getData',
          value: function getData(data) {
              var title = this.props.titleList;
              var html = [];
              for (var i = 0; i < title.length; i++) {
                  if (title[i].htmlType) {
                      html.push(_react2['default'].createElement(
                          'td',
                          { key: i, className: title[i].addClass && this.getClass(title[i].addClass) },
                          this.getChildrenTd(title[i], data)
                      ));
                  } else {
                      html.push(_react2['default'].createElement(
                          'td',
                          { key: i, 'data-show': data[title[i].type], className: title[i].addClass && this.getClass(title[i].addClass) },
                          title[i].format ? this.format(title[i].format, data[title[i].type]) : data[title[i].type]
                      ));
                  }
              }
              return html;
          }
  
          //根据htmlType生成对应的标签按钮
      }, {
          key: 'getChildrenTd',
          value: function getChildrenTd(arr, data) {
              var html = [];
              for (var i = 0; i < arr.htmlType.length; i++) {
                  if (typeof arr.htmlType[i].callBack != 'function') {
                      arr.htmlType[i].callBack = function () {};
                  }
                  switch (arr.htmlType[i].type) {
                      case "a":
                          html.push(_react2['default'].createElement(
                              'a',
                              { key: i, 'data-show': arr.htmlType[i].bindType ? data[arr.htmlType[i].bindType] : '', onClick: arr.htmlType[i].callBack.bind(this, data[arr.htmlType[i].param]), className: arr.htmlType[i].addClass && this.getClass(arr.htmlType[i].addClass) },
                              arr.htmlType[i].text ? arr.htmlType[i].text : ''
                          ));
                          break;
                      case "button":
                          html.push(_react2['default'].createElement(
                              'button',
                              { key: i, 'data-show': arr.htmlType[i].bindType ? data[arr.htmlType[i].bindType] : '', onClick: arr.htmlType[i].callBack.bind(this, data[arr.htmlType[i].param]), className: arr.htmlType[i].addClass && this.getClass(arr.htmlType[i].addClass) },
                              arr.htmlType[i].text ? arr.htmlType[i].text : ''
                          ));
                          break;
                      case "span":
                          html.push(_react2['default'].createElement(
                              'span',
                              { key: i, 'data-show': arr.htmlType[i].bindType ? data[arr.htmlType[i].bindType] : '', onClick: arr.htmlType[i].callBack.bind(this, data[arr.htmlType[i].param]), className: arr.htmlType[i].addClass && this.getClass(arr.htmlType[i].addClass) },
                              arr.htmlType[i].text ? arr.htmlType[i].text : ''
                          ));
                          break;
                      default:
                          break;
                  }
              }
              return html;
          }
  
          //返回TD CLASS
      }, {
          key: 'getClass',
          value: function getClass(val) {
              if (val) {
                  return val.join(' ');
              }
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'table',
                  { style: { width: this.props.width ? this.props.width : "100%" } },
                  this.creatHead(),
                  _react2['default'].createElement(
                      'tbody',
                      null,
                      this.props.status != "success" ? _react2['default'].createElement(_plugTableLoading2['default'], { colSpanCount: this.props.colspan, status: this.props.status }) : this.creatBody()
                  )
              );
          }
      }]);
  
      return Table;
  })(_react2['default'].Component);
  
  exports['default'] = Table;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/common/table.js.map
  

});

;/*!/src/js/containers/admin/column/list.js*/
define('src/js/containers/admin/column/list', function(require, exports, module) {

  /**
   * Created by apple on 17/5/16.
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = require('node_modules/react-redux/lib/index');
  
  var _componentsAdminCommonCenterTopNav = require('src/js/components/admin/common/centerTopNav');
  
  var _componentsAdminCommonCenterTopNav2 = _interopRequireDefault(_componentsAdminCommonCenterTopNav);
  
  var _componentsAdminCommonPagination = require('src/js/components/admin/common/pagination');
  
  var _componentsAdminCommonPagination2 = _interopRequireDefault(_componentsAdminCommonPagination);
  
  var _actionsAdminDialog = require('src/js/actions/admin/dialog');
  
  var _componentsAdminCommonTable = require('src/js/components/admin/common/table');
  
  var _componentsAdminCommonTable2 = _interopRequireDefault(_componentsAdminCommonTable);
  
  var _actionsAdminColumnList = require('src/js/actions/admin/column/list');
  
  var actions = _interopRequireWildcard(_actionsAdminColumnList);
  
  var List = (function (_React$Component) {
      _inherits(List, _React$Component);
  
      function List() {
          _classCallCheck(this, List);
  
          _get(Object.getPrototypeOf(List.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(List, [{
          key: 'pageNavClick',
          value: function pageNavClick(curPage, pageSize) {
              this.getData(curPage, pageSize);
          }
  
          //请求数据
      }, {
          key: 'getData',
          value: function getData(curPage, pageSize) {
              this.props._getColumnList({
                  curPage: curPage,
                  pageSize: pageSize
              });
          }
      }, {
          key: 'componentDidMount',
          value: function componentDidMount() {
              this.getData(this.props.columnList.curPage, this.props.columnList.pageSize);
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'height100p' },
                  _react2['default'].createElement(_componentsAdminCommonCenterTopNav2['default'], { title: '栏目列表', parentList: [{ name: "栏目管理" }] }),
                  _react2['default'].createElement(
                      'div',
                      { className: 'height100pY plr26' },
                      _react2['default'].createElement(
                          'div',
                          { className: 'form-content-wrap' },
                          _react2['default'].createElement(
                              'div',
                              { className: 'form-table-wrap' },
                              _react2['default'].createElement(_componentsAdminCommonTable2['default'], {
                                  colspan: 6,
                                  status: this.props.columnList.status,
                                  dataList: this.props.columnList.listData,
                                  titleList: this.props.columnList.titleList
                              })
                          ),
                          _react2['default'].createElement(_componentsAdminCommonPagination2['default'], {
                              curPage: this.props.columnList.curPage,
                              totalNumber: this.props.columnList.totalSize,
                              pageLimt: this.props.columnList.pageSize,
                              pageClick: this.pageNavClick.bind(this)
                          })
                      )
                  )
              );
          }
      }]);
  
      return List;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      return state;
  }
  
  function mapDispatchToProps(dispatch) {
      return {
          _getColumnList: function _getColumnList(options) {
              dispatch(actions.getColumnList(options));
          }
      };
  }
  
  var columnList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(List);
  
  exports['default'] = columnList;
  module.exports = exports['default'];
  /*content begin*/ /*content end*/
  //# sourceMappingURL=/js/containers/admin/column/list.js.map
  

});

;/*!/src/js/containers/admin/column/add.js*/
define('src/js/containers/admin/column/add', function(require, exports, module) {

  "use strict";
  
  /**
   * Created by apple on 17/5/16.
   */
  //# sourceMappingURL=/js/containers/admin/column/add.js.map
  

});

;/*!/src/js/components/admin/common/selectBox.js*/
define('src/js/components/admin/common/selectBox', function(require, exports, module) {

  /**
   * Created by ex-wangxin on 2017/4/13.
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var selectBox = (function (_React$Component) {
      _inherits(selectBox, _React$Component);
  
      function selectBox(props) {
          _classCallCheck(this, selectBox);
  
          _get(Object.getPrototypeOf(selectBox.prototype), "constructor", this).call(this, props);
          this.state = {
              show: false
          };
      }
  
      _createClass(selectBox, [{
          key: "optionClick",
          value: function optionClick(item, name) {
              this.setState({
                  show: false
              });
              this.props.callBack(item, name);
          }
      }, {
          key: "createOption",
          value: function createOption(list) {
              var optionList = [];
              for (var i in list) {
                  optionList.push(_react2["default"].createElement(
                      "p",
                      { key: i, onClick: this.optionClick.bind(this, list[i].value, list[i].name) },
                      list[i].name
                  ));
              }
              return optionList;
          }
  
          //显示选中项
      }, {
          key: "showValue",
          value: function showValue(value, list) {
              for (var i = 0; i < list.length; i++) {
                  if (list[i].value == value) {
                      return list[i].name;
                  }
              }
          }
  
          //select 框点击事件
      }, {
          key: "selectClick",
          value: function selectClick() {
              var show = this.state.show;
              if (show) {
                  this.setState({
                      show: false
                  });
              } else {
                  this.setState({
                      show: true
                  });
              }
          }
      }, {
          key: "mouseLeave",
          value: function mouseLeave() {
              this.setState({
                  show: false
              });
          }
      }, {
          key: "render",
          value: function render() {
              return _react2["default"].createElement(
                  "div",
                  { className: "select-box-wap role-name", onMouseLeave: this.mouseLeave.bind(this) },
                  _react2["default"].createElement(
                      "div",
                      { className: "select-top", onClick: this.selectClick.bind(this) },
                      this.showValue(this.props.value, this.props.list),
                      _react2["default"].createElement(
                          "i",
                          null,
                          " "
                      )
                  ),
                  _react2["default"].createElement(
                      "div",
                      { className: "select-option", style: { display: this.state.show ? 'block' : 'none' } },
                      this.createOption(this.props.list)
                  )
              );
          }
      }]);
  
      return selectBox;
  })(_react2["default"].Component);
  
  exports["default"] = selectBox;
  module.exports = exports["default"];
  //# sourceMappingURL=/js/components/admin/common/selectBox.js.map
  

});

;/*!/src/js/containers/admin/article/list.js*/
define('src/js/containers/admin/article/list', function(require, exports, module) {

  /**
   * Created by apple on 17/5/16.
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = require('node_modules/react-redux/lib/index');
  
  var _componentsAdminCommonCenterTopNav = require('src/js/components/admin/common/centerTopNav');
  
  var _componentsAdminCommonCenterTopNav2 = _interopRequireDefault(_componentsAdminCommonCenterTopNav);
  
  var _componentsAdminCommonPagination = require('src/js/components/admin/common/pagination');
  
  var _componentsAdminCommonPagination2 = _interopRequireDefault(_componentsAdminCommonPagination);
  
  var _actionsAdminDialog = require('src/js/actions/admin/dialog');
  
  var _componentsAdminCommonSelectBox = require('src/js/components/admin/common/selectBox');
  
  var _componentsAdminCommonSelectBox2 = _interopRequireDefault(_componentsAdminCommonSelectBox);
  
  var _componentsAdminCommonTable = require('src/js/components/admin/common/table');
  
  var _componentsAdminCommonTable2 = _interopRequireDefault(_componentsAdminCommonTable);
  
  var _actionsAdminArticleList = require('src/js/actions/admin/article/list');
  
  var actions = _interopRequireWildcard(_actionsAdminArticleList);
  
  var List = (function (_React$Component) {
      _inherits(List, _React$Component);
  
      function List() {
          _classCallCheck(this, List);
  
          _get(Object.getPrototypeOf(List.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(List, [{
          key: 'inputTitle',
  
          //输入标题事件
          value: function inputTitle(e) {
              this.props._handle({
                  title: e.target.value
              });
          }
  
          //栏目选择事件
      }, {
          key: 'selectClick',
          value: function selectClick(val, name) {
              this.props._handle({
                  columnId: val
              });
          }
  
          //分页点击事件
      }, {
          key: 'pageNavClick',
          value: function pageNavClick(curPage, pageSize, options) {
              this.getData(curPage, pageSize, options ? options : this.props.articleList.temp_options);
          }
  
          //栏目数据加工
      }, {
          key: 'showColumn',
          value: function showColumn() {
              var arr = [{ value: "", name: "全部" }];
              var temp_arr = [];
              this.props.articleList.columnList.map(function (val, key) {
                  temp_arr.push({ value: val.id, name: val.title });
              });
              return arr.concat(temp_arr);
          }
  
          //请求数据
      }, {
          key: 'getData',
          value: function getData(curPage, pageSize, options) {
              this.props._getArticleList({
                  curPage: curPage,
                  pageSize: pageSize,
                  title: options.title,
                  columnId: options.columnId
              });
          }
  
          //重置数据
      }, {
          key: 'resetData',
          value: function resetData(bool) {
              if (bool === true) {
                  var options = {
                      title: "",
                      columnId: ''
                  };
                  //初次进入页面，所有参数初始化
                  this.props._handle({
                      title: "",
                      columnId: '',
                      temp_options: options
                  });
                  //进入页面发起默认请求加载数据
                  this.pageNavClick(this.props.articleList.curPage, this.props.articleList.pageSize, options);
              } else {
                  //页面未离开，用户正常重置查询条件
                  this.props._handle({
                      title: "",
                      columnId: ''
                  });
              }
          }
  
          //查询数据
      }, {
          key: 'submitClick',
          value: function submitClick() {
              if (this.props.articleList.status == 'loading') {
                  this.props._dialogHandle({
                      type: "tips",
                      time: 2000,
                      content: "正在查询中，请耐心等待！",
                      tipsType: "warning",
                      show: true
                  });
              } else {
                  var options = {
                      title: this.props.articleList.title,
                      columnId: this.props.articleList.columnId
                  };
                  this.props._handle({
                      temp_options: options
                  });
                  this.getData(1, this.props.articleList.pageSize, options);
              }
          }
  
          //修改文章
      }, {
          key: 'changeBtn',
          value: function changeBtn(id) {}
  
          //删除文章
      }, {
          key: 'deleteBtn',
          value: function deleteBtn(id) {
              alert(id);
          }
      }, {
          key: 'componentDidMount',
          value: function componentDidMount() {
              //绑定修改按钮事件
              this.props.articleList.titleList[6][0].callBack = this.changeBtn.bind(this);
              //绑定删除按钮事件
              this.props.articleList.titleList[6][1].callBack = this.deleteBtn.bind(this);
              this.resetData(true);
              this.props._getColumnAll();
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'height100p' },
                  _react2['default'].createElement(_componentsAdminCommonCenterTopNav2['default'], { title: '文章列表', parentList: [{ name: "文章管理" }] }),
                  _react2['default'].createElement(
                      'div',
                      { className: 'height100pY plr26' },
                      _react2['default'].createElement(
                          'div',
                          { className: 'pub-form-top clearfix' },
                          _react2['default'].createElement(
                              'ul',
                              null,
                              _react2['default'].createElement(
                                  'li',
                                  null,
                                  _react2['default'].createElement(
                                      'span',
                                      null,
                                      '文章标题:'
                                  ),
                                  _react2['default'].createElement('input', { type: 'text', onChange: this.inputTitle.bind(this), placeholder: '请输入文章标题', value: this.props.articleList.title })
                              ),
                              _react2['default'].createElement(
                                  'li',
                                  null,
                                  _react2['default'].createElement(
                                      'span',
                                      null,
                                      '所属栏目:'
                                  ),
                                  _react2['default'].createElement(_componentsAdminCommonSelectBox2['default'], {
                                      callBack: this.selectClick.bind(this),
                                      value: this.props.articleList.columnId,
                                      list: this.showColumn()
                                  })
                              )
                          ),
                          _react2['default'].createElement(
                              'div',
                              { className: 'pub-form-btns clearfix' },
                              _react2['default'].createElement(
                                  'div',
                                  { className: 'left' },
                                  _react2['default'].createElement(
                                      'button',
                                      { onClick: this.submitClick.bind(this) },
                                      '查询'
                                  ),
                                  _react2['default'].createElement(
                                      'button',
                                      { onClick: this.resetData.bind(this) },
                                      '重置'
                                  )
                              )
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'form-content-wrap' },
                          _react2['default'].createElement(
                              'div',
                              { className: 'form-table-wrap' },
                              _react2['default'].createElement(_componentsAdminCommonTable2['default'], {
                                  colspan: 7,
                                  status: this.props.articleList.status,
                                  dataList: this.props.articleList.listData,
                                  titleList: this.props.articleList.titleList
                              })
                          ),
                          _react2['default'].createElement(_componentsAdminCommonPagination2['default'], {
                              curPage: this.props.articleList.curPage,
                              totalNumber: this.props.articleList.totalSize,
                              pageLimt: this.props.articleList.pageSize,
                              pageClick: this.pageNavClick.bind(this)
                          })
                      )
                  )
              );
          }
      }]);
  
      return List;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      return state;
  }
  
  function mapDispatchToProps(dispatch) {
      return {
          _handle: function _handle(options) {
              dispatch(actions.handle(options));
          },
          _getColumnAll: function _getColumnAll(options) {
              dispatch(actions.getColumnAll(options));
          },
          _getArticleList: function _getArticleList(options) {
              dispatch(actions.getArticleList(options));
          }
      };
  }
  
  var articleList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(List);
  
  exports['default'] = articleList;
  module.exports = exports['default'];
  /*form content begin*/ /*form content end*/ /*content begin*/ /*content end*/
  //# sourceMappingURL=/js/containers/admin/article/list.js.map
  

});

;/*!/src/js/containers/admin/article/add.js*/
define('src/js/containers/admin/article/add', function(require, exports, module) {

  "use strict";
  
  /**
   * Created by apple on 17/5/16.
   */
  //# sourceMappingURL=/js/containers/admin/article/add.js.map
  

});

;/*!/src/js/containers/admin/link/list.js*/
define('src/js/containers/admin/link/list', function(require, exports, module) {

  "use strict";
  
  /**
   * Created by apple on 17/5/16.
   */
  //# sourceMappingURL=/js/containers/admin/link/list.js.map
  

});

;/*!/src/js/containers/admin/link/add.js*/
define('src/js/containers/admin/link/add', function(require, exports, module) {

  "use strict";
  
  /**
   * Created by apple on 17/5/16.
   */
  //# sourceMappingURL=/js/containers/admin/link/add.js.map
  

});

;/*!/src/js/components/admin/public/album.js*/
define('src/js/components/admin/public/album', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/1.
   *
   * 公用分页
   * 传入参数 当前页curPage  总条数totalNumber 每页显示多少条pageLimt 分页点击回调 pageClick
   */
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var Album = (function (_React$Component) {
      _inherits(Album, _React$Component);
  
      function Album() {
          _classCallCheck(this, Album);
  
          _get(Object.getPrototypeOf(Album.prototype), "constructor", this).call(this);
          this.state = {
              imageList: [], //图片数据
              typeIndex: "", //图片名称
              currentIndex: 0, //当前图片下标
              imageUrl: "", //当前图片路径
              showImageContent: false,
              left: false, //左边显示隐藏控制
              right: true };
      }
  
      _createClass(Album, [{
          key: "componentDidMount",
          //右边显示隐藏控制
          value: function componentDidMount() {
  
              if (this.props.typeIndex === "") {
                  this.props.callback();
                  document.getElementById("albumPop").style.display = "none";
                  return false;
              }
  
              var currentIndex = 0;
  
              var imageList = this.props.imageList ? this.props.imageList : [];
              if (imageList.length == 0) {
                  this.props.callback();
                  alert("无影像文件");
                  return false;
              }
  
              this.init({
                  imageList: imageList,
                  currentIndex: currentIndex
              });
          }
      }, {
          key: "getImageIndex",
          value: function getImageIndex(imageList, typeIndex) {
              var currentIndex = "";
              for (var a = 0; a < imageList.length; a++) {
                  if (imageList[a].archName == typeIndex) {
                      currentIndex = a;
                  }
              }
              return currentIndex;
          }
      }, {
          key: "componentWillReceiveProps",
          value: function componentWillReceiveProps(props) {
              var _this = this;
  
              this.setState({
                  imageList: props.imageList ? this.props.imageList : [],
                  currentIndex: props.typeIndex
              }, function () {
  
                  if (props.typeIndex === "") {
  
                      _this.props.callback();
                      document.getElementById("albumPop").style.display = "none";
                      return false;
                  }
                  //let typeIndex=props.typeIndex;
                  var currentIndex = 0;
                  var imageList = props.imageList ? props.imageList : [];
                  if (imageList.length == 0) {
                      _this.props.callback();
                      alert("无影像文件");
                      return false;
                  }
  
                  _this.init({
                      imageList: imageList,
                      currentIndex: currentIndex
                  });
              });
          }
          //父组件PROPS改变
  
      }, {
          key: "init",
          value: function init(options) {
              var _this2 = this;
  
              if (options.imageList[options.currentIndex] == undefined) {
                  this.props.callback();
                  document.getElementById("albumPop").style.display = "none";
                  return false;
              }
  
              this.setState({
                  imageList: options.imageList,
                  currentIndex: options.currentIndex,
                  imageUrl: options.imageList[options.currentIndex].archPath
              }, function () {
                  document.getElementById("albumPop").style.display = "block";
                  _this2.calculatedPosition();
              });
          }
  
          //计算位置
      }, {
          key: "calculatedPosition",
          value: function calculatedPosition() {
              var imgObj = document.getElementById("curImg");
              var imgCount = document.getElementById("imgContent");
              var realWidth = undefined; //真实的宽度
              var realHeight = undefined; //真实的高度
  
              var Img = new Image();
              Img.src = this.state.imageUrl;
              Img.onload = function (e) {
                  /*realWidth = e.path[0].width;
                  realHeight = e.path[0].height;*/
                  realWidth = Img.width;
                  realHeight = Img.height;
                  var _imgWidth = realWidth * 1;
                  var _imgHeight = realHeight * 1;
  
                  var _winWidth = 540 * 1;
                  var _winHeight = 700 * 1;
                  var imgO = document.getElementById("curImg");
                  if (_imgWidth > 0 && _imgHeight > 0) {
  
                      if (_imgWidth / _imgHeight > _winWidth / _winHeight) {
                          if (_imgWidth < _winWidth) {
                              if (_imgWidth == _imgHeight) {
                                  imgO.style.width = _imgWidth + "px";
                                  imgO.style.height = _imgHeight + "px";
                                  imgO.style.marginTop = (imgCount.clientHeight * 1 - _imgHeight * 1) / 2 + "px";
                              } else {
                                  imgO.style.width = _imgWidth + "px";
                                  imgO.style.height = _imgHeight + "px";
                                  imgO.style.marginTop = (imgCount.clientHeight * 1 - _imgHeight * _winWidth / _imgWidth) / 2 + "px";
                              }
                          } else {
                              imgO.style.width = _winWidth + "px";
                              imgO.style.height = _imgHeight * (_winWidth / _imgWidth) + "px";
                              imgO.style.marginTop = (imgCount.clientHeight * 1 - _imgHeight * _winWidth / _imgWidth) / 2 + "px";
                          }
                      } else {
                          if (_imgHeight > _winHeight) {
                              imgO.style.width = _imgWidth * (_winHeight / _imgHeight) + "px";
                              imgO.style.height = _winHeight + "px";
                              imgO.style.marginTop = (imgCount.clientHeight * 1 - _winHeight) / 2 + "px";
                          } else {
                              imgO.style.width = _imgWidth + "px";
                              imgO.style.height = _imgHeight + "px";
                              imgO.style.marginTop = (imgCount.clientHeight * 1 - _imgHeight) / 2 + "px";
                          }
                      }
                      /*if(_imgWidth>0 && _imgHeight>0){
                       console.log(11111111111111);
                       console.log(_imgWidth,_imgHeight,_winWidth,_winHeight);
                       if(_imgWidth/_imgHeight>_winWidth/_winHeight){
                       console.log(2222222222);
                       if(_imgWidth<_winWidth){
                       console.log(3333333333333333);
                       imgO.style.width=_imgWidth+"px";
                       imgO.style.height=_imgHeight*_winWidth/_imgWidth+"px";
                       imgO.style.marginTop=(imgCount.clientHeight*1-(_imgHeight*_winWidth/_imgWidth))/2+"px";
                       }else{
                       console.log(444444444444);
                       imgO.style.width=_winWidth+"px";
                       imgO.style.height=_imgHeight*_winWidth/_imgWidth+"px";
                       imgO.style.marginTop=(imgCount.clientHeight*1-(_imgHeight*_winWidth/_imgWidth))/2+"px";
                       }
                       }else{
                       if(_imgHeight>_winHeight){
                       console.log(55555555555555555);
                       imgO.style.width=_imgWidth*_winHeight/_imgHeight+"px";
                       imgO.style.height=_winHeight+"px";
                       imgO.style.marginTop=(imgCount.clientHeight*1-(_winHeight))/2+"px";
                       }else{
                       console.log(6666666666666666);
                       imgO.style.marginTop=(imgCount.clientHeight*1-(_imgHeight))/2+"px";
                       }
                       }*/
                      /*imgO.style.top="50%";
                       imgO.style.left="50%";*/
                      /* imgO.style.marginTop="-"+_imgHeight/2+"px";
                       imgO.style.marginLeft="-"+(_imgWidth/2)+"px";*/
                  }
              };
          }
  
          //左翻页
      }, {
          key: "leftClick",
          value: function leftClick(e) {
              var _this3 = this;
  
              e.stopPropagation();
              if (this.state.imageList.length == 0 || this.state.imageList.length == 1) {
                  return false;
              }
              if (this.state.currentIndex == 0) {
                  return false;
              }
  
              this.setState({
                  currentIndex: this.state.currentIndex - 1,
                  imageUrl: this.state.imageList[this.state.currentIndex - 1].archPath
              }, function () {
                  _this3.calculatedPosition();
                  console.log('this.state.currentIndex', _this3.state.currentIndex);
                  if (_this3.state.currentIndex == 0) {
                      _this3.setState({
                          left: false
                      });
                  } else {
                      _this3.setState({
                          left: true
                      });
                  }
                  if (_this3.state.currentIndex == _this3.state.imageList.length - 1) {
                      _this3.setState({
                          right: false
                      });
                  } else {
                      _this3.setState({
                          right: true
                      });
                  }
                  return false;
              });
          }
  
          //右翻页
      }, {
          key: "rightClick",
          value: function rightClick(e) {
              var _this4 = this;
  
              e.stopPropagation();
              if (this.state.imageList.length == 0) {
                  return false;
              }
              if (this.state.currentIndex == this.state.imageList.length - 1) {
                  return false;
              }
              this.setState({
                  currentIndex: this.state.currentIndex + 1,
                  imageUrl: this.state.imageList[this.state.currentIndex + 1].archPath
              }, function () {
                  _this4.calculatedPosition();
                  if (_this4.state.currentIndex == 0) {
                      _this4.setState({
                          left: false
                      });
                  } else {
                      _this4.setState({
                          left: true
                      });
                  }
                  console.log('this.state.currentIndex,this.state.imageList.length');
                  console.log(_this4.state.currentIndex == _this4.state.imageList.length - 1);
                  if (_this4.state.currentIndex == _this4.state.imageList.length - 1) {
                      _this4.setState({
                          right: false
                      });
                  } else {
                      _this4.setState({
                          right: true
                      });
                  }
                  return false;
              });
          }
      }, {
          key: "imageClick",
          value: function imageClick(e) {
  
              e.stopPropagation();
              return false;
          }
      }, {
          key: "closePop",
          value: function closePop(e) {
              e.stopPropagation();
              this.props.callback();
              document.getElementById("albumPop").style.display = "none";
          }
      }, {
          key: "render",
          value: function render() {
              return _react2["default"].createElement(
                  "div",
                  { className: "album-pop-content", id: "albumPop", onClick: this.closePop.bind(this) },
                  _react2["default"].createElement("div", { className: "pop" }),
                  _react2["default"].createElement(
                      "div",
                      { className: "image-content" },
                      _react2["default"].createElement(
                          "div",
                          { className: "img-con", id: "imgContent", onClick: this.imageClick.bind(this) },
                          _react2["default"].createElement("div", { className: "left-btn " + (this.state.left ? 'l-btn' : ''),
                              onClick: this.leftClick.bind(this) }),
                          _react2["default"].createElement("img", { id: "curImg", src: this.state.imageUrl }),
                          _react2["default"].createElement("div", { className: "right-btn " + (this.state.right ? 'r-btn' : ''),
                              onClick: this.rightClick.bind(this) })
                      )
                  )
              );
          }
      }]);
  
      return Album;
  })(_react2["default"].Component);
  
  exports["default"] = Album;
  module.exports = exports["default"];
  //# sourceMappingURL=/js/components/admin/public/album.js.map
  

});

;/*!/src/js/components/admin/public/centerTopNav.js*/
define('src/js/components/admin/public/centerTopNav', function(require, exports, module) {

  /**
   * Created by zhangminglei on 2017/3/9.
   *
   * 中间内容 头部组件
   *
   * title="菜单名称" 必传
   * parentList={} //父栏目名字和跳转地址 可以不传  数据结构  [{name:"父栏目名字",url:"/parent"}]
   * leaveCallBack={} //回调函数，点击返回上一页的调用，可以不传,如果传入，讲回调父组件的方法
   * leaveUrl="返回上一页的URL"  可以不传，如果传入则显示上一页 否则不显示上一页
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
  
  var CenterTopNav = (function (_React$Component) {
      _inherits(CenterTopNav, _React$Component);
  
      function CenterTopNav() {
          _classCallCheck(this, CenterTopNav);
  
          _get(Object.getPrototypeOf(CenterTopNav.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(CenterTopNav, [{
          key: 'backUrl',
  
          //跳转之前是否回调
          value: function backUrl(url, fn) {
              if (typeof fn == 'function') {
                  fn();
              } else {
                  _reactRouter.browserHistory.push(url);
              }
          }
  
          //渲染父栏目名称URL
      }, {
          key: 'getParentList',
          value: function getParentList(data) {
              if (data) {
                  var _ret = (function () {
                      var html = [];
                      data.map(function (val, k) {
                          html.push(_react2['default'].createElement(
                              _reactRouter.Link,
                              { key: k, to: val.url },
                              val.name
                          ));
                          html.push(_react2['default'].createElement(
                              'span',
                              { key: k + 's' },
                              '>'
                          ));
                      });
                      return {
                          v: html
                      };
                  })();
  
                  if (typeof _ret === 'object') return _ret.v;
              }
          }
  
          //渲染 返回上一页
      }, {
          key: 'getPrev',
          value: function getPrev(url, fn) {
              if (url || fn) {
                  return _react2['default'].createElement(
                      'div',
                      { className: 'right-cont', style: { display: "inline-block" }, onClick: this.backUrl.bind(this, url, fn) },
                      '返回上一页 >>'
                  );
              }
          }
  
          /*<Link to="/">首页</Link><span>></span>*/
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'center-top-content clearfix' },
                  this.getParentList(this.props.parentList),
                  _react2['default'].createElement(
                      'span',
                      { className: 'title cur' },
                      this.props.title
                  ),
                  this.getPrev(this.props.leaveUrl, this.props.leaveCallBack)
              );
          }
      }]);
  
      return CenterTopNav;
  })(_react2['default'].Component);
  
  exports['default'] = CenterTopNav;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/public/centerTopNav.js.map
  

});

;/*!/src/js/components/admin/public/department.js*/
define('src/js/components/admin/public/department', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/20.
   *
   * 部门树形结构生成
   *
   * 传入数据格式
   * {
      id:4500000,
  	parent:"#",
  	tcode:"1000",
  	text:"宜农科技",
  	type:"业务服务类",
   * }
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var DepartmentTree = (function (_React$Component) {
  	_inherits(DepartmentTree, _React$Component);
  
  	function DepartmentTree(props) {
  		_classCallCheck(this, DepartmentTree);
  
  		_get(Object.getPrototypeOf(DepartmentTree.prototype), "constructor", this).call(this, props);
  		this.state = {
  			data: this.props.departmentData,
  			show: false,
  			tcode: "",
  			inpText: this.props.value == "" ? "请选择" : this.props.value
  		};
  	}
  
  	_createClass(DepartmentTree, [{
  		key: "showList",
  		value: function showList(data) {
  			if (data.length > 0) {
  				var html = [];
  				for (var i = 0; i < data.length; i++) {
  					if (data[i].parent == "#") {
  						html.push(_react2["default"].createElement(
  							"li",
  							{ key: data[i].id },
  							_react2["default"].createElement(
  								"p",
  								{ "data-id": data[i].id },
  								_react2["default"].createElement("i", { className: data[i].isChildOpen ? "yypt-icon-arrowDown" : "yypt-icon-arrowRight", onClick: this.openChild.bind(this, data[i].id) }),
  								_react2["default"].createElement(
  									"span",
  									{ onClick: this.getSelectedText.bind(this, data[i].tcode, data[i].text) },
  									data[i].text
  								)
  							),
  							_react2["default"].createElement(
  								"ul",
  								{ className: "child-ul", style: { display: data[i].isChildOpen ? "block" : "none" } },
  								this.getShowChildrenList(data, data[i].id)
  							)
  						));
  					}
  				}
  				return html;
  			}
  		}
  	}, {
  		key: "getShowChildrenList",
  		value: function getShowChildrenList(data, id) {
  			var html = [];
  			for (var j = 0; j < data.length; j++) {
  
  				if (data[j].parent == id) {
  					if (this.isHasChildren(data[j].id)) {
  						//有子菜单
  						html.push(_react2["default"].createElement(
  							"li",
  							{ key: data[j].id },
  							_react2["default"].createElement(
  								"p",
  								{ "data-id": data[j].id },
  								_react2["default"].createElement("i", { className: data[j].isChildOpen ? "yypt-icon-arrowDown" : "yypt-icon-arrowRight", onClick: this.openChild.bind(this, data[j].id) }),
  								_react2["default"].createElement(
  									"span",
  									{ onClick: this.getSelectedText.bind(this, data[j].tcode, data[j].text) },
  									data[j].text
  								)
  							),
  							_react2["default"].createElement(
  								"ul",
  								{ className: "child-ul", style: { display: data[j].isChildOpen ? "block" : "none" } },
  								this.getShowChildrenList(data, data[j].id)
  							)
  						));
  					} else {
  						//没有子菜单
  						html.push(_react2["default"].createElement(
  							"li",
  							{ key: data[j].id },
  							_react2["default"].createElement(
  								"p",
  								{ "data-id": data[j].id },
  								_react2["default"].createElement("i", null),
  								_react2["default"].createElement(
  									"span",
  									{ onClick: this.getSelectedText.bind(this, data[j].tcode, data[j].text) },
  									data[j].text
  								)
  							)
  						));
  					}
  				}
  			}
  			return html;
  		}
  
  		//判断是否有子部门
  	}, {
  		key: "isHasChildren",
  		value: function isHasChildren(id) {
  			var data = this.props.departmentData;
  			var isChild = false;
  			for (var i = 0; i < data.length; i++) {
  				if (data[i].parent == id) {
  					isChild = true;
  				}
  			}
  			return isChild;
  		}
  
  		//子部门展示隐藏
  	}, {
  		key: "openChild",
  		value: function openChild(id) {
  			var data = this.props.departmentData;
  
  			for (var i = 0; i < data.length; i++) {
  				if (data[i].id == id || data[i].parenet == id) {
  					data[i].isChildOpen = !data[i].isChildOpen;
  					break;
  				}
  			}
  			this.setState({
  				data: data
  			}, function () {
  				//console.log(this.state.data);
  			});
  		}
  
  		//监听状态变化
  	}, {
  		key: "componentWillReceiveProps",
  		value: function componentWillReceiveProps(props) {
  			this.setState({
  				data: props.departmentData,
  				show: false,
  				tcode: "",
  				inpText: props.value == "" ? "请选择" : props.value
  			});
  		}
  
  		//或得点击文案
  	}, {
  		key: "getSelectedText",
  		value: function getSelectedText(tcode, inpText) {
  			this.setState({
  				tcode: tcode,
  				inpText: inpText,
  				show: false
  			});
  			this.props.callBack(tcode, inpText);
  		}
  
  		//展示隐藏tree
  	}, {
  		key: "showTree",
  		value: function showTree() {
  			this.setState({
  				show: !this.state.show
  			});
  		}
  	}, {
  		key: "mouseLeave",
  		value: function mouseLeave() {
  			this.setState({
  				show: false
  			});
  		}
  	}, {
  		key: "render",
  		value: function render() {
  			return _react2["default"].createElement(
  				"div",
  				{ className: "departMent-tree-wrapper", onMouseLeave: this.mouseLeave.bind(this) },
  				_react2["default"].createElement("input", { placeholder: "请选择", onClick: this.showTree.bind(this), readOnly: "readonly", value: this.state.inpText }),
  				_react2["default"].createElement(
  					"div",
  					{ className: "departMent-tree-wrap", style: { display: this.state.show ? "block" : "none" } },
  					_react2["default"].createElement(
  						"ul",
  						{ className: "departMent-tree" },
  						_react2["default"].createElement(
  							"li",
  							null,
  							_react2["default"].createElement(
  								"p",
  								null,
  								_react2["default"].createElement("i", null),
  								_react2["default"].createElement(
  									"span",
  									{ onClick: this.getSelectedText.bind(this, "", "请选择") },
  									"请选择"
  								)
  							)
  						),
  						this.showList(this.props.departmentData)
  					)
  				)
  			);
  		}
  	}]);
  
  	return DepartmentTree;
  })(_react2["default"].Component);
  
  exports["default"] = DepartmentTree;
  module.exports = exports["default"];
  //# sourceMappingURL=/js/components/admin/public/department.js.map
  

});

;/*!/src/js/components/admin/public/pageLoading.js*/
define('src/js/components/admin/public/pageLoading', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/1.
   *
   * 公共页面加载
   * 传入参数 showLoading  false隐藏  true显示
   */
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var PageLoading = (function (_React$Component) {
      _inherits(PageLoading, _React$Component);
  
      function PageLoading() {
          _classCallCheck(this, PageLoading);
  
          _get(Object.getPrototypeOf(PageLoading.prototype), "constructor", this).call(this);
          this.state = {
              showLoading: false
          };
      }
  
      _createClass(PageLoading, [{
          key: "componentDidMount",
          value: function componentDidMount() {
              this.setState({
                  showLoading: this.props.showLoading
              }, function () {});
          }
      }, {
          key: "componentWillReceiveProps",
          value: function componentWillReceiveProps(props) {
              this.setState({
                  showLoading: props.showLoading
              }, function () {});
          }
          //父组件PROPS改变
  
      }, {
          key: "render",
          value: function render() {
  
              return _react2["default"].createElement(
                  "div",
                  { className: "page-loading", style: { "display": this.state.showLoading ? "block" : "none" } },
                  _react2["default"].createElement("div", { className: "loading-cont" })
              );
          }
      }]);
  
      return PageLoading;
  })(_react2["default"].Component);
  
  exports["default"] = PageLoading;
  module.exports = exports["default"];
  //# sourceMappingURL=/js/components/admin/public/pageLoading.js.map
  

});

;/*!/src/js/components/admin/public/pagination.js*/
define('src/js/components/admin/public/pagination', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/1.
   *
   * 公用分页
   * 传入参数 当前页curPage  总条数totalNumber 每页显示多少条pageLimt 分页点击回调 pageClick
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
  
  var Pagination = (function (_React$Component) {
      _inherits(Pagination, _React$Component);
  
      function Pagination() {
          _classCallCheck(this, Pagination);
  
          _get(Object.getPrototypeOf(Pagination.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(Pagination, [{
          key: 'clickHandle',
  
          //导航点击
          value: function clickHandle(f, n, p) {
  
              typeof f == "function" && f(n, p);
          }
      }, {
          key: 'pageRender',
          value: function pageRender(options) {
              var navHtml = [],
                  pageNav = 10;
              var totalPage = Math.ceil(options.totalNumber / options.pageLimt);
              //上一页，首页
              navHtml.push(this.firstPrev(options));
  
              if (totalPage <= pageNav) {
                  //总页数小于等于导航页码10
                  for (var i = 1; i <= totalPage; i++) {
                      navHtml.push(_react2['default'].createElement(
                          'span',
                          { key: i, className: options.curPage == i ? 'curr' : 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, i, options.pageLimt) },
                          i
                      ));
                  }
              } else {
                  //总页数大于导航页码
                  if (options.curPage > 6 && options.curPage - 5 > 0) {
                      for (var i = options.curPage - 5; i < options.curPage; i++) {
                          navHtml.push(_react2['default'].createElement(
                              'span',
                              { key: i, className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, i, options.pageLimt) },
                              i
                          ));
                      }
                  } else {
                      for (var i = 1; i < options.curPage; i++) {
                          navHtml.push(_react2['default'].createElement(
                              'span',
                              { key: i, className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, i, options.pageLimt) },
                              i
                          ));
                      }
                  }
  
                  navHtml.push(_react2['default'].createElement(
                      'span',
                      { key: options.curPage, className: 'curr' },
                      options.curPage
                  ));
  
                  if (options.curPage > 6 && options.curPage + 4 > totalPage) {
                      for (var i = options.curPage + 1; i <= totalPage; i++) {
                          navHtml.push(_react2['default'].createElement(
                              'span',
                              { key: i, className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, i, options.pageLimt) },
                              i
                          ));
                      }
                  } else {
                      for (var i = options.curPage + 1; i <= (options.curPage + 4 > 10 ? options.curPage + 4 : 10); i++) {
                          navHtml.push(_react2['default'].createElement(
                              'span',
                              { key: i, className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, i, options.pageLimt) },
                              i
                          ));
                      }
                  }
              }
  
              //下一页尾页
              navHtml.push(this.endNext(options));
  
              var returnHTml = [];
              //页码信息
              returnHTml.push(this.pageText(options));
              returnHTml.push(_react2['default'].createElement(
                  'div',
                  { className: 'page-show-left', key: 'div' },
                  navHtml
              ));
              return returnHTml;
          }
  
          //上一页首页样式
      }, {
          key: 'firstPrev',
          value: function firstPrev(options) {
              var html = [];
              if (options.curPage == 1) {
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'first', className: 'disable-hover' },
                      '首页'
                  ));
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'prev', className: 'disable-hover' },
                      '上一页'
                  ));
              } else {
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'first', className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, 1, options.pageLimt) },
                      '首页'
                  ));
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'prev', className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, options.curPage - 1, options.pageLimt) },
                      '上一页'
                  ));
              }
              return html;
          }
  
          //下一页尾页
      }, {
          key: 'endNext',
          value: function endNext(options) {
              var html = [];
              var totalPage = Math.ceil(options.totalNumber / options.pageLimt);
              if (options.curPage == totalPage || totalPage == 0) {
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'next', className: 'disable-hover' },
                      '下一页'
                  ));
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'end', className: 'disable-hover' },
                      '尾页'
                  ));
              } else {
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'next', className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, options.curPage + 1, options.pageLimt) },
                      '下一页'
                  ));
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'end', className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, totalPage, options.pageLimt) },
                      '尾页'
                  ));
              }
              return html;
          }
  
          //页码信息
      }, {
          key: 'pageText',
          value: function pageText(options) {
              return _react2['default'].createElement(
                  'span',
                  { className: 'page-info', key: 'pageText' },
                  '每页',
                  this.pageSizeSelect(options.pageLimt),
                  '条　　当前',
                  options.curPage,
                  '/',
                  Math.ceil(options.totalNumber / options.pageLimt),
                  '页　　共',
                  options.totalNumber,
                  '条数据'
              );
          }
  
          //选择PAGESIZE
      }, {
          key: 'pageSizeSelect',
          value: function pageSizeSelect(n) {
              return _react2['default'].createElement(
                  'select',
                  { value: n, onChange: this.selectPage.bind(this) },
                  _react2['default'].createElement(
                      'option',
                      { key: 10, value: '10' },
                      '10'
                  ),
                  _react2['default'].createElement(
                      'option',
                      { key: 20, value: '20' },
                      '20'
                  ),
                  _react2['default'].createElement(
                      'option',
                      { key: 50, value: '50' },
                      '50'
                  ),
                  _react2['default'].createElement(
                      'option',
                      { key: 100, value: '100' },
                      '100'
                  )
              );
          }
  
          //选择页码事件
      }, {
          key: 'selectPage',
          value: function selectPage(e) {
              var n = e.target.value;
              this.clickHandle(this.props.pageClick, 1, n);
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'pagination-wrap clearfix' },
                  this.pageRender({
                      curPage: this.props.curPage ? this.props.curPage : 1,
                      pageLimt: this.props.pageLimt ? this.props.pageLimt : 10,
                      totalNumber: this.props.totalNumber ? this.props.totalNumber : 0,
                      clickCallBack: this.props.pageClick ? this.props.pageClick : null
                  })
              );
          }
      }]);
  
      return Pagination;
  })(_react2['default'].Component);
  
  exports['default'] = Pagination;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/public/pagination.js.map
  

});

;/*!/src/js/components/admin/public/plugTableLoading.js*/
define('src/js/components/admin/public/plugTableLoading', function(require, exports, module) {

  /**
   * Created by ex-wangxin on 2017/4/20.
   *
   * 例子：<PlugTableLoading status={_that.props.customerInfoLoanQuery.tbodyList} colSpanCount='7' classNameEnter=""/>;
   * status ajax 加载状态   loading 加载中  success加载成功  fail 加载失败  nothing暂无数据
   * colSpanCount 合并列数
   * classNameEnter 传入的class 名称    可为空
   *
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
  
  var PlugTableLoading = (function (_React$Component) {
      _inherits(PlugTableLoading, _React$Component);
  
      function PlugTableLoading(props) {
          _classCallCheck(this, PlugTableLoading);
  
          _get(Object.getPrototypeOf(PlugTableLoading.prototype), 'constructor', this).call(this, props);
          /*this.state={
              show:false
          }*/
      }
  
      _createClass(PlugTableLoading, [{
          key: 'componentDidMount',
          value: function componentDidMount() {}
      }, {
          key: 'creatInnerHtml',
          value: function creatInnerHtml(status) {
              var innerHtml = [];
              //loading 加载中  success加载成功  fail 加载失败  nothing暂无数据
              if (status == 'loading') {
                  innerHtml.push(_react2['default'].createElement(
                      'td',
                      { key: '0', colSpan: this.props.colSpanCount },
                      _react2['default'].createElement('span', null)
                  ));
              } else if (status == 'fail') {
                  innerHtml.push(_react2['default'].createElement(
                      'td',
                      { key: '0', className: 'fail-color', colSpan: this.props.colSpanCount },
                      '数据请求失败'
                  ));
              } else if (status == 'nothing') {
                  innerHtml.push(_react2['default'].createElement(
                      'td',
                      { key: '0', className: 'fail-color', colSpan: this.props.colSpanCount },
                      '暂无数据'
                  ));
              }
              return innerHtml;
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'tr',
                  { className: 'plug-table-loading ' + this.props.classNameEnter },
                  this.creatInnerHtml(this.props.status)
              );
          }
      }]);
  
      return PlugTableLoading;
  })(_react2['default'].Component);
  
  exports['default'] = PlugTableLoading;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/public/plugTableLoading.js.map
  

});

;/*!/src/js/components/admin/public/reportFormTable.js*/
define('src/js/components/admin/public/reportFormTable', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 报表公共表格生成组件
   *
   * 传入表头，数据源DATA，
   *
   * 调用插件方式 < ReportFormTable width="" colspan=12 status="" dataList={...} titleList={...}  />
   *
   * width 可以设置表格宽度,默认100%，可以不传
   *
   * status 设置表格数据加载状态，默认为加载中,必传
   *
   * colspan 设置加载状态占满多少个表格行，否则默认1行，样式不美观，必传
   *
   * dataList 类型 array  例如[{name:'11'},{name:222}]
   *
   * titleList 类型 array  例如 [{title:"名称",type:"name",addClass:["red","blue"],htmlType:"button"},{title:"城市",type:'city'}]
   * 参数说明
   * {
   *  title:"名称",//标题名称，必传
   *  type:"name",//标题对应的KEY，必传
   *  addClass:["red","blue"],//TD的CLASS，为数组类型，默认可以不传
   *  htmlType:[{type:"a",text:"",addClass:[],callBack:null,param:key,bindType:key}],//标签类型，默认为文字，可不传
   *  type指定标签类型,a,button,span,
   *  text指定标签是否含有文字
   *  addClass指定标签是否含有CLASS
   *  callBack指定回调函数
   *  param指定回调函数里返回的参数
   *  bindType给标签 增加属性，这个属性的值，为该行的td的某个值，
   *  format:"" //格式化单位，针对数字千分位，金额千分位等  提供2种方法(number|money)，如需增加方法，可以自己添加
   *  parent:"站点类型"//是否有父标题，默认可以不传,
   *  colspan:1,//设置列,非必传
   *  rowspan:1,//设置行，非必传
   *  }
   *
   * 如果需要一个表头合并多个标题  [{name:"名称",parent:"站点类型"},{city:"城市",parent:"站点类型"}]
   * titleList 每个KEY 对应的值，会去对应dataList里每个KEY，这样才能一一对应生成标题对应所在单元格的值，请勿顺序传错
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
  
  var _plugTableLoading = require('src/js/components/admin/public/plugTableLoading');
  
  var _plugTableLoading2 = _interopRequireDefault(_plugTableLoading);
  
  var accounting = require('../../untils/accounting');
  
  var ReportFormTable = (function (_React$Component) {
      _inherits(ReportFormTable, _React$Component);
  
      function ReportFormTable() {
          _classCallCheck(this, ReportFormTable);
  
          _get(Object.getPrototypeOf(ReportFormTable.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(ReportFormTable, [{
          key: 'creatHead',
  
          //渲染表头
          value: function creatHead() {
              var title = this.props.titleList;
              var isHasParent = false;
              var html = [],
                  childrenHtml = [],
                  temp_title = '';
  
              for (var i = 0; i < title.length; i++) {
                  var _name = title[i].title;
                  //判断是否含有父标题
                  if (title[i].parent) {
                      isHasParent = true;
                      _name = title[i].parent;
                      //判断单元格父标提是否一样，一样不输出TH
                      if (temp_title == title[i].parent) {
                          continue;
                      } else {
                          temp_title = title[i].parent;
                      }
                  } else {
                      temp_title = '';
                  }
                  //如果传有colspan或rowspan 设置
                  if (title[i].colspan) {
                      html.push(_react2['default'].createElement(
                          'th',
                          { className: 'text-c', colSpan: title[i].colspan, key: i },
                          _name
                      ));
                  } else if (title[i].rowspan) {
                      html.push(_react2['default'].createElement(
                          'th',
                          { rowSpan: title[i].rowspan, key: i },
                          _name
                      ));
                  } else {
                      html.push(_react2['default'].createElement(
                          'th',
                          { key: i },
                          _name
                      ));
                  }
              }
  
              if (isHasParent) {
                  for (var i = 0; i < title.length; i++) {
                      //判断是否含有父标题
                      if (title[i].parent) {
                          childrenHtml.push(_react2['default'].createElement(
                              'th',
                              { key: i },
                              title[i].title
                          ));
                      }
                  }
              }
  
              if (childrenHtml.length > 0) {
                  return _react2['default'].createElement(
                      'thead',
                      null,
                      _react2['default'].createElement(
                          'tr',
                          null,
                          html
                      ),
                      _react2['default'].createElement(
                          'tr',
                          null,
                          childrenHtml
                      )
                  );
              } else {
                  return _react2['default'].createElement(
                      'thead',
                      null,
                      _react2['default'].createElement(
                          'tr',
                          null,
                          html
                      )
                  );
              }
          }
  
          //渲染内容
      }, {
          key: 'creatBody',
          value: function creatBody() {
              var data = this.props.dataList;
              var html = [];
              for (var i = 0; i < data.length; i++) {
                  html.push(_react2['default'].createElement(
                      'tr',
                      { key: i },
                      this.getData(data[i])
                  ));
              }
              //如果有合计数据 并且 showTotal为true显示
              if (this.props.totalData && this.props.showTotal) {
                  html.push(_react2['default'].createElement(
                      'tr',
                      { key: 'total' },
                      _react2['default'].createElement(
                          'td',
                          null,
                          '合计'
                      ),
                      this.getTotal()
                  ));
              }
              return html;
          }
  
          //生成合计 样式数据
      }, {
          key: 'getTotal',
          value: function getTotal() {
              var html = [];
              for (var i = 0; i < this.props.totalTitle.length; i++) {
                  html.push(_react2['default'].createElement(
                      'td',
                      { className: 'text-r', key: i },
                      this.props.totalTitle[i].type ? this.props.totalTitle[i].format ? this.format(this.props.totalTitle[i].format, this.props.totalData[this.props.totalTitle[i].type]) : this.props.totalData[this.props.totalTitle[i].type] : ''
                  ));
              }
              return html;
          }
  
          //根据TITLE里的KEY，生成对应的TD值
      }, {
          key: 'getData',
          value: function getData(data) {
              var title = this.props.titleList;
              var html = [];
              for (var i = 0; i < title.length; i++) {
                  if (title[i].htmlType) {
                      html.push(_react2['default'].createElement(
                          'td',
                          { key: i, className: title[i].addClass && this.getClass(title[i].addClass) },
                          this.getChildrenTd(title[i], data)
                      ));
                  } else {
                      html.push(_react2['default'].createElement(
                          'td',
                          { key: i, 'data-show': data[title[i].type], className: title[i].addClass && this.getClass(title[i].addClass) },
                          title[i].format ? this.format(title[i].format, data[title[i].type]) : data[title[i].type]
                      ));
                  }
              }
              return html;
          }
  
          //根据htmlType生成对应的标签按钮
      }, {
          key: 'getChildrenTd',
          value: function getChildrenTd(arr, data) {
              var html = [];
              for (var i = 0; i < arr.htmlType.length; i++) {
                  if (typeof arr.htmlType[i].callBack != 'function') {
                      arr.htmlType[i].callBack = function () {};
                  }
                  switch (arr.htmlType[i].type) {
                      case "a":
                          html.push(_react2['default'].createElement(
                              'a',
                              { key: i, 'data-show': arr.htmlType[i].bindType ? data[arr.htmlType[i].bindType] : '', onClick: arr.htmlType[i].callBack.bind(this, data[arr.htmlType[i].param]), className: arr.htmlType[i].addClass && this.getClass(arr.htmlType[i].addClass) },
                              arr.htmlType[i].text ? arr.htmlType[i].text : ''
                          ));
                          break;
                      case "button":
                          html.push(_react2['default'].createElement(
                              'button',
                              { key: i, 'data-show': arr.htmlType[i].bindType ? data[arr.htmlType[i].bindType] : '', onClick: arr.htmlType[i].callBack.bind(this, data[arr.htmlType[i].param]), className: arr.htmlType[i].addClass && this.getClass(arr.htmlType[i].addClass) },
                              arr.htmlType[i].text ? arr.htmlType[i].text : ''
                          ));
                          break;
                      case "span":
                          html.push(_react2['default'].createElement(
                              'span',
                              { key: i, 'data-show': arr.htmlType[i].bindType ? data[arr.htmlType[i].bindType] : '', onClick: arr.htmlType[i].callBack.bind(this, data[arr.htmlType[i].param]), className: arr.htmlType[i].addClass && this.getClass(arr.htmlType[i].addClass) },
                              arr.htmlType[i].text ? arr.htmlType[i].text : ''
                          ));
                          break;
                      default:
                          break;
                  }
              }
              return html;
          }
      }, {
          key: 'format',
          value: function format(key, value) {
              //key 为空或者Null
              if (value === '' || value == 'null' || value == 'undefined' || value == "-") {
                  return value;
              }
  
              switch (key) {
                  //整数千分位
                  case "number":
                      return accounting.formatNumber(value);
                  //金额格式化千分位
                  case "money":
                      return accounting.formatMoney(value, "");
                  //数据百分比
                  case "percent":
                      return value + '%';
                  default:
                      return value;
              }
          }
  
          //返回TD CLASS
      }, {
          key: 'getClass',
          value: function getClass(val) {
              if (val) {
                  return val.join(' ');
              }
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'table',
                  { style: { width: this.props.width ? this.props.width : "100%" } },
                  this.creatHead(),
                  _react2['default'].createElement(
                      'tbody',
                      null,
                      this.props.status != "success" ? _react2['default'].createElement(_plugTableLoading2['default'], { colSpanCount: this.props.colspan, status: this.props.status }) : this.creatBody()
                  )
              );
          }
      }]);
  
      return ReportFormTable;
  })(_react2['default'].Component);
  
  exports['default'] = ReportFormTable;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/public/reportFormTable.js.map
  

});

;/*!/src/js/components/admin/public/selectBox.js*/
define('src/js/components/admin/public/selectBox', function(require, exports, module) {

  /**
   * Created by ex-wangxin on 2017/4/13.
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
  
  /*import {siteAppicationHandle} from '../../../actions/helpLoan/qualExam/siteAppication';*/
  
  var selectBox = (function (_React$Component) {
      _inherits(selectBox, _React$Component);
  
      function selectBox(props) {
          _classCallCheck(this, selectBox);
  
          _get(Object.getPrototypeOf(selectBox.prototype), 'constructor', this).call(this, props);
          this.state = {
              show: false
          };
      }
  
      _createClass(selectBox, [{
          key: 'componentDidMount',
          value: function componentDidMount() {}
      }, {
          key: 'optionClick',
          value: function optionClick(item, name) {
              this.setState({
                  show: false
              });
              this.props.callBack(item, name);
          }
      }, {
          key: 'createOption',
          value: function createOption(list) {
              var optionList = [];
              //list=[{value:'beijing',name:'北京'},{value:'shanghai',name:'上海'},{value:'guangzhou',name:'广州'}];
              for (var i in list) {
                  optionList.push(_react2['default'].createElement(
                      'p',
                      { key: i, onClick: this.optionClick.bind(this, list[i].value, list[i].name) },
                      list[i].name
                  ));
              }
              return optionList;
          }
  
          //显示选中项
      }, {
          key: 'showValue',
          value: function showValue(value, list) {
              for (var i = 0; i < list.length; i++) {
                  if (list[i].value == value) {
                      return list[i].name;
                  }
              }
          }
  
          //select 框点击事件
      }, {
          key: 'selectClick',
          value: function selectClick() {
              var show = this.state.show;
              if (show) {
                  this.setState({
                      show: false
                  });
              } else {
                  this.setState({
                      show: true
                  });
              }
          }
      }, {
          key: 'mouseLeave',
          value: function mouseLeave() {
              this.setState({
                  show: false
              });
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'select-box-wap role-name', onMouseLeave: this.mouseLeave.bind(this) },
                  _react2['default'].createElement(
                      'div',
                      { className: 'select-top', onClick: this.selectClick.bind(this) },
                      this.showValue(this.props.value, this.props.list),
                      _react2['default'].createElement(
                          'i',
                          null,
                          ' '
                      )
                  ),
                  _react2['default'].createElement(
                      'div',
                      { className: 'select-option', style: { display: this.state.show ? 'block' : 'none' } },
                      this.createOption(this.props.list)
                  )
              );
          }
      }]);
  
      return selectBox;
  })(_react2['default'].Component);
  
  exports['default'] = selectBox;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/public/selectBox.js.map
  

});

;/*!/src/js/components/admin/public/tableList.js*/
define('src/js/components/admin/public/tableList', function(require, exports, module) {

  /**
   * Created by ex-wangxin on 2017/4/5. 表格插件
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
  
  /*import {siteAppicationHandle} from '../../../actions/helpLoan/qualExam/siteAppication';*/
  
  var tableList = (function (_React$Component) {
      _inherits(tableList, _React$Component);
  
      function tableList() {
          _classCallCheck(this, tableList);
  
          _get(Object.getPrototypeOf(tableList.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(tableList, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
              //console.log(this.props);//取参数
          }
      }, {
          key: 'tableThead',
          value: function tableThead(list, sortList) {
              var thead = [];
              list.map(function (item, i) {
                  thead.push(_react2['default'].createElement(
                      'th',
                      { key: i },
                      item[sortList[i]]
                  ));
              });
              return thead;
          }
      }, {
          key: 'tableTbody',
          value: function tableTbody(list, sortList) {
              var tbody = [];
              for (var i = 0; i < list.length; i++) {
                  var td = [];
                  for (var j = 0; j < sortList.length; j++) {
                      if (list[i][sortList[j]] instanceof Object) {
                          if (list[i][sortList[j]].type == 'jumpUrl') {
                              //点击跳转类型
                              td.push(_react2['default'].createElement(
                                  'td',
                                  { key: j + i },
                                  ' ',
                                  list[i][sortList[j]]
                              ));
                          } else if (list[i][sortList[j]].type == 'colors') {
                              //颜色变换类型
                              td.push(_react2['default'].createElement(
                                  'td',
                                  { key: j + i, className: list[i][sortList[j]].colors },
                                  list[i][sortList[j]].text
                              ));
                          } else if (list[i][sortList[j]].type == 'btnDeal') {
                              //添加按钮类型
                              td.push(_react2['default'].createElement(
                                  'td',
                                  { key: j + i },
                                  _react2['default'].createElement(
                                      'a',
                                      { href: 'javascript:;', className: list[i][sortList[j]].className,
                                          onClick: list[i][sortList[j]].callBack },
                                      list[i][sortList[j]].text
                                  )
                              ));
                          } else {}
                          /*if (sortList[j] == 'deal') {//加 处理按钮
                           td.push(
                           <td key={j + i}>
                           <a href="javascript:;" className={list[i][sortList[j]].className}
                           onClick={list[i][sortList[j]].callBack}>
                           {list[i][sortList[j]].text}
                           </a>
                           </td>
                           );
                           } else if(sortList[j] == 'tableJumpName'){//加 点击跳转链接
                           td.push(
                           <td key={j + i}> {list[i][sortList[j]]}</td>
                           );
                           }else if(sortList[j] == 'tableJumpId'){//加 点击跳转链接
                           td.push(
                           <td key={j + i}> {list[i][sortList[j]]}</td>
                           );
                           }else {//相应字段颜色变化
                           td.push(
                           <td key={j + i} className={list[i][sortList[j]].colors}>{list[i][sortList[j]].text}</td>
                           );
                           }*/
                      } else {
                              td.push(_react2['default'].createElement(
                                  'td',
                                  { key: j + i },
                                  list[i][sortList[j]]
                              ));
                          }
                  }
                  tbody.push(_react2['default'].createElement(
                      'tr',
                      { key: i },
                      td
                  ));
              }
              return tbody;
          }
      }, {
          key: 'thead',
          value: function thead(theadList) {
              var sortList = [];
              for (var i = 0; i < theadList.length; i++) {
                  for (var keys in theadList[i]) {
                      sortList.push(keys);
                  }
              }
              return sortList;
          }
      }, {
          key: 'render',
          value: function render() {
              var sortList = this.thead(this.props.dataD.theadList);
              var thead = this.tableThead(this.props.dataD.theadList, sortList);
              var tbody = this.tableTbody(this.props.dataD.tbodyList, sortList);
              return _react2['default'].createElement(
                  'table',
                  { className: 'table-list' },
                  _react2['default'].createElement(
                      'thead',
                      null,
                      _react2['default'].createElement(
                          'tr',
                          null,
                          thead
                      )
                  ),
                  _react2['default'].createElement(
                      'tbody',
                      null,
                      tbody
                  )
              );
          }
      }]);
  
      return tableList;
  })(_react2['default'].Component);
  
  exports['default'] = tableList;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/public/tableList.js.map
  

});

;/*!/src/js/components/admin/public/tree.js*/
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

;/*!/src/js/components/admin/reportForm/exportButton.js*/
define('src/js/components/admin/reportForm/exportButton', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/5/5.
   *
   * 报表导出按钮权限功能按钮
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var ExportBotton = (function (_React$Component) {
      _inherits(ExportBotton, _React$Component);
  
      function ExportBotton() {
          _classCallCheck(this, ExportBotton);
  
          _get(Object.getPrototypeOf(ExportBotton.prototype), "constructor", this).apply(this, arguments);
      }
  
      _createClass(ExportBotton, [{
          key: "returnBtn",
          value: function returnBtn() {
              if (this.props.data) {
                  return _react2["default"].createElement(
                      "button",
                      { onClick: this.props.clickBack.bind(this) },
                      "导出"
                  );
              }
          }
      }, {
          key: "render",
          value: function render() {
              return _react2["default"].createElement(
                  "div",
                  { className: "right" },
                  this.returnBtn()
              );
          }
      }]);
  
      return ExportBotton;
  })(_react2["default"].Component);
  
  exports["default"] = ExportBotton;
  module.exports = exports["default"];
  //# sourceMappingURL=/js/components/admin/reportForm/exportButton.js.map
  

});

;/*!/src/js/components/admin/reportForm/regional.js*/
define('src/js/components/admin/reportForm/regional', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/5/3.
   *
   * 根据权限来展示地区选项
   *
   * 如果是员工，则不能查看任何选项，如果是市长，只能查看市，县，省长和其他职位则是全部都能看到省市区县
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
  
  var _publicSelectBox = require('src/js/components/admin/public/selectBox');
  
  var _publicSelectBox2 = _interopRequireDefault(_publicSelectBox);
  
  var Regional = (function (_React$Component) {
      _inherits(Regional, _React$Component);
  
      function Regional() {
          _classCallCheck(this, Regional);
  
          _get(Object.getPrototypeOf(Regional.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(Regional, [{
          key: 'getHtml',
          value: function getHtml() {
              var html = [];
              switch (this.props.identity) {
  
                  //省长以及以上，还有没职位的都可以看到所有选项
                  default:
                      html.push(_react2['default'].createElement(
                          'li',
                          { key: 'provinceList' },
                          _react2['default'].createElement(
                              'span',
                              null,
                              '省份:'
                          ),
                          _react2['default'].createElement(_publicSelectBox2['default'], {
                              callBack: this.props.selectClick.bind(this, 1),
                              value: this.props.provinceVal,
                              list: this.props.provinceList
                          })
                      ));
                      html.push(_react2['default'].createElement(
                          'li',
                          { key: 'cityList' },
                          _react2['default'].createElement(
                              'span',
                              null,
                              '市:'
                          ),
                          _react2['default'].createElement(_publicSelectBox2['default'], {
                              callBack: this.props.selectClick.bind(this, 2),
                              value: this.props.cityVal,
                              list: this.props.cityList
                          })
                      ));
                      html.push(_react2['default'].createElement(
                          'li',
                          { key: 'countyList' },
                          _react2['default'].createElement(
                              'span',
                              null,
                              '区县:'
                          ),
                          _react2['default'].createElement(_publicSelectBox2['default'], {
                              callBack: this.props.selectClick.bind(this, 3),
                              value: this.props.countyVal,
                              list: this.props.countyList
                          })
                      ));
                      break;
              }
              return html;
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  null,
                  this.getHtml()
              );
          }
      }]);
  
      return Regional;
  })(_react2['default'].Component);
  
  exports['default'] = Regional;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/reportForm/regional.js.map
  

});

;/*!/src/js/components/admin/reportForm/viewSummary.js*/
define('src/js/components/admin/reportForm/viewSummary', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/5/9.
   *
   * 显示汇总，省长 能查看 省市县，市长只能查看市县,
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
  
  var _publicSelectBox = require('src/js/components/admin/public/selectBox');
  
  var _publicSelectBox2 = _interopRequireDefault(_publicSelectBox);
  
  var ViewSummary = (function (_React$Component) {
      _inherits(ViewSummary, _React$Component);
  
      function ViewSummary() {
          _classCallCheck(this, ViewSummary);
  
          _get(Object.getPrototypeOf(ViewSummary.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(ViewSummary, [{
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'li',
                  null,
                  _react2['default'].createElement(
                      'span',
                      null,
                      '汇总层级:'
                  ),
                  _react2['default'].createElement(_publicSelectBox2['default'], {
                      callBack: this.props.selectClick.bind(this, 5),
                      value: this.props.value,
                      list: this.props.list
                  })
              );
          }
      }]);
  
      return ViewSummary;
  })(_react2['default'].Component);
  
  exports['default'] = ViewSummary;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/reportForm/viewSummary.js.map
  

});

;/*!/src/js/components/admin/user/selectPeople.js*/
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

;/*!/src/js/containers/admin/meun/index.js*/
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

;/*!/src/js/containers/admin/reportForm/bankAllDataDay.js*/
define('src/js/containers/admin/reportForm/bankAllDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 全辖银行业务常规数据汇总报表-日
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
  
  var _componentsPublicCenterTopNav = require('../../components/public/centerTopNav');
  
  var _componentsPublicCenterTopNav2 = _interopRequireDefault(_componentsPublicCenterTopNav);
  
  var _componentsPublicPagination = require('../../components/public/pagination');
  
  var _componentsPublicPagination2 = _interopRequireDefault(_componentsPublicPagination);
  
  var _actionsDialog = require('../../actions/dialog');
  
  var _actionsReportFormPublicCommon = require('../../actions/reportForm/public/common');
  
  var _actionsReportFormBankAllDataDay = require('../../actions/reportForm/bankAllDataDay');
  
  var _componentsPublicSelectBox = require('../../components/public/selectBox');
  
  var _componentsPublicSelectBox2 = _interopRequireDefault(_componentsPublicSelectBox);
  
  var _componentsPublicReportFormTable = require('../../components/public/reportFormTable');
  
  var _componentsPublicReportFormTable2 = _interopRequireDefault(_componentsPublicReportFormTable);
  
  var _componentsReportFormRegional = require('../../components/reportForm/regional');
  
  var _componentsReportFormRegional2 = _interopRequireDefault(_componentsReportFormRegional);
  
  var _componentsReportFormExportButton = require('../../components/reportForm/exportButton');
  
  var _componentsReportFormExportButton2 = _interopRequireDefault(_componentsReportFormExportButton);
  
  var _componentsReportFormViewSummary = require('../../components/reportForm/viewSummary');
  
  var _componentsReportFormViewSummary2 = _interopRequireDefault(_componentsReportFormViewSummary);
  
  var bankAllDataDayMain = (function (_React$Component) {
      _inherits(bankAllDataDayMain, _React$Component);
  
      function bankAllDataDayMain() {
          _classCallCheck(this, bankAllDataDayMain);
  
          _get(Object.getPrototypeOf(bankAllDataDayMain.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(bankAllDataDayMain, [{
          key: 'selectClick',
          value: function selectClick(id, val, name) {
              switch (id) {
                  case 1:
                      this.props._bankAllDataDayHandle({
                          province: { val: val, name: name },
                          city: { val: '', name: '' }, //选中的城市
                          county: { val: '', name: '' } //选中的县
                      });
  
                      if (val == '') {
                          //用户选择全部的情况
  
                          //重置市县区
                          this.props._reportFormCommonHandle({
                              cityList: [],
                              countyList: []
                          });
                      } else {
                          //重置县区
                          this.props._reportFormCommonHandle({
                              countyList: []
                          });
                          //更新城市数据
                          this.props._queryCity({
                              provinceCode: val,
                              reportName: "bankbizRoutine"
                          });
                      }
  
                      break;
                  case 2:
                      this.props._bankAllDataDayHandle({
                          city: { val: val, name: name },
                          county: { val: '', name: '' } //选中的县
                      });
                      if (val == '') {
                          //用户选择全部的情况
  
                          //重置县区
                          this.props._reportFormCommonHandle({
                              countyList: []
                          });
                      } else {
                          //更新县区数据
                          this.props._queryCounty({
                              cityCode: val,
                              reportName: "bankbizRoutine"
                          });
                      }
  
                      break;
                  case 3:
                      this.props._bankAllDataDayHandle({
                          county: { val: val, name: name }
                      });
                      break;
                  case 4:
                      this.props._bankAllDataDayHandle({
                          bank: val
                      });
                      break;
                  case 5:
                      this.props._bankAllDataDayHandle({
                          summary: val
                      });
                      break;
                  default:
                      break;
              }
          }
      }, {
          key: 'showProvince',
          value: function showProvince() {
              var arr = [{ value: "", name: "全部" }];
              var temp_arr = [];
              this.props.reportFormCommon.provinceList.map(function (val, key) {
                  temp_arr.push({ value: val.districtCode, name: val.districtName });
              });
              return arr.concat(temp_arr);
          }
      }, {
          key: 'showCity',
          value: function showCity() {
              var arr = [{ value: "", name: "全部" }];
              var temp_arr = [];
              this.props.reportFormCommon.cityList.map(function (val, key) {
                  temp_arr.push({ value: val.districtCode, name: val.cityName });
              });
              return arr.concat(temp_arr);
          }
      }, {
          key: 'showCounty',
          value: function showCounty() {
              var arr = [{ value: "", name: "全部" }];
              var temp_arr = [];
              this.props.reportFormCommon.countyList.map(function (val, key) {
                  temp_arr.push({ value: val.districtCode, name: val.countyName });
              });
              return arr.concat(temp_arr);
          }
      }, {
          key: 'showBank',
          value: function showBank() {
              var arr = [{ value: "", name: "全部" }];
              var temp_arr = [];
              this.props.reportFormCommon.bankList.map(function (val, key) {
                  temp_arr.push({ value: val.bankTypeCode, name: val.bankTypeName });
              });
              return arr.concat(temp_arr);
          }
      }, {
          key: 'showSummary',
          value: function showSummary() {
              var temp_arr = [{ value: 1, name: "省级" }, { value: 2, name: "市级" }, { value: 3, name: "县级" }];
              if (this.checkIsCity()) {
                  temp_arr = [{ value: 2, name: "市级" }, { value: 3, name: "县级" }];
              }
              return temp_arr;
          }
      }, {
          key: 'pageNavClick',
          value: function pageNavClick(curPage, pageSize, options) {
  
              if (curPage == Math.ceil(this.props.bankAllDataDay.totalSize / pageSize)) {
                  //当前是最后一页
                  this.props._bankAllDataDayHandle({
                      showTotal: true
                  });
              } else {
                  this.props._bankAllDataDayHandle({
                      showTotal: false
                  });
              }
              this.getData(curPage, pageSize, options ? options : this.props.bankAllDataDay.temp_options);
          }
  
          //请求数据
      }, {
          key: 'getData',
          value: function getData(curPage, pageSize, options) {
              this.props._bankAllDataDayHandle({
                  curPage: curPage,
                  pageSize: pageSize
              });
  
              this.props._bankAllDataDayLoad({
                  curPage: curPage,
                  pageSize: pageSize,
                  reportDate: options.selectDate,
                  reportType: 0,
                  provinceName: options.province.name == '全部' ? '' : options.province.name,
                  cityName: options.city.name == '全部' ? '' : options.city.name,
                  countyName: options.county.name == '全部' ? '' : options.county.name,
                  bankTypeCode: options.bank == '全部' ? '' : options.bank,
                  groupByClause: options.summary
              });
          }
  
          //重置数据
      }, {
          key: 'resetData',
          value: function resetData(bool) {
              var summary = this.checkIsCity() ? 2 : 1;
              if (bool === true) {
                  var options = {
                      selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
                      province: { val: '', name: '' }, //选中的省
                      city: { val: '', name: '' }, //选中的城市
                      county: { val: '', name: '' }, //选中的县
                      bank: "", //选中的银行
                      summary: summary
                  };
                  //初次进入页面，所有参数初始化
                  this.props._bankAllDataDayHandle({
                      selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
                      province: { val: '', name: '' }, //选中的省
                      city: { val: '', name: '' }, //选中的城市
                      county: { val: '', name: '' }, //选中的县
                      bank: "", //选中的银行
                      summary: summary,
                      temp_options: options
                  });
                  //进入页面发起默认请求加载数据
                  this.pageNavClick(1, 10, options);
              } else {
                  //页面未离开，用户正常重置查询条件
                  this.props._bankAllDataDayHandle({
                      selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
                      province: { val: '', name: '' }, //选中的省
                      city: { val: '', name: '' }, //选中的城市
                      county: { val: '', name: '' }, //选中的县
                      bank: "", //选中的银行
                      summary: summary
                  });
              }
              this.selectClick(1, '', '');
          }
  
          //是否是市长
      }, {
          key: 'checkIsCity',
          value: function checkIsCity() {
              if (this.props.login.employ.title == 'CITY') {
                  return true;
              } else {
                  return false;
              }
          }
  
          //查询数据
      }, {
          key: 'submitClick',
          value: function submitClick() {
              if (this.props.bankAllDataDay.status == 'loading') {
                  this.props._dialogHandle({
                      type: "tips",
                      time: 2000,
                      content: "正在查询中，请耐心等待！",
                      tipsType: "warning",
                      show: true
                  });
              } else {
                  var options = {
                      selectDate: this.props.bankAllDataDay.selectDate, //默认日期
                      province: this.props.bankAllDataDay.province, //选中的省
                      city: this.props.bankAllDataDay.city, //选中的城市
                      county: this.props.bankAllDataDay.county, //选中的县
                      bank: this.props.bankAllDataDay.bank, //选中的银行
                      summary: this.props.bankAllDataDay.summary
                  };
                  this.props._bankAllDataDayHandle({
                      temp_options: options
                  });
                  this.getData(1, this.props.bankAllDataDay.pageSize, options);
              }
          }
  
          //导出报表
      }, {
          key: 'exportExcel',
          value: function exportExcel() {
              var options = this.props.bankAllDataDay.temp_options;
              this.props._bankAllDataDayExport({
                  reportType: 0,
                  reportDate: options.selectDate,
                  provinceName: options.province.name == '全部' ? '' : options.province.name,
                  cityName: options.city.name == '全部' ? '' : options.city.name,
                  countyName: options.county.name == '全部' ? '' : options.county.name,
                  bankTypeCode: options.bank == '全部' ? '' : options.bank,
                  groupByClause: options.summary
              });
          }
      }, {
          key: 'componentDidMount',
          value: function componentDidMount() {
              this.resetData(true);
              var _that = this;
              $(function () {
                  $("#datepicker").datepicker({
                      maxDate: -1,
                      dateFormat: "yy-mm-dd",
                      changeYear: true, // 年下拉菜单
                      changeMonth: true, // 月下拉菜单
                      onSelect: function onSelect(date) {
                          _that.props._bankAllDataDayHandle({
                              selectDate: date
                          });
                      }
                  });
              });
              this.props._queryProvince({
                  reportName: "bankbizRoutine"
              });
              this.props._getBankTypeCodes({
                  reportName: "bankbizRoutine"
              });
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'height100p' },
                  _react2['default'].createElement(_componentsPublicCenterTopNav2['default'], { title: '全辖银行业务常规数据汇总日报', parentList: [{ name: "数据报表" }, { name: "银行业务日报" }] }),
                  _react2['default'].createElement(
                      'div',
                      { className: 'height100pY plr26' },
                      _react2['default'].createElement(
                          'div',
                          { className: 'pub-form-top clearfix' },
                          _react2['default'].createElement(
                              'ul',
                              null,
                              _react2['default'].createElement(
                                  'li',
                                  null,
                                  _react2['default'].createElement(
                                      'span',
                                      null,
                                      '数据日期:'
                                  ),
                                  _react2['default'].createElement('input', { type: 'text', readOnly: true, id: 'datepicker', value: this.props.bankAllDataDay.selectDate })
                              ),
                              _react2['default'].createElement(_componentsReportFormRegional2['default'], {
                                  selectClick: this.selectClick.bind(this),
                                  provinceVal: this.props.bankAllDataDay.province.val,
                                  cityVal: this.props.bankAllDataDay.city.val,
                                  countyVal: this.props.bankAllDataDay.county.val,
                                  provinceList: this.showProvince(),
                                  cityList: this.showCity(),
                                  countyList: this.showCounty()
                              })
                          ),
                          _react2['default'].createElement(
                              'ul',
                              null,
                              _react2['default'].createElement(
                                  'li',
                                  null,
                                  _react2['default'].createElement(
                                      'span',
                                      null,
                                      '合作银行:'
                                  ),
                                  _react2['default'].createElement(_componentsPublicSelectBox2['default'], {
                                      callBack: this.selectClick.bind(this, 4),
                                      value: this.props.bankAllDataDay.bank,
                                      list: this.showBank()
                                  })
                              ),
                              _react2['default'].createElement(_componentsReportFormViewSummary2['default'], {
                                  selectClick: this.selectClick.bind(this),
                                  value: this.props.bankAllDataDay.summary,
                                  list: this.showSummary()
                              })
                          ),
                          _react2['default'].createElement(
                              'div',
                              { className: 'pub-form-btns clearfix' },
                              _react2['default'].createElement(
                                  'div',
                                  { className: 'left' },
                                  _react2['default'].createElement(
                                      'button',
                                      { onClick: this.submitClick.bind(this) },
                                      '查询'
                                  ),
                                  _react2['default'].createElement(
                                      'button',
                                      { onClick: this.resetData.bind(this) },
                                      '重置'
                                  )
                              ),
                              _react2['default'].createElement(_componentsReportFormExportButton2['default'], {
                                  data: this.props.login.Jurisdiction.ReportForm.btns.bankAllDataDay,
                                  clickBack: this.exportExcel.bind(this)
                              })
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'form-content-wrap' },
                          _react2['default'].createElement(
                              'div',
                              { className: 'form-table-wrap' },
                              _react2['default'].createElement(_componentsPublicReportFormTable2['default'], { width: '140%', colspan: 16,
                                  showTotal: this.props.bankAllDataDay.showTotal,
                                  status: this.props.bankAllDataDay.status,
                                  totalData: this.props.bankAllDataDay.totalData,
                                  totalTitle: this.props.bankAllDataDay.totalTitle,
                                  dataList: this.props.bankAllDataDay.listData,
                                  titleList: this.props.bankAllDataDay.titleList })
                          ),
                          _react2['default'].createElement(_componentsPublicPagination2['default'], {
                              curPage: this.props.bankAllDataDay.curPage,
                              totalNumber: this.props.bankAllDataDay.totalSize,
                              pageLimt: this.props.bankAllDataDay.pageSize,
                              pageClick: this.pageNavClick.bind(this)
                          })
                      )
                  )
              );
          }
      }]);
  
      return bankAllDataDayMain;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      return state;
  }
  
  function mapDispatchToProps(dispatch) {
      return {
          _bankAllDataDayHandle: function _bankAllDataDayHandle(options) {
              dispatch((0, _actionsReportFormBankAllDataDay.bankAllDataDayHandle)(options));
          },
          _bankAllDataDayLoad: function _bankAllDataDayLoad(options) {
              dispatch((0, _actionsReportFormBankAllDataDay.bankAllDataDayLoad)(options));
          },
          _queryProvince: function _queryProvince(options) {
              dispatch((0, _actionsReportFormPublicCommon.queryProvince)(options));
          },
          _queryCity: function _queryCity(options) {
              dispatch((0, _actionsReportFormPublicCommon.queryCity)(options));
          },
          _queryCounty: function _queryCounty(options) {
              dispatch((0, _actionsReportFormPublicCommon.queryCounty)(options));
          },
          _getBankTypeCodes: function _getBankTypeCodes(options) {
              dispatch((0, _actionsReportFormPublicCommon.getBankTypeCodes)(options));
          },
          _reportFormCommonHandle: function _reportFormCommonHandle(options) {
              dispatch((0, _actionsReportFormPublicCommon.reportFormCommonHandle)(options));
          },
          _dialogHandle: function _dialogHandle(options) {
              dispatch((0, _actionsDialog.dialogHandle)(options));
          },
          _bankAllDataDayExport: function _bankAllDataDayExport(options) {
              dispatch((0, _actionsReportFormBankAllDataDay.bankAllDataDayExport)(options));
          }
      };
  }
  
  var bankAllDataDay = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(bankAllDataDayMain);
  
  exports['default'] = bankAllDataDay;
  module.exports = exports['default'];
  /*form content begin*/ /*form content end*/ /*content begin*/ /*content end*/
  //# sourceMappingURL=/js/containers/admin/reportForm/bankAllDataDay.js.map
  

});

;/*!/src/js/containers/admin/roles/add.js*/
define('src/js/containers/admin/roles/add', function(require, exports, module) {

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
  
  var _componentsPublicCenterTopNav = require('../../components/public/centerTopNav');
  
  var _componentsPublicCenterTopNav2 = _interopRequireDefault(_componentsPublicCenterTopNav);
  
  var _componentsPublicTree = require('../../components/public/tree');
  
  var _componentsPublicTree2 = _interopRequireDefault(_componentsPublicTree);
  
  var _actionsRolesAdd = require('../../actions/roles/add');
  
  var _actionsDialog = require('../../actions/dialog');
  
  var AddRoleMain = (function (_React$Component) {
  	_inherits(AddRoleMain, _React$Component);
  
  	function AddRoleMain() {
  		_classCallCheck(this, AddRoleMain);
  
  		_get(Object.getPrototypeOf(AddRoleMain.prototype), 'constructor', this).apply(this, arguments);
  	}
  
  	_createClass(AddRoleMain, [{
  		key: 'componentDidMount',
  		value: function componentDidMount() {
  			this.props._rolesAddRoleHandle({
  				submitFlag: true
  			});
  			if (this.props.addRole.operationType != "add") {
  				//编辑
  				this.editLoadData();
  			} else {
  				this.loadAddTreeData();
  				this.loadLog([]);
  			}
  		}
  
  		//加载添加角色的树形数据
  	}, {
  		key: 'loadAddTreeData',
  		value: function loadAddTreeData() {
  			var _this = this;
  
  			this.props._rolesGetAddTreeData({
  				callback: function callback() {
  					_this.creatTree();
  				}
  			});
  		}
  	}, {
  		key: 'showLogList',
  		value: function showLogList(listData, showFlag) {
  			if (!showFlag) {
  				return "";
  			}
  			var logListShow = [];
  			if (listData.length == 0) {
  				logListShow = _react2['default'].createElement(
  					'tr',
  					null,
  					_react2['default'].createElement('td', { colSpan: '4' })
  				);
  			} else {
  				listData.map(function (item, i) {
  					var Time = moment(item.operateTime).format("YYYY-MM-DD");
  					logListShow.push(_react2['default'].createElement(
  						'tr',
  						{ key: i },
  						_react2['default'].createElement(
  							'td',
  							null,
  							Time
  						),
  						_react2['default'].createElement(
  							'td',
  							null,
  							item.accountName
  						),
  						_react2['default'].createElement(
  							'td',
  							null,
  							item.objectName
  						),
  						_react2['default'].createElement(
  							'td',
  							null,
  							item.rawLog
  						)
  					));
  				});
  			}
  			return logListShow;
  		}
  
  		//加载日志数据
  	}, {
  		key: 'loadLog',
  		value: function loadLog(listData) {
  
  			this.props._rolesAddRoleHandle({
  				logListShow: true
  			});
  		}
  
  		//创建权限树
  	}, {
  		key: 'creatTree',
  		value: function creatTree() {}
  
  		//编辑时加载数据
  	}, {
  		key: 'editLoadData',
  		value: function editLoadData() {
  			var _this2 = this;
  
  			//this.props.params.roleCode //浏览器参数
  			this.props._rolesEditLoadData({
  				roleCode: this.props.addRole.roleCode ? this.props.addRole.roleCode : this.props.params.roleCode,
  				callback: function callback() {
  					_this2.creatTree();
  				},
  				loadLog: function loadLog(data) {
  					_this2.loadLog(data);
  				}
  			});
  		}
  
  		//角色描述改变事件
  	}, {
  		key: 'roleDescribeOnchange',
  		value: function roleDescribeOnchange(event) {
  			this.props._rolesAddRoleHandle({
  				roleDescribe: event.target.value.substring(0, 200)
  			});
  		}
  
  		//角色名称改变事件
  	}, {
  		key: 'roleNameOnchange',
  		value: function roleNameOnchange(event) {
  			this.props._rolesAddRoleHandle({
  				roleName: event.target.value
  			});
  		}
  
  		//点击取消
  	}, {
  		key: 'signOutBack',
  		value: function signOutBack() {
  			this.props._dialogHandle({
  				show: true,
  				type: "tips",
  				tipsType: "confirm",
  				success: function success() {
  					_reactRouter.browserHistory.push('/System/RoleManager');
  					return true;
  				},
  				content: "是否放弃所填内容"
  			});
  		}
  
  		//
  	}, {
  		key: 'checkForm',
  		value: function checkForm() {
  
  			var roleName = this.props.addRole.roleName;
  			var roleDescribe = this.props.addRole.roleDescribe.replace(/\s+/g, "");
  
  			var roleNameCheck = $.XlCheck({
  				val: roleName,
  				len: "1,20",
  				rule: ["Empty", "specialCharacter", "Length"]
  			});
  			var roleDescribeCheck = $.XlCheck({
  				val: roleDescribe,
  				len: "1,200",
  				rule: ["Empty", "specialCharacter", "Length"]
  			});
  			//校验角色名称
  			if (!roleNameCheck.result) {
  				if (!roleNameCheck.Empty) {
  					this.props._dialogHandle({
  						show: true,
  						content: '角色名称不能为空',
  						type: "tips",
  						tipsType: "warning"
  					});
  					return false;
  				}
  				if (!roleNameCheck.specialCharacter) {
  					this.props._dialogHandle({
  						show: true,
  						content: '角色名称不可输入特殊字符或空格',
  						type: "tips",
  						tipsType: "warning"
  					});
  
  					return false;
  				}
  				if (!roleNameCheck.Length) {
  					this.props._dialogHandle({
  						show: true,
  						content: '角色名称只能输入1-20个汉字',
  						type: "tips",
  						tipsType: "warning"
  					});
  					return false;
  				}
  			}
  			//校验角色描述
  			if (!roleDescribeCheck.result) {
  				if (!roleDescribeCheck.Empty) {
  					this.props._dialogHandle({
  						show: true,
  						content: '角色描述不能为空',
  						type: "tips",
  						tipsType: "warning"
  					});
  					return false;
  				}
  				if (!roleDescribeCheck.specialCharacter) {
  					this.props._dialogHandle({
  						show: true,
  						content: '角色描述不可输入特殊字符，请重新输入',
  						type: "tips",
  						tipsType: "warning"
  					});
  					return false;
  				}
  				if (!roleDescribeCheck.Length) {
  					this.props._dialogHandle({
  						show: true,
  						content: '角色描述只能输入1-200个汉字',
  						type: "tips",
  						tipsType: "warning"
  					});
  					return false;
  				}
  			}
  
  			var checkedNodeList = this.getTreeCheckVal(this.props.addRole.treeData).idArray;
  
  			if (checkedNodeList.length == 0) {
  				this.props._dialogHandle({
  					show: true,
  					content: '请给角色分配权限',
  					type: "tips",
  					tipsType: "warning"
  				});
  				return false;
  			}
  			return true;
  		}
  
  		//编辑保存回调
  	}, {
  		key: 'saveCallBack',
  		value: function saveCallBack() {
  			this.props._dialogHandle({
  				show: true,
  				content: '编辑角色成功',
  				type: "tips",
  				tipsType: "success",
  				hide: (function () {
  					this.props._rolesAddRoleHandle({
  						submitFlag: true
  					});
  					_reactRouter.browserHistory.push('/System/RoleManager');
  				}).bind(this)
  			});
  		}
  
  		//新增保存回调
  	}, {
  		key: 'saveAddCallBack',
  		value: function saveAddCallBack() {
  			this.props._dialogHandle({
  				show: true,
  				content: '添加成功',
  				type: "tips",
  				tipsType: "success",
  				hide: (function () {
  					this.props._rolesAddRoleHandle({
  						submitFlag: true
  					});
  					_reactRouter.browserHistory.push('/System/RoleManager');
  				}).bind(this)
  			});
  		}
  
  		//编辑保存
  	}, {
  		key: 'saveEditForm',
  		value: function saveEditForm() {
  			if (!this.checkForm()) {
  				return false;
  			}
  
  			var checkedValue = this.getTreeCheckVal(this.props.addRole.treeData);
  			var checkedNodeList = checkedValue.idArray;
  			var checkedNodeNameList = checkedValue.nameArray;
  
  			this.props._dialogHandle({
  				show: true,
  				content: '是否保存提交所填内容',
  				type: "tips",
  				tipsType: "confirm",
  				success: (function () {
  					var _this3 = this;
  
  					this.props._rolesAddRoleHandle({
  						submitFlag: false
  					});
  					this.props._rolesEditRole({
  						roleCode: this.props.addRole.roleCode ? this.props.addRole.roleCode : this.props.params.roleCode,
  						id: this.props.addRole.roleId,
  						roleName: this.props.addRole.roleName,
  						roleDesc: this.props.addRole.roleDescribe,
  						pers: checkedNodeList.join(","),
  						perNames: checkedNodeNameList.join(","),
  						callback: function callback() {
  							_this3.saveCallBack();
  						}
  					});
  					return true;
  				}).bind(this),
  				fail: (function () {
  					this.props._rolesAddRoleHandle({
  						submitFlag: true
  					});
  				}).bind(this)
  			});
  		}
  
  		//添加保存
  	}, {
  		key: 'saveAddForm',
  		value: function saveAddForm() {
  			if (!this.checkForm()) {
  				return false;
  			}
  
  			var checkedValue = this.getTreeCheckVal(this.props.addRole.treeData);
  			var checkedNodeList = checkedValue.idArray;
  			var checkedNodeNameList = checkedValue.nameArray;
  
  			this.props._dialogHandle({
  				show: true,
  				content: '是否保存提交所填内容',
  				type: "tips",
  				tipsType: "confirm",
  				success: (function () {
  					var _this4 = this;
  
  					this.props._rolesAddRoleHandle({
  						submitFlag: false
  					});
  					this.props._rolesAddRole({
  						roleName: this.props.addRole.roleName,
  						roleDescribe: this.props.addRole.roleDescribe,
  						pers: checkedNodeList.join(","),
  						perNames: checkedNodeNameList.join(","),
  						callback: function callback() {
  							_this4.saveAddCallBack();
  						}
  					});
  					return true;
  				}).bind(this),
  				fail: (function () {
  					this.props._rolesAddRoleHandle({
  						submitFlag: true
  					});
  				}).bind(this)
  			});
  		}
  
  		//保存按钮
  	}, {
  		key: 'saveBtnFun',
  		value: function saveBtnFun() {
  
  			if (!this.props.addRole.submitFlag) {
  				this.props._dialogHandle({
  					show: true,
  					type: "loading",
  					content: "提交中"
  				});
  				return false;
  			}
  
  			if (this.props.addRole.operationType != "add") {
  				this.saveEditForm();
  			} else {
  				this.saveAddForm();
  			}
  		}
  
  		//树形菜单隐藏、显示回调事件 id栏目的ID， bool 是展示或隐藏 DATA是菜单数据结构源
  	}, {
  		key: 'showCall',
  		value: function showCall(id, bool, data) {
  			this.props._rolesAddRoleHandle({
  				treeData: this.selectTreeId(id, bool, data)
  			});
  		}
  
  		//递归菜单是否展开隐藏
  	}, {
  		key: 'selectTreeId',
  		value: function selectTreeId(id, bool, d) {
  			var data = d;
  			for (var i = 0; i < data.length; i++) {
  				if (data[i].id == id) {
  					data[i].open = !bool;
  					break;
  				} else {
  					if (data[i].children.length > 0) {
  						data[i].children = this.selectTreeId(id, bool, data[i].children);
  					}
  				}
  			}
  			return data;
  		}
  
  		//递归菜单 选项是否选中  id栏目的ID， bool 是有子菜单或没有子菜单 DATA是菜单数据结构源
  	}, {
  		key: 'checkShow',
  		value: function checkShow(id, bool, data) {
  			var tempData = this.checkTreeId(id, bool, data);
  			console.log(tempData);
  			this.props._rolesAddRoleHandle({
  				treeData: this.parentIsCheck(id, tempData, tempData)
  			});
  		}
  
  		//递归循环取消选择
  	}, {
  		key: 'checkTreeId',
  		value: function checkTreeId(id, bool, d) {
  			var data = d;
  			for (var i = 0; i < data.length; i++) {
  				if (data[i].id == id) {
  					data[i].checked = !data[i].checked;
  					data[i].middleCheck = false;
  					//含有子菜单，向下递归循环
  					if (bool) {
  						data[i].children = this.loopCheck(data[i].checked, data[i].children);
  					}
  					break;
  				} else {
  					if (data[i].children.length > 0) {
  						data[i].children = this.checkTreeId(id, bool, data[i].children);
  					}
  				}
  			}
  			return data;
  		}
  
  		//递归循环子菜单里的取消选择
  	}, {
  		key: 'loopCheck',
  		value: function loopCheck(bool, d) {
  			var data = d;
  			for (var i = 0; i < data.length; i++) {
  				data[i].checked = bool;
  				data[i].middleCheck = false;
  				if (data[i].children.length > 0) {
  					data[i].children = this.loopCheck(bool, data[i].children);
  				}
  			}
  			return data;
  		}
  
  		//循环递归父元素是否需要更改状态为全选，全不选，或者半选
  	}, {
  		key: 'parentIsCheck',
  		value: function parentIsCheck(id, d, d2) {
  
  			var data = d;
  			for (var i = 0; i < data.length; i++) {
  				if (data[i].id == id) {
  					if (data[i].pid != '0') {
  						d2 = this.digui(data[i].pid, d2);
  						d2 = this.parentIsCheck(data[i].pid, d2, d2);
  					}
  					break;
  				} else {
  					if (data[i].children.length > 0) {
  						d2 = this.parentIsCheck(id, data[i].children, d2);
  					}
  				}
  			}
  			return d2;
  		}
  	}, {
  		key: 'digui',
  		value: function digui(pid, d) {
  			var data = d;
  			for (var i = 0; i < data.length; i++) {
  				if (data[i].id == pid) {
  					var temp_arr1 = undefined,
  					    temp_arr2 = [],
  					    isMiddle = false;
  					for (var k = 0; k < data[i].children.length; k++) {
  						data[i].children[k].middleCheck && temp_arr2.push(true);
  						if (k == 0) {
  							temp_arr1 = data[i].children[k].checked;
  						} else {
  							if (temp_arr1 != data[i].children[k].checked) {
  								isMiddle = true;
  								break;
  							};
  						}
  					}
  					//如果有半选状态，直接设置为选中，并且状态为半选中
  					if (temp_arr2.length > 0 || isMiddle || temp_arr1 == false) {
  						data[i].checked = true;
  						data[i].middleCheck = true;
  					} else {
  						data[i].checked = temp_arr1;
  						data[i].middleCheck = false;
  					}
  
  					break;
  				} else {
  					if (data[i].children.length > 0) {
  						data[i].children = this.digui(pid, data[i].children);
  					}
  				}
  			}
  			return data;
  		}
  
  		//获取树形菜单选中的值，名称
  	}, {
  		key: 'getTreeCheckVal',
  		value: function getTreeCheckVal(data) {
  			var idArray = [],
  			    nameArray = [],
  			    valObj = {};
  			for (var i = 0; i < data.length; i++) {
  				if (data[i].checked) {
  					nameArray.push(data[i].name);
  					idArray.push(data[i].id);
  				}
  				if (data[i].children.length > 0) {
  					var oldObj = this.getTreeCheckVal(data[i].children);
  					nameArray = nameArray.concat(oldObj.nameArray);
  					idArray = idArray.concat(oldObj.idArray);
  				}
  			}
  			valObj.idArray = idArray;
  			valObj.nameArray = nameArray;
  			return valObj;
  		}
  	}, {
  		key: 'componentWillUnmount',
  		value: function componentWillUnmount() {
  			//组件销毁后，设置treeData为[]
  			this.props._rolesAddRoleHandle({
  				treeData: []
  			});
  		}
  	}, {
  		key: 'render',
  		value: function render() {
  			return _react2['default'].createElement(
  				'div',
  				{ className: 'height100p' },
  				_react2['default'].createElement(_componentsPublicCenterTopNav2['default'], { title: this.props.addRole.operationType != "add" ? "编辑角色" : "新增角色", parentList: this.props.addRole.parentList, leaveCallBack: this.signOutBack.bind(this) }),
  				_react2['default'].createElement(
  					'div',
  					{ className: 'height100pY add-role-content clearfix' },
  					_react2['default'].createElement(
  						'div',
  						{ className: 'left-content' },
  						_react2['default'].createElement(_componentsPublicTree2['default'], { treeData: this.props.addRole.treeData, checkShow: this.checkShow.bind(this), showCall: this.showCall.bind(this) })
  					),
  					_react2['default'].createElement(
  						'div',
  						{ className: 'right-content' },
  						_react2['default'].createElement(
  							'p',
  							null,
  							_react2['default'].createElement(
  								'span',
  								{ className: 'lable' },
  								'角色名称:'
  							),
  							_react2['default'].createElement('input', { type: 'text', className: 'w500', maxLength: '20', value: this.props.addRole.roleName, onBlur: this.roleNameOnchange.bind(this), onChange: this.roleNameOnchange.bind(this) })
  						),
  						_react2['default'].createElement(
  							'p',
  							null,
  							_react2['default'].createElement(
  								'span',
  								{ className: 'lable ff' },
  								'角色描述:'
  							),
  							_react2['default'].createElement('textarea', { className: 'w500', maxLength: '200', value: this.props.addRole.roleDescribe, onBlur: this.roleDescribeOnchange.bind(this), onChange: this.roleDescribeOnchange.bind(this) })
  						),
  						_react2['default'].createElement(
  							'div',
  							{ className: 'table-content' },
  							_react2['default'].createElement(
  								'span',
  								{ className: 'lable ff' },
  								'日志:'
  							),
  							_react2['default'].createElement(
  								'div',
  								{ className: 'table' },
  								_react2['default'].createElement(
  									'table',
  									null,
  									_react2['default'].createElement(
  										'thead',
  										null,
  										_react2['default'].createElement(
  											'tr',
  											null,
  											_react2['default'].createElement(
  												'th',
  												{ width: '20%' },
  												'时间'
  											),
  											_react2['default'].createElement(
  												'th',
  												{ width: '25%' },
  												'操作人'
  											),
  											_react2['default'].createElement(
  												'th',
  												{ width: '25%' },
  												'操作功能'
  											),
  											_react2['default'].createElement(
  												'th',
  												{ width: '30%' },
  												'操作内容'
  											)
  										)
  									),
  									_react2['default'].createElement(
  										'tbody',
  										null,
  										this.showLogList(this.props.addRole.logListData, this.props.addRole.logListShow)
  									)
  								)
  							)
  						),
  						_react2['default'].createElement(
  							'p',
  							{ className: 'mr30 clearfix' },
  							_react2['default'].createElement(
  								'span',
  								{ className: 'btn', onClick: this.signOutBack.bind(this) },
  								'取消'
  							),
  							_react2['default'].createElement(
  								'span',
  								{ className: 'btn', onClick: this.saveBtnFun.bind(this) },
  								'保存'
  							)
  						)
  					)
  				)
  			);
  		}
  	}]);
  
  	return AddRoleMain;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
  	return state;
  }
  function mapDispatchToProps(dispatch) {
  	return {
  		_rolesAddRoleHandle: function _rolesAddRoleHandle(options) {
  			dispatch((0, _actionsRolesAdd.rolesAddRoleHandle)(options));
  		},
  
  		_rolesGetAddTreeData: function _rolesGetAddTreeData(options) {
  			dispatch((0, _actionsRolesAdd.rolesGetAddTreeData)(options));
  		},
  		_rolesEditLoadData: function _rolesEditLoadData(options) {
  			dispatch((0, _actionsRolesAdd.rolesEditLoadData)(options));
  		},
  		_rolesEditRole: function _rolesEditRole(options) {
  			dispatch((0, _actionsRolesAdd.rolesEditRole)(options));
  		},
  		_rolesAddRole: function _rolesAddRole(options) {
  			dispatch((0, _actionsRolesAdd.rolesAddRole)(options));
  		},
  		_dialogHandle: function _dialogHandle(options) {
  			dispatch((0, _actionsDialog.dialogHandle)(options));
  		}
  	};
  }
  
  var AddRoleIndex = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(AddRoleMain);
  
  exports['default'] = AddRoleIndex;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/containers/admin/roles/add.js.map
  

});

;/*!/src/js/containers/admin/roles/index.js*/
define('src/js/containers/admin/roles/index', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/3/8.
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
  
  var _componentsPublicCenterTopNav = require('../../components/public/centerTopNav');
  
  var _componentsPublicCenterTopNav2 = _interopRequireDefault(_componentsPublicCenterTopNav);
  
  var _reactRouter = require('node_modules/react-router/lib/index');
  
  var _untilsPublicFun = require('../../untils/publicFun');
  
  var _actionsRolesRoles = require("../../actions/roles/roles");
  
  var _actionsRolesAdd = require("../../actions/roles/add");
  
  var _componentsPublicPagination = require('../../components/public/pagination');
  
  var _componentsPublicPagination2 = _interopRequireDefault(_componentsPublicPagination);
  
  var _componentsPublicPlugTableLoading = require('../../components/public/plugTableLoading');
  
  var _componentsPublicPlugTableLoading2 = _interopRequireDefault(_componentsPublicPlugTableLoading);
  
  var _actionsDialog = require('../../actions/dialog');
  
  var RoleManagerMain = (function (_React$Component) {
      _inherits(RoleManagerMain, _React$Component);
  
      function RoleManagerMain() {
          _classCallCheck(this, RoleManagerMain);
  
          _get(Object.getPrototypeOf(RoleManagerMain.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(RoleManagerMain, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
              this.props._setRolesState({
                  submitFlag: true
              });
              //let currentTopMenu = this.props.login.Jurisdiction.System;
              //let currentTopMenu = 'System';
              //let pathName = this.props.location.pathname.replace("/", "");
              //let pathName = 'RoleManager';
              /*this.props._setRolesState({
                  loadPageFlag: true            
              });*/
              var btnsList = new _untilsPublicFun.publicFun(this.props);
              //获得用户角色权限
              this.props._setRolesState({
                  btnList: btnsList.getJurisdiction()
              });
              this.loadBtn(btnsList.getJurisdiction());
          }
      }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
              this.props._setRolesState({
                  loadPageFlag: true, //加载分页标识  true:加载  false:不加载
                  curPage: 1, //当前页
                  totalSize: 0, //总数据条数
                  list: [],
                  tableList: true,
                  selectList: [],
                  tableHead: true,
                  searchBtnShow: true, //查询按钮权限
                  addBtnShow: false, //添加按钮权限
                  editBtnShow: false, //编辑按钮权限
                  deleteBtnShow: false, //删除按钮权限
                  btnList: "", //按钮权限字符串
                  nullData: "",
                  tbodyList: 'loading' //表格加载控件
              });
          }
  
          //文本框改变事件
      }, {
          key: 'roleNameChange',
          value: function roleNameChange(event) {
              this.props._setRolesState({
                  roleName: event.target.value
              });
          }
  
          //加载按钮
      }, {
          key: 'loadBtn',
          value: function loadBtn(btnList) {
              var _this = this;
  
              //let btnList=this.props.roles.btnList.split(",");
  
              btnList = btnList == "" || btnList == undefined ? [] : btnList.split(',');
              var searchFlag = false,
                  addFlag = false,
                  editFlag = false,
                  deleteFlag = false;
              btnList.map(function (item, index) {
                  var type = item.split(":")[1];
                  if (type == "add") {
                      addFlag = true;
                  } else if (type == "edit") {
                      editFlag = true;
                  } else if (type == "search") {
                      searchFlag = true;
                  } else if (type == "del") {
                      deleteFlag = true;
                  }
              });
              //初始化用户角色权限
              this.props._setRolesState({
                  addBtnShow: addFlag, //添加按钮权限
                  editBtnShow: editFlag, //编辑按钮权限
                  deleteBtnShow: deleteFlag //删除按钮权限
              });
  
              var options = {
                  searchText: this.props.roles.searchText,
                  curPage: this.props.roles.curPage,
                  pageSize: this.props.roles.pageLimit,
                  errorCallback: function errorCallback() {
                      _this.errorCallback();
                  }
              };
  
              this.loadData(options);
          }
      }, {
          key: 'showThead',
          value: function showThead() {
              var tableHead = "";
              if (!this.props.roles.editBtnShow && !this.props.roles.deleteBtnShow) {
                  tableHead = _react2['default'].createElement(
                      'tr',
                      null,
                      _react2['default'].createElement(
                          'th',
                          { width: '50%' },
                          '角色名称'
                      ),
                      _react2['default'].createElement(
                          'th',
                          { width: '50%' },
                          '角色描述'
                      )
                  );
              } else {
                  tableHead = _react2['default'].createElement(
                      'tr',
                      null,
                      _react2['default'].createElement(
                          'th',
                          { width: '30%' },
                          '角色名称'
                      ),
                      _react2['default'].createElement(
                          'th',
                          { width: '50%' },
                          '角色描述'
                      ),
                      _react2['default'].createElement(
                          'th',
                          { width: '20%' },
                          '操作'
                      )
                  );
              }
              return tableHead;
          }
  
          //加载数据
      }, {
          key: 'loadData',
          value: function loadData(options) {
              this.props._setRolesState({
                  tbodyList: "loading"
              });
              this.props._rolesUserList(options);
          }
      }, {
          key: 'errorCallback',
          value: function errorCallback() {
              this.props._setRolesState({
                  list: [],
                  totalSize: 0,
                  tbodyList: "fail"
              });
          }
  
          //添加角色
      }, {
          key: 'addRole',
          value: function addRole() {
              this.props._rolesAddRoleHandle({
                  operationType: "add",
                  roleCode: "",
                  roleId: "",
                  logListShow: [],
                  logListData: [],
                  treeData: [],
                  roleName: "", //角色名称
                  roleDescribe: "" });
  
              //角色描述
              _reactRouter.browserHistory.push('/System/addRole/' + "add");
          }
  
          //调用分页加载
      }, {
          key: 'pageNavClick',
          value: function pageNavClick(n, pageSize) {
              var _this2 = this;
  
              this.props._setRolesState({
                  curPage: n,
                  pageLimit: pageSize
  
              });
              var options = {
                  searchText: this.props.roles.searchText,
                  curPage: n,
                  pageSize: pageSize,
                  errorCallback: function errorCallback() {
                      _this2.errorCallback();
                  }
              };
              this.loadData(options);
          }
  
          //查询按钮
      }, {
          key: 'searchBtn',
          value: function searchBtn() {
              var _this3 = this;
  
              this.props._setRolesState({
                  searchText: this.props.roles.roleName,
                  curPage: 1,
                  totalSize: 0
              });
              var options = {
                  searchText: this.props.roles.roleName,
                  curPage: 1,
                  pageSize: this.props.roles.pageLimit,
                  errorCallback: function errorCallback() {
                      _this3.errorCallback();
                  }
              };
              this.loadData(options);
          }
  
          //编辑
      }, {
          key: 'editFun',
          value: function editFun(roleCode, id) {
              this.props._rolesAddRoleHandle({
                  operationType: "edit",
                  roleCode: roleCode,
                  roleId: id
              });
              _reactRouter.browserHistory.push('/System/addRole/' + roleCode);
              //this.props.history.pushState(null, "addRole", {type: "edit", roleCode: roleCode, roleId: id});
          }
  
          //删除
      }, {
          key: 'deleteFun',
          value: function deleteFun(id, roleName) {
              var _this4 = this;
  
              console.log(this.props.roles.submitFlag);
              if (!this.props.roles.submitFlag) {
                  this.props._dialogHandle({
                      show: true,
                      type: "loading",
                      content: "提交中"
                  });
                  return false;
              }
  
              var options = {
                  searchText: this.props.roles.searchText,
                  curPage: this.props.roles.curPage,
                  pageSize: this.props.roles.pageLimit,
                  errorCallback: function errorCallback() {
                      _this4.errorCallback();
                  }
              };
  
              var _that = this;
              this.props._dialogHandle({
                  show: true,
                  content: '你确定要删除该角色吗？',
                  type: "tips",
                  tipsType: "confirm",
                  success: function success() {
                      _that.props._setRolesState({
                          submitFlag: false
                      });
                      _that.props._deleteRolesUser({
                          id: id,
                          roleName: roleName,
                          callBack: function callBack() {
                              _that.props._setRolesState({
                                  submitFlag: true
                              });
                              _that.loadData(options);
                          }
                      });
                      return true;
                  }, fail: (function () {
                      _that.props._setRolesState({
                          submitFlag: true
                      });
                  }).bind(_that)
              });
          }
      }, {
          key: 'showTbody',
          value: function showTbody(list, type) {
              var _this5 = this;
  
              var resultTable = [];
              var _that = this;
              if (type == "success") {
                  list.map(function (item, i) {
                      if (!_this5.props.roles.editBtnShow && !_this5.props.roles.deleteBtnShow) {
                          resultTable.push(_react2['default'].createElement(
                              'tr',
                              { key: i },
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.roleName
                              ),
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.roleDesc
                              )
                          ));
                      } else {
                          if (item.roleName == "超级管理员" || item.roleName == "普通用户") {
                              resultTable.push(_react2['default'].createElement(
                                  'tr',
                                  { key: i },
                                  _react2['default'].createElement(
                                      'td',
                                      null,
                                      item.roleName
                                  ),
                                  _react2['default'].createElement(
                                      'td',
                                      null,
                                      item.roleDesc
                                  ),
                                  _react2['default'].createElement('td', null)
                              ));
                          } else {
                              resultTable.push(_react2['default'].createElement(
                                  'tr',
                                  { key: i },
                                  _react2['default'].createElement(
                                      'td',
                                      null,
                                      item.roleName
                                  ),
                                  _react2['default'].createElement(
                                      'td',
                                      null,
                                      item.roleDesc
                                  ),
                                  _react2['default'].createElement(
                                      'td',
                                      null,
                                      _react2['default'].createElement(
                                          'span',
                                          { className: 'btn',
                                              style: { display: _this5.props.roles.editBtnShow ? "inline-block" : "none" },
                                              onClick: _this5.editFun.bind(_this5, item.roleCode, item.id) },
                                          '编辑'
                                      ),
                                      _react2['default'].createElement(
                                          'span',
                                          { className: 'btn',
                                              style: { display: _this5.props.roles.deleteBtnShow ? "inline-block" : "none" },
                                              onClick: _this5.deleteFun.bind(_this5, item.id, item.roleName) },
                                          '删除'
                                      )
                                  )
                              ));
                          }
                      }
                  });
              } else {
                  if (!this.props.roles.editBtnShow && !this.props.roles.deleteBtnShow) {
                      resultTable = _react2['default'].createElement(_componentsPublicPlugTableLoading2['default'], { status: type, colSpanCount: '2', classNameEnter: '' });
                  } else {
                      resultTable = _react2['default'].createElement(_componentsPublicPlugTableLoading2['default'], { status: type, colSpanCount: '3', classNameEnter: '' });
                  }
              }
  
              /*if(this.props.roles.list=="数据请求中"){
              	resultTable.push(
              <tr key="0"><td colSpan="3"></td></tr>
              )
              }else{
              	if(this.props.roles.list.length>0){
              this.props.roles.list.map((item, i)=> {
                    if (!this.props.roles.editBtnShow && !this.props.roles.deleteBtnShow) {//编辑按钮和删除按钮都没有权限 直接删除按钮列
                        resultTable.push(
                            <tr key={i}>
                                <td>{item.roleName}</td>
                                <td>{item.roleDesc}</td>
                            </tr>
                        )
                    } else {
                        if (item.roleName == "超级管理员" || item.roleName == "普通用户") {
                            resultTable.push(
                                <tr key={i}>
                                    <td>{item.roleName}</td>
                                    <td>{item.roleDesc}</td>
                                    <td>
              		                            </td>
                                </tr>
                            )
                        } else {
                            resultTable.push(
                                <tr key={i}>
                                    <td>{item.roleName}</td>
                                    <td>{item.roleDesc}</td>
                                    <td>
                                        <span className="btn"
                                              style={{display: this.props.roles.editBtnShow ? "inline-block" : "none"}}
                                              onClick={this.editFun.bind(this, item.roleCode, item.id)}>编辑</span>
                                        <span className="btn"
                                              style={{display: this.props.roles.deleteBtnShow ? "inline-block" : "none"}}
                                              onClick={this.deleteFun.bind(this, item.id,item.roleName)}>删除</span>
                                        </td>
                                </tr>
                            )
                        }
                        }
                    });
              }else{
              if (!this.props.roles.editBtnShow && !this.props.roles.deleteBtnShow) {//编辑按钮和删除按钮都没有权限 直接删除按钮列
                       resultTable.push(
                           <tr key="0">
                              <td colSpan="2">暂无数据</td> 
                           </tr>
                           
                       )
                   }else{
                   	resultTable.push(
              <tr key="0"><td colSpan="3">暂无数据</td></tr>
              )
                   }
              	}
              }*/
              return resultTable;
          }
  
          //处理数据
      }, {
          key: 'dealData',
          value: function dealData(data) {
  
              this.props._setRolesState({
                  tableHead: true,
                  tableList: true
              });
  
              /*if (this.props.roles.loadPageFlag) {
                  this.loadPage();
              }*/
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'height100p' },
                  _react2['default'].createElement(_componentsPublicCenterTopNav2['default'], { title: '角色管理', parentList: [{ name: "系统管理" }] }),
                  _react2['default'].createElement(
                      'div',
                      { className: 'height100pY role-manager-content' },
                      _react2['default'].createElement(
                          'div',
                          { className: 'form-content' },
                          _react2['default'].createElement(
                              'span',
                              null,
                              '角色名称:'
                          ),
                          _react2['default'].createElement('input', { type: 'text', value: this.props.roles.roleName, className: 'role-name',
                              onChange: this.roleNameChange.bind(this), onBlur: this.roleNameChange.bind(this), placeholder: '请输入' })
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'btn-content' },
                          _react2['default'].createElement(
                              'span',
                              { className: 'btn',
                                  style: { display: this.props.roles.searchBtnShow ? "inline-block" : "none" },
                                  onClick: this.searchBtn.bind(this) },
                              '查询'
                          ),
                          _react2['default'].createElement(
                              'span',
                              { className: 'btn', style: { display: this.props.roles.addBtnShow ? "inline-block" : "none" },
                                  onClick: this.addRole.bind(this) },
                              '新增'
                          )
                      ),
                      _react2['default'].createElement(
                          'table',
                          { className: 'table' },
                          _react2['default'].createElement(
                              'thead',
                              null,
                              this.showThead()
                          ),
                          _react2['default'].createElement(
                              'tbody',
                              null,
                              this.showTbody(this.props.roles.list, this.props.roles.tbodyList)
                          )
                      ),
                      _react2['default'].createElement(_componentsPublicPagination2['default'], {
                          curPage: this.props.roles.curPage,
                          totalNumber: this.props.roles.totalSize,
                          pageLimt: this.props.roles.pageLimit,
                          pageClick: this.pageNavClick.bind(this)
                      })
                  )
              );
          }
      }]);
  
      return RoleManagerMain;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      return state;
  }
  function mapDispatchToProps(dispatch) {
      return {
          _setRolesState: function _setRolesState(options) {
              dispatch((0, _actionsRolesRoles.setRolesState)(options));
          },
          _rolesUserList: function _rolesUserList(options) {
              dispatch((0, _actionsRolesRoles.rolesUserList)(options));
          },
          _rolesAddRoleHandle: function _rolesAddRoleHandle(options) {
              dispatch((0, _actionsRolesAdd.rolesAddRoleHandle)(options));
          },
          _deleteRolesUser: function _deleteRolesUser(options) {
              dispatch((0, _actionsRolesRoles.deleteRolesUser)(options));
          },
          _dialogHandle: function _dialogHandle(options) {
              dispatch((0, _actionsDialog.dialogHandle)(options));
          }
      };
  }
  var RoleManager = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(RoleManagerMain);
  
  exports['default'] = RoleManager;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/containers/admin/roles/index.js.map
  

});

;/*!/src/js/containers/admin/user/index.js*/
define('src/js/containers/admin/user/index', function(require, exports, module) {

  /**
   * Created by ex-wangxin on 2017/3/31.
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
  
  var _actionsUser = require('../../actions/user');
  
  var _componentsPublicCenterTopNav = require('../../components/public/centerTopNav');
  
  var _componentsPublicCenterTopNav2 = _interopRequireDefault(_componentsPublicCenterTopNav);
  
  var _untilsPublicFun = require('../../untils/publicFun');
  
  var _componentsPublicPagination = require('../../components/public/pagination');
  
  var _componentsPublicPagination2 = _interopRequireDefault(_componentsPublicPagination);
  
  var _actionsDialog = require('../../actions/dialog');
  
  var _componentsUserSelectPeople = require('../../components/user/selectPeople');
  
  var _componentsUserSelectPeople2 = _interopRequireDefault(_componentsUserSelectPeople);
  
  var _componentsPublicDepartment = require('../../components/public/department');
  
  var _componentsPublicDepartment2 = _interopRequireDefault(_componentsPublicDepartment);
  
  var _componentsPublicSelectBox = require('../../components/public/selectBox');
  
  var _componentsPublicSelectBox2 = _interopRequireDefault(_componentsPublicSelectBox);
  
  var _componentsPublicPlugTableLoading = require('../../components/public/plugTableLoading');
  
  var _componentsPublicPlugTableLoading2 = _interopRequireDefault(_componentsPublicPlugTableLoading);
  
  var UserManagerMain = (function (_React$Component) {
      _inherits(UserManagerMain, _React$Component);
  
      function UserManagerMain() {
          _classCallCheck(this, UserManagerMain);
  
          _get(Object.getPrototypeOf(UserManagerMain.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(UserManagerMain, [{
          key: 'pageNavClick',
  
          //加载分页插件
          /*loadPage() {
              this.props._userManager({
                  loadPageFlag: false
              });
              this.pageNavClick(1,this.props.user.pageSize);
          }*/
  
          //调用分页加载
          value: function pageNavClick(n, pageSize) {
              console.log(pageSize);
              var ajaxData = {
                  curPage: n, //当前页
                  pageSize: pageSize, //每页多少行
                  trueName: this.props.user.searchUserName, //姓名
                  accountName: this.props.user.searchAccountNumber, //账号
                  mobilePhone: this.props.user.searchPhoneNumber, //手机号码
                  tcode: this.props.user.searchEmployeeNumber, //部门编号
                  roleCode: this.props.user.searchRoleCode, //角色编号
                  workingState: this.props.user.searchWorkingState };
  
              //在职状态
              this.props._userManager({
                  curPage: n,
                  pageSize: pageSize
              });
              this.loadData(ajaxData);
          }
  
          //加载数据
      }, {
          key: 'loadData',
          value: function loadData(ajaxData) {
              var _that = this;
              var options = {
                  curPage: ajaxData.curPage, //当前页
                  pageSize: ajaxData.pageSize, //每页多少行
                  trueName: ajaxData.trueName, //姓名
                  accountName: ajaxData.accountName, //账号
                  mobilePhone: ajaxData.mobilePhone, //手机号码
                  tcode: ajaxData.tcode, //部门编号
                  roleCode: ajaxData.roleCode, //角色编号
                  workingState: ajaxData.workingState,
  
                  callBack: function callBack(data) {
                      if (data.status == "0000") {
                          if (data.data.data.length > 0) {
                              _that.props._userManager({
                                  totalSize: data.data.count,
                                  status: 'success',
                                  list: data.data.data
                              });
                          } else {
                              _that.props._userManager({
                                  totalSize: data.data.count,
                                  status: 'nothing',
                                  list: data.data.data
                              });
                          }
                      } else {
                          _that.props._userManager({
                              totalSize: 0,
                              status: 'fail'
                          });
                      }
                      _that.props._userManager({
                          queryCheck: 0,
                          tableList: true
                      });
                  },
                  errorCallBack: function errorCallBack() {
                      _that.props._userManager({
                          queryCheck: 0,
                          totalSize: 0,
                          status: 'fail'
                      });
                  }
              };
              _that.props._userManager({
                  status: 'loading'
              });
              this.props._userManagerLoadData(options);
          }
  
          //获取部门树形结构数据和角色下拉框
      }, {
          key: 'getTreeData',
          value: function getTreeData() {
              var _that = this;
              this.props._userManagerLoadTree(function (data) {
                  if (data.status == "0000") {
                      var companys = data.data.companys; //部门
                      for (var i = 0; i < companys.length; i++) {
                          companys.isChildOpen = false;
                      }
                      _that.props._userManager({
                          departmentData: companys
                      });
  
                      var roles = data.data.roles; //角色
                      var rolesList = [{ value: "", name: "请选择" }]; //角色列表
                      for (var j = 0; j < roles.length; j++) {
                          var item = new Object();
                          item.value = roles[j].roleCode;
                          item.name = roles[j].roleName;
                          rolesList.push(item);
                      }
                      _that.props._userManager({
                          roleOldList: rolesList,
                          roleCodeList: true
                      });
                  }
              });
          }
  
          //分配资源按钮
      }, {
          key: 'allocateResources',
          value: function allocateResources(i) {
              var _that = this;
              var oldList = this.props.user.list;
              this.props._userManager({
                  userRoleList: oldList[i].roles
              });
              this.props._dialogHandle({
                  show: true,
                  type: "confirm",
                  title: oldList[i].trueName + ":分配角色",
                  width: '600px',
                  height: '500px',
                  content: _react2['default'].createElement(_componentsUserSelectPeople2['default'], { selectCallBack: this.selectCallBack.bind(this), oldList: oldList[i].roles,
                      roleOldList: this.props.user.roleOldList }),
                  success: (function () {
                      var _this = this;
  
                      var list = [],
                          allotCheck = this.props.user.allotCheck;
                      if (allotCheck == 0) {
                          (function () {
                              _this.props._userManager({
                                  allotCheck: 1
                              });
                              var roleCode = '';
                              var roleNames = [];
                              _this.props.user.userRoleList.map(function (item, i) {
                                  roleNames.push(item.roleName);
                                  if (roleCode == "") {
                                      roleCode += item.roleCode;
                                  } else {
                                      roleCode += ',' + item.roleCode;
                                  }
                              });
  
                              //发送ajax提交修改的角色类型数据
                              _this.props._userManagerChangeRole({
                                  partyId: oldList[i].partyId,
                                  roleCode: roleCode,
                                  roleNames: roleNames,
                                  trueName: oldList[i].trueName,
                                  callBack: (function (data) {
                                      if (data.status == "0000") {
                                          this.props._userManager({
                                              allotCheck: 0
                                          });
  
                                          this.props._dialogHandle({
                                              type: "tips",
                                              show: true,
                                              content: '保存成功！',
                                              height: '300px',
                                              hide: function hide() {
                                                  var ajaxData = {
                                                      curPage: _that.props.user.curPage, //当前页
                                                      pageSize: _that.props.user.pageSize, //每页多少行
                                                      trueName: _that.props.user.searchUserName, //姓名
                                                      accountName: _that.props.user.searchAccountNumber, //账号
                                                      mobilePhone: _that.props.user.searchPhoneNumber, //手机号码
                                                      tcode: _that.props.user.searchEmployeeNumber, //部门编号
                                                      roleCode: _that.props.user.searchRoleCode, //角色编号
                                                      workingState: _that.props.user.searchWorkingState };
                                                  //在职状态
                                                  _that.loadData(ajaxData);
                                              },
                                              success: function success() {
                                                  return true;
                                              }
                                          });
                                      } else {
                                          this.props._userManager({
                                              allotCheck: 0
                                          });
                                          this.props._dialogHandle({
                                              children: true,
                                              childrenContent: data.message
                                          });
                                          return false;
                                      }
                                  }).bind(_this),
                                  errorCallBack: (function (data) {
                                      this.props._userManager({
                                          allotCheck: 0
                                      });
                                  }).bind(_this)
                              });
                          })();
                      } else {
                          this.props._dialogHandle({
                              children: true,
                              childrenContent: '提交中'
                          });
                          return false;
                      }
                  }).bind(this)
              });
          }
  
          //选择人员回调函数
      }, {
          key: 'selectCallBack',
          value: function selectCallBack(list) {
              this.props._userManager({
                  userRoleList: list
              });
          }
  
          //处理数据
      }, {
          key: 'dealData',
          value: function dealData(oldList, status) {
              var _this2 = this;
  
              var resultTable = [];
              var partyId = this.props.login.account.partyId; //缓存中获取当前登陆人员的的partyId
              if (status == 'success') {
                  oldList.map(function (item, i) {
                      if (item.partyId == partyId || _this2.props.user.allocateResourcesBtnShow == false) {
                          resultTable.push(_react2['default'].createElement(
                              'tr',
                              { key: i },
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.trueName
                              ),
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.accountName
                              ),
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.mobilePhone
                              ),
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.companys
                              ),
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.roleNames
                              ),
                              _react2['default'].createElement('td', null)
                          ));
                      } else {
                          resultTable.push(_react2['default'].createElement(
                              'tr',
                              { key: i },
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.trueName
                              ),
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.accountName
                              ),
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.mobilePhone
                              ),
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.companys
                              ),
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  item.roleNames
                              ),
                              _react2['default'].createElement(
                                  'td',
                                  null,
                                  _react2['default'].createElement(
                                      'span',
                                      { className: 'btn', onClick: _this2.allocateResources.bind(_this2, i) },
                                      '分配角色'
                                  )
                              )
                          ));
                      }
                  });
                  return resultTable;
              } else {
                  return _react2['default'].createElement(_componentsPublicPlugTableLoading2['default'], { status: this.props.user.status, colSpanCount: '6',
                      classNameEnter: '' });
              }
          }
  
          //加载按钮
      }, {
          key: 'loadBtn',
          value: function loadBtn(btnList) {
              btnList = btnList == "" || btnList == undefined ? [] : btnList.split(',');
              var allocateResourcesBtnShow = false;
              btnList.map(function (item, index) {
                  var type = item.split(":")[1];
                  if (type == "assignRoles") {
                      //分配权限
                      allocateResourcesBtnShow = true;
                  }
              });
              this.props._userManager({
                  allocateResourcesBtnShow: allocateResourcesBtnShow });
              //添加按钮权限
              var ajaxData = {
                  curPage: 1, //当前页
                  pageSize: this.props.user.pageSize, //每页多少行
                  trueName: '', //姓名
                  accountName: '', //账号
                  mobilePhone: '', //手机号码
                  tcode: '', //部门编号
                  roleCode: '', //角色编号
                  workingState: '', //在职状态
                  loadPageFlag: true
              };
              this.loadData(ajaxData);
              this.getTreeData();
          }
      }, {
          key: 'componentDidMount',
          value: function componentDidMount() {
              var btnsList = new _untilsPublicFun.publicFun(this.props);
              this.props._userManager({
                  userName: "", //用户名
                  searchUserName: '', //搜索的用户名
                  accountNumber: "", //账号
                  searchAccountNumber: "", //搜索的账号
                  phoneNumber: "", //手机号
                  searchPhoneNumber: "", //搜索的手机号
                  employeeNumber: "", //部门编号
                  employeeText: "请选择", //部门编号对应的文案
                  searchEmployeeNumber: "", //搜索的部门编号
                  roleCode: "", //角色编码
                  searchRoleCode: "", //搜索的角色编号
                  workingState: '', //在职状态
                  searchWorkingState: '', //用于搜索的在职状态
                  checkAll: false,
                  status: 'loading', //加载状态
  
                  //btnList: this.props.login.Jurisdiction[currentTopMenu].btns[pathName],
                  btnList: btnsList.getJurisdiction(),
                  loadPageFlag: true,
                  curPage: 1,
                  totalSize: 0
              });
              var btnList = btnsList.getJurisdiction();
              this.loadBtn(btnList);
          }
  
          //账号文本框改变事件
      }, {
          key: 'accountNumberChange',
          value: function accountNumberChange(event) {
              this.props._userManager({
                  accountNumber: event.target.value
              });
          }
  
          //姓名文本框改变事件
      }, {
          key: 'userNameChange',
          value: function userNameChange(event) {
              this.props._userManager({
                  userName: event.target.value
              });
          }
  
          //手机号文本框改变事件
      }, {
          key: 'phoneNumberChange',
          value: function phoneNumberChange(event) {
              this.props._userManager({
                  phoneNumber: event.target.value
              });
          }
  
          //角色 改变事件
      }, {
          key: 'roleCodeChange',
          value: function roleCodeChange(roleCode) {
              this.props._userManager({
                  roleCode: roleCode
              });
          }
  
          //点击查询 触发事件
      }, {
          key: 'userManagerQuery',
          value: function userManagerQuery(event) {
              var _that = this;
              var queryCheck = this.props.user.queryCheck;
              if (queryCheck == 0) {
                  var ajaxData = {
                      queryCheck: 1,
                      curPage: 1, //当前页
                      pageSize: _that.props.user.pageSize, //每页多少行
                      trueName: $('#userManagerName').val(), //姓名
                      accountName: $('#userManagerAccountNumber').val(), //账号
                      mobilePhone: $('#userManagerPhoneNumber').val(), //手机号码
                      tcode: _that.props.user.employeeNumber, //部门编号
                      roleCode: _that.props.user.roleCode, //角色编号
                      workingState: this.props.user.workingState, //在职状态
                      loadPageFlag: true
                  };
                  this.props._userManager({
                      queryCheck: 1,
                      curPage: 1, //当前页
                      pageSize: _that.props.user.pageSize, //每页多少行
                      searchUserName: $('#userManagerName').val(), //姓名
                      searchAccountNumber: $('#userManagerAccountNumber').val(), //账号
                      searchPhoneNumber: $('#userManagerPhoneNumber').val(), //手机号码
                      searchEmployeeNumber: _that.props.user.employeeNumber, //部门编号
                      employeeText: _that.props.user.employeeText, //部门编号对应的文案
                      searchRoleCode: _that.props.user.roleCode, //角色编号
                      searchWorkingState: this.props.user.workingState, //在职状态
                      totalSize: 0,
                      loadPageFlag: true
                  });
                  _that.loadData(ajaxData);
              } else {
                  this.props._dialogHandle({
                      type: "tips",
                      time: 2000,
                      content: "正在查询中，请耐心等待！",
                      tipsType: "warning",
                      show: true
                  });
              }
          }
  
          //点击重置  重置 选择框
      }, {
          key: 'userManagerReset',
          value: function userManagerReset(event) {
              var employeeNumber = $('#department').find('.s-ul').html();
              $('#department').find('.s-ul').html('');
              if (employeeNumber != "") {
                  $('#department').append('<label>请选择</label>');
              }
  
              this.props._userManager({
                  userName: "", //用户名
                  searchUserName: '', //搜索的用户名
                  accountNumber: "", //账号
                  searchAccountNumber: "", //搜索的账号
                  phoneNumber: "", //手机号
                  searchPhoneNumber: "", //搜索的手机号
                  employeeNumber: "", //部门编号
                  employeeText: "请选择", //部门编号对应的文案
                  searchEmployeeNumber: "", //搜索的部门编号
                  roleCode: "", //角色编码
                  searchRoleCode: "", //搜索的角色编号
                  workingState: '' });
              //在职状态
              var date = this.props.user.departmentData;
              for (var i = 0; i < date.length; i++) {
                  date[i].isChildOpen = false;
              }
          }
  
          //获得所选部门
      }, {
          key: 'departmentFun',
          value: function departmentFun(tcode, text) {
              this.props._userManager({
                  employeeNumber: tcode,
                  employeeText: text
              });
          }
  
          //在职状态 输入框修改
      }, {
          key: 'workingStateFun',
          value: function workingStateFun(event) {
              this.props._userManager({
                  workingState: event
              });
          }
      }, {
          key: 'render',
          value: function render() {
  
              return _react2['default'].createElement(
                  'div',
                  { className: 'height100p' },
                  _react2['default'].createElement(_componentsPublicCenterTopNav2['default'], { title: '用户管理', parentList: [{ name: "系统管理" }] }),
                  _react2['default'].createElement(
                      'div',
                      { className: 'height100pY user-manager-content clearfix' },
                      _react2['default'].createElement(
                          'div',
                          { className: 'form-content' },
                          _react2['default'].createElement(
                              'span',
                              null,
                              '姓名:'
                          ),
                          _react2['default'].createElement('input', { id: 'userManagerName', type: 'text', value: this.props.user.userName,
                              className: 'role-name',
                              onChange: this.userNameChange.bind(this), onBlur: this.userNameChange.bind(this),
                              placeholder: '请输入姓名' }),
                          _react2['default'].createElement(
                              'span',
                              null,
                              '帐号:'
                          ),
                          _react2['default'].createElement('input', { id: 'userManagerAccountNumber', type: 'text', value: this.props.user.accountNumber,
                              className: 'role-name',
                              onChange: this.accountNumberChange.bind(this),
                              onBlur: this.accountNumberChange.bind(this), placeholder: '请输入帐号' }),
                          _react2['default'].createElement(
                              'span',
                              null,
                              '手机号:'
                          ),
                          _react2['default'].createElement('input', { id: 'userManagerPhoneNumber', type: 'text', value: this.props.user.phoneNumber,
                              className: 'role-name',
                              onChange: this.phoneNumberChange.bind(this), onBlur: this.phoneNumberChange.bind(this),
                              placeholder: '请输入手机号' }),
                          _react2['default'].createElement(
                              'div',
                              { className: 'sec-cont clearfix' },
                              _react2['default'].createElement(
                                  'span',
                                  { className: 'lable ' },
                                  '部门:'
                              ),
                              _react2['default'].createElement(_componentsPublicDepartment2['default'], { value: this.props.user.employeeText,
                                  departmentData: this.props.user.departmentData,
                                  callBack: this.departmentFun.bind(this) }),
                              _react2['default'].createElement(
                                  'span',
                                  { className: 'lable' },
                                  '角色:'
                              ),
                              _react2['default'].createElement(_componentsPublicSelectBox2['default'], { className: 'role-name',
                                  value: this.props.user.roleCode,
                                  list: this.props.user.roleOldList,
                                  callBack: this.roleCodeChange.bind(this)
                              }),
                              _react2['default'].createElement(
                                  'span',
                                  null,
                                  '在职状态:'
                              ),
                              _react2['default'].createElement(_componentsPublicSelectBox2['default'], { className: 'role-name',
                                  value: this.props.user.workingState,
                                  list: [{ value: '', name: '请选择' }, { value: '实习', name: '实习' }, { value: '试用', name: '试用' }, { value: '正式', name: '正式' }, { value: '离职', name: '离职' }],
                                  callBack: this.workingStateFun.bind(this)
                              })
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'btn-content' },
                          _react2['default'].createElement(
                              'span',
                              { className: 'btn', onClick: this.userManagerQuery.bind(this) },
                              '查询'
                          ),
                          _react2['default'].createElement(
                              'span',
                              { className: 'btn', onClick: this.userManagerReset.bind(this) },
                              '重置'
                          )
                      ),
                      _react2['default'].createElement(
                          'table',
                          { className: 'table' },
                          _react2['default'].createElement(
                              'thead',
                              null,
                              _react2['default'].createElement(
                                  'tr',
                                  null,
                                  _react2['default'].createElement(
                                      'th',
                                      null,
                                      '姓名'
                                  ),
                                  _react2['default'].createElement(
                                      'th',
                                      null,
                                      '帐号'
                                  ),
                                  _react2['default'].createElement(
                                      'th',
                                      null,
                                      '手机号'
                                  ),
                                  _react2['default'].createElement(
                                      'th',
                                      null,
                                      '部门'
                                  ),
                                  _react2['default'].createElement(
                                      'th',
                                      null,
                                      '角色'
                                  ),
                                  _react2['default'].createElement(
                                      'th',
                                      null,
                                      '操作'
                                  )
                              )
                          ),
                          _react2['default'].createElement(
                              'tbody',
                              null,
                              this.dealData(this.props.user.list, this.props.user.status)
                          )
                      ),
                      _react2['default'].createElement(_componentsPublicPagination2['default'], {
                          curPage: this.props.user.curPage,
                          totalNumber: this.props.user.totalSize,
                          pageLimt: this.props.user.pageSize,
                          pageClick: this.pageNavClick.bind(this)
                      })
                  )
              );
          }
      }]);
  
      return UserManagerMain;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      return state;
  }
  
  function mapDispatchToProps(dispatch) {
      return {
          /*user  页面回调方法*/
          _userManager: function _userManager(options) {
              dispatch((0, _actionsUser.userHandle)(options));
          },
          _userManagerLoadData: function _userManagerLoadData(options) {
              //userManagerLoadData, userManagerLoadTree,userManagerChangeRole
              dispatch((0, _actionsUser.userLoadData)(options));
          },
          _userManagerLoadTree: function _userManagerLoadTree(options) {
              dispatch((0, _actionsUser.userLoadTree)(options));
          },
          _userManagerChangeRole: function _userManagerChangeRole(options) {
              dispatch((0, _actionsUser.userChangeRole)(options));
          },
          _dialogHandle: function _dialogHandle(options) {
              dispatch((0, _actionsDialog.dialogHandle)(options));
          }
      };
  }
  
  var UserManager = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(UserManagerMain);
  
  exports['default'] = UserManager;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/containers/admin/user/index.js.map
  

});

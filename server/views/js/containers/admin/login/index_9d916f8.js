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
  
  var _actions = require('../../actions');
  
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
  
              var _that = this;
              $('#loginBtn').keydown(function (e) {
                  //直接登录回车事件
                  if (_that.props.login.loginHash) {
                      if (e.keyCode == 13) {
                          _that.loginBtn();
                      }
                  }
              });
              $('#nextStepBtn').keydown(function (e) {
                  //下一步回车事件
                  if (_that.props.login.nextHash) {
                      if (e.keyCode == 13) {
                          _that.nextStep();
                      }
                  }
              });
  
              $('#resetPassLogin').keydown(function (e) {
                  //重置密码回车事件
                  if (_that.props.login.setPsdHash) {
                      if (e.keyCode == 13) {
                          _that.setPassWord();
                      }
                  }
              });
          }
  
          //首次登录点击
      }, {
          key: 'firstLogin',
          value: function firstLogin() {
              this.props._loginHandle({
                  currentState: "phonecheck",
                  status: 2,
                  errorShow: false, //是否展示错误信息
                  errorMsg: "" //错误信息
              });
          }
  
          //忘记密码点击
      }, {
          key: 'forgetPassword',
          value: function forgetPassword() {
              this.props._loginHandle({
                  currentState: "phonecheck",
                  status: 3,
                  errorShow: false, //是否展示错误信息
                  errorMsg: "" //错误信息
              });
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
  
          //手机号码文本框改变事件
      }, {
          key: 'phoneNumberChange',
          value: function phoneNumberChange(event) {
              this.props._loginHandle({
                  phoneNumber: event.target.value
              });
          }
  
          //短信验证码文本框改变事件
      }, {
          key: 'verificationCodeChange',
          value: function verificationCodeChange(event) {
              this.props._loginHandle({
                  verificationCode: event.target.value
              });
          }
  
          //忘记密码--密码文本框改变事件
      }, {
          key: 'fPasswordChange',
          value: function fPasswordChange(event) {
              this.props._loginHandle({
                  fPassword: event.target.value
              });
          }
  
          //忘记密码--确认密码文本框改变事件
      }, {
          key: 'confirmPasswordChange',
          value: function confirmPasswordChange(event) {
              this.props._loginHandle({
                  confirmPassword: event.target.value
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
              var userNameCheck = $.XlCheck({
                  val: userName,
                  rule: ["Empty"] //
              });
              var passWordCheck = $.XlCheck({
                  val: passWord,
                  len: "6,32",
                  rule: ["Empty", "NumberEng", "Length"]
              });
              //校验用户名
              if (!userNameCheck.result) {
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
              if (!passWordCheck.result) {
                  if (!passWordCheck.Empty) {
                      this.props._loginHandle({
                          errorMsg: "请输入密码",
                          errorShow: true
                      });
                      return false;
                  }
              }
  
              this.props._accountLogin({
                  userName: this.props.login.userName,
                  passWord: this.props.login.passWord
              });
          }
  
          //获取短信验证码
      }, {
          key: 'getVerificationCode',
          value: function getVerificationCode() {
              var getCheckNumber = document.getElementById('getCheckNumber');
              console.log(getCheckNumber.innerText);
              if (getCheckNumber.innerText != "获取验证码") {
                  return false;
              }
  
              this.props._loginHandle({
                  errorMsg: "",
                  errorShow: false
              });
  
              var phoneNum = this.props.login.phoneNumber;
              var phoneNumCheck = $.XlCheck({
                  val: phoneNum,
                  rule: ["Empty", "Phone"]
              });
              if (!phoneNumCheck.result) {
                  if (!phoneNumCheck.Empty) {
                      this.props._loginHandle({
                          errorMsg: "请输入手机号码",
                          errorShow: true,
                          loginHash: true
                      });
                      return false;
                  }
                  if (!phoneNumCheck.Phone) {
                      this.props._loginHandle({
                          errorMsg: "手机号码格式不正确",
                          errorShow: true,
                          loginHash: true
                      });
                      return false;
                  }
              }
  
              this.searchUserInfo();
          }
  
          //发送短信
      }, {
          key: 'sendMessage',
          value: function sendMessage() {
              this.countDown(this.props.login.secondsNum);
              this.props._sendMessage({
                  mobilePhone: this.props.login.phoneNumber
              });
          }
  
          //倒计时
      }, {
          key: 'countDown',
          value: function countDown(second) {
              var getCheckNumber = document.getElementById('getCheckNumber');
              var codeMsg = '';
              if (second == -1) {
                  codeMsg = '获取验证码';
                  getCheckNumber.innerText = codeMsg;
                  return false;
              }
              codeMsg = "重新发送(" + second + "s)";
              getCheckNumber.innerText = codeMsg;
              var _that = this;
              setTimeout(function () {
                  _that.countDown(second - 1);
              }, 1000);
          }
  
          //根据手机号去匹配数据库
      }, {
          key: 'searchUserInfo',
          value: function searchUserInfo() {
              var _this = this;
  
              this.props._smsBiz({
                  phoneNumber: this.props.login.phoneNumber,
                  callback: function callback() {
                      _this.sendMessage();
                  }
              });
          }
  
          //下一步点击事件
      }, {
          key: 'nextStep',
          value: function nextStep() {
              var _this2 = this;
  
              this.props._loginHandle({
                  errorMsg: "",
                  errorShow: false,
                  nextHash: false
              });
              var phoneNum = this.props.login.phoneNumber;
              var codeVal = this.props.login.verificationCode;
              var phoneNumCheck = $.XlCheck({
                  val: phoneNum,
                  rule: ["Empty", "Phone"]
              });
              var codeCheck = $.XlCheck({
                  val: codeVal,
                  len: "6",
                  rule: ["Empty", "Number", "Length"]
              });
              //校验手机号
              if (!phoneNumCheck.result) {
                  if (!phoneNumCheck.Empty) {
                      this.props._loginHandle({
                          errorMsg: "请输入手机号码",
                          errorShow: true,
                          nextHash: true
                      });
                      return false;
                  }
                  if (!phoneNumCheck.Phone) {
                      this.props._loginHandle({
                          errorMsg: "手机号码格式不正确",
                          errorShow: true,
                          nextHash: true
                      });
                      return false;
                  }
              }
              //校验验证码
              if (!codeCheck.result) {
                  if (!codeCheck.Empty) {
                      this.props._loginHandle({
                          errorMsg: "请获取验证码",
                          errorShow: true,
                          nextHash: true
                      });
                      return false;
                  }
                  if (!codeCheck.Number) {
                      this.props._loginHandle({
                          errorMsg: "验证码输入错误",
                          errorShow: true,
                          nextHash: true
                      });
                      return false;
                  }
                  if (!codeCheck.Length) {
                      this.props._loginHandle({
                          errorMsg: "验证码输入错误",
                          errorShow: true,
                          nextHash: true
                      });
                      return false;
                  }
              }
  
              //验证短信验证码
              this.props._validateSmsCode({
                  verificationCode: this.props.login.verificationCode,
                  mobilePhone: this.props.login.phoneNumber,
                  callback: function callback() {
                      _this2.getPartyId();
                  }
              });
          }
  
          //获取partyId
      }, {
          key: 'getPartyId',
          value: function getPartyId() {
              this.props._getPartyId({ phoneNumber: this.props.login.phoneNumber });
          }
  
          //忘记密码/首次登录  输入密码和确认密码的登录按钮
      }, {
          key: 'setPassWord',
          value: function setPassWord() {
              this.props._loginHandle({
                  errorMsg: "",
                  errorShow: false,
                  setPsdHash: false
              });
              var fpassw = this.props.login.fPassword; //密码
              var cpassw = this.props.login.confirmPassword; //确认密码
              var fpasswCheck = $.XlCheck({
                  val: fpassw,
                  len: "6,32",
                  rule: ["Empty", "NumberAndEng", "Length"]
              });
              var cpasswCheck = $.XlCheck({
                  val: cpassw,
                  len: "6,32",
                  rule: ["Empty", "NumberAndEng", "Length"]
              });
              //校验密码格式
              if (!fpasswCheck.result) {
                  if (!fpasswCheck.Empty) {
                      this.props._loginHandle({
                          errorMsg: "密码不能为空",
                          errorShow: true,
                          setPsdHash: true
                      });
                      return false;
                  }
                  if (!fpasswCheck.NumberAndEng) {
  
                      this.props._loginHandle({
                          errorMsg: "请输入6-32位数字、字母格式的密码",
                          errorShow: true,
                          setPsdHash: true
                      });
                      return false;
                  }
                  if (!fpasswCheck.len) {
                      this.props._loginHandle({
                          errorMsg: "请输入6-32位数字、字母格式的密码",
                          errorShow: true,
                          setPsdHash: true
                      });
                      return false;
                  }
              }
              //校验确认密码格式
              if (!cpasswCheck.result) {
                  if (!cpasswCheck.Empty) {
                      this.props._loginHandle({
                          errorMsg: "请再次输入新的密码不能为空",
                          errorShow: true,
                          setPsdHash: true
                      });
                      return false;
                  }
                  if (!cpasswCheck.NumberAndEng) {
                      this.props._loginHandle({
                          errorMsg: "请输入6-32位数字、字母格式的密码",
                          errorShow: true,
                          setPsdHash: true
                      });
                      return false;
                  }
                  if (!cpasswCheck.len) {
                      this.props._loginHandle({
                          errorMsg: "请输入6-32位数字、字母格式的密码",
                          errorShow: true,
                          setPsdHash: true
                      });
                      return false;
                  }
              }
              if (fpassw != cpassw) {
                  this.props._loginHandle({
                      errorMsg: "两次密码输入不一致",
                      errorShow: true,
                      setPsdHash: true
                  });
                  return false;
              }
              //设置密码提交
              this.props._submitPassword({
                  partyId: this.props.login.partyId,
                  newpwd: this.props.login.confirmPassword
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
                          { className: 'login', id: 'loginBtn', style: { display: this.props.login.currentState == "login" ? "block" : "none" } },
                          _react2['default'].createElement('input', { className: 'user-name', type: 'text', value: this.props.login.userName, onChange: this.userNameChange.bind(this), placeholder: '请输入员工帐号或手机号' }),
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
                          ),
                          _react2['default'].createElement(
                              'div',
                              { className: 'sc-or-wj' },
                              _react2['default'].createElement(
                                  'span',
                                  { onClick: this.firstLogin.bind(this) },
                                  '首次登录'
                              ),
                              '　/　',
                              _react2['default'].createElement(
                                  'span',
                                  { onClick: this.forgetPassword.bind(this) },
                                  '忘记密码'
                              )
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'forget-password', id: 'resetPassLogin', style: { display: this.props.login.currentState == "passowrd" ? "block" : "none" } },
                          _react2['default'].createElement('input', { className: 'user-name', type: 'password', maxLength: '32', value: this.props.login.fPassword, onChange: this.fPasswordChange.bind(this), placeholder: '请设置新的密码' }),
                          _react2['default'].createElement('input', { className: 'pass-word', type: 'password', maxLength: '32', value: this.props.login.confirmPassword, onChange: this.confirmPasswordChange.bind(this), placeholder: '请确认新的密码' }),
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
                              { className: 'login-btn', onClick: this.setPassWord.bind(this) },
                              '登录'
                          ),
                          _react2['default'].createElement(
                              'div',
                              { className: 'sc-or-wj', onClick: this.showLogin.bind(this) },
                              _react2['default'].createElement(
                                  'span',
                                  null,
                                  '返回登录'
                              )
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'phone-check', id: 'nextStepBtn', style: { display: this.props.login.currentState == "phonecheck" ? "block" : "none" } },
                          _react2['default'].createElement('input', { className: 'user-name', type: 'text', value: this.props.login.phoneNumber, onChange: this.phoneNumberChange.bind(this), placeholder: '请输入手机号' }),
                          _react2['default'].createElement(
                              'p',
                              { className: 'code-cont' },
                              _react2['default'].createElement('input', { className: 'code-word', type: 'text', maxLength: '6', value: this.props.login.verificationCode, onChange: this.verificationCodeChange.bind(this), placeholder: '请输入验证码' }),
                              _react2['default'].createElement(
                                  'span',
                                  { className: 'code-btn', id: 'getCheckNumber', onClick: this.getVerificationCode.bind(this) },
                                  '获取验证码'
                              )
                          ),
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
                              { className: 'login-btn', onClick: this.nextStep.bind(this) },
                              '下一步'
                          ),
                          _react2['default'].createElement(
                              'div',
                              { className: 'sc-or-wj' },
                              _react2['default'].createElement(
                                  'span',
                                  { onClick: this.showLogin.bind(this) },
                                  '返回登录'
                              )
                          )
                      )
                  ),
                  _react2['default'].createElement(
                      'div',
                      { className: 'login-record' },
                      _react2['default'].createElement(
                          'span',
                          null,
                          '沪ICP备15036680号-1'
                      ),
                      _react2['default'].createElement(
                          'a',
                          { target: '_blank', href: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502004297' },
                          _react2['default'].createElement('i', null),
                          _react2['default'].createElement(
                              'p',
                              null,
                              '沪公网安备 31011502004297号'
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
          _loginHandle: function _loginHandle(options) {
              dispatch((0, _actions.loginHandle)(options));
          },
          _accountLogin: function _accountLogin(options) {
              dispatch((0, _actions.accountLogin)(options));
          },
          _sendMessage: function _sendMessage(options) {
              dispatch((0, _actions.sendMessage)(options));
          },
          _smsBiz: function _smsBiz(options) {
              dispatch((0, _actions.smsBiz)(options));
          },
          _validateSmsCode: function _validateSmsCode(options) {
              dispatch((0, _actions.validateSmsCode)(options));
          },
          _getPartyId: function _getPartyId(options) {
              dispatch((0, _actions.getPartyId)(options));
          },
          _submitPassword: function _submitPassword(options) {
              dispatch((0, _actions.submitPassword)(options));
          }
      };
  }
  
  var UserLogin = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(LoginMain);
  
  exports['default'] = UserLogin;
  module.exports = exports['default'];
  /*登录*/ /* 忘记密码和首次登录  输入密码和确认密码 */ /* 忘记密码和首次登录  输入手机号码和验证码 */
  //# sourceMappingURL=/js/containers/admin/login/index.js.map
  

});

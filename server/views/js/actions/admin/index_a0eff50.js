define('src/js/actions/admin/index', function(require, exports, module) {

  /**
   * Created by apple on 17/3/29.
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  //登录模块事件处理
  function loginHandle(options) {
      return {
          type: "LOGIN_HANDLE",
          options: options
      };
  }
  
  //登录接口
  function accountLogin(options) {
      var _this = this;
      return function (dispatch) {
          $.XlAjax({
              url: "accountLogin",
              data: {
                  accountName: options.userName,
                  password: options.passWord
              },
              success: function success(data) {
                  if (data.status == "0000") {
                      //登录成功
                      dispatch(loginHandle({
                          loginHash: true
                      }));
                      dispatch(getPermissions(data));
                  } else {
                      dispatch(loginHandle({
                          errorMsg: data.message,
                          errorShow: true,
                          loginHash: true
                      }));
                  }
              },
              error: function error() {
                  dispatch(loginHandle({
                      loginHash: true
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //处理登录数据
  function getPermissions(data) {
      return function (dispatch) {
          dispatch(loginHandle({
              Jurisdiction: data.data.pers,
              account: data.data.account,
              employ: data.data.employeeTitles ? data.data.employeeTitles[0] : {},
              isLogin: true
          }));
      };
  }
  
  //发送短信
  function sendMessage(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "sendMessage",
              data: {
                  mobilePhone: options.mobilePhone
              },
              success: function success(data) {
                  if (data.status == "0000") {
                      //校验手机号码成功
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'success',
                          content: "发送短信验证码成功",
                          time: 2000
                      }));
                  } else {
                      dispatch(loginHandle({
                          errorMsg: data.message,
                          errorShow: true
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //根据手机号去匹配数据库
  function smsBiz(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "smsBiz",
              data: {
                  mobilePhone: options.phoneNumber
              },
              success: function success(data) {
                  if (data.status == "0000") {
                      //校验手机号码成功
                      options.callback();
                  } else {
                      dispatch(loginHandle({
                          errorMsg: data.message,
                          errorShow: true
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //验证短信验证码
  function validateSmsCode(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "validateSmsCode",
              data: {
                  smsNumber: options.verificationCode,
                  mobilePhone: options.mobilePhone
              },
              success: function success(data) {
                  if (data.status == "0000") {
                      options.callback();
                  } else {
                      dispatch(loginHandle({
                          errorMsg: data.message,
                          errorShow: true
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //获取partyId
  function getPartyId(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "next",
              data: {
                  mobilePhone: options.phoneNumber
              },
              success: function success(data) {
                  if (data.status == "0000") {
                      dispatch(loginHandle({
                          partyId: data.data.partyId,
                          currentState: "passowrd",
                          nextHash: true
                      }));
                  } else {
                      dispatch(loginHandle({
                          errorMsg: data.message,
                          errorShow: true,
                          nextHash: true
                      }));
                  }
              },
              error: function error() {
                  dispatch(loginHandle({
                      nextHash: true
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //设置密码提交
  function submitPassword(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "restPassWord",
              data: {
                  partyId: options.partyId,
                  newpwd: options.newpwd
              },
              success: function success(data) {
                  if (data.status == "0000") {
                      //登录成功
                      dispatch(loginHandle({
                          setPsdHash: true
                      }));
                      dispatch(getPermissions(data));
                  } else {
                      dispatch(loginHandle({
                          errorMsg: data.message,
                          errorShow: true,
                          setPsdHash: true
                      }));
                  }
              },
              error: function error() {
                  dispatch(loginHandle({
                      setPsdHash: true
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  exports.loginHandle = loginHandle;
  exports.accountLogin = accountLogin;
  exports.sendMessage = sendMessage;
  exports.smsBiz = smsBiz;
  exports.validateSmsCode = validateSmsCode;
  exports.getPartyId = getPartyId;
  exports.submitPassword = submitPassword;
  //# sourceMappingURL=/js/actions/admin/index.js.map
  

});

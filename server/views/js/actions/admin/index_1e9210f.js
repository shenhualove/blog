define('src/js/actions/admin/index', function(require, exports, module) {

  /**
   * Created by shenhua
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  exports.loginHandle = loginHandle;
  exports.accountLogin = accountLogin;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _utilsCommonFetch = require('src/js/utils/common/fetch');
  
  var _utilsCommonFetch2 = _interopRequireDefault(_utilsCommonFetch);
  
  var _common = require('src/js/actions/common/index');
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  var handleText = "LOGIN_HANDLE";
  
  //触发action
  
  function loginHandle(data) {
      return function (dispatch) {
          dispatch((0, _common.handle)(handleText, data));
      };
  }
  
  //登录接口
  
  function accountLogin(options) {
      return function (dispatch) {
          (0, _utilsCommonFetch2['default'])({
              url: "accountLogin",
              data: {
                  accountName: options.userName,
                  password: options.passWord
              },
              success: function success(data) {
                  if (data.status == "1") {
                      //登录成功
                      dispatch((0, _common.handle)(handleText, {
                          loginHash: true
                      }));
                      dispatch((0, _common.handle)("LOGIN_SUCCESS", data.data));
                  } else {
                      dispatch((0, _common.handle)(handleText, {
                          errorMsg: data.message,
                          errorShow: true,
                          loginHash: true
                      }));
                  }
              },
              error: function error() {
                  dispatch((0, _common.handle)(handleText, {
                      loginHash: true
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  //# sourceMappingURL=/js/actions/admin/index.js.map
  

});

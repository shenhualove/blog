define('src/js/actions/admin/top', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/1.
   *
   * 顶部菜单模块
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  //顶部TOP模块事件处理
  function topHandle(options) {
      return {
          type: "TOP_HANDLE",
          options: options
      };
  }
  
  //退出登录
  function logOut(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "loginout",
              success: function success(data) {
                  if (data.status == "0000") {
                      sessionStorage.clear();
                      window.location.href = "/";
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //重设密码
  function setPassWord(options) {
      var _this = this;
      return function (dispatch) {
          $.XlAjax({
              url: "resetPwd",
              data: {
                  oldPwd: $("#oldPsd").val(),
                  newPwd: $("#confirmPsd").val()
              },
              success: function success(data) {
                  if (data.status == "0000") {
                      //校验手机号码成功
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          content: "密码修改成功，2秒后自动跳转到登录页面",
                          time: 2000,
                          success: function success() {
                              return true;
                          },
                          hide: function hide() {
                              sessionStorage.clear();
                              options.callBack();
                              window.location.href = '/';
                          }
                      }));
                  } else if (data.status == "9999") {
                      options.errMesg();
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: "warning",
                          content: data.message
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  exports.topHandle = topHandle;
  exports.logOut = logOut;
  exports.setPassWord = setPassWord;
  //# sourceMappingURL=/js/actions/admin/top.js.map
  

});

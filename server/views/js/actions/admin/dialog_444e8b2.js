define('src/js/actions/admin/dialog', function(require, exports, module) {

  /**
   * Created by shenhua
   *
   * 弹窗组件
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.dialogHandle = dialogHandle;
  exports.ajaxErrorLog = ajaxErrorLog;
  
  function dialogHandle(options) {
      return {
          type: "DIALOG_HANDLE",
          options: options
      };
  }
  
  function ajaxErrorLog(xhr, errorType, error, dispatch) {
      var options = null;
      if (errorType == "abort") {
          //无网络
          options = {
              type: "tips",
              tipsType: "warning",
              show: true,
              content: "网络已断开,请重新登录试试"
          };
      } else if (errorType == "timeout") {
          //超时
          options = {
              type: "tips",
              tipsType: "warning",
              show: true,
              content: "系统连接超时,请重新登录试试"
          };
      } else if (errorType == "error") {
          //服务器或者客户端错误
          switch (xhr.status) {
              case 401:
                  options = {
                      type: "tips",
                      tipsType: "warning",
                      show: true,
                      content: "登录超时，请重新登录",
                      success: function success() {
                          sessionStorage.clear();
                          window.location.href = "/";
                      }
                  };
                  break;
              case 403:
                  options = {
                      type: "tips",
                      tipsType: "warning",
                      show: true,
                      content: "没有权限，禁止访问"
                  };
                  break;
              case 404:
                  options = {
                      type: "tips",
                      tipsType: "warning",
                      show: true,
                      content: "未找到服务器,请重新登录试试"
                  };
                  break;
              case 500:
                  options = {
                      type: "tips",
                      tipsType: "warning",
                      show: true,
                      content: "服务器未响应,请重新登录试试"
                  };
                  break;
              case 503:
                  options = {
                      type: "tips",
                      tipsType: "warning",
                      show: true,
                      content: "服务器不可用,请重新登录试试"
                  };
                  break;
              case 504:
                  options = {
                      type: "tips",
                      tipsType: "warning",
                      show: true,
                      content: "网关超时,请重新登录试试"
                  };
                  break;
          }
      }
      if (options) {
          dispatch(dialogHandle(options));
      }
  }
  //# sourceMappingURL=/js/actions/admin/dialog.js.map
  

});

;/*!/src/js/actions/admin/dialog.js*/
define('src/js/actions/admin/dialog', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/12.
   *
   * 弹窗组件
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
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
              case 402:
                  options = {
                      type: "tips",
                      tipsType: "warning",
                      show: true,
                      content: "您的帐号在其他设备登录，您被迫下线",
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
  
  exports.dialogHandle = dialogHandle;
  exports.ajaxErrorLog = ajaxErrorLog;
  //# sourceMappingURL=/js/actions/admin/dialog.js.map
  

});

;/*!/src/js/actions/admin/home.js*/
define('src/js/actions/admin/home', function(require, exports, module) {

  
  //首页模块事件处理
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function homeHandle(options) {
      return {
          type: "HOME_HANDLE",
          options: options
      };
  }
  
  //首页 图表数据
  function getEchartData(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "report",
              data: {},
              success: function success(data) {
                  if (data.status == "0000") {
                      var list = data.data;
                      dispatch(homeHandle({
                          listData: list.date,
                          listBalance: list.balance,
                          listNodeCount: list.nodeCount
                      }));
                      options.callback();
                  } else {
                      $.dialog({
                          type: 'message',
                          title: "",
                          content: data.message
                      });
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  exports.getEchartData = getEchartData;
  exports.homeHandle = homeHandle;
  //# sourceMappingURL=/js/actions/admin/home.js.map
  

});

;/*!/src/js/actions/admin/index.js*/
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

;/*!/src/js/actions/admin/reportForm/bankAllDataDay.js*/
define('src/js/actions/admin/reportForm/bankAllDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/24.
   *
   * 全辖银行业务全量银行数据汇总报表-日
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function bankAllDataDayHandle(options) {
      return {
          type: "BANKALLDATADAY_HANDLE",
          options: options
      };
  }
  
  function bankAllDataDayLoad(options) {
      return function (dispatch) {
          dispatch(bankAllDataDayHandle({
              status: "loading"
          }));
          $.XlAjax({
              url: "bankbizRoutineReport",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      if (data.data.data.bankbizRoutineList.length > 0) {
                          var isShow = false;
                          if (options.curPage == Math.ceil(data.data.count / options.pageSize)) {
                              //当前是最后一页
                              isShow = true;
                          }
                          dispatch(bankAllDataDayHandle({
                              listData: data.data.data.bankbizRoutineList,
                              totalData: data.data.data.bankbizRoutineExt,
                              totalSize: data.data.count,
                              showTotal: isShow,
                              status: "success"
                          }));
                      } else {
                          dispatch(bankAllDataDayHandle({
                              listData: data.data.data.bankbizRoutineList,
                              totalData: data.data.data.bankbizRoutineExt,
                              totalSize: data.data.count,
                              status: "nothing"
                          }));
                      }
                  } else {
                      dispatch(bankAllDataDayHandle({
                          status: "fail"
                      }));
                  }
              },
              error: function error() {
                  dispatch(bankAllDataDayHandle({
                      status: "fail"
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function bankAllDataDayExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "bankbizRoutineExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.bankAllDataDayHandle = bankAllDataDayHandle;
  exports.bankAllDataDayLoad = bankAllDataDayLoad;
  exports.bankAllDataDayExport = bankAllDataDayExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/bankAllDataDay.js.map
  

});

;/*!/src/js/actions/admin/reportForm/bankAllDataMonth.js*/
define('src/js/actions/admin/reportForm/bankAllDataMonth', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/27.
   *
   * 全辖银行业务常规数据汇总报表-月
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function bankAllDataMonthHandle(options) {
      return {
          type: "BANKALLDATAMONTH_HANDLE",
          options: options
      };
  }
  
  function bankAllDataMonthLoad(options) {
      return function (dispatch) {
          dispatch(bankAllDataMonthHandle({
              status: "loading"
          }));
          $.XlAjax({
              url: "bankbizRoutineReport",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      if (data.data.data.bankbizRoutineList.length > 0) {
                          var isShow = false;
                          if (options.curPage == Math.ceil(data.data.count / options.pageSize)) {
                              //当前是最后一页
                              isShow = true;
                          }
                          dispatch(bankAllDataMonthHandle({
                              listData: data.data.data.bankbizRoutineList,
                              totalData: data.data.data.bankbizRoutineExt,
                              totalSize: data.data.count,
                              showTotal: isShow,
                              status: "success"
                          }));
                      } else {
                          dispatch(bankAllDataMonthHandle({
                              listData: data.data.data.bankbizRoutineList,
                              totalData: data.data.data.bankbizRoutineExt,
                              totalSize: data.data.count,
                              status: "nothing"
                          }));
                      }
                  } else {
                      dispatch(bankAllDataMonthHandle({
                          status: "fail"
                      }));
                  }
              },
              error: function error() {
                  dispatch(bankAllDataMonthHandle({
                      status: "fail"
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function bankAllDataMonthExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "bankbizRoutineExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.bankAllDataMonthHandle = bankAllDataMonthHandle;
  exports.bankAllDataMonthLoad = bankAllDataMonthLoad;
  exports.bankAllDataMonthExport = bankAllDataMonthExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/bankAllDataMonth.js.map
  

});

;/*!/src/js/actions/admin/reportForm/bankErrorDataDay.js*/
define('src/js/actions/admin/reportForm/bankErrorDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/27.
   *
   * 全辖银行业务待处理异常数据汇总报表-日
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function bankErrorDataDayHandle(options) {
      return {
          type: "BANKERRORDATADAY_HANDLE",
          options: options
      };
  }
  
  function bankErrorDataDayLoad(options) {
      return function (dispatch) {
          dispatch(bankErrorDataDayHandle({
              status: "loading"
          }));
          $.XlAjax({
              url: "bankbizExceptionReport",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      if (data.data.data.bankbizExceptionList.length > 0) {
                          var isShow = false;
                          if (options.curPage == Math.ceil(data.data.count / options.pageSize)) {
                              //当前是最后一页
                              isShow = true;
                          }
                          dispatch(bankErrorDataDayHandle({
                              listData: data.data.data.bankbizExceptionList,
                              totalData: data.data.data.bankbizExceptionExt,
                              totalSize: data.data.count,
                              showTotal: isShow,
                              status: "success"
                          }));
                      } else {
                          dispatch(bankErrorDataDayHandle({
                              listData: data.data.data.bankbizRoutineList,
                              totalData: data.data.data.bankbizRoutineExt,
                              totalSize: data.data.count,
                              status: "nothing"
                          }));
                      }
                  } else {
                      dispatch(bankErrorDataDayHandle({
                          status: "fail"
                      }));
                  }
              },
              error: function error() {
                  dispatch(bankErrorDataDayHandle({
                      status: "fail"
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function bankErrorDataDayExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "bankbizExceptionExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.bankErrorDataDayHandle = bankErrorDataDayHandle;
  exports.bankErrorDataDayLoad = bankErrorDataDayLoad;
  exports.bankErrorDataDayExport = bankErrorDataDayExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/bankErrorDataDay.js.map
  

});

;/*!/src/js/actions/admin/reportForm/bankErrorDataMonth.js*/
define('src/js/actions/admin/reportForm/bankErrorDataMonth', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 全辖银行业务待处理异常数据汇总报表-月
   */
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function bankErrorDataMonthHandle(options) {
      return {
          type: "BANKERRORDATAMONTH_HANDLE",
          options: options
      };
  }
  
  function bankErrorDataMonthLoad(options) {
      return function (dispatch) {
          dispatch(bankErrorDataMonthHandle({
              status: "loading"
          }));
          $.XlAjax({
              url: "bankbizExceptionReport",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      if (data.data.data.bankbizExceptionList.length > 0) {
                          var isShow = false;
                          if (options.curPage == Math.ceil(data.data.count / options.pageSize)) {
                              //当前是最后一页
                              isShow = true;
                          }
                          dispatch(bankErrorDataMonthHandle({
                              listData: data.data.data.bankbizExceptionList,
                              totalData: data.data.data.bankbizExceptionExt,
                              totalSize: data.data.count,
                              showTotal: isShow,
                              status: "success"
                          }));
                      } else {
                          dispatch(bankErrorDataMonthHandle({
                              listData: data.data.data.bankbizExceptionList,
                              totalData: data.data.data.bankbizExceptionExt,
                              totalSize: data.data.count,
                              status: "nothing"
                          }));
                      }
                  } else {
                      dispatch(bankErrorDataMonthHandle({
                          status: "fail"
                      }));
                  }
              },
              error: function error() {
                  dispatch(bankErrorDataMonthHandle({
                      status: "fail"
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function bankErrorDataMonthExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "bankbizExceptionExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.bankErrorDataMonthHandle = bankErrorDataMonthHandle;
  exports.bankErrorDataMonthLoad = bankErrorDataMonthLoad;
  exports.bankErrorDataMonthExport = bankErrorDataMonthExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/bankErrorDataMonth.js.map
  

});

;/*!/src/js/actions/admin/reportForm/bankNoMatchDataDay.js*/
define('src/js/actions/admin/reportForm/bankNoMatchDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 无匹配的银行数据明细报表-日
   */
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function bankNoMatchDataDayHandle(options) {
      return {
          type: "BANKNOMATCHDATADAY_HANDLE",
          options: options
      };
  }
  
  function bankNoMatchDataDayLoad(options) {
      return function (dispatch) {
          dispatch(bankNoMatchDataDayHandle({
              status: "loading"
          }));
          $.XlAjax({
              url: "nomatchbankDetailReport",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      if (data.data.data.length > 0) {
                          dispatch(bankNoMatchDataDayHandle({
                              listData: data.data.data,
                              totalSize: data.data.count,
                              status: "success"
                          }));
                      } else {
                          dispatch(bankNoMatchDataDayHandle({
                              listData: data.data.data,
                              totalSize: data.data.count,
                              status: "nothing"
                          }));
                      }
                  } else {
                      dispatch(bankNoMatchDataDayHandle({
                          status: "fail"
                      }));
                  }
              },
              error: function error() {
                  dispatch(bankNoMatchDataDayHandle({
                      status: "fail"
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function bankNoMatchDataDayExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nomatchbankDetailExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.bankNoMatchDataDayHandle = bankNoMatchDataDayHandle;
  exports.bankNoMatchDataDayLoad = bankNoMatchDataDayLoad;
  exports.bankNoMatchDataDayExport = bankNoMatchDataDayExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/bankNoMatchDataDay.js.map
  

});

;/*!/src/js/actions/admin/reportForm/bankNoMatchDataMonth.js*/
define('src/js/actions/admin/reportForm/bankNoMatchDataMonth', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 无匹配的银行数据明细报表-月
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function bankNoMatchDataMonthHandle(options) {
      return {
          type: "BANKNOMATCHDATAMONTH_HANDLE",
          options: options
      };
  }
  
  function bankNoMatchDataMonthLoad(options) {
      return function (dispatch) {
          dispatch(bankNoMatchDataMonthHandle({
              status: "loading"
          }));
          $.XlAjax({
              url: "nomatchbankDetailReport",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      if (data.data.data.length > 0) {
                          dispatch(bankNoMatchDataMonthHandle({
                              listData: data.data.data,
                              totalSize: data.data.count,
                              status: "success"
                          }));
                      } else {
                          dispatch(bankNoMatchDataMonthHandle({
                              listData: data.data.data,
                              totalSize: data.data.count,
                              status: "nothing"
                          }));
                      }
                  } else {
                      dispatch(bankNoMatchDataMonthHandle({
                          status: "fail"
                      }));
                  }
              },
              error: function error() {
                  dispatch(bankNoMatchDataMonthHandle({
                      status: "fail"
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function bankNoMatchDataMonthExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nomatchbankDetailExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.bankNoMatchDataMonthHandle = bankNoMatchDataMonthHandle;
  exports.bankNoMatchDataMonthLoad = bankNoMatchDataMonthLoad;
  exports.bankNoMatchDataMonthExport = bankNoMatchDataMonthExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/bankNoMatchDataMonth.js.map
  

});

;/*!/src/js/actions/admin/reportForm/bankNoOpenDataDay.js*/
define('src/js/actions/admin/reportForm/bankNoOpenDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 银行业务未开展站点明细报表-日
   */
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function bankNoOpenDataDayHandle(options) {
      return {
          type: "BANKNOOPENDATADAY_HANDLE",
          options: options
      };
  }
  
  function bankNoOpenDataDayLoad(options) {
      return function (dispatch) {
          dispatch(bankNoOpenDataDayHandle({
              status: "loading"
          }));
          $.XlAjax({
              url: "bankbizstopDetailReport",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      if (data.data.data.length > 0) {
                          dispatch(bankNoOpenDataDayHandle({
                              listData: data.data.data,
                              totalSize: data.data.count,
                              status: "success"
                          }));
                      } else {
                          dispatch(bankNoOpenDataDayHandle({
                              listData: data.data.data,
                              totalSize: data.data.count,
                              status: "nothing"
                          }));
                      }
                  } else {
                      dispatch(bankNoOpenDataDayHandle({
                          status: "fail"
                      }));
                  }
              },
              error: function error() {
                  dispatch(bankNoOpenDataDayHandle({
                      status: "fail"
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function bankNoOpenDataDayExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "bankbizstopDetailExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.bankNoOpenDataDayHandle = bankNoOpenDataDayHandle;
  exports.bankNoOpenDataDayLoad = bankNoOpenDataDayLoad;
  exports.bankNoOpenDataDayExport = bankNoOpenDataDayExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/bankNoOpenDataDay.js.map
  

});

;/*!/src/js/actions/admin/reportForm/bankNoOpenDataMonth.js*/
define('src/js/actions/admin/reportForm/bankNoOpenDataMonth', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 银行业务未开展站点明细报表-月
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function bankNoOpenDataMonthHandle(options) {
      return {
          type: "BANKNOOPENDATAMONTH_HANDLE",
          options: options
      };
  }
  
  function bankNoOpenDataMonthLoad(options) {
      return function (dispatch) {
          dispatch(bankNoOpenDataMonthHandle({
              status: "loading"
          }));
          $.XlAjax({
              url: "bankbizstopDetailReport",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      if (data.data.data.length > 0) {
                          dispatch(bankNoOpenDataMonthHandle({
                              listData: data.data.data,
                              totalSize: data.data.count,
                              status: "success"
                          }));
                      } else {
                          dispatch(bankNoOpenDataMonthHandle({
                              listData: data.data.data,
                              totalSize: data.data.count,
                              status: "nothing"
                          }));
                      }
                  } else {
                      dispatch(bankNoOpenDataMonthHandle({
                          status: "fail"
                      }));
                  }
              },
              error: function error() {
                  dispatch(bankNoOpenDataMonthHandle({
                      status: "fail"
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function bankNoOpenDataMonthExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "bankbizstopDetailExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.bankNoOpenDataMonthHandle = bankNoOpenDataMonthHandle;
  exports.bankNoOpenDataMonthLoad = bankNoOpenDataMonthLoad;
  exports.bankNoOpenDataMonthExport = bankNoOpenDataMonthExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/bankNoOpenDataMonth.js.map
  

});

;/*!/src/js/actions/admin/reportForm/bankPauseDataDay.js*/
define('src/js/actions/admin/reportForm/bankPauseDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 银行业务暂停站点明细报表-日
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function bankPauseDataDayHandle(options) {
      return {
          type: "BANKPAUSEDATADAY_HANDLE",
          options: options
      };
  }
  
  function bankPauseDataDayLoad(options) {
      return function (dispatch) {
          dispatch(bankPauseDataDayHandle({
              status: "loading"
          }));
          $.XlAjax({
              url: "bankbizpauseDetailReport",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      if (data.data.data.length > 0) {
                          dispatch(bankPauseDataDayHandle({
                              listData: data.data.data,
                              totalSize: data.data.count,
                              status: "success"
                          }));
                      } else {
                          dispatch(bankPauseDataDayHandle({
                              listData: data.data.data,
                              totalSize: data.data.count,
                              status: "nothing"
                          }));
                      }
                  } else {
                      dispatch(bankPauseDataDayHandle({
                          status: "fail"
                      }));
                  }
              },
              error: function error() {
                  dispatch(bankPauseDataDayHandle({
                      status: "fail"
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function bankPauseDataDayExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "bankbizpauseDetailExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.bankPauseDataDayHandle = bankPauseDataDayHandle;
  exports.bankPauseDataDayLoad = bankPauseDataDayLoad;
  exports.bankPauseDataDayExport = bankPauseDataDayExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/bankPauseDataDay.js.map
  

});

;/*!/src/js/actions/admin/reportForm/bankPauseDataMonth.js*/
define('src/js/actions/admin/reportForm/bankPauseDataMonth', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 银行业务暂停站点明细报表-月
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function bankPauseDataMonthHandle(options) {
      return {
          type: "BANKPAUSEDATAMONTH_HANDLE",
          options: options
      };
  }
  
  function bankPauseDataMonthLoad(options) {
      return function (dispatch) {
          dispatch(bankPauseDataMonthHandle({
              status: "loading"
          }));
          $.XlAjax({
              url: "bankbizpauseDetailReport",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      if (data.data.data.length > 0) {
                          dispatch(bankPauseDataMonthHandle({
                              listData: data.data.data,
                              totalSize: data.data.count,
                              status: "success"
                          }));
                      } else {
                          dispatch(bankPauseDataMonthHandle({
                              listData: data.data.data,
                              totalSize: data.data.count,
                              status: "nothing"
                          }));
                      }
                  } else {
                      dispatch(bankPauseDataMonthHandle({
                          status: "fail"
                      }));
                  }
              },
              error: function error() {
                  dispatch(bankPauseDataMonthHandle({
                      status: "fail"
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function bankPauseDataMonthExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "bankbizpauseDetailExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.bankPauseDataMonthHandle = bankPauseDataMonthHandle;
  exports.bankPauseDataMonthLoad = bankPauseDataMonthLoad;
  exports.bankPauseDataMonthExport = bankPauseDataMonthExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/bankPauseDataMonth.js.map
  

});

;/*!/src/js/actions/admin/reportForm/bankRoutineDataDay.js*/
define('src/js/actions/admin/reportForm/bankRoutineDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/27.
   *
   * 全辖银行业务全量银行数据汇总报表-日
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function bankRoutineDataDayHandle(options) {
      return {
          type: "BANKROUTINEDATADAY_HANDLE",
          options: options
      };
  }
  
  function bankRoutineDataDayLoad(options) {
      return function (dispatch) {
          dispatch(bankRoutineDataDayHandle({
              status: "loading"
          }));
          $.XlAjax({
              url: "bankbizFullReport",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      if (data.data.data.bankbizFullList.length > 0) {
                          var isShow = false;
                          if (options.curPage == Math.ceil(data.data.count / options.pageSize)) {
                              //当前是最后一页
                              isShow = true;
                          }
                          dispatch(bankRoutineDataDayHandle({
                              listData: data.data.data.bankbizFullList,
                              totalData: data.data.data.bankbizFullExt,
                              totalSize: data.data.count,
                              showTotal: isShow,
                              status: "success"
                          }));
                      } else {
                          dispatch(bankRoutineDataDayHandle({
                              listData: data.data.data.bankbizFullList,
                              totalData: data.data.data.bankbizFullExt,
                              totalSize: data.data.count,
                              status: "nothing"
                          }));
                      }
                  } else {
                      dispatch(bankRoutineDataDayHandle({
                          status: "fail"
                      }));
                  }
              },
              error: function error() {
                  dispatch(bankRoutineDataDayHandle({
                      status: "fail"
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function bankRoutineDataDayExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "bankbizFullExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.bankRoutineDataDayHandle = bankRoutineDataDayHandle;
  exports.bankRoutineDataDayLoad = bankRoutineDataDayLoad;
  exports.bankRoutineDataDayExport = bankRoutineDataDayExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/bankRoutineDataDay.js.map
  

});

;/*!/src/js/actions/admin/reportForm/bankRoutineDataMonth.js*/
define('src/js/actions/admin/reportForm/bankRoutineDataMonth', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/27.
   *
   * 全辖银行业务全量银行数据汇总报表-月
   *
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function bankRoutineDataMonthHandle(options) {
      return {
          type: "BANKROUTINEDATAMONTH_HANDLE",
          options: options
      };
  }
  
  function bankRoutineDataMonthLoad(options) {
      return function (dispatch) {
          dispatch(bankRoutineDataMonthHandle({
              status: "loading"
          }));
          $.XlAjax({
              url: "bankbizFullReport",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      if (data.data.data.bankbizFullList.length > 0) {
                          var isShow = false;
                          if (options.curPage == Math.ceil(data.data.count / options.pageSize)) {
                              //当前是最后一页
                              isShow = true;
                          }
                          dispatch(bankRoutineDataMonthHandle({
                              listData: data.data.data.bankbizFullList,
                              totalData: data.data.data.bankbizFullExt,
                              totalSize: data.data.count,
                              showTotal: isShow,
                              status: "success"
                          }));
                      } else {
                          dispatch(bankRoutineDataMonthHandle({
                              listData: data.data.data.bankbizFullList,
                              totalData: data.data.data.bankbizFullExt,
                              totalSize: data.data.count,
                              status: "nothing"
                          }));
                      }
                  } else {
                      dispatch(bankRoutineDataMonthHandle({
                          status: "fail"
                      }));
                  }
              },
              error: function error() {
                  dispatch(bankRoutineDataMonthHandle({
                      status: "fail"
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function bankRoutineDataMonthExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "bankbizFullExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.bankRoutineDataMonthHandle = bankRoutineDataMonthHandle;
  exports.bankRoutineDataMonthLoad = bankRoutineDataMonthLoad;
  exports.bankRoutineDataMonthExport = bankRoutineDataMonthExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/bankRoutineDataMonth.js.map
  

});

;/*!/src/js/actions/admin/reportForm/masterBusinessDataDay.js*/
define('src/js/actions/admin/reportForm/masterBusinessDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 站长交易录入明细报表-日
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function masterBusinessDataDayHandle(options) {
      return {
          type: "MASTERBUSINESSDARADAY_HANDLE",
          options: options
      };
  }
  
  function masterBusinessDataDayLoadData(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodetradedetailDailyReport",
              type: "GET",
              data: options.data,
              success: function success(response) {
                  if (response.status == "0000") {
                      var dataList = response.data.data;
                      if (dataList.length > 0) {
                          dispatch(masterBusinessDataDayHandle({
                              tableList: dataList,
                              tbodyList: "success",
                              totalSize: response.data.count
                          }));
                      } else {
                          dispatch(masterBusinessDataDayHandle({
                              tableList: dataList,
                              tbodyList: "nothing",
                              totalSize: response.data.count
                          }));
                      }
                  } else {
                      dispatch(masterBusinessDataDayHandle({
                          tbodyList: "fail"
                      }));
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: "tips",
                          tipsType: 'fail',
                          width: '300px',
                          height: '300px',
                          content: response.message,
                          title: '提示'
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function masterBusinessDataDayExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodetradedetailDailyExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.masterBusinessDataDayHandle = masterBusinessDataDayHandle;
  exports.masterBusinessDataDayLoadData = masterBusinessDataDayLoadData;
  exports.masterBusinessDataDayExport = masterBusinessDataDayExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/masterBusinessDataDay.js.map
  

});

;/*!/src/js/actions/admin/reportForm/public/common.js*/
define('src/js/actions/admin/reportForm/public/common', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/25.
   *
   * 报表通用的action
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function reportFormCommonHandle(options) {
      return {
          type: "REPORT_FORM_COMMON_HANDLE",
          options: options
      };
  }
  
  //查省
  function queryProvince(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "queryProvince",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      dispatch(reportFormCommonHandle({
                          provinceList: data.data
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //查市
  function queryCity(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "queryCity",
              type: "GET",
              data: options ? options : {},
              success: function success(data) {
                  if (data.status == "0000") {
                      dispatch(reportFormCommonHandle({
                          cityList: data.data
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //查县、区
  function queryCounty(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "queryCounty",
              type: "GET",
              data: options ? options : {},
              success: function success(data) {
                  if (data.status == "0000") {
                      dispatch(reportFormCommonHandle({
                          countyList: data.data
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //指定查询某类别的部门
  function getCompanyByCompanyType(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "getCompanyByCompanyType",
              type: "GET",
              data: options ? options : {},
              success: function success(data) {
                  if (data.status == "0000") {
                      dispatch(reportFormCommonHandle({
                          companyList: data.data
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //获取银行
  function getBankTypeCodes(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "getBankTypeCodes",
              type: "GET",
              data: options ? options : {},
              success: function success(data) {
                  if (data.status == "0000") {
                      dispatch(reportFormCommonHandle({
                          bankList: data.data
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //获取站点标签列表
  function getNodeLabel(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "getNodeLabelList",
              type: "GET",
              data: options ? options : {},
              success: function success(data) {
                  if (data.status == "0000") {
                      dispatch(reportFormCommonHandle({
                          nodeLableList: data.data
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  exports.reportFormCommonHandle = reportFormCommonHandle;
  exports.queryProvince = queryProvince;
  exports.queryCity = queryCity;
  exports.queryCounty = queryCounty;
  exports.getCompanyByCompanyType = getCompanyByCompanyType;
  exports.getBankTypeCodes = getBankTypeCodes;
  exports.getNodeLabel = getNodeLabel;
  //# sourceMappingURL=/js/actions/admin/reportForm/public/common.js.map
  

});

;/*!/src/js/actions/admin/reportForm/siteAddDataDay.js*/
define('src/js/actions/admin/reportForm/siteAddDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 全辖站点增量日报（签约、数据、落地情况）-日
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  var accounting = require("../../untils/accounting");
  
  function siteAddDataDayHandle(options) {
      return {
          type: "SITEADDDATADAY_HANDLE",
          options: options
      };
  }
  
  function siteAddDataDayLoadData(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodeincDailyReport",
              type: "GET",
              data: options.data,
              success: function success(response) {
                  if (response.status == "0000") {
                      var nodeincDailyList = response.data.data.nodeincDailyList;
                      if (nodeincDailyList.length > 0) {
                          var isShow = false;
                          if (options.data.curPage == Math.ceil(response.data.count / options.data.pageSize)) {
                              //当前是最后一页
                              isShow = true;
                          }
                          /*for(let i=0;i<nodeincDailyList.length;i++){
                          	nodeincDailyList[i].double10NodeRate = nodeincDailyList[i].double10NodeRate+"%";
                          	
                          }
                          let sumDouble10NodeRate =response.data.data.nodeincDailyExt.sumDouble10NodeRate+"%";
                          response.data.data.nodeincDailyExt.sumDouble10NodeRate=sumDouble10NodeRate;*/
                          dispatch(siteAddDataDayHandle({
                              tableList: nodeincDailyList,
                              tbodyList: "success",
                              totalData: response.data.data.nodeincDailyExt,
                              totalSize: response.data.count,
                              showTotal: isShow
                          }));
                      } else {
                          dispatch(siteAddDataDayHandle({
                              tableList: nodeincDailyList,
                              tbodyList: "nothing",
                              totalData: response.data.data.nodeincDailyExt,
                              totalSize: response.data.count
                          }));
                      }
                  } else {
                      dispatch(siteAddDataDayHandle({
                          tbodyList: "fail"
                      }));
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: "tips",
                          tipsType: 'fail',
                          width: '300px',
                          height: '300px',
                          content: response.message,
                          title: '提示'
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function siteAddDataDayExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodeincDailyExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.siteAddDataDayHandle = siteAddDataDayHandle;
  exports.siteAddDataDayLoadData = siteAddDataDayLoadData;
  exports.siteAddDataDayExport = siteAddDataDayExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/siteAddDataDay.js.map
  

});

;/*!/src/js/actions/admin/reportForm/siteAddDataMonth.js*/
define('src/js/actions/admin/reportForm/siteAddDataMonth', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 全辖站点增量日报（签约、数据、落地情况）-月
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function siteAddDataMonthHandle(options) {
      return {
          type: "SITEADDDATAMONTH_HANDLE",
          options: options
      };
  }
  
  function siteAddDataMonthLoadData(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodeincDailyReport",
              type: "GET",
              data: options.data,
              success: function success(response) {
                  if (response.status == "0000") {
                      var nodeincDailyList = response.data.data.nodeincDailyList;
                      if (nodeincDailyList.length > 0) {
                          var isShow = false;
                          if (options.data.curPage == Math.ceil(response.data.count / options.data.pageSize)) {
                              //当前是最后一页
                              isShow = true;
                          }
                          /*for(let i=0;i<nodeincDailyList.length;i++){
                          	nodeincDailyList[i].double10NodeRate = nodeincDailyList[i].double10NodeRate+"%";
                          }
                          		let sumDouble10NodeRate =response.data.data.nodeincDailyExt.sumDouble10NodeRate+"%";
                          response.data.data.nodeincDailyExt.sumDouble10NodeRate=sumDouble10NodeRate;*/
                          dispatch(siteAddDataMonthHandle({
                              tableList: nodeincDailyList,
                              tbodyList: "success",
                              totalData: response.data.data.nodeincDailyExt,
                              totalSize: response.data.count,
                              showTotal: isShow
                          }));
                      } else {
                          dispatch(siteAddDataMonthHandle({
                              tableList: nodeincDailyList,
                              tbodyList: "nothing",
                              totalData: response.data.data.nodeincDailyExt,
                              totalSize: response.data.count
                          }));
                      }
                  } else {
                      dispatch(siteAddDataMonthHandle({
                          tbodyList: "fail"
                      }));
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: "tips",
                          tipsType: 'fail',
                          width: '300px',
                          height: '300px',
                          content: response.message,
                          title: '提示'
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function siteAddDataMonthExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodeincDailyExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.siteAddDataMonthHandle = siteAddDataMonthHandle;
  exports.siteAddDataMonthLoadData = siteAddDataMonthLoadData;
  exports.siteAddDataMonthExport = siteAddDataMonthExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/siteAddDataMonth.js.map
  

});

;/*!/src/js/actions/admin/reportForm/siteDetailsDataDay.js*/
define('src/js/actions/admin/reportForm/siteDetailsDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 每日站点巡查明细报表-日
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function siteDetailsDataDayHandle(options) {
      return {
          type: "SITEDETAILSDATADAY_HANDLE",
          options: options
      };
  }
  //请求数据
  function siteDetailsDataDayLoadData(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "modeinspectdetailDailyReport",
              type: "GET",
              data: options.data,
              success: function success(response) {
                  if (response.status == "0000") {
                      var list = response.data.data;
                      if (list.length > 0) {
                          dispatch(siteDetailsDataDayHandle({
                              tableList: list,
                              tbodyList: "success",
                              totalSize: response.data.count
                          }));
                      } else {
                          dispatch(siteDetailsDataDayHandle({
                              tableList: list,
                              tbodyList: "nothing",
                              totalSize: response.data.count
                          }));
                      }
                  } else {
                      dispatch(siteDetailsDataDayHandle({
                          tbodyList: "fail"
                      }));
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: "tips",
                          tipsType: 'fail',
                          width: '300px',
                          height: '300px',
                          content: response.message,
                          title: '提示'
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  //导出报表
  function siteDetailsDataDayExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "modeinspectdetailDailyExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  //巡查反馈
  function getInspectFeedback(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "getInspectFeedback",
              type: "GET",
              data: { id: options.id },
              success: function success(response) {
                  if (response.status == "0000") {
                      options.callBack(response.data);
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: "tips",
                          tipsType: 'fail',
                          width: '300px',
                          height: '300px',
                          content: response.message,
                          title: '提示'
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  exports.siteDetailsDataDayHandle = siteDetailsDataDayHandle;
  exports.siteDetailsDataDayLoadData = siteDetailsDataDayLoadData;
  exports.siteDetailsDataDayExport = siteDetailsDataDayExport;
  exports.getInspectFeedback = getInspectFeedback;
  //# sourceMappingURL=/js/actions/admin/reportForm/siteDetailsDataDay.js.map
  

});

;/*!/src/js/actions/admin/reportForm/siteNewAddDataDay.js*/
define('src/js/actions/admin/reportForm/siteNewAddDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 月新增数据站点明细报表-日
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function siteNewAddDataDayHandle(options) {
      return {
          type: "SITENEWADDDATADAY_HANDLE",
          options: options
      };
  }
  
  function siteNewAddDataDayLoadData(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodehasdataincMonthlyReport",
              type: "GET",
              data: options.data,
              success: function success(response) {
                  if (response.status == "0000") {
                      var list = response.data.data;
                      if (list.length > 0) {
                          dispatch(siteNewAddDataDayHandle({
                              tableList: list,
                              tbodyList: "success",
                              totalSize: response.data.count
                          }));
                      } else {
                          dispatch(siteNewAddDataDayHandle({
                              tableList: list,
                              tbodyList: "nothing",
                              totalSize: response.data.count
                          }));
                      }
                  } else {
                      dispatch(siteNewAddDataDayHandle({
                          tbodyList: "fail"
                      }));
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: "tips",
                          tipsType: 'fail',
                          width: '300px',
                          height: '300px',
                          content: response.message,
                          title: '提示'
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function siteNewAddDataDayExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodehasdataincMonthlyExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.siteNewAddDataDayHandle = siteNewAddDataDayHandle;
  exports.siteNewAddDataDayLoadData = siteNewAddDataDayLoadData;
  exports.siteNewAddDataDayExport = siteNewAddDataDayExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/siteNewAddDataDay.js.map
  

});

;/*!/src/js/actions/admin/reportForm/siteNewAddDataMonth.js*/
define('src/js/actions/admin/reportForm/siteNewAddDataMonth', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 月新增数据站点明细报表-月
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function siteNewAddDataMonthHandle(options) {
      return {
          type: "SITENEWADDDATAMONTH_HANDLE",
          options: options
      };
  }
  
  function siteNewAddDataMonthLoadData(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodehasdataincMonthlyReport",
              type: "GET",
              data: options.data,
              success: function success(response) {
                  if (response.status == "0000") {
                      var list = response.data.data;
                      if (list.length > 0) {
                          dispatch(siteNewAddDataMonthHandle({
                              tableList: list,
                              tbodyList: "success",
                              totalSize: response.data.count
                          }));
                      } else {
                          dispatch(siteNewAddDataMonthHandle({
                              tableList: list,
                              tbodyList: "nothing",
                              totalSize: response.data.count
                          }));
                      }
                  } else {
                      dispatch(siteNewAddDataMonthHandle({
                          tbodyList: "fail"
                      }));
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: "tips",
                          tipsType: 'fail',
                          width: '300px',
                          height: '300px',
                          content: response.message,
                          title: '提示'
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function siteNewAddDataMonthExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodehasdataincMonthlyExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.siteNewAddDataMonthHandle = siteNewAddDataMonthHandle;
  exports.siteNewAddDataMonthLoadData = siteNewAddDataMonthLoadData;
  exports.siteNewAddDataMonthExport = siteNewAddDataMonthExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/siteNewAddDataMonth.js.map
  

});

;/*!/src/js/actions/admin/reportForm/siteNewFinishDataDay.js*/
define('src/js/actions/admin/reportForm/siteNewFinishDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 月新增落地站点明细报表-日
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function siteNewFinishDataDayHandle(options) {
      return {
          type: "SITENEWFINISHDATADAY_HANDLE",
          options: options
      };
  }
  
  function siteNewFinishDataDayLoadData(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodedropdataincMonthlyReport",
              type: "GET",
              data: options.data,
              success: function success(response) {
                  if (response.status == "0000") {
                      var list = response.data.data;
                      if (list.length > 0) {
                          dispatch(siteNewFinishDataDayHandle({
                              tableList: list,
                              tbodyList: "success",
                              totalSize: response.data.count
                          }));
                      } else {
                          dispatch(siteNewFinishDataDayHandle({
                              tableList: list,
                              tbodyList: "nothing",
                              totalSize: response.data.count
                          }));
                      }
                  } else {
                      dispatch(siteNewFinishDataDayHandle({
                          tbodyList: "fail"
                      }));
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: "tips",
                          tipsType: 'fail',
                          width: '300px',
                          height: '300px',
                          content: response.message,
                          title: '提示'
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function siteNewFinishDataDayExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodedropdataincMonthlyExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.siteNewFinishDataDayHandle = siteNewFinishDataDayHandle;
  exports.siteNewFinishDataDayLoadData = siteNewFinishDataDayLoadData;
  exports.siteNewFinishDataDayExport = siteNewFinishDataDayExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/siteNewFinishDataDay.js.map
  

});

;/*!/src/js/actions/admin/reportForm/siteNewFinishDataMonth.js*/
define('src/js/actions/admin/reportForm/siteNewFinishDataMonth', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 月新增落地站点明细报表-月
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function siteNewFinishDataMonthHandle(options) {
      return {
          type: "SITENEWFINISHDATAMONTH_HANDLE",
          options: options
      };
  }
  
  function siteNewFinishDataMonthLoadData(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodedropdataincMonthlyReport",
              type: "GET",
              data: options.data,
              success: function success(response) {
                  if (response.status == "0000") {
                      var list = response.data.data;
                      if (list.length > 0) {
                          dispatch(siteNewFinishDataMonthHandle({
                              tableList: list,
                              tbodyList: "success",
                              totalSize: response.data.count
                          }));
                      } else {
                          dispatch(siteNewFinishDataMonthHandle({
                              tableList: list,
                              tbodyList: "nothing",
                              totalSize: response.data.count
                          }));
                      }
                  } else {
                      dispatch(siteNewFinishDataMonthHandle({
                          tbodyList: "fail"
                      }));
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: "tips",
                          tipsType: 'fail',
                          width: '300px',
                          height: '300px',
                          content: response.message,
                          title: '提示'
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function siteNewFinishDataMonthExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodedropdataincMonthlyExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.siteNewFinishDataMonthHandle = siteNewFinishDataMonthHandle;
  exports.siteNewFinishDataMonthLoadData = siteNewFinishDataMonthLoadData;
  exports.siteNewFinishDataMonthExport = siteNewFinishDataMonthExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/siteNewFinishDataMonth.js.map
  

});

;/*!/src/js/actions/admin/reportForm/sitePatrolAllDataDay.js*/
define('src/js/actions/admin/reportForm/sitePatrolAllDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 每日站点巡查汇总报表-日
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function sitePatrolAllDataDayHandle(options) {
      return {
          type: "SITEPATROLALLDATADAY_HANDLE",
          options: options
      };
  }
  
  function sitePatrolAllDataDayLoadData(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodeinspectsummaryDailyReport",
              type: "GET",
              data: options.data,
              success: function success(response) {
                  if (response.status == "0000") {
                      var list = response.data.data.nodeinspectsummaryDailyList;
                      if (list.length > 0) {
                          var isShow = false;
                          if (options.data.curPage == Math.ceil(response.data.count / options.data.pageSize)) {
                              //当前是最后一页
                              isShow = true;
                          }
                          dispatch(sitePatrolAllDataDayHandle({
                              tableList: list,
                              tbodyList: "success",
                              totalData: response.data.data.nodeinspectsummaryDailyExt,
                              totalSize: response.data.count,
                              showTotal: isShow
                          }));
                      } else {
                          dispatch(sitePatrolAllDataDayHandle({
                              tableList: list,
                              tbodyList: "nothing",
                              totalData: response.data.data.nodeinspectsummaryDailyExt,
                              totalSize: response.data.count
                          }));
                      }
                  } else {
                      dispatch(sitePatrolAllDataDayHandle({
                          tbodyList: "fail"
                      }));
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: "tips",
                          tipsType: 'fail',
                          width: '300px',
                          height: '300px',
                          content: response.message,
                          title: '提示'
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function sitePatrolAllDataDayExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodeinspectsummaryDailyExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.sitePatrolAllDataDayHandle = sitePatrolAllDataDayHandle;
  exports.sitePatrolAllDataDayLoadData = sitePatrolAllDataDayLoadData;
  exports.sitePatrolAllDataDayExport = sitePatrolAllDataDayExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/sitePatrolAllDataDay.js.map
  

});

;/*!/src/js/actions/admin/reportForm/siteSignDataDay.js*/
define('src/js/actions/admin/reportForm/siteSignDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 月新增签约站点明细报表-日
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function siteSignDataDayHandle(options) {
      return {
          type: "SITESIGNDATADAY_HANDLE",
          options: options
      };
  }
  
  function siteSignDataDayLoadData(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodesignupincMonthlyReport",
              type: "GET",
              data: options.data,
              success: function success(response) {
                  if (response.status == "0000") {
                      var dataList = response.data.data;
                      if (dataList.length > 0) {
                          dispatch(siteSignDataDayHandle({
                              tableList: dataList,
                              tbodyList: "success",
                              totalSize: response.data.count
                          }));
                      } else {
                          dispatch(siteSignDataDayHandle({
                              tableList: dataList,
                              tbodyList: "nothing",
                              totalSize: response.data.count
                          }));
                      }
                  } else {
                      dispatch(siteSignDataDayHandle({
                          tbodyList: "fail"
                      }));
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: "tips",
                          tipsType: 'fail',
                          width: '300px',
                          height: '300px',
                          content: response.message,
                          title: '提示'
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function siteSignDataDayExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodesignupincMonthlyExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.siteSignDataDayHandle = siteSignDataDayHandle;
  exports.siteSignDataDayLoadData = siteSignDataDayLoadData;
  exports.siteSignDataDayExport = siteSignDataDayExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/siteSignDataDay.js.map
  

});

;/*!/src/js/actions/admin/reportForm/zeroSiteDataDay.js*/
define('src/js/actions/admin/reportForm/zeroSiteDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 双零站点明细报表-日
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function zeroSiteDataDayHandle(options) {
      return {
          type: "ZEROSITEDATADAY_HANDLE",
          options: options
      };
  }
  
  function zeroSiteDataDayLoad(options) {
      return function (dispatch) {
          dispatch(zeroSiteDataDayHandle({
              status: "loading"
          }));
          $.XlAjax({
              url: "doublezeronodeDetailReport",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      if (data.data.data.length > 0) {
                          dispatch(zeroSiteDataDayHandle({
                              listData: data.data.data,
                              totalSize: data.data.count,
                              status: "success"
                          }));
                      } else {
                          dispatch(zeroSiteDataDayHandle({
                              listData: data.data.data,
                              totalSize: data.data.count,
                              status: "nothing"
                          }));
                      }
                  } else {
                      dispatch(zeroSiteDataDayHandle({
                          status: "fail"
                      }));
                  }
              },
              error: function error() {
                  dispatch(zeroSiteDataDayHandle({
                      status: "fail"
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function zeroSiteDataDayExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "doublezeronodeDetailExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.zeroSiteDataDayHandle = zeroSiteDataDayHandle;
  exports.zeroSiteDataDayLoad = zeroSiteDataDayLoad;
  exports.zeroSiteDataDayExport = zeroSiteDataDayExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/zeroSiteDataDay.js.map
  

});

;/*!/src/js/actions/admin/reportForm/zeroSiteDataMonth.js*/
define('src/js/actions/admin/reportForm/zeroSiteDataMonth', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 双零站点明细报表-月
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function zeroSiteDataMonthHandle(options) {
      return {
          type: "ZEROSITEDATAMONTH_HANDLE",
          options: options
      };
  }
  
  function zeroSiteDataMonthLoad(options) {
      return function (dispatch) {
          dispatch(zeroSiteDataMonthHandle({
              status: "loading"
          }));
          $.XlAjax({
              url: "doublezeronodeDetailReport",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      if (data.data.data.length > 0) {
                          dispatch(zeroSiteDataMonthHandle({
                              listData: data.data.data,
                              totalSize: data.data.count,
                              status: "success"
                          }));
                      } else {
                          dispatch(zeroSiteDataMonthHandle({
                              listData: data.data.data,
                              totalSize: data.data.count,
                              status: "nothing"
                          }));
                      }
                  } else {
                      dispatch(zeroSiteDataMonthHandle({
                          status: "fail"
                      }));
                  }
              },
              error: function error() {
                  dispatch(zeroSiteDataMonthHandle({
                      status: "fail"
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function zeroSiteDataMonthExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "doublezeronodeDetailExportExcel",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      window.location.href = data.data.url;
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: 'tips',
                          tipsType: 'warning',
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
  
  exports.zeroSiteDataMonthHandle = zeroSiteDataMonthHandle;
  exports.zeroSiteDataMonthLoad = zeroSiteDataMonthLoad;
  exports.zeroSiteDataMonthExport = zeroSiteDataMonthExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/zeroSiteDataMonth.js.map
  

});

;/*!/src/js/actions/admin/roles/add.js*/
define('src/js/actions/admin/roles/add', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  //新增编辑角色模块事件处理
  function rolesAddRoleHandle(options) {
  	return {
  		type: "ADDROLE_HANDLE",
  		options: options
  	};
  }
  
  function rolesGetAddTreeData(options) {
  	return function (dispatch) {
  		$.XlAjax({
  			url: "getPermissionsTreeAndLog",
  			data: {},
  			success: function success(data) {
  				if (data.status == "0000") {
  					dispatch(rolesAddRoleHandle({
  						treeData: data.data.trees
  					}));
  					options.callback();
  				}
  			},
  			errorDialog: function errorDialog(xhr, errorType, error) {
  				(0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
  			}
  		});
  	};
  }
  //编辑角色获取角色信息 （树形，和角色信息）
  function rolesEditLoadData(options) {
  	return function (dispatch) {
  		$.XlAjax({
  			url: "getPermissionsTreeAndLog",
  			data: {
  				roleCode: options.roleCode
  			},
  			success: function success(data) {
  				if (data.status == "0000") {
  					dispatch(rolesAddRoleHandle({
  						treeData: data.data.trees,
  						roleName: data.data.role.roleName,
  						roleDescribe: data.data.role.roleDesc,
  						logListData: data.data.operationLogs
  					}));
  
  					options.callback();
  					options.loadLog(data.data.operationLogs);
  				}
  			},
  			errorDialog: function errorDialog(xhr, errorType, error) {
  				(0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
  			}
  		});
  	};
  }
  
  //编辑角色保存
  function rolesEditRole(options) {
  	return function (dispatch) {
  		$.XlAjax({
  			url: "editRole",
  			data: {
  				roleCode: options.roleCode,
  				id: options.id,
  				roleName: options.roleName,
  				roleDesc: options.roleDesc,
  				pers: options.pers,
  				perNames: options.perNames
  			},
  			success: function success(data) {
  				if (data.status == "0000") {
  					options.callback();
  				} else {
  					dispatch((0, _dialog.dialogHandle)({
  						show: true,
  						content: data.message,
  						type: "tips",
  						tipsType: "warning"
  					}));
  					dispatch(rolesAddRoleHandle({
  						submitFlag: true
  					}));
  				}
  			},
  			error: function error() {
  				dispatch(rolesAddRoleHandle({
  					submitFlag: true
  				}));
  			},
  			errorDialog: function errorDialog(xhr, errorType, error) {
  				(0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
  			}
  		});
  	};
  }
  
  //新增角色保存
  function rolesAddRole(options) {
  	return function (dispatch) {
  		$.XlAjax({
  			url: "addRole",
  			data: {
  				roleName: options.roleName,
  				roleDesc: options.roleDescribe,
  				pers: options.pers,
  				perNames: options.perNames
  			},
  			success: function success(data) {
  				if (data.status == "0000") {
  					options.callback();
  				} else {
  					dispatch((0, _dialog.dialogHandle)({
  						show: true,
  						content: data.message,
  						type: "tips",
  						tipsType: "warning"
  					}));
  					dispatch(rolesAddRoleHandle({
  						submitFlag: true
  					}));
  				}
  			},
  			error: function error() {
  				dispatch(rolesAddRoleHandle({
  					submitFlag: true
  				}));
  			},
  			errorDialog: function errorDialog(xhr, errorType, error) {
  				(0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
  			}
  		});
  	};
  }
  
  exports.rolesAddRoleHandle = rolesAddRoleHandle;
  exports.rolesGetAddTreeData = rolesGetAddTreeData;
  exports.rolesEditLoadData = rolesEditLoadData;
  exports.rolesEditRole = rolesEditRole;
  exports.rolesAddRole = rolesAddRole;
  //# sourceMappingURL=/js/actions/admin/roles/add.js.map
  

});

;/*!/src/js/actions/admin/roles/roles.js*/
define('src/js/actions/admin/roles/roles', function(require, exports, module) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
  	value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  //用户角色权限
  function setRolesState(options) {
  	return {
  		type: "ROLES_HANDLE",
  		options: options
  	};
  }
  
  //用户角色列表
  
  function rolesUserList(options) {
  	return function (dispatch) {
  		$.XlAjax({
  			url: "roleList",
  			data: {
  				curPage: options.curPage,
  				pageSize: options.pageSize,
  				roleName: options.searchText
  			},
  			success: function success(data) {
  
  				if (data.status == "0000") {
  					var tbodyList = "";
  					if (data.data.data.length > 0) {
  						tbodyList = "success";
  					} else {
  						tbodyList = "nothing";
  					}
  					dispatch(setRolesState({
  						list: data.data.data,
  						totalSize: data.data.count,
  						curPage: options.curPage,
  						tbodyList: tbodyList
  					}));
  					//options.callback(data.data.data);
  				} else {
  						dispatch(setRolesState({
  							tbodyList: "fail"
  						}));
  						dispatch((0, _dialog.dialogHandle)({
  							show: true,
  							content: data.message,
  							type: "tips",
  							tipsType: "warning"
  						}));
  					}
  			},
  			error: options.errorCallback,
  			errorDialog: function errorDialog(xhr, errorType, error) {
  				(0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
  			}
  		});
  	};
  }
  //删除角色
  
  function deleteRolesUser(options) {
  	return function (dispatch) {
  		$.XlAjax({
  			url: "deleteRole",
  			data: {
  				id: options.id,
  				roleName: options.roleName
  			},
  			success: function success(data) {
  				if (data.status == "0000") {
  					dispatch((0, _dialog.dialogHandle)({
  						show: true,
  						content: "删除成功",
  						type: "tips",
  						tipsType: "success"
  					}));
  					dispatch(setRolesState({
  						submitFlag: true
  					}));
  					options.callBack();
  					return false;
  				} else {
  					dispatch((0, _dialog.dialogHandle)({
  						show: true,
  						content: data.message,
  						type: "tips",
  						tipsType: "fail"
  					}));
  					dispatch(setRolesState({
  						submitFlag: true
  					}));
  				}
  			},
  			error: function error() {
  				dispatch(setRolesState({
  					submitFlag: true
  				}));
  			},
  			errorDialog: function errorDialog(xhr, errorType, error) {
  				(0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
  			}
  		});
  	};
  }
  exports.setRolesState = setRolesState;
  exports.rolesUserList = rolesUserList;
  exports.deleteRolesUser = deleteRolesUser;
  //# sourceMappingURL=/js/actions/admin/roles/roles.js.map
  

});

;/*!/src/js/actions/admin/top.js*/
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

;/*!/src/js/actions/admin/user.js*/
define('src/js/actions/admin/user', function(require, exports, module) {

  /**
   * Created by ex-wangxin on 2017/3/31.
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  /*user 回调函数*/
  function userHandle(options) {
      return {
          type: "USER_HANDLE",
          options: options
      };
  }
  /*user 发送ajax 获取表格数据*/
  function userLoadData(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "userList",
              data: {
                  curPage: options.curPage, //当前页
                  pageSize: options.pageSize, //每页多少行
                  trueName: options.trueName, //姓名
                  accountName: options.accountName, //账号
                  mobilePhone: options.mobilePhone, //手机号码
                  tcode: options.tcode, //部门编号
                  roleCode: options.roleCode, //角色编号
                  status: options.workingState },
              //在职状态
              success: options.callBack,
              error: options.errorCallBack,
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  /*user 发送ajax 获取树形结构数据*/
  function userLoadTree(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "companyTreeAndRoles",
              data: {},
              success: options,
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  /*user 发送ajax 保存修改角色*/
  function userChangeRole(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "distributionRole",
              data: {
                  partyId: options.partyId,
                  roleCode: options.roleCode,
                  roleNames: options.roleNames.join(','),
                  trueName: options.trueName
  
              },
              success: options.callBack,
              error: options.errorCallBack,
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  exports.userHandle = userHandle;
  exports.userLoadData = userLoadData;
  exports.userLoadTree = userLoadTree;
  exports.userChangeRole = userChangeRole;
  //# sourceMappingURL=/js/actions/admin/user.js.map
  

});

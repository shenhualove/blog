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

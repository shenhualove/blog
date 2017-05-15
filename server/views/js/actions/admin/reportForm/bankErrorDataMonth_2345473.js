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

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

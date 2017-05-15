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

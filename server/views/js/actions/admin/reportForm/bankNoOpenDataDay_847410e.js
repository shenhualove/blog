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

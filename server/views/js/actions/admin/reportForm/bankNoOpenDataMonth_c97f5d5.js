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

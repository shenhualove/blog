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

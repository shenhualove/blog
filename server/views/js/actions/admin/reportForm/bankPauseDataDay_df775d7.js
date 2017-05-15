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

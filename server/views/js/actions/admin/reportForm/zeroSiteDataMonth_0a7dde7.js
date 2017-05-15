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

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

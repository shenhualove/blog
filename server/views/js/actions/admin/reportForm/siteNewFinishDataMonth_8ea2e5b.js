define('src/js/actions/admin/reportForm/siteNewFinishDataMonth', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 月新增落地站点明细报表-月
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function siteNewFinishDataMonthHandle(options) {
      return {
          type: "SITENEWFINISHDATAMONTH_HANDLE",
          options: options
      };
  }
  
  function siteNewFinishDataMonthLoadData(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodedropdataincMonthlyReport",
              type: "GET",
              data: options.data,
              success: function success(response) {
                  if (response.status == "0000") {
                      var list = response.data.data;
                      if (list.length > 0) {
                          dispatch(siteNewFinishDataMonthHandle({
                              tableList: list,
                              tbodyList: "success",
                              totalSize: response.data.count
                          }));
                      } else {
                          dispatch(siteNewFinishDataMonthHandle({
                              tableList: list,
                              tbodyList: "nothing",
                              totalSize: response.data.count
                          }));
                      }
                  } else {
                      dispatch(siteNewFinishDataMonthHandle({
                          tbodyList: "fail"
                      }));
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: "tips",
                          tipsType: 'fail',
                          width: '300px',
                          height: '300px',
                          content: response.message,
                          title: '提示'
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function siteNewFinishDataMonthExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodedropdataincMonthlyExportExcel",
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
  
  exports.siteNewFinishDataMonthHandle = siteNewFinishDataMonthHandle;
  exports.siteNewFinishDataMonthLoadData = siteNewFinishDataMonthLoadData;
  exports.siteNewFinishDataMonthExport = siteNewFinishDataMonthExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/siteNewFinishDataMonth.js.map
  

});

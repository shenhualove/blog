define('src/js/actions/admin/reportForm/siteSignDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 月新增签约站点明细报表-日
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function siteSignDataDayHandle(options) {
      return {
          type: "SITESIGNDATADAY_HANDLE",
          options: options
      };
  }
  
  function siteSignDataDayLoadData(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodesignupincMonthlyReport",
              type: "GET",
              data: options.data,
              success: function success(response) {
                  if (response.status == "0000") {
                      var dataList = response.data.data;
                      if (dataList.length > 0) {
                          dispatch(siteSignDataDayHandle({
                              tableList: dataList,
                              tbodyList: "success",
                              totalSize: response.data.count
                          }));
                      } else {
                          dispatch(siteSignDataDayHandle({
                              tableList: dataList,
                              tbodyList: "nothing",
                              totalSize: response.data.count
                          }));
                      }
                  } else {
                      dispatch(siteSignDataDayHandle({
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
  
  function siteSignDataDayExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodesignupincMonthlyExportExcel",
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
  
  exports.siteSignDataDayHandle = siteSignDataDayHandle;
  exports.siteSignDataDayLoadData = siteSignDataDayLoadData;
  exports.siteSignDataDayExport = siteSignDataDayExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/siteSignDataDay.js.map
  

});

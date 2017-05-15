define('src/js/actions/admin/reportForm/siteDetailsDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 每日站点巡查明细报表-日
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function siteDetailsDataDayHandle(options) {
      return {
          type: "SITEDETAILSDATADAY_HANDLE",
          options: options
      };
  }
  //请求数据
  function siteDetailsDataDayLoadData(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "modeinspectdetailDailyReport",
              type: "GET",
              data: options.data,
              success: function success(response) {
                  if (response.status == "0000") {
                      var list = response.data.data;
                      if (list.length > 0) {
                          dispatch(siteDetailsDataDayHandle({
                              tableList: list,
                              tbodyList: "success",
                              totalSize: response.data.count
                          }));
                      } else {
                          dispatch(siteDetailsDataDayHandle({
                              tableList: list,
                              tbodyList: "nothing",
                              totalSize: response.data.count
                          }));
                      }
                  } else {
                      dispatch(siteDetailsDataDayHandle({
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
  //导出报表
  function siteDetailsDataDayExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "modeinspectdetailDailyExportExcel",
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
  //巡查反馈
  function getInspectFeedback(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "getInspectFeedback",
              type: "GET",
              data: { id: options.id },
              success: function success(response) {
                  if (response.status == "0000") {
                      options.callBack(response.data);
                  } else {
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
  
  exports.siteDetailsDataDayHandle = siteDetailsDataDayHandle;
  exports.siteDetailsDataDayLoadData = siteDetailsDataDayLoadData;
  exports.siteDetailsDataDayExport = siteDetailsDataDayExport;
  exports.getInspectFeedback = getInspectFeedback;
  //# sourceMappingURL=/js/actions/admin/reportForm/siteDetailsDataDay.js.map
  

});

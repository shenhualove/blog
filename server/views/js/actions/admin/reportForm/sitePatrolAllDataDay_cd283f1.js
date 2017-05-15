define('src/js/actions/admin/reportForm/sitePatrolAllDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 每日站点巡查汇总报表-日
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function sitePatrolAllDataDayHandle(options) {
      return {
          type: "SITEPATROLALLDATADAY_HANDLE",
          options: options
      };
  }
  
  function sitePatrolAllDataDayLoadData(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodeinspectsummaryDailyReport",
              type: "GET",
              data: options.data,
              success: function success(response) {
                  if (response.status == "0000") {
                      var list = response.data.data.nodeinspectsummaryDailyList;
                      if (list.length > 0) {
                          var isShow = false;
                          if (options.data.curPage == Math.ceil(response.data.count / options.data.pageSize)) {
                              //当前是最后一页
                              isShow = true;
                          }
                          dispatch(sitePatrolAllDataDayHandle({
                              tableList: list,
                              tbodyList: "success",
                              totalData: response.data.data.nodeinspectsummaryDailyExt,
                              totalSize: response.data.count,
                              showTotal: isShow
                          }));
                      } else {
                          dispatch(sitePatrolAllDataDayHandle({
                              tableList: list,
                              tbodyList: "nothing",
                              totalData: response.data.data.nodeinspectsummaryDailyExt,
                              totalSize: response.data.count
                          }));
                      }
                  } else {
                      dispatch(sitePatrolAllDataDayHandle({
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
  
  function sitePatrolAllDataDayExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodeinspectsummaryDailyExportExcel",
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
  
  exports.sitePatrolAllDataDayHandle = sitePatrolAllDataDayHandle;
  exports.sitePatrolAllDataDayLoadData = sitePatrolAllDataDayLoadData;
  exports.sitePatrolAllDataDayExport = sitePatrolAllDataDayExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/sitePatrolAllDataDay.js.map
  

});

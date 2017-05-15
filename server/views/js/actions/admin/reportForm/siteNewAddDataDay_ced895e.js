define('src/js/actions/admin/reportForm/siteNewAddDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 月新增数据站点明细报表-日
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function siteNewAddDataDayHandle(options) {
      return {
          type: "SITENEWADDDATADAY_HANDLE",
          options: options
      };
  }
  
  function siteNewAddDataDayLoadData(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodehasdataincMonthlyReport",
              type: "GET",
              data: options.data,
              success: function success(response) {
                  if (response.status == "0000") {
                      var list = response.data.data;
                      if (list.length > 0) {
                          dispatch(siteNewAddDataDayHandle({
                              tableList: list,
                              tbodyList: "success",
                              totalSize: response.data.count
                          }));
                      } else {
                          dispatch(siteNewAddDataDayHandle({
                              tableList: list,
                              tbodyList: "nothing",
                              totalSize: response.data.count
                          }));
                      }
                  } else {
                      dispatch(siteNewAddDataDayHandle({
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
  
  function siteNewAddDataDayExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodehasdataincMonthlyExportExcel",
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
  
  exports.siteNewAddDataDayHandle = siteNewAddDataDayHandle;
  exports.siteNewAddDataDayLoadData = siteNewAddDataDayLoadData;
  exports.siteNewAddDataDayExport = siteNewAddDataDayExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/siteNewAddDataDay.js.map
  

});

define('src/js/actions/admin/reportForm/bankAllDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/24.
   *
   * 全辖银行业务全量银行数据汇总报表-日
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function bankAllDataDayHandle(options) {
      return {
          type: "BANKALLDATADAY_HANDLE",
          options: options
      };
  }
  
  function bankAllDataDayLoad(options) {
      return function (dispatch) {
          dispatch(bankAllDataDayHandle({
              status: "loading"
          }));
          $.XlAjax({
              url: "bankbizRoutineReport",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      if (data.data.data.bankbizRoutineList.length > 0) {
                          var isShow = false;
                          if (options.curPage == Math.ceil(data.data.count / options.pageSize)) {
                              //当前是最后一页
                              isShow = true;
                          }
                          dispatch(bankAllDataDayHandle({
                              listData: data.data.data.bankbizRoutineList,
                              totalData: data.data.data.bankbizRoutineExt,
                              totalSize: data.data.count,
                              showTotal: isShow,
                              status: "success"
                          }));
                      } else {
                          dispatch(bankAllDataDayHandle({
                              listData: data.data.data.bankbizRoutineList,
                              totalData: data.data.data.bankbizRoutineExt,
                              totalSize: data.data.count,
                              status: "nothing"
                          }));
                      }
                  } else {
                      dispatch(bankAllDataDayHandle({
                          status: "fail"
                      }));
                  }
              },
              error: function error() {
                  dispatch(bankAllDataDayHandle({
                      status: "fail"
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function bankAllDataDayExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "bankbizRoutineExportExcel",
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
  
  exports.bankAllDataDayHandle = bankAllDataDayHandle;
  exports.bankAllDataDayLoad = bankAllDataDayLoad;
  exports.bankAllDataDayExport = bankAllDataDayExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/bankAllDataDay.js.map
  

});

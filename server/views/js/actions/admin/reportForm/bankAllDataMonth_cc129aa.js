define('src/js/actions/admin/reportForm/bankAllDataMonth', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/27.
   *
   * 全辖银行业务常规数据汇总报表-月
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function bankAllDataMonthHandle(options) {
      return {
          type: "BANKALLDATAMONTH_HANDLE",
          options: options
      };
  }
  
  function bankAllDataMonthLoad(options) {
      return function (dispatch) {
          dispatch(bankAllDataMonthHandle({
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
                          dispatch(bankAllDataMonthHandle({
                              listData: data.data.data.bankbizRoutineList,
                              totalData: data.data.data.bankbizRoutineExt,
                              totalSize: data.data.count,
                              showTotal: isShow,
                              status: "success"
                          }));
                      } else {
                          dispatch(bankAllDataMonthHandle({
                              listData: data.data.data.bankbizRoutineList,
                              totalData: data.data.data.bankbizRoutineExt,
                              totalSize: data.data.count,
                              status: "nothing"
                          }));
                      }
                  } else {
                      dispatch(bankAllDataMonthHandle({
                          status: "fail"
                      }));
                  }
              },
              error: function error() {
                  dispatch(bankAllDataMonthHandle({
                      status: "fail"
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function bankAllDataMonthExport(options) {
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
  
  exports.bankAllDataMonthHandle = bankAllDataMonthHandle;
  exports.bankAllDataMonthLoad = bankAllDataMonthLoad;
  exports.bankAllDataMonthExport = bankAllDataMonthExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/bankAllDataMonth.js.map
  

});

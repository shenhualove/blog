define('src/js/actions/admin/reportForm/bankRoutineDataMonth', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/27.
   *
   * 全辖银行业务全量银行数据汇总报表-月
   *
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function bankRoutineDataMonthHandle(options) {
      return {
          type: "BANKROUTINEDATAMONTH_HANDLE",
          options: options
      };
  }
  
  function bankRoutineDataMonthLoad(options) {
      return function (dispatch) {
          dispatch(bankRoutineDataMonthHandle({
              status: "loading"
          }));
          $.XlAjax({
              url: "bankbizFullReport",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      if (data.data.data.bankbizFullList.length > 0) {
                          var isShow = false;
                          if (options.curPage == Math.ceil(data.data.count / options.pageSize)) {
                              //当前是最后一页
                              isShow = true;
                          }
                          dispatch(bankRoutineDataMonthHandle({
                              listData: data.data.data.bankbizFullList,
                              totalData: data.data.data.bankbizFullExt,
                              totalSize: data.data.count,
                              showTotal: isShow,
                              status: "success"
                          }));
                      } else {
                          dispatch(bankRoutineDataMonthHandle({
                              listData: data.data.data.bankbizFullList,
                              totalData: data.data.data.bankbizFullExt,
                              totalSize: data.data.count,
                              status: "nothing"
                          }));
                      }
                  } else {
                      dispatch(bankRoutineDataMonthHandle({
                          status: "fail"
                      }));
                  }
              },
              error: function error() {
                  dispatch(bankRoutineDataMonthHandle({
                      status: "fail"
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function bankRoutineDataMonthExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "bankbizFullExportExcel",
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
  
  exports.bankRoutineDataMonthHandle = bankRoutineDataMonthHandle;
  exports.bankRoutineDataMonthLoad = bankRoutineDataMonthLoad;
  exports.bankRoutineDataMonthExport = bankRoutineDataMonthExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/bankRoutineDataMonth.js.map
  

});

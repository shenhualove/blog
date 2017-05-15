define('src/js/actions/admin/reportForm/siteAddDataMonth', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 全辖站点增量日报（签约、数据、落地情况）-月
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function siteAddDataMonthHandle(options) {
      return {
          type: "SITEADDDATAMONTH_HANDLE",
          options: options
      };
  }
  
  function siteAddDataMonthLoadData(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodeincDailyReport",
              type: "GET",
              data: options.data,
              success: function success(response) {
                  if (response.status == "0000") {
                      var nodeincDailyList = response.data.data.nodeincDailyList;
                      if (nodeincDailyList.length > 0) {
                          var isShow = false;
                          if (options.data.curPage == Math.ceil(response.data.count / options.data.pageSize)) {
                              //当前是最后一页
                              isShow = true;
                          }
                          /*for(let i=0;i<nodeincDailyList.length;i++){
                          	nodeincDailyList[i].double10NodeRate = nodeincDailyList[i].double10NodeRate+"%";
                          }
                          		let sumDouble10NodeRate =response.data.data.nodeincDailyExt.sumDouble10NodeRate+"%";
                          response.data.data.nodeincDailyExt.sumDouble10NodeRate=sumDouble10NodeRate;*/
                          dispatch(siteAddDataMonthHandle({
                              tableList: nodeincDailyList,
                              tbodyList: "success",
                              totalData: response.data.data.nodeincDailyExt,
                              totalSize: response.data.count,
                              showTotal: isShow
                          }));
                      } else {
                          dispatch(siteAddDataMonthHandle({
                              tableList: nodeincDailyList,
                              tbodyList: "nothing",
                              totalData: response.data.data.nodeincDailyExt,
                              totalSize: response.data.count
                          }));
                      }
                  } else {
                      dispatch(siteAddDataMonthHandle({
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
  
  function siteAddDataMonthExport(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "nodeincDailyExportExcel",
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
  
  exports.siteAddDataMonthHandle = siteAddDataMonthHandle;
  exports.siteAddDataMonthLoadData = siteAddDataMonthLoadData;
  exports.siteAddDataMonthExport = siteAddDataMonthExport;
  //# sourceMappingURL=/js/actions/admin/reportForm/siteAddDataMonth.js.map
  

});

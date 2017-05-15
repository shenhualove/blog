define('src/js/actions/admin/reportForm/public/common', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/25.
   *
   * 报表通用的action
   */
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function reportFormCommonHandle(options) {
      return {
          type: "REPORT_FORM_COMMON_HANDLE",
          options: options
      };
  }
  
  //查省
  function queryProvince(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "queryProvince",
              type: "GET",
              data: options,
              success: function success(data) {
                  if (data.status == "0000") {
                      dispatch(reportFormCommonHandle({
                          provinceList: data.data
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //查市
  function queryCity(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "queryCity",
              type: "GET",
              data: options ? options : {},
              success: function success(data) {
                  if (data.status == "0000") {
                      dispatch(reportFormCommonHandle({
                          cityList: data.data
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //查县、区
  function queryCounty(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "queryCounty",
              type: "GET",
              data: options ? options : {},
              success: function success(data) {
                  if (data.status == "0000") {
                      dispatch(reportFormCommonHandle({
                          countyList: data.data
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //指定查询某类别的部门
  function getCompanyByCompanyType(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "getCompanyByCompanyType",
              type: "GET",
              data: options ? options : {},
              success: function success(data) {
                  if (data.status == "0000") {
                      dispatch(reportFormCommonHandle({
                          companyList: data.data
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //获取银行
  function getBankTypeCodes(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "getBankTypeCodes",
              type: "GET",
              data: options ? options : {},
              success: function success(data) {
                  if (data.status == "0000") {
                      dispatch(reportFormCommonHandle({
                          bankList: data.data
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //获取站点标签列表
  function getNodeLabel(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "getNodeLabelList",
              type: "GET",
              data: options ? options : {},
              success: function success(data) {
                  if (data.status == "0000") {
                      dispatch(reportFormCommonHandle({
                          nodeLableList: data.data
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  exports.reportFormCommonHandle = reportFormCommonHandle;
  exports.queryProvince = queryProvince;
  exports.queryCity = queryCity;
  exports.queryCounty = queryCounty;
  exports.getCompanyByCompanyType = getCompanyByCompanyType;
  exports.getBankTypeCodes = getBankTypeCodes;
  exports.getNodeLabel = getNodeLabel;
  //# sourceMappingURL=/js/actions/admin/reportForm/public/common.js.map
  

});

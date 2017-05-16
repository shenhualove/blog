define('src/js/actions/admin/column/list', function(require, exports, module) {

  /**
   * Created by apple on 17/5/16.
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  exports.columnListHandle = columnListHandle;
  exports.getColumnList = getColumnList;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _utilsCommonFetch = require('src/js/utils/common/fetch');
  
  var _utilsCommonFetch2 = _interopRequireDefault(_utilsCommonFetch);
  
  var _common = require('src/js/actions/common/index');
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  var handleText = "COLUMN_LIST_HANDLE";
  
  //触发action
  
  function columnListHandle(data) {
      return function (dispatch) {
          dispatch((0, _common.handle)(handleText, data));
      };
  }
  
  //获取栏目列表
  
  function getColumnList(options) {
      return function (dispatch) {
          dispatch((0, _common.handle)(handleText, {
              curPage: options.curPage,
              pageSize: options.pageSize
          }));
  
          (0, _utilsCommonFetch2['default'])({
              url: "getColumnList",
              data: {
                  pageSize: options.pageSize,
                  curPage: options.curPage
              },
              success: function success(data) {
                  if (data.status == "1") {
                      dispatch((0, _common.handle)("GET_COLUMN_LIST", data.data));
                  } else {
                      dispatch((0, _common.handle)(handleText, {
                          errorMsg: data.message,
                          errorShow: true,
                          loginHash: true
                      }));
                  }
              },
              error: function error() {
                  dispatch((0, _common.handle)(handleText, {
                      loginHash: true
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  //# sourceMappingURL=/js/actions/admin/column/list.js.map
  

});

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
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  //触发action
  
  function columnListHandle(data) {
      return {
          type: "COLUMN_LIST_HANDLE",
          data: data
      };
  }
  
  //获取栏目列表
  
  function getColumnList(options) {
      return function (dispatch) {
          dispatch(columnListHandle({
              status: "loading",
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
                      if (data.data.length > 0) {
                          dispatch(columnListHandle({
                              listData: data.data,
                              status: "success"
                          }));
                      } else {
                          dispatch(columnListHandle({
                              listData: data.data,
                              status: "nothing"
                          }));
                      }
                  } else {
                      dispatch(columnListHandle({
                          status: "fail"
                      }));
                  }
              },
              error: function error() {
                  dispatch(columnListHandle({
                      status: "fail"
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

define('src/js/actions/admin/article/list', function(require, exports, module) {

  /**
   * Created by apple on 17/5/16.
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  exports.handle = handle;
  exports.getColumnAll = getColumnAll;
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _utilsCommonFetch = require('src/js/utils/common/fetch');
  
  var _utilsCommonFetch2 = _interopRequireDefault(_utilsCommonFetch);
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  //触发action
  
  function handle(data) {
      return {
          type: "ARTICLE_LIST_HANDLE",
          data: data
      };
  }
  
  //获取栏目列表
  
  function getColumnAll(options) {
      return function (dispatch) {
          (0, _utilsCommonFetch2['default'])({
              url: "getColumnAll",
              success: function success(data) {
                  if (data.status == "1") {
                      dispatch(handle({
                          listData: data.data
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  //# sourceMappingURL=/js/actions/admin/article/list.js.map
  

});

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
  exports.getArticleList = getArticleList;
  exports.deleteArticle = deleteArticle;
  
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
  
  //获取全部栏目
  
  function getColumnAll(options) {
      return function (dispatch) {
          (0, _utilsCommonFetch2['default'])({
              url: "getColumnAll",
              success: function success(data) {
                  if (data.status == "1") {
                      dispatch(handle({
                          columnList: data.data
                      }));
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  //获取文章列表
  
  function getArticleList(options) {
      return function (dispatch) {
          dispatch(handle({
              status: "loading",
              curPage: options.curPage,
              pageSize: options.pageSize
          }));
  
          (0, _utilsCommonFetch2['default'])({
              url: "getArticleList",
              data: options,
              success: function success(data) {
                  if (data.status == "1") {
                      if (data.data.length > 0) {
                          dispatch(handle({
                              listData: data.data,
                              totalSize: data.count,
                              status: "success"
                          }));
                      } else {
                          dispatch(handle({
                              listData: data.data,
                              totalSize: data.count,
                              status: "nothing"
                          }));
                      }
                  } else {
                      dispatch(handle({
                          status: "fail"
                      }));
                  }
              },
              error: function error() {
                  dispatch(handle({
                      status: "fail"
                  }));
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  function deleteArticle(id, fn) {
      return function (dispatch) {
          (0, _utilsCommonFetch2['default'])({
              url: "deleteArticle",
              data: {
                  id: id
              },
              success: function success(data) {
                  if (data.status == "1") {
                      typeof fn == 'function' && fn();
                  } else {
                      dispatch((0, _dialog.dialogHandle)({
                          show: true,
                          type: "tips",
                          tipsType: "fail",
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
  //# sourceMappingURL=/js/actions/admin/article/list.js.map
  

});

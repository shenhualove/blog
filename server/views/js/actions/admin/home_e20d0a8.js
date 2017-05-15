define('src/js/actions/admin/home', function(require, exports, module) {

  
  //首页模块事件处理
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _dialog = require('src/js/actions/admin/dialog');
  
  function homeHandle(options) {
      return {
          type: "HOME_HANDLE",
          options: options
      };
  }
  
  //首页 图表数据
  function getEchartData(options) {
      return function (dispatch) {
          $.XlAjax({
              url: "report",
              data: {},
              success: function success(data) {
                  if (data.status == "0000") {
                      var list = data.data;
                      dispatch(homeHandle({
                          listData: list.date,
                          listBalance: list.balance,
                          listNodeCount: list.nodeCount
                      }));
                      options.callback();
                  } else {
                      $.dialog({
                          type: 'message',
                          title: "",
                          content: data.message
                      });
                  }
              },
              errorDialog: function errorDialog(xhr, errorType, error) {
                  (0, _dialog.ajaxErrorLog)(xhr, errorType, error, dispatch);
              }
          });
      };
  }
  
  exports.getEchartData = getEchartData;
  exports.homeHandle = homeHandle;
  //# sourceMappingURL=/js/actions/admin/home.js.map
  

});

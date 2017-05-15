define('src/js/reducers/admin/top', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/1.
   *
   * 顶部模块
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  //初始化state
  var initalize = sessionStorage.getItem('topState') ? JSON.parse(sessionStorage.getItem('topState')) : {};
  
  function top(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
          case "TOP_HANDLE":
              sessionStorage.setItem("topState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
          default:
              return state;
      }
  }
  
  exports['default'] = top;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/top.js.map
  

});

define('src/js/reducers/admin/home', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  //初始化state
  var initalize = sessionStorage.getItem('homeState') ? JSON.parse(sessionStorage.getItem('homeState')) : {
      listData: [], //图表X轴日期
      listBalance: [], //业绩余额
      listNodeCount: [] //站点个数
  };
  
  function home(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
  
          case "HOME_HANDLE":
              sessionStorage.setItem("homeState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
              return (0, _objectAssign2['default'])({}, state, action.options);
  
          default:
              return state;
      }
  }
  
  exports['default'] = home;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/home.js.map
  

});

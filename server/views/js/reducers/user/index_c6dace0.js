define('src/js/reducers/user/index', function(require, exports, module) {

  /**
   * Created by apple on 17/4/19.
   *
   * 首页
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _redux = require('node_modules/redux/lib/index');
  
  var _reactRouterRedux = require('node_modules/react-router-redux/lib/index');
  
  var _home = require('src/js/reducers/user/home');
  
  var _home2 = _interopRequireDefault(_home);
  
  var _list = require('src/js/reducers/user/list');
  
  var _list2 = _interopRequireDefault(_list);
  
  var _page = require('src/js/reducers/user/page');
  
  var _page2 = _interopRequireDefault(_page);
  
  //初始化STATE
  var initialize = {
      selectNav: '', //当前在哪个栏目下，给导航对应的样式，默认为空在首页
      nav: [], //导航数据
      study: [], //文档数据
      link: [], //友情链接数据
      showView: false //是否显示页面，true移除加载动画
  };
  
  function index(state, action) {
      if (state === undefined) state = initialize;
  
      switch (action.type) {
          case "SHOW_VIEW":
              return Object.assign({}, state, { showView: action.data });
          case "GET_NAV":
              return Object.assign({}, state, { nav: action.data });
          case "GET_NAV_ID":
              return Object.assign({}, state, { selectNav: action.data });
          case "GET_STUDY_LINKS":
              return Object.assign({}, state, { study: action.data });
          case "GET_FRIEND_LINKS":
              return Object.assign({}, state, { link: action.data });
          default:
              return state;
      }
  }
  
  var blog = (0, _redux.combineReducers)({
      index: index,
      home: _home2['default'],
      list: _list2['default'],
      page: _page2['default'],
      routing: _reactRouterRedux.routerReducer
  });
  
  exports['default'] = blog;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/user/index.js.map
  

});

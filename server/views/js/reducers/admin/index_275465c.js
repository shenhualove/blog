define('src/js/reducers/admin/index', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _redux = require('node_modules/redux/lib/index');
  
  // 利用combineReducers 合并reducers
  
  var _reactRouterRedux = require('node_modules/react-router-redux/lib/index');
  
  // 将routerReducer一起合并管理
  
  var _login = require('src/js/reducers/admin/login');
  
  var _login2 = _interopRequireDefault(_login);
  
  var _rolesAdd = require('src/js/reducers/admin/roles/add');
  
  var _rolesAdd2 = _interopRequireDefault(_rolesAdd);
  
  var _rolesRoles = require('src/js/reducers/admin/roles/roles');
  
  var _rolesRoles2 = _interopRequireDefault(_rolesRoles);
  
  var _home = require('src/js/reducers/admin/home');
  
  var _home2 = _interopRequireDefault(_home);
  
  var _top = require('src/js/reducers/admin/top');
  
  var _top2 = _interopRequireDefault(_top);
  
  var _user = require('src/js/reducers/admin/user');
  
  var _user2 = _interopRequireDefault(_user);
  
  var _dialog = require('src/js/reducers/admin/dialog');
  
  var _dialog2 = _interopRequireDefault(_dialog);
  
  //报表模块
  
  var _reportFormPublicCommon = require('src/js/reducers/admin/reportForm/public/common');
  
  var _reportFormPublicCommon2 = _interopRequireDefault(_reportFormPublicCommon);
  
  //公用的报表模块STATE
  
  var _reportFormBankAllDataDay = require('src/js/reducers/admin/reportForm/bankAllDataDay');
  
  var _reportFormBankAllDataDay2 = _interopRequireDefault(_reportFormBankAllDataDay);
  
  //全辖银行业务常规数据汇总报表-日
  
  var _reportFormBankAllDataMonth = require('src/js/reducers/admin/reportForm/bankAllDataMonth');
  
  var _reportFormBankAllDataMonth2 = _interopRequireDefault(_reportFormBankAllDataMonth);
  
  //全辖银行业务常规数据汇总报表-月
  
  var _reportFormBankRoutineDataDay = require('src/js/reducers/admin/reportForm/bankRoutineDataDay');
  
  var _reportFormBankRoutineDataDay2 = _interopRequireDefault(_reportFormBankRoutineDataDay);
  
  //全辖银行业务全量银行数据汇总报表-日
  
  var _reportFormBankRoutineDataMonth = require('src/js/reducers/admin/reportForm/bankRoutineDataMonth');
  
  var _reportFormBankRoutineDataMonth2 = _interopRequireDefault(_reportFormBankRoutineDataMonth);
  
  //全辖银行业务全量银行数据汇总报表-月
  
  var _reportFormSiteAddDataDay = require('src/js/reducers/admin/reportForm/siteAddDataDay');
  
  var _reportFormSiteAddDataDay2 = _interopRequireDefault(_reportFormSiteAddDataDay);
  
  //全辖站点增量日报（签约、数据、落地情况）-日
  
  var _reportFormSiteAddDataMonth = require('src/js/reducers/admin/reportForm/siteAddDataMonth');
  
  var _reportFormSiteAddDataMonth2 = _interopRequireDefault(_reportFormSiteAddDataMonth);
  
  //全辖站点增量日报（签约、数据、落地情况）-月
  
  var _reportFormSiteSignDataDay = require('src/js/reducers/admin/reportForm/siteSignDataDay');
  
  var _reportFormSiteSignDataDay2 = _interopRequireDefault(_reportFormSiteSignDataDay);
  
  //月新增签约站点明细报表
  
  var _reportFormSiteNewAddDataDay = require('src/js/reducers/admin/reportForm/siteNewAddDataDay');
  
  var _reportFormSiteNewAddDataDay2 = _interopRequireDefault(_reportFormSiteNewAddDataDay);
  
  //月新增数据站点明细报表-日
  
  var _reportFormSiteNewAddDataMonth = require('src/js/reducers/admin/reportForm/siteNewAddDataMonth');
  
  var _reportFormSiteNewAddDataMonth2 = _interopRequireDefault(_reportFormSiteNewAddDataMonth);
  
  //月新增数据站点明细报表-月
  
  var _reportFormSiteNewFinishDataDay = require('src/js/reducers/admin/reportForm/siteNewFinishDataDay');
  
  var _reportFormSiteNewFinishDataDay2 = _interopRequireDefault(_reportFormSiteNewFinishDataDay);
  
  //月新增落地站点明细报表-日
  
  var _reportFormSiteNewFinishDataMonth = require('src/js/reducers/admin/reportForm/siteNewFinishDataMonth');
  
  var _reportFormSiteNewFinishDataMonth2 = _interopRequireDefault(_reportFormSiteNewFinishDataMonth);
  
  //月新增落地站点明细报表-月
  
  var _reportFormBankErrorDataDay = require('src/js/reducers/admin/reportForm/bankErrorDataDay');
  
  var _reportFormBankErrorDataDay2 = _interopRequireDefault(_reportFormBankErrorDataDay);
  
  //全辖银行业务待处理异常数据汇总报表-日
  
  var _reportFormBankErrorDataMonth = require('src/js/reducers/admin/reportForm/bankErrorDataMonth');
  
  var _reportFormBankErrorDataMonth2 = _interopRequireDefault(_reportFormBankErrorDataMonth);
  
  //全辖银行业务待处理异常数据汇总报表-月
  
  var _reportFormSitePatrolAllDataDay = require('src/js/reducers/admin/reportForm/sitePatrolAllDataDay');
  
  var _reportFormSitePatrolAllDataDay2 = _interopRequireDefault(_reportFormSitePatrolAllDataDay);
  
  //月新增数据站点明细报表-日
  
  var _reportFormZeroSiteDataDay = require('src/js/reducers/admin/reportForm/zeroSiteDataDay');
  
  var _reportFormZeroSiteDataDay2 = _interopRequireDefault(_reportFormZeroSiteDataDay);
  
  //双零站点明细报表-月
  
  var _reportFormZeroSiteDataMonth = require('src/js/reducers/admin/reportForm/zeroSiteDataMonth');
  
  var _reportFormZeroSiteDataMonth2 = _interopRequireDefault(_reportFormZeroSiteDataMonth);
  
  //双零站点明细报表-月
  
  var _reportFormSiteDetailsDataDay = require('src/js/reducers/admin/reportForm/siteDetailsDataDay');
  
  var _reportFormSiteDetailsDataDay2 = _interopRequireDefault(_reportFormSiteDetailsDataDay);
  
  //每日站点巡查明细报表
  
  var _reportFormMasterBusinessDataDay = require('src/js/reducers/admin/reportForm/masterBusinessDataDay');
  
  var _reportFormMasterBusinessDataDay2 = _interopRequireDefault(_reportFormMasterBusinessDataDay);
  
  //每日站点巡查明细报表
  
  var _reportFormBankNoMatchDataDay = require('src/js/reducers/admin/reportForm/bankNoMatchDataDay');
  
  var _reportFormBankNoMatchDataDay2 = _interopRequireDefault(_reportFormBankNoMatchDataDay);
  
  //无匹配的银行数据明细报表-日
  
  var _reportFormBankNoMatchDataMonth = require('src/js/reducers/admin/reportForm/bankNoMatchDataMonth');
  
  var _reportFormBankNoMatchDataMonth2 = _interopRequireDefault(_reportFormBankNoMatchDataMonth);
  
  //无匹配的银行数据明细报表-月
  
  var _reportFormBankPauseDataDay = require('src/js/reducers/admin/reportForm/bankPauseDataDay');
  
  var _reportFormBankPauseDataDay2 = _interopRequireDefault(_reportFormBankPauseDataDay);
  
  //银行业务暂停站点明细报表-日
  
  var _reportFormBankPauseDataMonth = require('src/js/reducers/admin/reportForm/bankPauseDataMonth');
  
  var _reportFormBankPauseDataMonth2 = _interopRequireDefault(_reportFormBankPauseDataMonth);
  
  //银行业务暂停站点明细报表-月
  
  var _reportFormBankNoOpenDataDay = require('src/js/reducers/admin/reportForm/bankNoOpenDataDay');
  
  var _reportFormBankNoOpenDataDay2 = _interopRequireDefault(_reportFormBankNoOpenDataDay);
  
  //银行业务未开展站点明细报表-日
  
  var _reportFormBankNoOpenDataMonth = require('src/js/reducers/admin/reportForm/bankNoOpenDataMonth');
  
  var _reportFormBankNoOpenDataMonth2 = _interopRequireDefault(_reportFormBankNoOpenDataMonth);
  
  //银行业务未开展站点明细报表-月
  
  var admin = (0, _redux.combineReducers)({
      login: _login2['default'],
      top: _top2['default'],
      addRole: _rolesAdd2['default'],
      home: _home2['default'],
      user: _user2['default'],
      roles: _rolesRoles2['default'],
      dialog: _dialog2['default'],
      bankAllDataDay: _reportFormBankAllDataDay2['default'],
      bankAllDataMonth: _reportFormBankAllDataMonth2['default'],
      bankRoutineDataDay: _reportFormBankRoutineDataDay2['default'],
      bankRoutineDataMonth: _reportFormBankRoutineDataMonth2['default'],
      siteAddDataDay: _reportFormSiteAddDataDay2['default'],
      reportFormCommon: _reportFormPublicCommon2['default'],
      routing: _reactRouterRedux.routerReducer,
      siteAddDataMonth: _reportFormSiteAddDataMonth2['default'],
      siteSignDataDay: _reportFormSiteSignDataDay2['default'],
      siteNewAddDataDay: _reportFormSiteNewAddDataDay2['default'],
      siteNewAddDataMonth: _reportFormSiteNewAddDataMonth2['default'],
      siteNewFinishDataDay: _reportFormSiteNewFinishDataDay2['default'],
      bankErrorDataDay: _reportFormBankErrorDataDay2['default'],
      bankErrorDataMonth: _reportFormBankErrorDataMonth2['default'],
      siteNewFinishDataMonth: _reportFormSiteNewFinishDataMonth2['default'],
      zeroSiteDataDay: _reportFormZeroSiteDataDay2['default'],
      sitePatrolAllDataDay: _reportFormSitePatrolAllDataDay2['default'],
      zeroSiteDataMonth: _reportFormZeroSiteDataMonth2['default'],
      siteDetailsDataDay: _reportFormSiteDetailsDataDay2['default'],
      masterBusinessDataDay: _reportFormMasterBusinessDataDay2['default'],
      bankNoMatchDataDay: _reportFormBankNoMatchDataDay2['default'],
      bankNoMatchDataMonth: _reportFormBankNoMatchDataMonth2['default'],
      bankPauseDataDay: _reportFormBankPauseDataDay2['default'],
      bankPauseDataMonth: _reportFormBankPauseDataMonth2['default'],
      bankNoOpenDataDay: _reportFormBankNoOpenDataDay2['default'],
      bankNoOpenDataMonth: _reportFormBankNoOpenDataMonth2['default']
  });
  
  exports['default'] = admin;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/index.js.map
  

});

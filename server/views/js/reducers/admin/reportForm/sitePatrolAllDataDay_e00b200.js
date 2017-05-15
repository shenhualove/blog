define('src/js/reducers/admin/reportForm/sitePatrolAllDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 每日站点巡查汇总报表-日
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  var moment = require("../../untils/moment");
  
  var initalize = sessionStorage.getItem('sitePatrolAllDataDayState') ? JSON.parse(sessionStorage.getItem('sitePatrolAllDataDayState')) : {
  	pageLimit: 10, //每页加载10条
  	loadPageFlag: true, //加载分页标识  true:加载  false:不加载
  	curPage: 1, //当前页
  	totalSize: 0, //总数据条数
  	reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  	province: { val: '', name: '' }, //选中的省
  	city: { val: '', name: '' }, //选中的城市
  	county: { val: '', name: '' }, //选中的县
  	bank: "", //银行code
  	summary: 1, //选中的汇总,默认为省
  	temp_options: {
  		reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  		province: { val: '', name: '' }, //选中的省
  		city: { val: '', name: '' }, //选中的城市
  		county: { val: '', name: '' }, //选中的县
  		bank: "", //银行code
  		summary: 1 }, //选中的汇总,默认为省
  	//ajax提交请求数据的选项条件
  	tableList: [], //table list
  	showTotal: false, //是否显示合计，只有在最后一页设置为true才显示合计
  	tableTitle: [{ title: "统计月份", type: "statisticsMonth" }, { title: "省份", type: "provinceName" }, { title: "市", type: "cityName" }, { title: "区县", type: "countyName" }, { title: "合作银行", type: "bankTypeCode" }, { title: "已加盟站点数", addClass: ["text-r"], type: "joinedNodeCount", format: "number" }, { title: "当月巡查率", addClass: ["text-r"], type: "mInspectCountPercent", format: "percent" }, { title: "系统分配任务数", addClass: ["text-r"], type: "jobassignedCount", format: "number" }, { title: "系统任务完成数", addClass: ["text-r"], type: "jobfinishedCount", format: "number" }, { title: "手动添加巡查任务数", addClass: ["text-r"], type: "manualaddinspectjobCount", format: "number" }, { title: "手动添加任务完成数", addClass: ["text-r"], type: "manualaddjobfinishedCount", format: "number" }, { title: "当月总巡查数", addClass: ["text-r"], type: "mInspectCount", format: "number" }, { title: "累计总巡查数", addClass: ["text-r"], type: "cumulateInspectCount", format: "number" }], //table 表头及对应字段
  	tbodyList: 'loading', //table
  	totalData: {}, //合计数据
  	totalTitle: [{}, {}, {}, {}, { type: "sumJoinedNodeCount", format: "number" }, { type: "sumMInspectCountPercent", format: "percent" }, { type: "sumJobassignedCount", format: "number" }, { type: "sumJobfinishedCount", format: "number" }, { type: "sumManualaddinspectjobCount", format: "number" }, { type: "sumManualaddjobfinishedCount", format: "number" }, { type: "sumMInspectCount", format: "number" }, { type: "sumCumulateInspectCount", format: "number" }] //合计字段 从第二位开始
  
  };
  
  function sitePatrolAllDataDay(state, action) {
  	if (state === undefined) state = initalize;
  
  	switch (action.type) {
  		case "SITEPATROLALLDATADAY_HANDLE":
  			sessionStorage.setItem("sitePatrolAllDataDayState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
  			return (0, _objectAssign2['default'])({}, state, action.options);
  
  		default:
  			return state;
  	}
  }
  exports['default'] = sitePatrolAllDataDay;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/sitePatrolAllDataDay.js.map
  

});

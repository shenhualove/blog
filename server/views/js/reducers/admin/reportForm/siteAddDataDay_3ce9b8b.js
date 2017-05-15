define('src/js/reducers/admin/reportForm/siteAddDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 全辖站点增量日报（签约、数据、落地情况）-日
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  var moment = require("../../untils/moment");
  
  var initalize = sessionStorage.getItem('siteAddDataDayState') ? JSON.parse(sessionStorage.getItem('siteAddDataDayState')) : {
  	pageLimit: 10, //每页加载10条
  	loadPageFlag: true, //加载分页标识  true:加载  false:不加载
  	curPage: 1, //当前页
  	totalSize: 0, //总数据条数
  	reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  	province: { val: '', name: '' }, //选中的省
  	bank: "", //银行code
  	temp_options: {
  		reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  		province: { val: '', name: '' }, //选中的省
  		bank: "" }, //银行code
  	//ajax提交请求数据的选项条件
  	tableList: [], //table list
  	tableTitle: [{ title: "省份", type: "provinceName", rowspan: 2 }, { title: "市场部", type: "companyName", rowspan: 2 }, { title: "合作银行", type: "bankTypeCode", rowspan: 2 }, { title: "本日新增", addClass: ["text-r"], type: "dAddNodesignupCount", parent: "签约站点", colspan: 3, format: "number" }, { title: "本周累计", addClass: ["text-r"], type: "wCumulateNodesignupCount", parent: "签约站点", colspan: 3, format: "number" }, { title: "本月累计", addClass: ["text-r"], type: "mCumulateNodesignupCount", parent: "签约站点", colspan: 3, format: "number" }, { title: "本周新增", addClass: ["text-r"], type: "wAddNodehasdataCount", parent: "数据站点", colspan: 2, format: "number" }, { title: "本月累计", addClass: ["text-r"], type: "mCumulateNodehasdataCount", parent: "数据站点", colspan: 2, format: "number" }, { title: "本周新增", addClass: ["text-r"], type: "wAddNodedouble10Count", parent: "落地站点", colspan: 2, format: "number" }, { title: "本月累计", addClass: ["text-r"], type: "mCumulateNodedouble10Count", parent: "落地站点", colspan: 2, format: "number" }, { title: "双十站点总数", addClass: ["text-r"], type: "double10NodeCount", rowspan: 2, format: "number" }, { title: "双十站点占比", addClass: ["text-r"], type: "double10NodeRate", rowspan: 2, format: "percent" }, { title: "责任人", type: "owner", rowspan: 2 }, { title: "排名", addClass: ["text-r"], type: "ranking", rowspan: 2 }], //table 表头及对应字段
  	tbodyList: 'loading', //table
  	totalData: {}, //合计数据
  	showTotal: false, //是否显示合计，只有在最后一页设置为true才显示合计
  	totalTitle: [{}, {}, { type: "sumDAddNodesignupCount", format: "number" }, { type: "sumWCumulateNodesignupCount", format: "number" }, { type: "sumMCumulateNodesignupCount", format: "number" }, { type: "sumWAddNodehasdataCount", format: "number" }, { type: "sumMCumulateNodehasdataCount", format: "number" }, { type: "sumWAddNodedouble10Count", format: "number" }, { type: "sumMCumulateNodedouble10Count", format: "number" }, { type: "sumDouble10NodeCount", format: "number" }, { type: "sumDouble10NodeRate", format: "percent" }, {}, {}] //合计字段 从第二位开始
  
  };
  
  function siteAddDataDay(state, action) {
  	if (state === undefined) state = initalize;
  
  	switch (action.type) {
  		case "SITEADDDATADAY_HANDLE":
  			sessionStorage.setItem("siteAddDataDayState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
  			return (0, _objectAssign2['default'])({}, state, action.options);
  
  		default:
  			return state;
  	}
  }
  exports['default'] = siteAddDataDay;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/siteAddDataDay.js.map
  

});

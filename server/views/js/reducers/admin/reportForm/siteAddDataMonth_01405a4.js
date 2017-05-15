define('src/js/reducers/admin/reportForm/siteAddDataMonth', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 全辖站点增量日报（签约、数据、落地情况）-月
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  var moment = require("../../untils/moment");
  
  var initalize = sessionStorage.getItem('siteAddDataMonthState') ? JSON.parse(sessionStorage.getItem('siteAddDataMonthState')) : {
  	pageLimit: 10, //每页加载10条
  	loadPageFlag: true, //加载分页标识  true:加载  false:不加载
  	curPage: 1, //当前页
  	totalSize: 0, //总数据条数
  	reportDate: moment().subtract(1, "days").format('YYYY-MM'), //数据日期
  	province: { val: '', name: '' }, //选中的省
  	bank: "", //银行code
  	temp_options: {
  		reportDate: moment().subtract(1, "days").format('YYYY-MM'), //数据日期
  		province: { val: '', name: '' }, //选中的省
  		bank: "" }, //银行code
  	//ajax提交请求数据的选项条件
  	tableList: [], //table list
  	tableTitle: [{ title: "省份", type: "provinceName" }, { title: "市场部", type: "companyName" }, { title: "合作银行", type: "bankTypeCode" }, { title: "签约站点本月累计", addClass: ["text-r"], type: "mCumulateNodesignupCount", format: "number" }, { title: "数据站点本月累计", addClass: ["text-r"], type: "mCumulateNodehasdataCount", format: "number" }, { title: "落地站点本月累计", addClass: ["text-r"], type: "mCumulateNodedouble10Count", format: "number" }, { title: "双十站点总数", addClass: ["text-r"], type: "double10NodeCount", format: "number" }, { title: "双十站点占比", addClass: ["text-r"], type: "double10NodeRate", format: "percent" }, { title: "责任人", type: "owner" }, { title: "排名", type: "ranking" }], //table 表头及对应字段
  	tbodyList: 'loading', //table
  	totalData: {}, //合计数据
  	showTotal: false, //是否显示合计，只有在最后一页设置为true才显示合计
  	totalTitle: [{}, {}, { type: "sumMCumulateNodesignupCount", format: "number" }, { type: "sumMCumulateNodehasdataCount", format: "number" }, { type: "sumMCumulateNodedouble10Count", format: "number" }, { type: "sumDouble10NodeCount", format: "number" }, { type: "sumDouble10NodeRate", format: "percent" }, {}, {}] //合计字段 从第二位开始
  
  };
  
  function siteAddDataMonth(state, action) {
  	if (state === undefined) state = initalize;
  
  	switch (action.type) {
  		case "SITEADDDATAMONTH_HANDLE":
  			sessionStorage.setItem("siteAddDataMonthState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
  			return (0, _objectAssign2['default'])({}, state, action.options);
  
  		default:
  			return state;
  	}
  }
  exports['default'] = siteAddDataMonth;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/siteAddDataMonth.js.map
  

});

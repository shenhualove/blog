define('src/js/reducers/admin/reportForm/siteNewAddDataMonth', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 月新增数据站点明细报表-月
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  var moment = require("../../untils/moment");
  
  var initalize = sessionStorage.getItem('siteNewAddDataMonthState') ? JSON.parse(sessionStorage.getItem('siteNewAddDataMonthState')) : {
  	pageLimit: 10, //每页加载10条
  	loadPageFlag: true, //加载分页标识  true:加载  false:不加载
  	curPage: 1, //当前页
  	totalSize: 0, //总数据条数
  	reportType: "1", //0为日报表，1为月报表
  	reportDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
  	province: { val: '', name: '' }, //选中的省
  	city: { val: '', name: '' }, //选中的城市
  	county: { val: '', name: '' }, //选中的县
  	department: { val: '', name: '' }, //部门code
  	bank: "", //银行code
  	siteName: "", //站点名称
  	siteNum: "", //站点编号
  	temp_options: {
  		reportDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
  		province: { val: '', name: '' }, //选中的省
  		city: { val: '', name: '' }, //选中的城市
  		county: { val: '', name: '' }, //选中的县
  		department: { val: '', name: '' }, //部门code
  		bank: "", //银行code
  		siteName: "", //站点名称
  		siteNum: "" }, //站点编号
  	//ajax提交请求数据的选项条件
  	tableList: [], //table list
  	tableTitle: [{ title: "省份", type: "provinceName" }, { title: "市", type: "cityName" }, { title: "区县", type: "countyName" }, { title: "市场部", type: "companyName" }, { title: "所属银行", type: "bankTypeCode" }, { title: "站点编号", type: "nodeCode" }, { title: "站点名称", type: "nodeName" }, { title: "站长姓名", type: "nodeManagerName" }, { title: "站长联系电话", type: "nodeManagerPhone" }, { title: "数据导入时间", type: "importDate" }], //table 表头及对应字段
  	tbodyList: 'loading' };
  
  //table
  
  function siteNewAddDataMonth(state, action) {
  	if (state === undefined) state = initalize;
  
  	switch (action.type) {
  		case "SITENEWADDDATAMONTH_HANDLE":
  			sessionStorage.setItem("siteNewAddDataMonthState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
  			return (0, _objectAssign2['default'])({}, state, action.options);
  
  		default:
  			return state;
  	}
  }
  exports['default'] = siteNewAddDataMonth;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/siteNewAddDataMonth.js.map
  

});

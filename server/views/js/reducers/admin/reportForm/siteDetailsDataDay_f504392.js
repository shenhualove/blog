define('src/js/reducers/admin/reportForm/siteDetailsDataDay', function(require, exports, module) {

  /**
   * Created by wanwan on 2017/4/24.
   *
   * 每日站点巡查明细报表-日
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
  	value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  var moment = require("../../untils/moment");
  
  var initalize = sessionStorage.getItem('siteDetailsDataDayState') ? JSON.parse(sessionStorage.getItem('siteDetailsDataDayState')) : {
  	pageLimit: 10, //每页加载10条
  	loadPageFlag: true, //加载分页标识  true:加载  false:不加载
  	curPage: 1, //当前页
  	totalSize: 0, //总数据条数
  	reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  	province: { val: '', name: '' }, //选中的省
  	city: { val: '', name: '' }, //选中的城市
  	county: { val: '', name: '' }, //选中的县
  	department: { val: '', name: '' }, //部门code
  	bank: "", //银行code
  	siteName: "", //站点名称
  	siteNum: "", //站点编号
  	partakePeople: "", //参与人员
  	taskState: "", //任务状态
  	temp_options: {
  		reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
  		province: { val: '', name: '' }, //选中的省
  		city: { val: '', name: '' }, //选中的城市
  		county: { val: '', name: '' }, //选中的县
  		department: { val: '', name: '' }, //部门code
  		bank: "", //银行code
  		siteName: "", //站点名称
  		siteNum: "", //站点编号
  		partakePeople: "", //参与人员
  		taskState: "" }, //任务状态
  	//ajax提交请求数据的选项条件
  	tableList: [], //table list
  	tableTitle: [{ title: "省份", type: "provinceName" }, { title: "市", type: "cityName" }, { title: "区县", type: "countyName" }, { title: "合作银行", type: "bankTypeCode" }, { title: "市场部", type: "fullTreePath" }, { title: "站点名称", type: "nodeName" }, { title: "站点编号", type: "nodeCode" }, { title: "是否系统分配任务", type: "isSystemTask" }, { title: "任务状态", type: "inspectjobStatus" }, { title: "巡查时间", type: "inspectDate" }, { title: "参与人员", type: "participant" }, { title: "大致距离（KM）", addClass: ["text-r"], type: "distance", format: "money" }, { title: "巡查备注", type: "inspectComments" }, { title: "巡查反馈", htmlType: [{ type: "button", text: "查看", bindType: "inspectjobStatus", callBack: null, param: "id" }] }], //table 表头及对应字段
  	tbodyList: 'loading' };
  
  //table
  
  function siteDetailsDataDay(state, action) {
  	if (state === undefined) state = initalize;
  
  	switch (action.type) {
  		case "SITEDETAILSDATADAY_HANDLE":
  			sessionStorage.setItem("siteDetailsDataDayState", JSON.stringify((0, _objectAssign2['default'])({}, state, action.options)));
  			return (0, _objectAssign2['default'])({}, state, action.options);
  
  		default:
  			return state;
  	}
  }
  exports['default'] = siteDetailsDataDay;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/reportForm/siteDetailsDataDay.js.map
  

});

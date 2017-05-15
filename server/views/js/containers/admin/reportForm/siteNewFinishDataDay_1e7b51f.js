define('src/js/containers/admin/reportForm/siteNewFinishDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 月新增落地站点明细报表-日
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = require('node_modules/react-redux/lib/index');
  
  var _componentsPublicCenterTopNav = require('../../components/public/centerTopNav');
  
  var _componentsPublicCenterTopNav2 = _interopRequireDefault(_componentsPublicCenterTopNav);
  
  var _reactRouter = require('node_modules/react-router/lib/index');
  
  var _componentsPublicPagination = require('../../components/public/pagination');
  
  var _componentsPublicPagination2 = _interopRequireDefault(_componentsPublicPagination);
  
  var _actionsDialog = require('../../actions/dialog');
  
  var _componentsPublicSelectBox = require('../../components/public/selectBox');
  
  var _componentsPublicSelectBox2 = _interopRequireDefault(_componentsPublicSelectBox);
  
  var _componentsPublicReportFormTable = require('../../components/public/reportFormTable');
  
  var _componentsPublicReportFormTable2 = _interopRequireDefault(_componentsPublicReportFormTable);
  
  var _componentsPublicDepartment = require('../../components/public/department');
  
  var _componentsPublicDepartment2 = _interopRequireDefault(_componentsPublicDepartment);
  
  var _actionsReportFormPublicCommon = require('../../actions/reportForm/public/common');
  
  var _actionsReportFormSiteNewFinishDataDay = require('../../actions/reportForm/siteNewFinishDataDay');
  
  var _componentsReportFormRegional = require('../../components/reportForm/regional');
  
  var _componentsReportFormRegional2 = _interopRequireDefault(_componentsReportFormRegional);
  
  var _componentsReportFormExportButton = require('../../components/reportForm/exportButton');
  
  var _componentsReportFormExportButton2 = _interopRequireDefault(_componentsReportFormExportButton);
  
  var siteNewFinishDataDayMain = (function (_React$Component) {
      _inherits(siteNewFinishDataDayMain, _React$Component);
  
      function siteNewFinishDataDayMain() {
          _classCallCheck(this, siteNewFinishDataDayMain);
  
          _get(Object.getPrototypeOf(siteNewFinishDataDayMain.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(siteNewFinishDataDayMain, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
              this.resetFun(true);
              var _that = this;
              $(function () {
                  $("#datepicker").datepicker({
                      dateFormat: 'yy-mm-dd',
                      maxDate: -1,
                      changeYear: true, // 年下拉菜单
                      changeMonth: true, // 月下拉菜单
                      onSelect: function onSelect(date) {
                          _that.props._siteNewFinishDataDayHandle({
                              reportDate: date
                          });
                      }
                  });
              });
  
              this.props._queryProvince({
                  reportName: "nodedropdataincMonthly"
              });
              this.props._getBankTypeCodes({
                  reportName: "nodedropdataincMonthly"
              });
              this.props._getCompanyByCompanyType();
          }
  
          //加载分页插件
      }, {
          key: 'loadPage',
          value: function loadPage(options) {
              this.props._siteNewFinishDataDayHandle({
                  loadPageFlag: false
              });
              this.pageNavClick(1, 10, options);
          }
  
          //调用分页加载
      }, {
          key: 'pageNavClick',
          value: function pageNavClick(n, pageSize, options) {
              this.props._siteNewFinishDataDayHandle({
                  curPage: n,
                  pageLimit: pageSize
              });
              this.loadData(n, pageSize, options ? options : this.props.siteNewFinishDataDay.temp_options);
          }
  
          //加载数据
      }, {
          key: 'loadData',
          value: function loadData(n, pageSize, options) {
              //加载中  
              this.props._siteNewFinishDataDayHandle({
                  curPage: n,
                  pageLimit: pageSize
              });
              var ajaxData = {
                  curPage: n, //当前页
                  pageSize: pageSize, //每页多少行
                  reportType: "0", //报表类型(日/月)
                  reportDate: this.props.siteNewFinishDataDay.reportDate, //数据日期
                  provinceName: options.province.name == "全部" ? "" : options.province.name, //省
                  cityName: options.city.name == "全部" ? "" : options.city.name, //市
                  countyName: options.county.name == "全部" ? "" : options.county.name, //区县
                  companyName: options.department.val, //部门
                  bankTypeCode: options.bank, //银行code
                  nodeName: options.siteName, //站点啊名称
                  nodeCode: options.siteNum };
              //站点编号
              this.props._siteNewFinishDataDayLoadData({
                  tbodyList: 'loading',
                  data: ajaxData
              });
          }
  
          //省份
      }, {
          key: 'selectClick',
          value: function selectClick(id, val, name) {
              switch (id) {
                  case 1:
                      this.props._siteNewFinishDataDayHandle({
                          province: { val: val, name: name },
                          city: { val: '', name: '' }, //选中的城市
                          county: { val: '', name: '' } //选中的县
                      });
  
                      if (val == '') {
                          //用户选择全部的情况
  
                          //重置市县区
                          this.props._reportFormCommonHandle({
                              cityList: [],
                              countyList: []
                          });
                      } else {
                          //重置县区
                          this.props._reportFormCommonHandle({
                              countyList: []
                          });
                          //更新城市数据
                          this.props._queryCity({
                              provinceCode: val,
                              reportName: "nodedropdataincMonthly"
                          });
                      }
  
                      break;
                  case 2:
                      this.props._siteNewFinishDataDayHandle({
                          city: { val: val, name: name },
                          county: { val: '', name: '' } //选中的县
                      });
                      if (val == '') {
                          //用户选择全部的情况
  
                          //重置县区
                          this.props._reportFormCommonHandle({
                              countyList: []
                          });
                      } else {
                          //更新县区数据
                          this.props._queryCounty({
                              cityCode: val,
                              reportName: "nodedropdataincMonthly"
                          });
                      }
  
                      break;
                  case 3:
                      this.props._siteNewFinishDataDayHandle({
                          county: { val: val, name: name }
                      });
                      break;
                  case 4:
                      this.props._siteNewFinishDataDayHandle({
                          bank: val
                      });
                      break;
                  default:
                      break;
              }
          }
      }, {
          key: 'showProvince',
          value: function showProvince() {
              var arr = [{ value: "", name: "全部" }];
              var temp_arr = [];
              this.props.reportFormCommon.provinceList.map(function (val, key) {
                  temp_arr.push({ value: val.districtCode, name: val.districtName });
              });
              return arr.concat(temp_arr);
          }
      }, {
          key: 'showCity',
          value: function showCity() {
              var arr = [{ value: "", name: "全部" }];
              var temp_arr = [];
              this.props.reportFormCommon.cityList.map(function (val, key) {
                  temp_arr.push({ value: val.districtCode, name: val.cityName });
              });
              return arr.concat(temp_arr);
          }
      }, {
          key: 'showCounty',
          value: function showCounty() {
              var arr = [{ value: "", name: "全部" }];
              var temp_arr = [];
              this.props.reportFormCommon.countyList.map(function (val, key) {
                  temp_arr.push({ value: val.districtCode, name: val.countyName });
              });
              return arr.concat(temp_arr);
          }
      }, {
          key: 'showBank',
          value: function showBank() {
              var arr = [{ value: "", name: "全部" }];
              var temp_arr = [];
              this.props.reportFormCommon.bankList.map(function (val, key) {
                  temp_arr.push({ value: val.bankTypeCode, name: val.bankTypeName });
              });
              return arr.concat(temp_arr);
          }
  
          //部门
      }, {
          key: 'departmentReset',
          value: function departmentReset(value, name) {
              this.props._siteNewFinishDataDayHandle({
                  department: { val: value, name: name }
              });
          }
  
          //站点名称
      }, {
          key: 'siteNameFun',
          value: function siteNameFun(event) {
              this.props._siteNewFinishDataDayHandle({
                  siteName: event.target.value
              });
          }
  
          //站点编号
      }, {
          key: 'siteNumFun',
          value: function siteNumFun(event) {
  
              this.props._siteNewFinishDataDayHandle({
                  siteNum: event.target.value
              });
          }
  
          //查询
      }, {
          key: 'queryData',
          value: function queryData() {
              if (this.props.siteNewFinishDataDay.tbodyList == 'loading') {
                  this.props._dialogHandle({
                      type: "tips",
                      time: 2000,
                      content: "正在查询中，请耐心等待！",
                      tipsType: "warning",
                      show: true
                  });
              } else {
                  var siteNumCheck = $.XlCheck({
                      val: this.props.siteNewFinishDataDay.siteNum,
                      rule: ["Number"]
                  });
                  if (!siteNumCheck.Number) {
                      this.props._dialogHandle({
                          show: true,
                          content: '站点编号只能输入数字',
                          type: "tips",
                          tipsType: "warning"
                      });
                      return false;
                  }
  
                  var options = {
                      reportDate: this.props.siteNewFinishDataDay.reportDate, //数据日期
                      province: this.props.siteNewFinishDataDay.province, //选中的省
                      city: this.props.siteNewFinishDataDay.city, //选中的城市
                      county: this.props.siteNewFinishDataDay.county, //选中的县
                      department: this.props.siteNewFinishDataDay.department, //部门code
                      bank: this.props.siteNewFinishDataDay.bank, //银行code
                      siteName: this.props.siteNewFinishDataDay.siteName, //站点名称
                      siteNum: this.props.siteNewFinishDataDay.siteNum };
                  //站点编号
                  this.props._siteNewFinishDataDayHandle({
                      tbodyList: 'loading',
                      temp_options: options
                  });
                  this.loadData(1, this.props.siteNewFinishDataDay.pageLimit, options);
              }
          }
  
          //重置
      }, {
          key: 'resetFun',
          value: function resetFun(bool) {
              if (bool === true) {
                  var options = {
                      reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
                      province: { val: "", name: "" }, //省
                      city: { val: "", name: "" }, //市
                      county: { val: "", name: "" }, //区县
                      department: { val: "", name: "" }, //部门           
                      bank: "", //银行code
                      siteName: "", //站点名称
                      siteNum: "" };
                  //初次进入页面，所有参数初始化
                  //站点编号
                  this.props._siteNewFinishDataDayHandle({
                      reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
                      province: { val: "", name: "" }, //省
                      city: { val: "", name: "" }, //市
                      county: { val: "", name: "" }, //区县
                      department: { val: "", name: "" }, //部门           
                      bank: "", //银行code
                      siteName: "", //站点名称
                      siteNum: "", //站点编号
                      temp_options: options
                  });
                  //进入页面发起默认请求加载数据
                  this.loadPage(options);
              } else {
                  this.props._siteNewFinishDataDayHandle({
                      reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
                      province: { val: "", name: "" }, //省
                      city: { val: "", name: "" }, //市
                      county: { val: "", name: "" }, //区县
                      department: { val: "", name: "" }, //部门           
                      bank: "", //银行code
                      siteName: "", //站点名称
                      siteNum: "" });
              }
              //站点编号
              this.selectClick(1, '', '');
          }
  
          //导出报表
      }, {
          key: 'exportExcel',
          value: function exportExcel() {
              var options = this.props.siteNewFinishDataDay.temp_options;
              this.props._siteNewFinishDataDayExport({
                  reportType: "0", //报表类型(日/月)
                  reportDate: this.props.siteNewFinishDataDay.reportDate, //数据日期
                  provinceName: options.province.name == "全部" ? "" : options.province.name, //省
                  cityName: options.city.name == "全部" ? "" : options.city.name, //市
                  countyName: options.county.name == "全部" ? "" : options.county.name, //区县
                  companyName: options.department.val, //部门
                  bankTypeCode: options.bank, //银行code
                  nodeName: options.siteName, //站点啊名称
                  nodeCode: options.siteNum });
          }
      }, {
          key: 'render',
          //站点编号
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'height100p' },
                  _react2['default'].createElement(_componentsPublicCenterTopNav2['default'], { title: '月新增落地站点明细日报', parentList: [{ name: "数据报表" }, { name: "银行业务日报" }] }),
                  _react2['default'].createElement(
                      'div',
                      { className: 'height100pY plr26' },
                      _react2['default'].createElement(
                          'div',
                          { className: 'pub-form-top clearfix' },
                          _react2['default'].createElement(
                              'ul',
                              null,
                              _react2['default'].createElement(
                                  'li',
                                  null,
                                  _react2['default'].createElement(
                                      'span',
                                      null,
                                      '数据日期:'
                                  ),
                                  _react2['default'].createElement('input', { id: 'datepicker', type: 'text', value: this.props.siteNewFinishDataDay.reportDate, readOnly: true })
                              ),
                              _react2['default'].createElement(_componentsReportFormRegional2['default'], {
                                  selectClick: this.selectClick.bind(this),
                                  provinceVal: this.props.siteNewFinishDataDay.province.val,
                                  cityVal: this.props.siteNewFinishDataDay.city.val,
                                  countyVal: this.props.siteNewFinishDataDay.county.val,
                                  provinceList: this.showProvince(),
                                  cityList: this.showCity(),
                                  countyList: this.showCounty()
                              })
                          ),
                          _react2['default'].createElement(
                              'ul',
                              null,
                              _react2['default'].createElement(
                                  'li',
                                  null,
                                  _react2['default'].createElement(
                                      'span',
                                      null,
                                      '所属部门:'
                                  ),
                                  _react2['default'].createElement(_componentsPublicDepartment2['default'], { value: this.props.siteNewFinishDataDay.department.name,
                                      departmentData: this.props.reportFormCommon.companyList,
                                      callBack: this.departmentReset.bind(this)
                                  })
                              ),
                              _react2['default'].createElement(
                                  'li',
                                  null,
                                  _react2['default'].createElement(
                                      'span',
                                      null,
                                      '合作银行:'
                                  ),
                                  _react2['default'].createElement(_componentsPublicSelectBox2['default'], {
                                      callBack: this.selectClick.bind(this, 4),
                                      value: this.props.siteNewFinishDataDay.bank,
                                      list: this.showBank()
                                  })
                              ),
                              _react2['default'].createElement(
                                  'li',
                                  null,
                                  _react2['default'].createElement(
                                      'span',
                                      null,
                                      '站点名称:'
                                  ),
                                  _react2['default'].createElement('input', { type: 'text', placeholder: '请输入站点名称', onChange: this.siteNameFun.bind(this), value: this.props.siteNewFinishDataDay.siteName })
                              ),
                              _react2['default'].createElement(
                                  'li',
                                  null,
                                  _react2['default'].createElement(
                                      'span',
                                      null,
                                      '站点编号:'
                                  ),
                                  _react2['default'].createElement('input', { type: 'text', placeholder: '请输入站点编号', onChange: this.siteNumFun.bind(this), value: this.props.siteNewFinishDataDay.siteNum })
                              )
                          ),
                          _react2['default'].createElement(
                              'div',
                              { className: 'pub-form-btns clearfix' },
                              _react2['default'].createElement(
                                  'div',
                                  { className: 'left' },
                                  _react2['default'].createElement(
                                      'button',
                                      { onClick: this.queryData.bind(this) },
                                      '查询'
                                  ),
                                  _react2['default'].createElement(
                                      'button',
                                      { onClick: this.resetFun.bind(this) },
                                      '重置'
                                  )
                              ),
                              _react2['default'].createElement(_componentsReportFormExportButton2['default'], {
                                  data: this.props.login.Jurisdiction.ReportForm.btns.siteNewFinishDataDay,
                                  clickBack: this.exportExcel.bind(this)
                              })
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'form-content-wrap' },
                          _react2['default'].createElement(
                              'div',
                              { className: 'form-table-wrap' },
                              _react2['default'].createElement(_componentsPublicReportFormTable2['default'], {
                                  dataList: this.props.siteNewFinishDataDay.tableList,
                                  titleList: this.props.siteNewFinishDataDay.tableTitle,
                                  colspan: 13,
                                  status: this.props.siteNewFinishDataDay.tbodyList
                              })
                          ),
                          _react2['default'].createElement(_componentsPublicPagination2['default'], {
                              curPage: this.props.siteNewFinishDataDay.curPage,
                              totalNumber: this.props.siteNewFinishDataDay.totalSize,
                              pageLimt: this.props.siteNewFinishDataDay.pageLimit,
                              pageClick: this.pageNavClick.bind(this)
                          })
                      )
                  )
              );
          }
      }]);
  
      return siteNewFinishDataDayMain;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      return state;
  }
  function mapDispatchToProps(dispatch) {
      return {
          _siteNewFinishDataDayHandle: function _siteNewFinishDataDayHandle(options) {
              dispatch((0, _actionsReportFormSiteNewFinishDataDay.siteNewFinishDataDayHandle)(options));
          },
          _siteNewFinishDataDayLoadData: function _siteNewFinishDataDayLoadData(options) {
              dispatch((0, _actionsReportFormSiteNewFinishDataDay.siteNewFinishDataDayLoadData)(options));
          },
          _queryProvince: function _queryProvince(options) {
              dispatch((0, _actionsReportFormPublicCommon.queryProvince)(options));
          },
          _queryCity: function _queryCity(options) {
              dispatch((0, _actionsReportFormPublicCommon.queryCity)(options));
          },
          _queryCounty: function _queryCounty(options) {
              dispatch((0, _actionsReportFormPublicCommon.queryCounty)(options));
          },
          _getBankTypeCodes: function _getBankTypeCodes(options) {
              dispatch((0, _actionsReportFormPublicCommon.getBankTypeCodes)(options));
          },
          _getCompanyByCompanyType: function _getCompanyByCompanyType(options) {
              dispatch((0, _actionsReportFormPublicCommon.getCompanyByCompanyType)(options));
          },
          _reportFormCommonHandle: function _reportFormCommonHandle(options) {
              dispatch((0, _actionsReportFormPublicCommon.reportFormCommonHandle)(options));
          },
          _dialogHandle: function _dialogHandle(options) {
              dispatch((0, _actionsDialog.dialogHandle)(options));
          },
          _siteNewFinishDataDayExport: function _siteNewFinishDataDayExport(options) {
              dispatch((0, _actionsReportFormSiteNewFinishDataDay.siteNewFinishDataDayExport)(options));
          }
  
      };
  }
  var siteNewFinishDataDay = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(siteNewFinishDataDayMain);
  
  exports['default'] = siteNewFinishDataDay;
  module.exports = exports['default'];
  /*form content begin*/ /*form content end*/ /*content begin*/ /*content end*/
  //# sourceMappingURL=/js/containers/admin/reportForm/siteNewFinishDataDay.js.map
  

});

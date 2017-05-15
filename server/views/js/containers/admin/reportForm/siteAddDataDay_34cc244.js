define('src/js/containers/admin/reportForm/siteAddDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 全辖站点增量日报（签约、数据、落地情况）-日
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
  
  var _actionsReportFormPublicCommon = require('../../actions/reportForm/public/common');
  
  var _actionsReportFormSiteAddDataDay = require('../../actions/reportForm/siteAddDataDay');
  
  var _componentsReportFormExportButton = require('../../components/reportForm/exportButton');
  
  var _componentsReportFormExportButton2 = _interopRequireDefault(_componentsReportFormExportButton);
  
  var siteAddDataDayMain = (function (_React$Component) {
      _inherits(siteAddDataDayMain, _React$Component);
  
      function siteAddDataDayMain() {
          _classCallCheck(this, siteAddDataDayMain);
  
          _get(Object.getPrototypeOf(siteAddDataDayMain.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(siteAddDataDayMain, [{
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
                          _that.props._siteAddDataDayHandle({
                              reportDate: date
                          });
                      }
                  });
              });
              this.props._queryProvince({
                  reportName: "nodeincDaily"
              });
              this.props._getBankTypeCodes({
                  reportName: "nodeincDaily"
              });
          }
  
          //加载分页插件
      }, {
          key: 'loadPage',
          value: function loadPage(options) {
              this.props._siteAddDataDayHandle({
                  loadPageFlag: false
              });
              this.pageNavClick(1, 10, options);
          }
  
          //调用分页加载
      }, {
          key: 'pageNavClick',
          value: function pageNavClick(n, pageSize, options) {
              this.props._siteAddDataDayHandle({
                  curPage: n,
                  pageLimit: pageSize
              });
              if (n == Math.ceil(this.props.siteAddDataDay.totalSize / pageSize)) {
                  //当前是最后一页
                  this.props._siteAddDataDayHandle({
                      showTotal: true
                  });
              } else {
                  this.props._siteAddDataDayHandle({
                      showTotal: false
                  });
              }
              this.loadData(n, pageSize, options ? options : this.props.siteAddDataDay.temp_options);
          }
  
          //加载数据
      }, {
          key: 'loadData',
          value: function loadData(n, pageSize, options) {
              //加载中
              this.props._siteAddDataDayHandle({
                  curPage: n,
                  pageLimit: pageSize
              });
              var ajaxData = {
                  curPage: n, //当前页
                  pageSize: pageSize, //每页多少行
                  reportType: "0", //报表类型(日/月)
                  reportDate: options.reportDate, //数据日期
                  provinceName: options.province.name == '全部' ? '' : options.province.name, //省名字
                  bankTypeCode: options.bank == '全部' ? '' : options.bank };
              //银行code
              this.props._siteAddDataDayLoadData({
                  data: ajaxData
              });
          }
      }, {
          key: 'selectClick',
          value: function selectClick(id, val, name) {
              switch (id) {
                  case 1:
                      this.props._siteAddDataDayHandle({
                          province: { val: val, name: name }
                      });
  
                      break;
                  case 4:
                      this.props._siteAddDataDayHandle({
                          bank: val
                      });
                      break;
                  default:
                      break;
              }
          }
  
          //省
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
  
          //银行
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
  
          //查询
      }, {
          key: 'queryData',
          value: function queryData() {
              if (this.props.siteAddDataDay.tbodyList == 'loading') {
                  this.props._dialogHandle({
                      type: "tips",
                      time: 2000,
                      content: "正在查询中，请耐心等待！",
                      tipsType: "warning",
                      show: true
                  });
              } else {
                  var options = {
                      reportDate: this.props.siteAddDataDay.reportDate, //报表类型(日/月)
                      province: this.props.siteAddDataDay.province, //省名字
                      bank: this.props.siteAddDataDay.bank };
                  //银行code
                  this.props._siteAddDataDayHandle({
                      tbodyList: 'loading',
                      temp_options: options
                  });
                  this.loadData(1, this.props.siteAddDataDay.pageLimit, options);
              }
          }
  
          //重置
      }, {
          key: 'resetFun',
          value: function resetFun(bool) {
              if (bool === true) {
                  var options = {
                      reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
                      province: { val: '', name: '' }, //选中的省
                      bank: "" };
                  //初次进入页面，所有参数初始化
                  //银行code
                  this.props._siteAddDataDayHandle({
                      reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
                      province: { val: '', name: '' }, //选中的省
                      bank: "", //银行code
                      temp_options: options
                  });
                  //进入页面发起默认请求加载数据
                  this.loadPage(options);
              } else {
                  this.props._siteAddDataDayHandle({
                      reportDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //数据日期
                      province: { val: '', name: '' }, //选中的省
                      bank: "" });
              }
              //银行code
              this.selectClick(1, '', '');
          }
  
          //导出报表
      }, {
          key: 'exportExcel',
          value: function exportExcel() {
              var options = this.props.siteAddDataDay.temp_options;
              this.props._siteAddDataDayExport({
                  reportType: "0", //报表类型(日/月)
                  reportDate: options.reportDate, //数据日期
                  provinceName: options.province.name == '全部' ? '' : options.province.name, //省名字
                  bankTypeCode: options.bank == '全部' ? '' : options.bank });
          }
      }, {
          key: 'render',
          //银行code
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'height100p' },
                  _react2['default'].createElement(_componentsPublicCenterTopNav2['default'], { title: '全辖站点增量日报', parentList: [{ name: "数据报表" }, { name: "银行业务日报" }] }),
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
                                  _react2['default'].createElement('input', { id: 'datepicker', type: 'text', value: this.props.siteAddDataDay.reportDate, readOnly: true })
                              ),
                              _react2['default'].createElement(
                                  'li',
                                  null,
                                  _react2['default'].createElement(
                                      'span',
                                      null,
                                      '省份:'
                                  ),
                                  _react2['default'].createElement(_componentsPublicSelectBox2['default'], {
                                      callBack: this.selectClick.bind(this, 1),
                                      value: this.props.siteAddDataDay.province.val,
                                      list: this.showProvince()
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
                                      value: this.props.siteAddDataDay.bank,
                                      list: this.showBank()
                                  })
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
                                  data: this.props.login.Jurisdiction.ReportForm.btns.siteAddDataDay,
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
                                  showTotal: this.props.siteAddDataDay.showTotal,
                                  totalData: this.props.siteAddDataDay.totalData,
                                  totalTitle: this.props.siteAddDataDay.totalTitle,
                                  dataList: this.props.siteAddDataDay.tableList,
                                  titleList: this.props.siteAddDataDay.tableTitle,
                                  colspan: 14,
                                  status: this.props.siteAddDataDay.tbodyList
                              })
                          ),
                          _react2['default'].createElement(_componentsPublicPagination2['default'], {
                              curPage: this.props.siteAddDataDay.curPage,
                              totalNumber: this.props.siteAddDataDay.totalSize,
                              pageLimt: this.props.siteAddDataDay.pageLimit,
                              pageClick: this.pageNavClick.bind(this)
                          })
                      )
                  )
              );
          }
      }]);
  
      return siteAddDataDayMain;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      return state;
  }
  function mapDispatchToProps(dispatch) {
      return {
          _siteAddDataDayHandle: function _siteAddDataDayHandle(options) {
              dispatch((0, _actionsReportFormSiteAddDataDay.siteAddDataDayHandle)(options));
          },
          _siteAddDataDayLoadData: function _siteAddDataDayLoadData(options) {
              dispatch((0, _actionsReportFormSiteAddDataDay.siteAddDataDayLoadData)(options));
          },
          _queryProvince: function _queryProvince(options) {
              dispatch((0, _actionsReportFormPublicCommon.queryProvince)(options));
          },
          _getBankTypeCodes: function _getBankTypeCodes(options) {
              dispatch((0, _actionsReportFormPublicCommon.getBankTypeCodes)(options));
          },
          _dialogHandle: function _dialogHandle(options) {
              dispatch((0, _actionsDialog.dialogHandle)(options));
          },
          _siteAddDataDayExport: function _siteAddDataDayExport(options) {
              dispatch((0, _actionsReportFormSiteAddDataDay.siteAddDataDayExport)(options));
          }
  
      };
  }
  var siteAddDataDay = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(siteAddDataDayMain);
  
  exports['default'] = siteAddDataDay;
  module.exports = exports['default'];
  /*form content begin*/ /*form content end*/ /*content begin*/ /*content end*/
  //# sourceMappingURL=/js/containers/admin/reportForm/siteAddDataDay.js.map
  

});

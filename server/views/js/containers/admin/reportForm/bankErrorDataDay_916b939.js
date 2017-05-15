define('src/js/containers/admin/reportForm/bankErrorDataDay', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 全辖银行业务待处理异常数据汇总报表-日
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
  
  var _componentsPublicPagination = require('../../components/public/pagination');
  
  var _componentsPublicPagination2 = _interopRequireDefault(_componentsPublicPagination);
  
  var _actionsDialog = require('../../actions/dialog');
  
  var _actionsReportFormPublicCommon = require('../../actions/reportForm/public/common');
  
  var _actionsReportFormBankErrorDataDay = require('../../actions/reportForm/bankErrorDataDay');
  
  var _componentsPublicSelectBox = require('../../components/public/selectBox');
  
  var _componentsPublicSelectBox2 = _interopRequireDefault(_componentsPublicSelectBox);
  
  var _componentsPublicReportFormTable = require('../../components/public/reportFormTable');
  
  var _componentsPublicReportFormTable2 = _interopRequireDefault(_componentsPublicReportFormTable);
  
  var _componentsReportFormExportButton = require('../../components/reportForm/exportButton');
  
  var _componentsReportFormExportButton2 = _interopRequireDefault(_componentsReportFormExportButton);
  
  var bankErrorDataDayMain = (function (_React$Component) {
      _inherits(bankErrorDataDayMain, _React$Component);
  
      function bankErrorDataDayMain() {
          _classCallCheck(this, bankErrorDataDayMain);
  
          _get(Object.getPrototypeOf(bankErrorDataDayMain.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(bankErrorDataDayMain, [{
          key: 'selectClick',
          value: function selectClick(id, val, name) {
              switch (id) {
                  case 1:
                      this.props._bankErrorDataDayHandle({
                          province: { val: val, name: name }
                      });
  
                      break;
                  case 4:
                      this.props._bankErrorDataDayHandle({
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
          key: 'showBank',
          value: function showBank() {
              var arr = [{ value: "", name: "全部" }];
              var temp_arr = [];
              this.props.reportFormCommon.bankList.map(function (val, key) {
                  temp_arr.push({ value: val.bankTypeCode, name: val.bankTypeName });
              });
              return arr.concat(temp_arr);
          }
      }, {
          key: 'pageNavClick',
          value: function pageNavClick(curPage, pageSize, options) {
              if (curPage == Math.ceil(this.props.bankErrorDataDay.totalSize / pageSize)) {
                  //当前是最后一页
                  this.props._bankErrorDataDayHandle({
                      showTotal: true
                  });
              } else {
                  this.props._bankErrorDataDayHandle({
                      showTotal: false
                  });
              }
              this.getData(curPage, pageSize, options ? options : this.props.bankErrorDataDay.temp_options);
          }
  
          //请求数据
      }, {
          key: 'getData',
          value: function getData(curPage, pageSize, options) {
              this.props._bankErrorDataDayHandle({
                  curPage: curPage,
                  pageSize: pageSize
              });
  
              this.props._bankErrorDataDayLoad({
                  curPage: curPage ? curPage : this.props.bankErrorDataDay.curPage,
                  pageSize: pageSize ? pageSize : this.props.bankErrorDataDay.pageSize,
                  reportDate: options.selectDate,
                  reportType: 0,
                  provinceName: options.province.name == '全部' ? '' : options.province.name,
                  bankTypeCode: options.bank == '全部' ? '' : options.bank
              });
          }
  
          //重置数据
      }, {
          key: 'resetData',
          value: function resetData(bool) {
              if (bool === true) {
                  var options = {
                      selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
                      province: { val: '', name: '' }, //选中的省
                      bank: "" //选中的银行
                  };
                  //初次进入页面，所有参数初始化
                  this.props._bankErrorDataDayHandle({
                      selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
                      province: { val: '', name: '' }, //选中的省
                      bank: "", //选中的银行
                      temp_options: options
                  });
                  //进入页面发起默认请求加载数据
                  this.pageNavClick(1, 10, options);
              } else {
                  //页面未离开，用户正常重置查询条件
                  this.props._bankErrorDataDayHandle({
                      selectDate: moment().subtract(1, "days").format('YYYY-MM-DD'), //默认日期
                      province: { val: '', name: '' }, //选中的省
                      bank: "" });
              }
              //选中的银行
              this.selectClick(1, '', '');
          }
  
          //查询数据
      }, {
          key: 'submitClick',
          value: function submitClick() {
              if (this.props.bankErrorDataDay.status == 'loading') {
                  this.props._dialogHandle({
                      type: "tips",
                      time: 2000,
                      content: "正在查询中，请耐心等待！",
                      tipsType: "warning",
                      show: true
                  });
              } else {
                  var options = {
                      selectDate: this.props.bankErrorDataDay.selectDate, //默认日期
                      province: this.props.bankErrorDataDay.province, //选中的省
                      bank: this.props.bankErrorDataDay.bank };
                  //选中的银行
                  this.props._bankErrorDataDayHandle({
                      temp_options: options
                  });
                  this.getData(1, this.props.bankErrorDataDay.pageSize, options);
              }
          }
  
          //导出报表
      }, {
          key: 'exportExcel',
          value: function exportExcel() {
              var options = this.props.bankErrorDataDay.temp_options;
              this.props._bankErrorDataDayExport({
                  reportType: 0,
                  reportDate: options.selectDate,
                  provinceName: options.province.name == '全部' ? '' : options.province.name,
                  bankTypeCode: options.bank == '全部' ? '' : options.bank
              });
          }
      }, {
          key: 'componentDidMount',
          value: function componentDidMount() {
              this.resetData(true);
              var _that = this;
              $(function () {
                  $("#datepicker").datepicker({
                      maxDate: -1,
                      changeYear: true, // 年下拉菜单
                      changeMonth: true, // 月下拉菜单
                      dateFormat: "yy-mm-dd",
                      onSelect: function onSelect(date) {
                          _that.props._bankErrorDataDayHandle({
                              selectDate: date
                          });
                      }
                  });
              });
              this.props._queryProvince({ reportName: "bankbizException" });
              this.props._getBankTypeCodes({ reportName: "bankbizException" });
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'height100p' },
                  _react2['default'].createElement(_componentsPublicCenterTopNav2['default'], { title: '全辖银行业务待处理异常数据汇总日报', parentList: [{ name: "数据报表" }, { name: "银行业务日报" }] }),
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
                                  _react2['default'].createElement('input', { type: 'text', readOnly: true, id: 'datepicker', value: this.props.bankErrorDataDay.selectDate })
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
                                      value: this.props.bankErrorDataDay.province.val,
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
                                      value: this.props.bankErrorDataDay.bank,
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
                                      { onClick: this.submitClick.bind(this) },
                                      '查询'
                                  ),
                                  _react2['default'].createElement(
                                      'button',
                                      { onClick: this.resetData.bind(this) },
                                      '重置'
                                  )
                              ),
                              _react2['default'].createElement(_componentsReportFormExportButton2['default'], {
                                  data: this.props.login.Jurisdiction.ReportForm.btns.bankErrorDataDay,
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
                              _react2['default'].createElement(_componentsPublicReportFormTable2['default'], { colspan: 7,
                                  showTotal: this.props.bankErrorDataDay.showTotal,
                                  status: this.props.bankErrorDataDay.status,
                                  totalData: this.props.bankErrorDataDay.totalData,
                                  totalTitle: this.props.bankErrorDataDay.totalTitle,
                                  dataList: this.props.bankErrorDataDay.listData,
                                  titleList: this.props.bankErrorDataDay.titleList })
                          ),
                          _react2['default'].createElement(_componentsPublicPagination2['default'], {
                              curPage: this.props.bankErrorDataDay.curPage,
                              totalNumber: this.props.bankErrorDataDay.totalSize,
                              pageLimt: this.props.bankErrorDataDay.pageSize,
                              pageClick: this.pageNavClick.bind(this)
                          })
                      )
                  )
              );
          }
      }]);
  
      return bankErrorDataDayMain;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      return state;
  }
  
  function mapDispatchToProps(dispatch) {
      return {
          _bankErrorDataDayHandle: function _bankErrorDataDayHandle(options) {
              dispatch((0, _actionsReportFormBankErrorDataDay.bankErrorDataDayHandle)(options));
          },
          _bankErrorDataDayLoad: function _bankErrorDataDayLoad(options) {
              dispatch((0, _actionsReportFormBankErrorDataDay.bankErrorDataDayLoad)(options));
          },
          _queryProvince: function _queryProvince(options) {
              dispatch((0, _actionsReportFormPublicCommon.queryProvince)(options));
          },
          _getBankTypeCodes: function _getBankTypeCodes(options) {
              dispatch((0, _actionsReportFormPublicCommon.getBankTypeCodes)(options));
          },
          _reportFormCommonHandle: function _reportFormCommonHandle(options) {
              dispatch((0, _actionsReportFormPublicCommon.reportFormCommonHandle)(options));
          },
          _dialogHandle: function _dialogHandle(options) {
              dispatch((0, _actionsDialog.dialogHandle)(options));
          },
          _bankErrorDataDayExport: function _bankErrorDataDayExport(options) {
              dispatch((0, _actionsReportFormBankErrorDataDay.bankErrorDataDayExport)(options));
          }
      };
  }
  
  var bankErrorDataDay = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(bankErrorDataDayMain);
  
  exports['default'] = bankErrorDataDay;
  module.exports = exports['default'];
  /*form content begin*/ /*form content end*/ /*content begin*/ /*content end*/
  //# sourceMappingURL=/js/containers/admin/reportForm/bankErrorDataDay.js.map
  

});

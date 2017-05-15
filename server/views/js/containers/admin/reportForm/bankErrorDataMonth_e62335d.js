define('src/js/containers/admin/reportForm/bankErrorDataMonth', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 全辖银行业务待处理异常数据汇总报表-月
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
  
  var _actionsReportFormBankErrorDataMonth = require('../../actions/reportForm/bankErrorDataMonth');
  
  var _componentsPublicSelectBox = require('../../components/public/selectBox');
  
  var _componentsPublicSelectBox2 = _interopRequireDefault(_componentsPublicSelectBox);
  
  var _componentsPublicReportFormTable = require('../../components/public/reportFormTable');
  
  var _componentsPublicReportFormTable2 = _interopRequireDefault(_componentsPublicReportFormTable);
  
  var _componentsReportFormExportButton = require('../../components/reportForm/exportButton');
  
  var _componentsReportFormExportButton2 = _interopRequireDefault(_componentsReportFormExportButton);
  
  var bankErrorDataMonthMain = (function (_React$Component) {
      _inherits(bankErrorDataMonthMain, _React$Component);
  
      function bankErrorDataMonthMain() {
          _classCallCheck(this, bankErrorDataMonthMain);
  
          _get(Object.getPrototypeOf(bankErrorDataMonthMain.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(bankErrorDataMonthMain, [{
          key: 'selectClick',
          value: function selectClick(id, val, name) {
              switch (id) {
                  case 1:
                      this.props._bankErrorDataMonthHandle({
                          province: { val: val, name: name }
                      });
                      break;
                  case 4:
                      this.props._bankErrorDataMonthHandle({
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
              if (curPage == Math.ceil(this.props.bankErrorDataMonth.totalSize / pageSize)) {
                  //当前是最后一页
                  this.props._bankErrorDataMonthHandle({
                      showTotal: true
                  });
              } else {
                  this.props._bankErrorDataMonthHandle({
                      showTotal: false
                  });
              }
              this.getData(curPage, pageSize, options ? options : this.props.bankErrorDataMonth.temp_options);
          }
  
          //请求数据
      }, {
          key: 'getData',
          value: function getData(curPage, pageSize, options) {
              this.props._bankErrorDataMonthHandle({
                  curPage: curPage,
                  pageSize: pageSize
              });
  
              this.props._bankErrorDataMonthLoad({
                  curPage: curPage,
                  pageSize: pageSize,
                  reportDate: options.selectDate + '-01',
                  reportType: 1,
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
                      selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
                      province: { val: '', name: '' }, //选中的省
                      bank: "" //选中的银行
                  };
                  //初次进入页面，所有参数初始化
                  this.props._bankErrorDataMonthHandle({
                      selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
                      province: { val: '', name: '' }, //选中的省
                      bank: "", //选中的银行
                      temp_options: options
                  });
                  //进入页面发起默认请求加载数据
                  this.pageNavClick(1, 10, options);
              } else {
                  //页面未离开，用户正常重置查询条件
                  this.props._bankErrorDataMonthHandle({
                      selectDate: moment().subtract(1, "days").format('YYYY-MM'), //默认日期
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
              if (this.props.bankErrorDataMonth.status == 'loading') {
                  this.props._dialogHandle({
                      type: "tips",
                      time: 2000,
                      content: "正在查询中，请耐心等待！",
                      tipsType: "warning",
                      show: true
                  });
              } else {
                  var options = {
                      selectDate: this.props.bankErrorDataMonth.selectDate, //默认日期
                      province: this.props.bankErrorDataMonth.province, //选中的省
                      bank: this.props.bankErrorDataMonth.bank };
                  //选中的银行
                  this.props._bankErrorDataMonthHandle({
                      temp_options: options
                  });
                  this.getData(1, this.props.bankErrorDataMonth.pageSize, options);
              }
          }
  
          //导出报表
      }, {
          key: 'exportExcel',
          value: function exportExcel() {
              var options = this.props.bankErrorDataMonth.temp_options;
              this.props._bankErrorDataMonthExport({
                  reportType: 1,
                  reportDate: options.selectDate + '-01',
                  provinceName: options.province.name == '全部' ? '' : options.province.name,
                  bankTypeCode: options.bank == '全部' ? '' : options.bank
              });
          }
      }, {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
              $('body').removeClass('select-data-month');
          }
      }, {
          key: 'componentDidMount',
          value: function componentDidMount() {
              this.resetData(true);
  
              var _that = this;
              $(function () {
                  $('body').addClass('select-data-month');
                  $("#datepicker").datepicker({
                      maxDate: -1,
                      monthNamesShort: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], // 区域化月名为中文
                      prevText: '上月', // 前选按钮提示
                      nextText: '下月', // 后选按钮提示
                      changeYear: true, // 年下拉菜单
                      changeMonth: true, // 月下拉菜单
                      showButtonPanel: true, // 显示按钮面板
                      showMonthAfterYear: true, // 月份显示在年后面
                      currentText: "本月", // 当前日期按钮提示文字
                      closeText: "关闭", // 关闭按钮提示文字
                      dateFormat: "yy-mm", // 日期格式
                      onClose: function onClose(dateText, inst) {
                          // 关闭事件
                          var month = $("#ui-datepicker-div .ui-datepicker-month :selected").val();
                          var year = $("#ui-datepicker-div .ui-datepicker-year :selected").val();
                          _that.props._bankErrorDataMonthHandle({
                              selectDate: year + '-' + (Number(month) >= 9 ? Number(month) + 1 : '0' + (Number(month) + 1))
                          });
                          $(this).datepicker('setDate', new Date(year, month, 1));
                      }
                  });
              });
              this.props._queryProvince({ reportName: "bankbizException" });
              this.props._getBankTypeCodes({ reportName: "bankbizExceptionMonth" });
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'height100p' },
                  _react2['default'].createElement(_componentsPublicCenterTopNav2['default'], { title: '全辖银行业务待处理异常数据汇总月报', parentList: [{ name: "数据报表" }, { name: "银行业务月报" }] }),
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
                                  _react2['default'].createElement('input', { type: 'text', readOnly: true, id: 'datepicker', value: this.props.bankErrorDataMonth.selectDate })
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
                                      value: this.props.bankErrorDataMonth.province.val,
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
                                      value: this.props.bankErrorDataMonth.bank,
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
                                  data: this.props.login.Jurisdiction.ReportForm.btns.bankErrorDataMonth,
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
                                  showTotal: this.props.bankErrorDataMonth.showTotal,
                                  status: this.props.bankErrorDataMonth.status,
                                  totalData: this.props.bankErrorDataMonth.totalData,
                                  totalTitle: this.props.bankErrorDataMonth.totalTitle,
                                  dataList: this.props.bankErrorDataMonth.listData,
                                  titleList: this.props.bankErrorDataMonth.titleList })
                          ),
                          _react2['default'].createElement(_componentsPublicPagination2['default'], {
                              curPage: this.props.bankErrorDataMonth.curPage,
                              totalNumber: this.props.bankErrorDataMonth.totalSize,
                              pageLimt: this.props.bankErrorDataMonth.pageSize,
                              pageClick: this.pageNavClick.bind(this)
                          })
                      )
                  )
              );
          }
      }]);
  
      return bankErrorDataMonthMain;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      return state;
  }
  
  function mapDispatchToProps(dispatch) {
      return {
          _bankErrorDataMonthHandle: function _bankErrorDataMonthHandle(options) {
              dispatch((0, _actionsReportFormBankErrorDataMonth.bankErrorDataMonthHandle)(options));
          },
          _bankErrorDataMonthLoad: function _bankErrorDataMonthLoad(options) {
              dispatch((0, _actionsReportFormBankErrorDataMonth.bankErrorDataMonthLoad)(options));
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
          _bankErrorDataMonthExport: function _bankErrorDataMonthExport(options) {
              dispatch((0, _actionsReportFormBankErrorDataMonth.bankErrorDataMonthExport)(options));
          }
      };
  }
  
  var bankErrorDataMonth = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(bankErrorDataMonthMain);
  
  exports['default'] = bankErrorDataMonth;
  module.exports = exports['default'];
  /*form content begin*/ /*form content end*/ /*content begin*/ /*content end*/
  //# sourceMappingURL=/js/containers/admin/reportForm/bankErrorDataMonth.js.map
  

});

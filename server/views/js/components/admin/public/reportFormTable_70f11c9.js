define('src/js/components/admin/public/reportFormTable', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/21.
   *
   * 报表公共表格生成组件
   *
   * 传入表头，数据源DATA，
   *
   * 调用插件方式 < ReportFormTable width="" colspan=12 status="" dataList={...} titleList={...}  />
   *
   * width 可以设置表格宽度,默认100%，可以不传
   *
   * status 设置表格数据加载状态，默认为加载中,必传
   *
   * colspan 设置加载状态占满多少个表格行，否则默认1行，样式不美观，必传
   *
   * dataList 类型 array  例如[{name:'11'},{name:222}]
   *
   * titleList 类型 array  例如 [{title:"名称",type:"name",addClass:["red","blue"],htmlType:"button"},{title:"城市",type:'city'}]
   * 参数说明
   * {
   *  title:"名称",//标题名称，必传
   *  type:"name",//标题对应的KEY，必传
   *  addClass:["red","blue"],//TD的CLASS，为数组类型，默认可以不传
   *  htmlType:[{type:"a",text:"",addClass:[],callBack:null,param:key,bindType:key}],//标签类型，默认为文字，可不传
   *  type指定标签类型,a,button,span,
   *  text指定标签是否含有文字
   *  addClass指定标签是否含有CLASS
   *  callBack指定回调函数
   *  param指定回调函数里返回的参数
   *  bindType给标签 增加属性，这个属性的值，为该行的td的某个值，
   *  format:"" //格式化单位，针对数字千分位，金额千分位等  提供2种方法(number|money)，如需增加方法，可以自己添加
   *  parent:"站点类型"//是否有父标题，默认可以不传,
   *  colspan:1,//设置列,非必传
   *  rowspan:1,//设置行，非必传
   *  }
   *
   * 如果需要一个表头合并多个标题  [{name:"名称",parent:"站点类型"},{city:"城市",parent:"站点类型"}]
   * titleList 每个KEY 对应的值，会去对应dataList里每个KEY，这样才能一一对应生成标题对应所在单元格的值，请勿顺序传错
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
  
  var _plugTableLoading = require('src/js/components/admin/public/plugTableLoading');
  
  var _plugTableLoading2 = _interopRequireDefault(_plugTableLoading);
  
  var accounting = require('../../untils/accounting');
  
  var ReportFormTable = (function (_React$Component) {
      _inherits(ReportFormTable, _React$Component);
  
      function ReportFormTable() {
          _classCallCheck(this, ReportFormTable);
  
          _get(Object.getPrototypeOf(ReportFormTable.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(ReportFormTable, [{
          key: 'creatHead',
  
          //渲染表头
          value: function creatHead() {
              var title = this.props.titleList;
              var isHasParent = false;
              var html = [],
                  childrenHtml = [],
                  temp_title = '';
  
              for (var i = 0; i < title.length; i++) {
                  var _name = title[i].title;
                  //判断是否含有父标题
                  if (title[i].parent) {
                      isHasParent = true;
                      _name = title[i].parent;
                      //判断单元格父标提是否一样，一样不输出TH
                      if (temp_title == title[i].parent) {
                          continue;
                      } else {
                          temp_title = title[i].parent;
                      }
                  } else {
                      temp_title = '';
                  }
                  //如果传有colspan或rowspan 设置
                  if (title[i].colspan) {
                      html.push(_react2['default'].createElement(
                          'th',
                          { className: 'text-c', colSpan: title[i].colspan, key: i },
                          _name
                      ));
                  } else if (title[i].rowspan) {
                      html.push(_react2['default'].createElement(
                          'th',
                          { rowSpan: title[i].rowspan, key: i },
                          _name
                      ));
                  } else {
                      html.push(_react2['default'].createElement(
                          'th',
                          { key: i },
                          _name
                      ));
                  }
              }
  
              if (isHasParent) {
                  for (var i = 0; i < title.length; i++) {
                      //判断是否含有父标题
                      if (title[i].parent) {
                          childrenHtml.push(_react2['default'].createElement(
                              'th',
                              { key: i },
                              title[i].title
                          ));
                      }
                  }
              }
  
              if (childrenHtml.length > 0) {
                  return _react2['default'].createElement(
                      'thead',
                      null,
                      _react2['default'].createElement(
                          'tr',
                          null,
                          html
                      ),
                      _react2['default'].createElement(
                          'tr',
                          null,
                          childrenHtml
                      )
                  );
              } else {
                  return _react2['default'].createElement(
                      'thead',
                      null,
                      _react2['default'].createElement(
                          'tr',
                          null,
                          html
                      )
                  );
              }
          }
  
          //渲染内容
      }, {
          key: 'creatBody',
          value: function creatBody() {
              var data = this.props.dataList;
              var html = [];
              for (var i = 0; i < data.length; i++) {
                  html.push(_react2['default'].createElement(
                      'tr',
                      { key: i },
                      this.getData(data[i])
                  ));
              }
              //如果有合计数据 并且 showTotal为true显示
              if (this.props.totalData && this.props.showTotal) {
                  html.push(_react2['default'].createElement(
                      'tr',
                      { key: 'total' },
                      _react2['default'].createElement(
                          'td',
                          null,
                          '合计'
                      ),
                      this.getTotal()
                  ));
              }
              return html;
          }
  
          //生成合计 样式数据
      }, {
          key: 'getTotal',
          value: function getTotal() {
              var html = [];
              for (var i = 0; i < this.props.totalTitle.length; i++) {
                  html.push(_react2['default'].createElement(
                      'td',
                      { className: 'text-r', key: i },
                      this.props.totalTitle[i].type ? this.props.totalTitle[i].format ? this.format(this.props.totalTitle[i].format, this.props.totalData[this.props.totalTitle[i].type]) : this.props.totalData[this.props.totalTitle[i].type] : ''
                  ));
              }
              return html;
          }
  
          //根据TITLE里的KEY，生成对应的TD值
      }, {
          key: 'getData',
          value: function getData(data) {
              var title = this.props.titleList;
              var html = [];
              for (var i = 0; i < title.length; i++) {
                  if (title[i].htmlType) {
                      html.push(_react2['default'].createElement(
                          'td',
                          { key: i, className: title[i].addClass && this.getClass(title[i].addClass) },
                          this.getChildrenTd(title[i], data)
                      ));
                  } else {
                      html.push(_react2['default'].createElement(
                          'td',
                          { key: i, 'data-show': data[title[i].type], className: title[i].addClass && this.getClass(title[i].addClass) },
                          title[i].format ? this.format(title[i].format, data[title[i].type]) : data[title[i].type]
                      ));
                  }
              }
              return html;
          }
  
          //根据htmlType生成对应的标签按钮
      }, {
          key: 'getChildrenTd',
          value: function getChildrenTd(arr, data) {
              var html = [];
              for (var i = 0; i < arr.htmlType.length; i++) {
                  if (typeof arr.htmlType[i].callBack != 'function') {
                      arr.htmlType[i].callBack = function () {};
                  }
                  switch (arr.htmlType[i].type) {
                      case "a":
                          html.push(_react2['default'].createElement(
                              'a',
                              { key: i, 'data-show': arr.htmlType[i].bindType ? data[arr.htmlType[i].bindType] : '', onClick: arr.htmlType[i].callBack.bind(this, data[arr.htmlType[i].param]), className: arr.htmlType[i].addClass && this.getClass(arr.htmlType[i].addClass) },
                              arr.htmlType[i].text ? arr.htmlType[i].text : ''
                          ));
                          break;
                      case "button":
                          html.push(_react2['default'].createElement(
                              'button',
                              { key: i, 'data-show': arr.htmlType[i].bindType ? data[arr.htmlType[i].bindType] : '', onClick: arr.htmlType[i].callBack.bind(this, data[arr.htmlType[i].param]), className: arr.htmlType[i].addClass && this.getClass(arr.htmlType[i].addClass) },
                              arr.htmlType[i].text ? arr.htmlType[i].text : ''
                          ));
                          break;
                      case "span":
                          html.push(_react2['default'].createElement(
                              'span',
                              { key: i, 'data-show': arr.htmlType[i].bindType ? data[arr.htmlType[i].bindType] : '', onClick: arr.htmlType[i].callBack.bind(this, data[arr.htmlType[i].param]), className: arr.htmlType[i].addClass && this.getClass(arr.htmlType[i].addClass) },
                              arr.htmlType[i].text ? arr.htmlType[i].text : ''
                          ));
                          break;
                      default:
                          break;
                  }
              }
              return html;
          }
      }, {
          key: 'format',
          value: function format(key, value) {
              //key 为空或者Null
              if (value === '' || value == 'null' || value == 'undefined' || value == "-") {
                  return value;
              }
  
              switch (key) {
                  //整数千分位
                  case "number":
                      return accounting.formatNumber(value);
                  //金额格式化千分位
                  case "money":
                      return accounting.formatMoney(value, "");
                  //数据百分比
                  case "percent":
                      return value + '%';
                  default:
                      return value;
              }
          }
  
          //返回TD CLASS
      }, {
          key: 'getClass',
          value: function getClass(val) {
              if (val) {
                  return val.join(' ');
              }
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'table',
                  { style: { width: this.props.width ? this.props.width : "100%" } },
                  this.creatHead(),
                  _react2['default'].createElement(
                      'tbody',
                      null,
                      this.props.status != "success" ? _react2['default'].createElement(_plugTableLoading2['default'], { colSpanCount: this.props.colspan, status: this.props.status }) : this.creatBody()
                  )
              );
          }
      }]);
  
      return ReportFormTable;
  })(_react2['default'].Component);
  
  exports['default'] = ReportFormTable;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/public/reportFormTable.js.map
  

});

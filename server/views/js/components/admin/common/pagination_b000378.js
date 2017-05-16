define('src/js/components/admin/common/pagination', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/1.
   *
   * 公用分页
   * 传入参数 当前页curPage  总条数totalNumber 每页显示多少条pageLimt 分页点击回调 pageClick
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
  
  var Pagination = (function (_React$Component) {
      _inherits(Pagination, _React$Component);
  
      function Pagination() {
          _classCallCheck(this, Pagination);
  
          _get(Object.getPrototypeOf(Pagination.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(Pagination, [{
          key: 'clickHandle',
  
          //导航点击
          value: function clickHandle(f, n, p) {
              typeof f == "function" && f(n, p);
          }
      }, {
          key: 'pageRender',
          value: function pageRender(options) {
              var navHtml = [],
                  pageNav = 10;
              var totalPage = Math.ceil(options.totalNumber / options.pageLimt);
              //上一页，首页
              navHtml.push(this.firstPrev(options));
  
              if (totalPage <= pageNav) {
                  //总页数小于等于导航页码10
                  for (var i = 1; i <= totalPage; i++) {
                      navHtml.push(_react2['default'].createElement(
                          'span',
                          { key: i, className: options.curPage == i ? 'curr' : 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, i, options.pageLimt) },
                          i
                      ));
                  }
              } else {
                  //总页数大于导航页码
                  if (options.curPage > 6 && options.curPage - 5 > 0) {
                      for (var i = options.curPage - 5; i < options.curPage; i++) {
                          navHtml.push(_react2['default'].createElement(
                              'span',
                              { key: i, className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, i, options.pageLimt) },
                              i
                          ));
                      }
                  } else {
                      for (var i = 1; i < options.curPage; i++) {
                          navHtml.push(_react2['default'].createElement(
                              'span',
                              { key: i, className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, i, options.pageLimt) },
                              i
                          ));
                      }
                  }
  
                  navHtml.push(_react2['default'].createElement(
                      'span',
                      { key: options.curPage, className: 'curr' },
                      options.curPage
                  ));
  
                  if (options.curPage > 6 && options.curPage + 4 > totalPage) {
                      for (var i = options.curPage + 1; i <= totalPage; i++) {
                          navHtml.push(_react2['default'].createElement(
                              'span',
                              { key: i, className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, i, options.pageLimt) },
                              i
                          ));
                      }
                  } else {
                      for (var i = options.curPage + 1; i <= (options.curPage + 4 > 10 ? options.curPage + 4 : 10); i++) {
                          navHtml.push(_react2['default'].createElement(
                              'span',
                              { key: i, className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, i, options.pageLimt) },
                              i
                          ));
                      }
                  }
              }
  
              //下一页尾页
              navHtml.push(this.endNext(options));
  
              var returnHTml = [];
              //页码信息
              returnHTml.push(this.pageText(options));
              returnHTml.push(_react2['default'].createElement(
                  'div',
                  { className: 'page-show-left', key: 'div' },
                  navHtml
              ));
              return returnHTml;
          }
  
          //上一页首页样式
      }, {
          key: 'firstPrev',
          value: function firstPrev(options) {
              var html = [];
              if (options.curPage == 1) {
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'first', className: 'disable-hover' },
                      '首页'
                  ));
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'prev', className: 'disable-hover' },
                      '上一页'
                  ));
              } else {
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'first', className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, 1, options.pageLimt) },
                      '首页'
                  ));
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'prev', className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, options.curPage - 1, options.pageLimt) },
                      '上一页'
                  ));
              }
              return html;
          }
  
          //下一页尾页
      }, {
          key: 'endNext',
          value: function endNext(options) {
              var html = [];
              var totalPage = Math.ceil(options.totalNumber / options.pageLimt);
              if (options.curPage == totalPage || totalPage == 0) {
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'next', className: 'disable-hover' },
                      '下一页'
                  ));
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'end', className: 'disable-hover' },
                      '尾页'
                  ));
              } else {
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'next', className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, options.curPage + 1, options.pageLimt) },
                      '下一页'
                  ));
                  html.push(_react2['default'].createElement(
                      'span',
                      { key: 'end', className: 'nav', onClick: this.clickHandle.bind(this, options.clickCallBack, totalPage, options.pageLimt) },
                      '尾页'
                  ));
              }
              return html;
          }
  
          //页码信息
      }, {
          key: 'pageText',
          value: function pageText(options) {
              return _react2['default'].createElement(
                  'span',
                  { className: 'page-info', key: 'pageText' },
                  '每页',
                  this.pageSizeSelect(options.pageLimt),
                  '条　　当前',
                  options.curPage,
                  '/',
                  Math.ceil(options.totalNumber / options.pageLimt),
                  '页　　共',
                  options.totalNumber,
                  '条数据'
              );
          }
  
          //选择PAGESIZE
      }, {
          key: 'pageSizeSelect',
          value: function pageSizeSelect(n) {
              return _react2['default'].createElement(
                  'select',
                  { value: n, onChange: this.selectPage.bind(this) },
                  _react2['default'].createElement(
                      'option',
                      { key: 10, value: '10' },
                      '10'
                  ),
                  _react2['default'].createElement(
                      'option',
                      { key: 20, value: '20' },
                      '20'
                  ),
                  _react2['default'].createElement(
                      'option',
                      { key: 50, value: '50' },
                      '50'
                  ),
                  _react2['default'].createElement(
                      'option',
                      { key: 100, value: '100' },
                      '100'
                  )
              );
          }
  
          //选择页码事件
      }, {
          key: 'selectPage',
          value: function selectPage(e) {
              var n = e.target.value;
              this.clickHandle(this.props.pageClick, 1, n);
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'pagination-wrap clearfix' },
                  this.pageRender({
                      curPage: this.props.curPage ? this.props.curPage : 1,
                      pageLimt: this.props.pageLimt ? this.props.pageLimt : 10,
                      totalNumber: this.props.totalNumber ? this.props.totalNumber : 0,
                      clickCallBack: this.props.pageClick ? this.props.pageClick : null
                  })
              );
          }
      }]);
  
      return Pagination;
  })(_react2['default'].Component);
  
  exports['default'] = Pagination;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/common/pagination.js.map
  

});

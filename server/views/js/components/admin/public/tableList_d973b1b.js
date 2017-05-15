define('src/js/components/admin/public/tableList', function(require, exports, module) {

  /**
   * Created by ex-wangxin on 2017/4/5. 表格插件
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
  
  /*import {siteAppicationHandle} from '../../../actions/helpLoan/qualExam/siteAppication';*/
  
  var tableList = (function (_React$Component) {
      _inherits(tableList, _React$Component);
  
      function tableList() {
          _classCallCheck(this, tableList);
  
          _get(Object.getPrototypeOf(tableList.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(tableList, [{
          key: 'componentDidMount',
          value: function componentDidMount() {
              //console.log(this.props);//取参数
          }
      }, {
          key: 'tableThead',
          value: function tableThead(list, sortList) {
              var thead = [];
              list.map(function (item, i) {
                  thead.push(_react2['default'].createElement(
                      'th',
                      { key: i },
                      item[sortList[i]]
                  ));
              });
              return thead;
          }
      }, {
          key: 'tableTbody',
          value: function tableTbody(list, sortList) {
              var tbody = [];
              for (var i = 0; i < list.length; i++) {
                  var td = [];
                  for (var j = 0; j < sortList.length; j++) {
                      if (list[i][sortList[j]] instanceof Object) {
                          if (list[i][sortList[j]].type == 'jumpUrl') {
                              //点击跳转类型
                              td.push(_react2['default'].createElement(
                                  'td',
                                  { key: j + i },
                                  ' ',
                                  list[i][sortList[j]]
                              ));
                          } else if (list[i][sortList[j]].type == 'colors') {
                              //颜色变换类型
                              td.push(_react2['default'].createElement(
                                  'td',
                                  { key: j + i, className: list[i][sortList[j]].colors },
                                  list[i][sortList[j]].text
                              ));
                          } else if (list[i][sortList[j]].type == 'btnDeal') {
                              //添加按钮类型
                              td.push(_react2['default'].createElement(
                                  'td',
                                  { key: j + i },
                                  _react2['default'].createElement(
                                      'a',
                                      { href: 'javascript:;', className: list[i][sortList[j]].className,
                                          onClick: list[i][sortList[j]].callBack },
                                      list[i][sortList[j]].text
                                  )
                              ));
                          } else {}
                          /*if (sortList[j] == 'deal') {//加 处理按钮
                           td.push(
                           <td key={j + i}>
                           <a href="javascript:;" className={list[i][sortList[j]].className}
                           onClick={list[i][sortList[j]].callBack}>
                           {list[i][sortList[j]].text}
                           </a>
                           </td>
                           );
                           } else if(sortList[j] == 'tableJumpName'){//加 点击跳转链接
                           td.push(
                           <td key={j + i}> {list[i][sortList[j]]}</td>
                           );
                           }else if(sortList[j] == 'tableJumpId'){//加 点击跳转链接
                           td.push(
                           <td key={j + i}> {list[i][sortList[j]]}</td>
                           );
                           }else {//相应字段颜色变化
                           td.push(
                           <td key={j + i} className={list[i][sortList[j]].colors}>{list[i][sortList[j]].text}</td>
                           );
                           }*/
                      } else {
                              td.push(_react2['default'].createElement(
                                  'td',
                                  { key: j + i },
                                  list[i][sortList[j]]
                              ));
                          }
                  }
                  tbody.push(_react2['default'].createElement(
                      'tr',
                      { key: i },
                      td
                  ));
              }
              return tbody;
          }
      }, {
          key: 'thead',
          value: function thead(theadList) {
              var sortList = [];
              for (var i = 0; i < theadList.length; i++) {
                  for (var keys in theadList[i]) {
                      sortList.push(keys);
                  }
              }
              return sortList;
          }
      }, {
          key: 'render',
          value: function render() {
              var sortList = this.thead(this.props.dataD.theadList);
              var thead = this.tableThead(this.props.dataD.theadList, sortList);
              var tbody = this.tableTbody(this.props.dataD.tbodyList, sortList);
              return _react2['default'].createElement(
                  'table',
                  { className: 'table-list' },
                  _react2['default'].createElement(
                      'thead',
                      null,
                      _react2['default'].createElement(
                          'tr',
                          null,
                          thead
                      )
                  ),
                  _react2['default'].createElement(
                      'tbody',
                      null,
                      tbody
                  )
              );
          }
      }]);
  
      return tableList;
  })(_react2['default'].Component);
  
  exports['default'] = tableList;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/components/admin/public/tableList.js.map
  

});

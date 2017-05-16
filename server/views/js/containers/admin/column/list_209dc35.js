define('src/js/containers/admin/column/list', function(require, exports, module) {

  /**
   * Created by apple on 17/5/16.
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var _reactRedux = require('node_modules/react-redux/lib/index');
  
  var _componentsAdminCommonCenterTopNav = require('src/js/components/admin/common/centerTopNav');
  
  var _componentsAdminCommonCenterTopNav2 = _interopRequireDefault(_componentsAdminCommonCenterTopNav);
  
  var _componentsAdminCommonPagination = require('src/js/components/admin/common/pagination');
  
  var _componentsAdminCommonPagination2 = _interopRequireDefault(_componentsAdminCommonPagination);
  
  var _actionsAdminDialog = require('src/js/actions/admin/dialog');
  
  var _componentsAdminCommonSelectBox = require('src/js/components/admin/common/selectBox');
  
  var _componentsAdminCommonSelectBox2 = _interopRequireDefault(_componentsAdminCommonSelectBox);
  
  var _componentsAdminCommonTable = require('src/js/components/admin/common/table');
  
  var _componentsAdminCommonTable2 = _interopRequireDefault(_componentsAdminCommonTable);
  
  var _actionsAdminColumnList = require('src/js/actions/admin/column/list');
  
  var actions = _interopRequireWildcard(_actionsAdminColumnList);
  
  var List = (function (_React$Component) {
      _inherits(List, _React$Component);
  
      function List() {
          _classCallCheck(this, List);
  
          _get(Object.getPrototypeOf(List.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(List, [{
          key: 'pageNavClick',
          value: function pageNavClick() {}
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'height100p' },
                  _react2['default'].createElement(_componentsAdminCommonCenterTopNav2['default'], { title: '列表', parentList: [{ name: "栏目管理" }] }),
                  _react2['default'].createElement(
                      'div',
                      { className: 'height100pY plr26' },
                      _react2['default'].createElement(
                          'div',
                          { className: 'form-content-wrap' },
                          _react2['default'].createElement(
                              'div',
                              { className: 'form-table-wrap' },
                              _react2['default'].createElement(_componentsAdminCommonTable2['default'], {
                                  colspan: 6,
                                  status: this.props.columnList.status,
                                  dataList: this.props.columnList.listData,
                                  titleList: this.props.columnList.titleList
                              })
                          ),
                          _react2['default'].createElement(_componentsAdminCommonPagination2['default'], {
                              curPage: this.props.columnList.curPage,
                              totalNumber: this.props.columnList.totalSize,
                              pageLimt: this.props.columnList.pageSize,
                              pageClick: this.pageNavClick.bind(this)
                          })
                      )
                  )
              );
          }
      }]);
  
      return List;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      return state;
  }
  
  function mapDispatchToProps(dispatch) {
      return {};
  }
  
  var columnList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(List);
  
  exports['default'] = columnList;
  module.exports = exports['default'];
  /*content begin*/ /*content end*/
  //# sourceMappingURL=/js/containers/admin/column/list.js.map
  

});

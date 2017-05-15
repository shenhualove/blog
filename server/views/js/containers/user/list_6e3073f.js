define('src/js/containers/user/list', function(require, exports, module) {

  /**
   * Created by shenhua
   *
   * 列表页
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
  
  var _reactRouter = require('node_modules/react-router/lib/index');
  
  var _reactRedux = require('node_modules/react-redux/lib/index');
  
  var _actionsUser = require('src/js/actions/user/index');
  
  var _actionsUserList = require('src/js/actions/user/list');
  
  var actions = _interopRequireWildcard(_actionsUserList);
  
  var ListMain = (function (_React$Component) {
      _inherits(ListMain, _React$Component);
  
      function ListMain() {
          _classCallCheck(this, ListMain);
  
          _get(Object.getPrototypeOf(ListMain.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(ListMain, [{
          key: 'getData',
          value: function getData() {
              //获取数据
              if (this.props.list.listData.length > 0) {
                  return this.props.list.listData.map(function (val, key) {
                      return _react2['default'].createElement(
                          'article',
                          { key: key },
                          _react2['default'].createElement(
                              'div',
                              { className: 'focus' },
                              _react2['default'].createElement(
                                  _reactRouter.Link,
                                  { to: "/page/" + val.id, state: val.title, className: 'thumbnail' },
                                  _react2['default'].createElement('img', { src: "/images/upload/admin/" + val.imgUrl, alt: val.title, 'data-bd-imgshare-binded': '1' })
                              )
                          ),
                          _react2['default'].createElement(
                              'header',
                              null,
                              _react2['default'].createElement(
                                  'h3',
                                  null,
                                  _react2['default'].createElement(
                                      _reactRouter.Link,
                                      { to: "/page/" + val.id, state: val.title },
                                      val.title
                                  )
                              )
                          ),
                          _react2['default'].createElement(
                              'p',
                              { className: 'note' },
                              val.caption
                          ),
                          _react2['default'].createElement(
                              'p',
                              null,
                              _react2['default'].createElement(
                                  'span',
                                  { className: 'muted' },
                                  _react2['default'].createElement('i', { className: 'fa fa-user' }),
                                  ' ',
                                  val.author
                              ),
                              _react2['default'].createElement(
                                  'span',
                                  { className: 'muted' },
                                  _react2['default'].createElement('i', { className: 'fa fa-clock-o' }),
                                  ' ',
                                  val.time
                              ),
                              _react2['default'].createElement(
                                  'span',
                                  { className: 'muted' },
                                  _react2['default'].createElement('i', { className: 'fa fa-eye' }),
                                  ' ',
                                  val.totalViews,
                                  '浏览'
                              )
                          )
                      );
                  });
              } else {
                  return _react2['default'].createElement(
                      'article',
                      null,
                      '暂无数据'
                  );
              }
          }
      }, {
          key: 'componentDidMount',
          value: function componentDidMount() {
              this.props._indexHandle(this.props.params.id);
              this.props._getList(this.props.params.id, this.props.list.page, this.props.list.pageSize);
          }
          //组件加载后
  
      }, {
          key: 'componentDidUpdate',
          value: function componentDidUpdate(prevProps) {
              var oldId = prevProps.params.id;
              var newId = this.props.params.id;
              if (newId !== oldId) {
                  this.props._indexHandle(newId);
                  this.props._getList(newId, this.props.list.page, this.props.list.pageSize);
              }
          }
          //组件更新
  
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'content-left' },
                  _react2['default'].createElement(
                      'div',
                      { className: 'new-push column-list' },
                      _react2['default'].createElement(
                          'h2',
                          null,
                          this.props.list.title
                      ),
                      this.getData()
                  )
              );
          }
      }]);
  
      return ListMain;
  })(_react2['default'].Component);
  
  var mapStateToProps = function mapStateToProps(state) {
      return state;
  };
  
  var mapDispatchToProps = function mapDispatchToProps(dispatch) {
      return {
          _getList: function _getList(id, page, pageSize) {
              dispatch(actions.getList(id, page, pageSize));
          },
          _indexHandle: function _indexHandle(id) {
              dispatch((0, _actionsUser.indexHandle)("GET_NAV_ID", id));
          }
      };
  };
  
  var List = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ListMain);
  
  exports['default'] = List;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/containers/user/list.js.map
  

});

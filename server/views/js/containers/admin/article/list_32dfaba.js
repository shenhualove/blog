define('src/js/containers/admin/article/list', function(require, exports, module) {

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
  
  var _actionsAdminArticleList = require('src/js/actions/admin/article/list');
  
  var actions = _interopRequireWildcard(_actionsAdminArticleList);
  
  var List = (function (_React$Component) {
      _inherits(List, _React$Component);
  
      function List() {
          _classCallCheck(this, List);
  
          _get(Object.getPrototypeOf(List.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(List, [{
          key: 'inputTitle',
  
          //输入标题事件
          value: function inputTitle(e) {
              this.props._handle({
                  title: e.target.value
              });
          }
  
          //栏目选择事件
      }, {
          key: 'selectClick',
          value: function selectClick(val, name) {
              this.props._handle({
                  columnId: val
              });
          }
  
          //分页点击事件
      }, {
          key: 'pageNavClick',
          value: function pageNavClick(curPage, pageSize, options) {
              this.getData(curPage, pageSize, options ? options : this.props.articleList.temp_options);
          }
  
          //栏目数据加工
      }, {
          key: 'showColumn',
          value: function showColumn() {
              var arr = [{ value: "", name: "全部" }];
              var temp_arr = [];
              this.props.articleList.columnList.map(function (val, key) {
                  temp_arr.push({ value: val.id, name: val.title });
              });
              return arr.concat(temp_arr);
          }
  
          //请求数据
      }, {
          key: 'getData',
          value: function getData(curPage, pageSize, options) {
              this.props._getArticleList({
                  curPage: curPage,
                  pageSize: pageSize,
                  title: options.title,
                  columnId: options.columnId
              });
          }
  
          //重置数据
      }, {
          key: 'resetData',
          value: function resetData(bool) {
              if (bool === true) {
                  var options = {
                      title: "",
                      columnId: ''
                  };
                  //初次进入页面，所有参数初始化
                  this.props._handle({
                      title: "",
                      columnId: '',
                      temp_options: options
                  });
                  //进入页面发起默认请求加载数据
                  this.pageNavClick(this.props.articleList.curPage, this.props.articleList.pageSize, options);
              } else {
                  //页面未离开，用户正常重置查询条件
                  this.props._handle({
                      title: "",
                      columnId: ''
                  });
              }
          }
  
          //查询数据
      }, {
          key: 'submitClick',
          value: function submitClick() {
              if (this.props.articleList.status == 'loading') {
                  this.props._dialogHandle({
                      type: "tips",
                      time: 2000,
                      content: "正在查询中，请耐心等待！",
                      tipsType: "warning",
                      show: true
                  });
              } else {
                  var options = {
                      title: this.props.articleList.title,
                      columnId: this.props.articleList.columnId
                  };
                  this.props._handle({
                      temp_options: options
                  });
                  this.getData(1, this.props.articleList.pageSize, options);
              }
          }
  
          //修改文章
      }, {
          key: 'changeBtn',
          value: function changeBtn(id) {}
  
          //删除文章
      }, {
          key: 'deleteBtn',
          value: function deleteBtn(id) {
              alert(id);
          }
      }, {
          key: 'componentDidMount',
          value: function componentDidMount() {
              //绑定修改按钮事件
              this.props.articleList.titleList[6].htmlType[0].callBack = this.changeBtn.bind(this);
              //绑定删除按钮事件
              this.props.articleList.titleList[6].htmlType[1].callBack = this.deleteBtn.bind(this);
              this.resetData(true);
              this.props._getColumnAll();
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'height100p' },
                  _react2['default'].createElement(_componentsAdminCommonCenterTopNav2['default'], { title: '文章列表', parentList: [{ name: "文章管理" }] }),
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
                                      '文章标题:'
                                  ),
                                  _react2['default'].createElement('input', { type: 'text', onChange: this.inputTitle.bind(this), placeholder: '请输入文章标题', value: this.props.articleList.title })
                              ),
                              _react2['default'].createElement(
                                  'li',
                                  null,
                                  _react2['default'].createElement(
                                      'span',
                                      null,
                                      '所属栏目:'
                                  ),
                                  _react2['default'].createElement(_componentsAdminCommonSelectBox2['default'], {
                                      callBack: this.selectClick.bind(this),
                                      value: this.props.articleList.columnId,
                                      list: this.showColumn()
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
                              )
                          )
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'form-content-wrap' },
                          _react2['default'].createElement(
                              'div',
                              { className: 'form-table-wrap' },
                              _react2['default'].createElement(_componentsAdminCommonTable2['default'], {
                                  colspan: 7,
                                  status: this.props.articleList.status,
                                  dataList: this.props.articleList.listData,
                                  titleList: this.props.articleList.titleList
                              })
                          ),
                          _react2['default'].createElement(_componentsAdminCommonPagination2['default'], {
                              curPage: this.props.articleList.curPage,
                              totalNumber: this.props.articleList.totalSize,
                              pageLimt: this.props.articleList.pageSize,
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
      return {
          _handle: function _handle(options) {
              dispatch(actions.handle(options));
          },
          _getColumnAll: function _getColumnAll(options) {
              dispatch(actions.getColumnAll(options));
          },
          _getArticleList: function _getArticleList(options) {
              dispatch(actions.getArticleList(options));
          }
      };
  }
  
  var articleList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(List);
  
  exports['default'] = articleList;
  module.exports = exports['default'];
  /*form content begin*/ /*form content end*/ /*content begin*/ /*content end*/
  //# sourceMappingURL=/js/containers/admin/article/list.js.map
  

});

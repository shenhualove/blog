define('src/js/containers/admin/public/dialog', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/12.
   *
   * 弹窗组件
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
  
  var _actionsDialog = require('../../actions/dialog');
  
  var timeHandle = undefined;
  
  var ReactDialog = (function (_React$Component) {
      _inherits(ReactDialog, _React$Component);
  
      function ReactDialog() {
          _classCallCheck(this, ReactDialog);
  
          _get(Object.getPrototypeOf(ReactDialog.prototype), 'constructor', this).apply(this, arguments);
      }
  
      _createClass(ReactDialog, [{
          key: 'childrenSuccessAction',
  
          //子弹窗确定
          value: function childrenSuccessAction() {
              if (this.props.dialog.childrenSuccess()) {
                  this.childrenHide();
              }
          }
  
          //子弹窗取消
      }, {
          key: 'childrenFailAction',
          value: function childrenFailAction() {
              this.props.dialog.childrenFail();
              this.childrenHide();
          }
  
          //子弹窗隐藏
      }, {
          key: 'childrenHide',
          value: function childrenHide() {
              this.props._dialogHandle({
                  children: false, //是否显示子弹窗，通常用于弹窗里的表单交互，在弹窗提示信息错误之类,
                  childrenType: 'warning', //子弹窗的类型,默认为操作警告,仅限于children=true的时候才有效果 success操作成功 fail 操作失败  confirm操作确认 warning 操作警告
                  childrenContent: "", //子弹窗的内容
                  childrenFail: function childrenFail() {}, //子弹窗的关闭回调函数
                  childrenSuccess: function childrenSuccess() {
                      return true;
                  } });
          }
  
          //点击确定
      }, {
          key: 'successAction',
          //子弹窗的成功回调函数
          value: function successAction() {
              clearTimeout(timeHandle);
              //回调返回TRUE，则进行关闭弹窗
              if (this.props.dialog.success()) {
                  this.hideAction();
              }
          }
  
          //点击取消
      }, {
          key: 'failAction',
          value: function failAction() {
              clearTimeout(timeHandle);
              this.props.dialog.fail();
              this.hideAction();
          }
  
          //弹窗消失
      }, {
          key: 'hideAction',
          value: function hideAction() {
              this.props.dialog.hide();
              //弹窗消失并且初始化
              this.props._dialogHandle({
                  show: false, //默认是关闭弹窗 true打开弹窗
                  children: false, //是否显示子弹窗，通常用于弹窗里的表单交互，在弹窗提示信息错误之类,
                  childrenType: 'warning', //子弹窗的类型,默认为操作警告,仅限于children=true的时候才有效果 success操作成功 fail 操作失败  confirm操作确认 warning 操作警告
                  childrenContent: "", //子弹窗的内容
                  childrenFail: function childrenFail() {}, //子弹窗的关闭回调函数
                  childrenSuccess: function childrenSuccess() {
                      return true;
                  }, //子弹窗的成功回调函数
                  title: '', //弹窗标题
                  type: 'confirm', //弹窗类型  confirm / loading / tips / box
                  tipsType: 'success', //仅限于type=tips有效果  success操作成功 fail 操作失败  confirm操作确认 warning 操作警告
                  content: '', //弹窗内容
                  time: 0, //弹窗消失时间
                  width: "", //弹窗宽度
                  height: "", //弹窗高度
                  bgRemove: false, //遮罩层点击是否移除弹窗
                  success: function success() {
                      return true;
                  }, //弹窗确定回调函数
                  fail: function fail() {}, //弹窗取消回调函数
                  hide: function hide() {}, //遮罩层消失回调函数
                  successBtn: true, //是否显示确定按钮  默认为显示
                  failBtn: true, //是否显示取消按钮  默认为显示
                  successText: "提交", //确定按钮文字
                  failText: "关闭" //取消按钮文字
              });
          }
  
          //children
      }, {
          key: 'viewChildren',
          value: function viewChildren() {
              var content = '';
              switch (this.props.dialog.childrenType) {
                  case 'success':
                      content = _react2['default'].createElement(
                          'p',
                          { key: this.props.dialog.childrenType, className: 'msg-type success' },
                          this.props.dialog.childrenContent ? this.props.dialog.childrenContent : '操作成功!'
                      );
                      break;
                  case 'fail':
                      content = _react2['default'].createElement(
                          'p',
                          { key: this.props.dialog.childrenType, className: 'msg-type fail' },
                          this.props.dialog.childrenContent ? this.props.dialog.childrenContent : '操作失败!'
                      );
                      break;
                  case 'confirm':
                      content = _react2['default'].createElement(
                          'p',
                          { key: this.props.dialog.childrenType, className: 'msg-type doubt' },
                          this.props.dialog.childrenContent ? this.props.dialog.childrenContent : '确定要提交申请吗!'
                      );
                      break;
                  case 'warning':
                      content = _react2['default'].createElement(
                          'p',
                          { key: this.props.dialog.childrenType, className: 'msg-type warning' },
                          this.props.dialog.childrenContent ? this.props.dialog.childrenContent : '请选择数据进行操作!'
                      );
                      break;
                  default:
                      break;
              }
              return _react2['default'].createElement(
                  'div',
                  { className: 'dialog-wrap dialog-box-wrap type-mesg', style: { display: "block" } },
                  _react2['default'].createElement(
                      'div',
                      { className: 'dialog-header' },
                      _react2['default'].createElement(
                          'div',
                          { className: 'close' },
                          _react2['default'].createElement('i', { className: 'yypt-icon-close', onClick: this.childrenFailAction.bind(this) })
                      )
                  ),
                  _react2['default'].createElement(
                      'div',
                      { className: 'dialog-body' },
                      content
                  ),
                  _react2['default'].createElement(
                      'div',
                      { className: 'dialog-foot mb30' },
                      _react2['default'].createElement(
                          'button',
                          { onClick: this.childrenSuccessAction.bind(this), className: 'btn-submit' },
                          '确定'
                      )
                  )
              );
          }
  
          //confirm
      }, {
          key: 'viewConfirm',
          value: function viewConfirm() {
              return _react2['default'].createElement(
                  'div',
                  { className: 'dialog-wrap type-cont', style: { width: this.props.dialog.width ? this.props.dialog.width : '700px', height: this.props.dialog.height ? this.props.dialog.height : '450px' } },
                  _react2['default'].createElement(
                      'div',
                      { className: 'dialog-header dialog-title' },
                      _react2['default'].createElement(
                          'p',
                          null,
                          this.props.dialog.title
                      ),
                      _react2['default'].createElement(
                          'div',
                          { className: 'close colse-fff' },
                          _react2['default'].createElement('i', { onClick: this.failAction.bind(this), className: 'yypt-icon-close' })
                      )
                  ),
                  _react2['default'].createElement(
                      'div',
                      { className: 'dialog-body' },
                      this.props.dialog.content
                  ),
                  _react2['default'].createElement(
                      'div',
                      { className: 'dialog-foot' },
                      this.props.dialog.failBtn ? _react2['default'].createElement(
                          'button',
                          { className: 'btn-close', onClick: this.failAction.bind(this) },
                          this.props.dialog.failText
                      ) : '',
                      this.props.dialog.successBtn ? _react2['default'].createElement(
                          'button',
                          { className: 'btn-submit', onClick: this.successAction.bind(this) },
                          this.props.dialog.successText
                      ) : ''
                  ),
                  this.props.dialog.children ? this.viewChildren() : ''
              );
          }
  
          //tips
      }, {
          key: 'viewTips',
          value: function viewTips() {
              var content = '';
              switch (this.props.dialog.tipsType) {
                  case 'success':
                      content = _react2['default'].createElement(
                          'p',
                          { key: this.props.dialog.tipsType, className: 'msg-type success' },
                          this.props.dialog.content ? this.props.dialog.content : '操作成功!'
                      );
                      break;
                  case 'fail':
                      content = _react2['default'].createElement(
                          'p',
                          { key: this.props.dialog.tipsType, className: 'msg-type fail' },
                          this.props.dialog.content ? this.props.dialog.content : '操作失败!'
                      );
                      break;
                  case 'confirm':
                      content = _react2['default'].createElement(
                          'p',
                          { key: this.props.dialog.tipsType, className: 'msg-type doubt' },
                          this.props.dialog.content ? this.props.dialog.content : '确定要提交申请吗!'
                      );
                      break;
                  case 'warning':
                      content = _react2['default'].createElement(
                          'p',
                          { key: this.props.dialog.tipsType, className: 'msg-type warning' },
                          this.props.dialog.content ? this.props.dialog.content : '请选择数据进行操作!'
                      );
                      break;
                  default:
                      break;
              }
  
              return _react2['default'].createElement(
                  'div',
                  { className: 'dialog-wrap type-mesg', style: { height: '260px', width: "300px" } },
                  _react2['default'].createElement(
                      'div',
                      { className: 'dialog-header' },
                      _react2['default'].createElement(
                          'div',
                          { className: 'close' },
                          _react2['default'].createElement('i', { onClick: this.failAction.bind(this), className: 'yypt-icon-close' })
                      )
                  ),
                  _react2['default'].createElement(
                      'div',
                      { className: 'dialog-body' },
                      content
                  ),
                  _react2['default'].createElement(
                      'div',
                      { className: 'dialog-foot' },
                      _react2['default'].createElement(
                          'button',
                          { className: 'btn-submit', onClick: this.successAction.bind(this) },
                          '确定'
                      )
                  )
              );
          }
  
          //根据弹窗类型渲染不同的VIEW
      }, {
          key: 'renderType',
          value: function renderType(type) {
              var _this = this;
  
              if (this.props.dialog.time > 0) {
                  timeHandle = setTimeout(function () {
                      _this.failAction();
                  }, this.props.dialog.time);
              }
              switch (type) {
                  case 'confirm':
                      return this.viewConfirm();
                  case 'loading':
                      return _react2['default'].createElement(
                          'div',
                          { className: 'dialog-loading' },
                          _react2['default'].createElement(
                              'div',
                              { className: 'dialog-loading-icon' },
                              _react2['default'].createElement(
                                  'div',
                                  { className: 'dialog-loading-content' },
                                  this.props.dialog.content
                              )
                          )
                      );
                  case 'tips':
                      return this.viewTips();
                  default:
                      return '';
              }
          }
      }, {
          key: 'render',
          value: function render() {
              return _react2['default'].createElement(
                  'div',
                  { id: 'react-dialog', className: 'new-dialog-bg', style: { display: this.props.dialog.show ? 'block' : 'none' } },
                  this.renderType(this.props.dialog.type)
              );
          }
      }]);
  
      return ReactDialog;
  })(_react2['default'].Component);
  
  function mapStateToProps(state) {
      console.log(state);
      return state;
  }
  
  function mapDispatchToProps(dispatch) {
      return {
          _dialogHandle: function _dialogHandle(options) {
              dispatch((0, _actionsDialog.dialogHandle)(options));
          }
      };
  }
  
  var Dialog = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ReactDialog);
  
  exports['default'] = Dialog;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/containers/admin/public/dialog.js.map
  

});

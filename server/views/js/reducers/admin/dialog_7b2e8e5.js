define('src/js/reducers/admin/dialog', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/12.
   *
   * 弹窗组件
   */
  'use strict';
  
  Object.defineProperty(exports, '__esModule', {
      value: true
  });
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
  
  var _objectAssign = require('node_modules/object-assign/index');
  
  var _objectAssign2 = _interopRequireDefault(_objectAssign);
  
  //初始化state
  var initalize = {
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
      failText: "关闭" };
  
  //取消按钮文字
  function dialog(state, action) {
      if (state === undefined) state = initalize;
  
      switch (action.type) {
          case "DIALOG_HANDLE":
              return (0, _objectAssign2['default'])({}, state, action.options);
          default:
              return state;
      }
  }
  
  exports['default'] = dialog;
  module.exports = exports['default'];
  //# sourceMappingURL=/js/reducers/admin/dialog.js.map
  

});

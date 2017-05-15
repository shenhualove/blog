define('src/js/components/admin/public/album', function(require, exports, module) {

  /**
   * Created by gaolei on 2017/4/1.
   *
   * 公用分页
   * 传入参数 当前页curPage  总条数totalNumber 每页显示多少条pageLimt 分页点击回调 pageClick
   */
  
  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
  
  var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
  
  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
  
  var _react = require('node_modules/react/react');
  
  var _react2 = _interopRequireDefault(_react);
  
  var Album = (function (_React$Component) {
      _inherits(Album, _React$Component);
  
      function Album() {
          _classCallCheck(this, Album);
  
          _get(Object.getPrototypeOf(Album.prototype), "constructor", this).call(this);
          this.state = {
              imageList: [], //图片数据
              typeIndex: "", //图片名称
              currentIndex: 0, //当前图片下标
              imageUrl: "", //当前图片路径
              showImageContent: false,
              left: false, //左边显示隐藏控制
              right: true };
      }
  
      _createClass(Album, [{
          key: "componentDidMount",
          //右边显示隐藏控制
          value: function componentDidMount() {
  
              if (this.props.typeIndex === "") {
                  this.props.callback();
                  document.getElementById("albumPop").style.display = "none";
                  return false;
              }
  
              var currentIndex = 0;
  
              var imageList = this.props.imageList ? this.props.imageList : [];
              if (imageList.length == 0) {
                  this.props.callback();
                  alert("无影像文件");
                  return false;
              }
  
              this.init({
                  imageList: imageList,
                  currentIndex: currentIndex
              });
          }
      }, {
          key: "getImageIndex",
          value: function getImageIndex(imageList, typeIndex) {
              var currentIndex = "";
              for (var a = 0; a < imageList.length; a++) {
                  if (imageList[a].archName == typeIndex) {
                      currentIndex = a;
                  }
              }
              return currentIndex;
          }
      }, {
          key: "componentWillReceiveProps",
          value: function componentWillReceiveProps(props) {
              var _this = this;
  
              this.setState({
                  imageList: props.imageList ? this.props.imageList : [],
                  currentIndex: props.typeIndex
              }, function () {
  
                  if (props.typeIndex === "") {
  
                      _this.props.callback();
                      document.getElementById("albumPop").style.display = "none";
                      return false;
                  }
                  //let typeIndex=props.typeIndex;
                  var currentIndex = 0;
                  var imageList = props.imageList ? props.imageList : [];
                  if (imageList.length == 0) {
                      _this.props.callback();
                      alert("无影像文件");
                      return false;
                  }
  
                  _this.init({
                      imageList: imageList,
                      currentIndex: currentIndex
                  });
              });
          }
          //父组件PROPS改变
  
      }, {
          key: "init",
          value: function init(options) {
              var _this2 = this;
  
              if (options.imageList[options.currentIndex] == undefined) {
                  this.props.callback();
                  document.getElementById("albumPop").style.display = "none";
                  return false;
              }
  
              this.setState({
                  imageList: options.imageList,
                  currentIndex: options.currentIndex,
                  imageUrl: options.imageList[options.currentIndex].archPath
              }, function () {
                  document.getElementById("albumPop").style.display = "block";
                  _this2.calculatedPosition();
              });
          }
  
          //计算位置
      }, {
          key: "calculatedPosition",
          value: function calculatedPosition() {
              var imgObj = document.getElementById("curImg");
              var imgCount = document.getElementById("imgContent");
              var realWidth = undefined; //真实的宽度
              var realHeight = undefined; //真实的高度
  
              var Img = new Image();
              Img.src = this.state.imageUrl;
              Img.onload = function (e) {
                  /*realWidth = e.path[0].width;
                  realHeight = e.path[0].height;*/
                  realWidth = Img.width;
                  realHeight = Img.height;
                  var _imgWidth = realWidth * 1;
                  var _imgHeight = realHeight * 1;
  
                  var _winWidth = 540 * 1;
                  var _winHeight = 700 * 1;
                  var imgO = document.getElementById("curImg");
                  if (_imgWidth > 0 && _imgHeight > 0) {
  
                      if (_imgWidth / _imgHeight > _winWidth / _winHeight) {
                          if (_imgWidth < _winWidth) {
                              if (_imgWidth == _imgHeight) {
                                  imgO.style.width = _imgWidth + "px";
                                  imgO.style.height = _imgHeight + "px";
                                  imgO.style.marginTop = (imgCount.clientHeight * 1 - _imgHeight * 1) / 2 + "px";
                              } else {
                                  imgO.style.width = _imgWidth + "px";
                                  imgO.style.height = _imgHeight + "px";
                                  imgO.style.marginTop = (imgCount.clientHeight * 1 - _imgHeight * _winWidth / _imgWidth) / 2 + "px";
                              }
                          } else {
                              imgO.style.width = _winWidth + "px";
                              imgO.style.height = _imgHeight * (_winWidth / _imgWidth) + "px";
                              imgO.style.marginTop = (imgCount.clientHeight * 1 - _imgHeight * _winWidth / _imgWidth) / 2 + "px";
                          }
                      } else {
                          if (_imgHeight > _winHeight) {
                              imgO.style.width = _imgWidth * (_winHeight / _imgHeight) + "px";
                              imgO.style.height = _winHeight + "px";
                              imgO.style.marginTop = (imgCount.clientHeight * 1 - _winHeight) / 2 + "px";
                          } else {
                              imgO.style.width = _imgWidth + "px";
                              imgO.style.height = _imgHeight + "px";
                              imgO.style.marginTop = (imgCount.clientHeight * 1 - _imgHeight) / 2 + "px";
                          }
                      }
                      /*if(_imgWidth>0 && _imgHeight>0){
                       console.log(11111111111111);
                       console.log(_imgWidth,_imgHeight,_winWidth,_winHeight);
                       if(_imgWidth/_imgHeight>_winWidth/_winHeight){
                       console.log(2222222222);
                       if(_imgWidth<_winWidth){
                       console.log(3333333333333333);
                       imgO.style.width=_imgWidth+"px";
                       imgO.style.height=_imgHeight*_winWidth/_imgWidth+"px";
                       imgO.style.marginTop=(imgCount.clientHeight*1-(_imgHeight*_winWidth/_imgWidth))/2+"px";
                       }else{
                       console.log(444444444444);
                       imgO.style.width=_winWidth+"px";
                       imgO.style.height=_imgHeight*_winWidth/_imgWidth+"px";
                       imgO.style.marginTop=(imgCount.clientHeight*1-(_imgHeight*_winWidth/_imgWidth))/2+"px";
                       }
                       }else{
                       if(_imgHeight>_winHeight){
                       console.log(55555555555555555);
                       imgO.style.width=_imgWidth*_winHeight/_imgHeight+"px";
                       imgO.style.height=_winHeight+"px";
                       imgO.style.marginTop=(imgCount.clientHeight*1-(_winHeight))/2+"px";
                       }else{
                       console.log(6666666666666666);
                       imgO.style.marginTop=(imgCount.clientHeight*1-(_imgHeight))/2+"px";
                       }
                       }*/
                      /*imgO.style.top="50%";
                       imgO.style.left="50%";*/
                      /* imgO.style.marginTop="-"+_imgHeight/2+"px";
                       imgO.style.marginLeft="-"+(_imgWidth/2)+"px";*/
                  }
              };
          }
  
          //左翻页
      }, {
          key: "leftClick",
          value: function leftClick(e) {
              var _this3 = this;
  
              e.stopPropagation();
              if (this.state.imageList.length == 0 || this.state.imageList.length == 1) {
                  return false;
              }
              if (this.state.currentIndex == 0) {
                  return false;
              }
  
              this.setState({
                  currentIndex: this.state.currentIndex - 1,
                  imageUrl: this.state.imageList[this.state.currentIndex - 1].archPath
              }, function () {
                  _this3.calculatedPosition();
                  console.log('this.state.currentIndex', _this3.state.currentIndex);
                  if (_this3.state.currentIndex == 0) {
                      _this3.setState({
                          left: false
                      });
                  } else {
                      _this3.setState({
                          left: true
                      });
                  }
                  if (_this3.state.currentIndex == _this3.state.imageList.length - 1) {
                      _this3.setState({
                          right: false
                      });
                  } else {
                      _this3.setState({
                          right: true
                      });
                  }
                  return false;
              });
          }
  
          //右翻页
      }, {
          key: "rightClick",
          value: function rightClick(e) {
              var _this4 = this;
  
              e.stopPropagation();
              if (this.state.imageList.length == 0) {
                  return false;
              }
              if (this.state.currentIndex == this.state.imageList.length - 1) {
                  return false;
              }
              this.setState({
                  currentIndex: this.state.currentIndex + 1,
                  imageUrl: this.state.imageList[this.state.currentIndex + 1].archPath
              }, function () {
                  _this4.calculatedPosition();
                  if (_this4.state.currentIndex == 0) {
                      _this4.setState({
                          left: false
                      });
                  } else {
                      _this4.setState({
                          left: true
                      });
                  }
                  console.log('this.state.currentIndex,this.state.imageList.length');
                  console.log(_this4.state.currentIndex == _this4.state.imageList.length - 1);
                  if (_this4.state.currentIndex == _this4.state.imageList.length - 1) {
                      _this4.setState({
                          right: false
                      });
                  } else {
                      _this4.setState({
                          right: true
                      });
                  }
                  return false;
              });
          }
      }, {
          key: "imageClick",
          value: function imageClick(e) {
  
              e.stopPropagation();
              return false;
          }
      }, {
          key: "closePop",
          value: function closePop(e) {
              e.stopPropagation();
              this.props.callback();
              document.getElementById("albumPop").style.display = "none";
          }
      }, {
          key: "render",
          value: function render() {
              return _react2["default"].createElement(
                  "div",
                  { className: "album-pop-content", id: "albumPop", onClick: this.closePop.bind(this) },
                  _react2["default"].createElement("div", { className: "pop" }),
                  _react2["default"].createElement(
                      "div",
                      { className: "image-content" },
                      _react2["default"].createElement(
                          "div",
                          { className: "img-con", id: "imgContent", onClick: this.imageClick.bind(this) },
                          _react2["default"].createElement("div", { className: "left-btn " + (this.state.left ? 'l-btn' : ''),
                              onClick: this.leftClick.bind(this) }),
                          _react2["default"].createElement("img", { id: "curImg", src: this.state.imageUrl }),
                          _react2["default"].createElement("div", { className: "right-btn " + (this.state.right ? 'r-btn' : ''),
                              onClick: this.rightClick.bind(this) })
                      )
                  )
              );
          }
      }]);
  
      return Album;
  })(_react2["default"].Component);
  
  exports["default"] = Album;
  module.exports = exports["default"];
  //# sourceMappingURL=/js/components/admin/public/album.js.map
  

});

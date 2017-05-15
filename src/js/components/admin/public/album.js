/**
 * Created by gaolei on 2017/4/1.
 *
 * 公用分页
 * 传入参数 当前页curPage  总条数totalNumber 每页显示多少条pageLimt 分页点击回调 pageClick
 */

import React from 'react';

class Album extends React.Component {

    constructor() {
        super();
        this.state = {
            imageList: [],//图片数据
            typeIndex: "",//图片名称
            currentIndex: 0,//当前图片下标
            imageUrl: "",//当前图片路径
            showImageContent: false,
            left: false,//左边显示隐藏控制
            right: true,//右边显示隐藏控制
        };
    }

    componentDidMount() {

        if (this.props.typeIndex === "") {
            this.props.callback();
            document.getElementById("albumPop").style.display = "none";
            return false;
        }

        let currentIndex = 0;

        let imageList = this.props.imageList ? this.props.imageList : [];
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

    getImageIndex(imageList, typeIndex) {
        let currentIndex = "";
        for (let a = 0; a < imageList.length; a++) {
            if (imageList[a].archName == typeIndex) {
                currentIndex = a;
            }
        }
        return currentIndex;
    }

    componentWillReceiveProps(props) {

        this.setState({
            imageList: props.imageList ? this.props.imageList : [],
            currentIndex: props.typeIndex
        }, ()=> {


            if (props.typeIndex === "") {

                this.props.callback();
                document.getElementById("albumPop").style.display = "none";
                return false;
            }
            //let typeIndex=props.typeIndex;
            let currentIndex = 0;
            let imageList = props.imageList ? props.imageList : [];
            if (imageList.length == 0) {
                this.props.callback();
                alert("无影像文件");
                return false;
            }

            this.init({
                imageList: imageList,
                currentIndex: currentIndex
            });

        });
    }//父组件PROPS改变

    init(options) {

        if (options.imageList[options.currentIndex] == undefined) {
            this.props.callback();
            document.getElementById("albumPop").style.display = "none";
            return false;
        }

        this.setState({
            imageList: options.imageList,
            currentIndex: options.currentIndex,
            imageUrl: options.imageList[options.currentIndex].archPath
        }, ()=> {
            document.getElementById("albumPop").style.display = "block";
            this.calculatedPosition();
        });
    }

    //计算位置
    calculatedPosition() {
        let imgObj = document.getElementById("curImg");
        let imgCount = document.getElementById("imgContent");
        let realWidth;//真实的宽度
        let realHeight;//真实的高度

        let Img = new Image();
        Img.src = this.state.imageUrl;
        Img.onload = function (e) {
            /*realWidth = e.path[0].width;
            realHeight = e.path[0].height;*/
            realWidth = Img.width;
             realHeight = Img.height;
            let _imgWidth = realWidth * 1;
            let _imgHeight = realHeight * 1;

            let _winWidth = 540 * 1;
            let _winHeight = 700 * 1;
            let imgO = document.getElementById("curImg");
            if (_imgWidth > 0 && _imgHeight > 0) {

                if (_imgWidth / _imgHeight > _winWidth / _winHeight) {
                    if (_imgWidth < _winWidth) {
                        if (_imgWidth == _imgHeight) {
                            imgO.style.width = _imgWidth + "px";
                            imgO.style.height = _imgHeight + "px";
                            imgO.style.marginTop = (imgCount.clientHeight * 1 - (_imgHeight * 1)) / 2 + "px";
                        } else {
                            imgO.style.width = _imgWidth + "px";
                            imgO.style.height = _imgHeight + "px";
                            imgO.style.marginTop = (imgCount.clientHeight * 1 - (_imgHeight * _winWidth / _imgWidth)) / 2 + "px";
                        }

                    } else {
                        imgO.style.width = _winWidth + "px";
                        imgO.style.height = _imgHeight * (_winWidth / _imgWidth) + "px";
                        imgO.style.marginTop = (imgCount.clientHeight * 1 - (_imgHeight * _winWidth / _imgWidth)) / 2 + "px";
                    }
                } else {
                    if (_imgHeight > _winHeight) {
                        imgO.style.width = _imgWidth * (_winHeight / _imgHeight) + "px";
                        imgO.style.height = _winHeight + "px";
                        imgO.style.marginTop = (imgCount.clientHeight * 1 - (_winHeight)) / 2 + "px";
                    } else {
                        imgO.style.width = _imgWidth + "px";
                        imgO.style.height = _imgHeight + "px";
                        imgO.style.marginTop = (imgCount.clientHeight * 1 - (_imgHeight)) / 2 + "px";
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
        }

    }

    //左翻页
    leftClick(e) {
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
        }, ()=> {
            this.calculatedPosition();
            console.log('this.state.currentIndex', this.state.currentIndex);
            if (this.state.currentIndex == 0) {
                this.setState({
                    left: false
                });
            } else {
                this.setState({
                    left: true
                });
            }
            if (this.state.currentIndex == this.state.imageList.length - 1) {
                this.setState({
                    right: false
                });
            } else {
                this.setState({
                    right: true
                });
            }
            return false;
        })

    }

    //右翻页
    rightClick(e) {
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
        }, ()=> {
            this.calculatedPosition();
            if (this.state.currentIndex == 0) {
                this.setState({
                    left: false
                });
            } else {
                this.setState({
                    left: true
                });
            }
            console.log('this.state.currentIndex,this.state.imageList.length');
            console.log(this.state.currentIndex == this.state.imageList.length - 1);
            if (this.state.currentIndex == this.state.imageList.length - 1) {
                this.setState({
                    right: false
                });
            } else {
                this.setState({
                    right: true
                });
            }
            return false;
        })
    }

    imageClick(e) {

        e.stopPropagation();
        return false;
    }

    closePop(e) {
        e.stopPropagation();
        this.props.callback();
        document.getElementById("albumPop").style.display = "none";
    }

    render() {
        return (
            <div className="album-pop-content" id="albumPop" onClick={this.closePop.bind(this)}>

                <div className="pop"></div>
                <div className="image-content">

                    <div className="img-con" id="imgContent" onClick={this.imageClick.bind(this)}>
                        <div className={"left-btn " + (this.state.left ? 'l-btn' : '')}
                             onClick={this.leftClick.bind(this)}></div>
                        <img id="curImg" src={this.state.imageUrl}/>
                        <div className={"right-btn " + (this.state.right ? 'r-btn' : '')}
                             onClick={this.rightClick.bind(this)}></div>
                    </div>

                </div>

            </div>
        )
    }
}

export default  Album;
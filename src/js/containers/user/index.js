/**
 * Created by shenhua on 16/6/16.
 *
 * 路由首页框架
 */
import React from 'react';
import {Link,IndexLink,Route} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../../actions/user';
import Home from './home';
import List from './list';
import Page from './page';

class IndexMain extends React.Component {

    //获取导航
    getNav(){
        if(this.props.index.nav.length>0){

           return this.props.index.nav.map((val,key)=>{
                        if(key==3){
                            return(
                                <IndexLink to="/" className="logo"><img src={__uri("../../../images/user/logo.png")} /></IndexLink>
                            )
                        }
                        return(
                            <Link to={'/list/'+val.id}  activeClassName="hover">{val.title}</Link>
                        )
                    })
                  }
    }

    //获取文档链接
    getStudy(){
        if(this.props.index.study.length>0){
            return this.props.index.study.map((val,key)=>{
                        return(
                            <li><a href={val.url} target="_blank">{val.title}</a></li>
                        )
                    })
        }else{
            return <li>暂无数据</li>;
        }
    }

    //获取友情链接
    getLink(){
        if(this.props.index.link.length>0){
            return this.props.index.link.map((val,key)=>{
                        return(
                            <li><a href={val.url} target="_blank">{val.title}</a></li>
                        )
                    })
        }else{
            return <li>暂无数据</li>
        }
    }

    componentDidMount(){
        this.props._getNav();
        this.props._getStudyLink();
        this.props._getFriendLink();
    }//组件加载后

    render(){
            console.log(111111)
            console.log(this.props);
            return (
                <div id="loadeWrap">
                    <div className={"myPhoto animated fadeInUp "+(this.props.index.showView?"zoomOutUp":"")}>
                        <img src={__uri("../../../images/user/myphoto.png")} />
                    </div>
                    <div id="blogWrap" className={"animated "+(this.props.index.showView?"block fadeIn":"")}>
                        <div className="wrap-r">
                            <div className="top-nav">
                                <IndexLink to="/" activeClassName="hover">首页</IndexLink>
                                {this.getNav()}
                            </div>
                            <div className="content-wrap">
                                {/* 左侧 */}
                                {/* 路由页面 */}
                                {this.props.children}
                                {/* 右侧 */}
                                <div className="content-right">
                                    {/* 关于我 */}
                                    <div className="about-my">
                                        <h4>博主介绍</h4>
                                        <div>
                                            <img src={__uri("../../../images/user/myphoto.png")} />
                                            <p>GitHub：<a href="https://github.com/shenhualove" target="_blank">github.com/shenhualove</a><br/>
                                                前端攻城狮一枚，暂居魔都,希望交流WEB前端开发技术以及互联网探讨。有兴趣的可以加前端QQ群：59470700，拒绝潜水广告。</p>
                                        </div>
                                    </div>
                                    {/* 学习链接 */}
                                    <div className="study-links">
                                        <h4>学习文档</h4>
                                        <ul>
                                            {this.getStudy()}
                                        </ul>
                                    </div>
                                    {/* 友情链接 */}
                                    <div className="friend-links">
                                        <h4>友情链接</h4>
                                        <ul>
                                            {this.getLink()}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            {/*底部*/}
                            <footer>
                                <p>盛夏的骤雨&nbsp;&nbsp;在梦中醒来&nbsp;&nbsp;无法再闭上眼睑&nbsp;&nbsp;向明天追寻直至刚才仍有你的未来&nbsp;&nbsp;一直不停下的雨——译自宇多田光《真夏の通り雨》</p>
                            </footer>
                        </div>
                    </div>
                </div>
            );
    }

}

const mapStateToProps = (state) => {
    console.log(state);
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        _getNav:()=>{
            dispatch(actions.getNav());
        },
        _getStudyLink:()=>{
            dispatch(actions.getStudyLink());
        },
        _getFriendLink:()=>{
            dispatch(actions.getFriendLink());
        }
    }
}

const Index = connect(
    mapStateToProps,
    mapDispatchToProps
)(IndexMain)

export default Index;
/**
 * Created by zhangminglei on 2017/3/9.
 *
 * 中间内容 头部组件
 *
 * title="菜单名称" 必传
 * parentList={} //父栏目名字和跳转地址 可以不传  数据结构  [{name:"父栏目名字",url:"/parent"}]
 * leaveCallBack={} //回调函数，点击返回上一页的调用，可以不传,如果传入，讲回调父组件的方法
 * leaveUrl="返回上一页的URL"  可以不传，如果传入则显示上一页 否则不显示上一页
 */
import React from 'react';
import {Link,browserHistory } from 'react-router';

class CenterTopNav extends React.Component{
    //跳转之前是否回调
    backUrl(url,fn){
        if(typeof fn == 'function'){
            fn();
        }else{
            browserHistory.push(url);
        }
    }
    //渲染父栏目名称URL
    getParentList(data){
        if(data){
           let html=[];
           data.map((val,k)=>{
               html.push(<Link key={k} to={val.url}>{val.name}</Link>);
               html.push(<span key={k+'s'}>></span>);
           });
           return html;
        }
    }
    //渲染 返回上一页
    getPrev(url,fn){
        if(url||fn){
            return <div className="right-cont" style={{display:"inline-block"}} onClick={this.backUrl.bind(this,url,fn)}>返回上一页 >></div>;
        }
    }
	/*<Link to="/">首页</Link><span>></span>*/
    render(){
        return(
            <div className="center-top-content clearfix">
                {this.getParentList(this.props.parentList)}
                <span className="title cur">{this.props.title}</span>
                {this.getPrev(this.props.leaveUrl,this.props.leaveCallBack)}
            </div>
        )
    }
}

export default  CenterTopNav;

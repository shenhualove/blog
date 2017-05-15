/**
 * Created by gaolei on 2017/4/7.
 *
 * 菜单树形结构生成
 *
 * 传入数据格式
 * {
     id:"System",//栏目ID
     name:"系统管理",//栏目名称
     pid:"0",//父栏目
     open:true/false,//是否展开
     checked:true/false,//是否勾选
     children:[] //子菜单
 * }
 */
import React from 'react';

class CreatTree extends React.Component{

    showList(data){
        if(data.length>0){
            let html=[];
            for(let i=0;i<data.length;i++){
            	if(i == data.length-1 ){
            		html.push(<li key={i} className={data[i].open?'bottom_open li_last':'bottom_close li_last'}>
                            <span onClick={this.props.showCall.bind(this,data[i].id,data[i].open,data)} className={data[i].open?'bottom_open':'bottom_close'}></span>
                            <span onClick={this.props.checkShow.bind(this,data[i].id,true,data)} className={data[i].checked?(data[i].middleCheck?'checkbox_middle_full':'checkbox_true_full'):'checkbox_false_full'}></span>
                            <a className={"parent "+this.judgeIcon(data[i].icon)} href="#">{data[i].name}</a>
                            <ul>{data[i].children&&this.getChildrenList(data[i].children,data)}</ul>
                         </li>);
            	}else{
            		html.push(<li key={i} className={data[i].open?'bottom_open':'bottom_close'}>
                            <span onClick={this.props.showCall.bind(this,data[i].id,data[i].open,data)} className={data[i].open?'bottom_open':'bottom_close'}></span>
                            <span onClick={this.props.checkShow.bind(this,data[i].id,true,data)} className={data[i].checked?(data[i].middleCheck?'checkbox_middle_full':'checkbox_true_full'):'checkbox_false_full'}></span>
                            <a className={"parent "+this.judgeIcon(data[i].icon)} href="#">{data[i].name}</a>
                            <ul className="line">{data[i].children&&this.getChildrenList(data[i].children,data)}</ul>
                         </li>);
            	}
                
            }
            return html;
        }
    }
    
    judgeIcon(type){
    	let className="";
    	switch(type){
    		case "M"://页面
    			className="page";
    			break;
    		case "N"://节点
    			className="show";
    			break;
    		case "O"://操作
    			className="no-children";
    			break;    			
    	}
    	return className;
    }
    
    //递归渲染树形结构
    getChildrenList(data,configData){
        for(let i=0;i<data.length;i++){
            let html=[];
            for(let i=0;i<data.length;i++){
                if(data[i].children.length>0){
                	if(i == data.length-1){
                		html.push(<li key={i} className={data[i].open?'bottom_open li_child_last':'bottom_close li_child_last'}>
                              <span onClick={this.props.showCall.bind(this,data[i].id,data[i].open,configData)} className={data[i].open?'bottom_open':'bottom_close'}></span>
                              <span onClick={this.props.checkShow.bind(this,data[i].id,true,configData)} className={data[i].checked?(data[i].middleCheck?'checkbox_middle_full':'checkbox_true_full'):'checkbox_false_full'}></span>
                               <a className={"parent "+this.judgeIcon(data[i].icon)} href="#">{data[i].name}</a>
                              <ul className="line clearfix">{this.getChildrenList(data[i].children,configData)}</ul>
                             </li>);
                	}else{
                		html.push(<li key={i} className={data[i].open?'bottom_open':'bottom_close'}>
                              <span onClick={this.props.showCall.bind(this,data[i].id,data[i].open,configData)} className={data[i].open?'bottom_open':'bottom_close'}></span>
                              <span onClick={this.props.checkShow.bind(this,data[i].id,true,configData)} className={data[i].checked?(data[i].middleCheck?'checkbox_middle_full':'checkbox_true_full'):'checkbox_false_full'}></span>
                               <a className={"parent "+this.judgeIcon(data[i].icon)} href="#">{data[i].name}</a>
                              <ul className="line clearfix">{this.getChildrenList(data[i].children,configData)}</ul>
                             </li>);
                	}
                    
                }else{
                	if(i == data.length-1){
	                    html.push(<li className="no-childrem-last" key={i} >
	                    		  <span className="center_docu"></span>
	                              <span onClick={this.props.checkShow.bind(this,data[i].id,false,configData)} className={data[i].checked?'checkbox_true_full':'checkbox_false_full'}></span>
	                               <a className={this.judgeIcon(data[i].icon)} href="#">{data[i].name}</a>
	                             </li>);
                    }else{
                    	html.push(<li key={i} >
	                    		  <span className="center_docu"></span>
	                              <span onClick={this.props.checkShow.bind(this,data[i].id,false,configData)} className={data[i].checked?'checkbox_true_full':'checkbox_false_full'}></span>
	                               <a className={this.judgeIcon(data[i].icon)} href="#">{data[i].name}</a>
	                             </li>);
                    }
                }

            }
            return html;
        }
    }

    render(){
        return(
            <ul className="creat-tree">
               {this.showList(this.props.treeData)}
            </ul>
        )
    }
}

export default CreatTree;
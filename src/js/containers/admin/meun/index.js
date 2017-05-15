/**
 * Created by gaolei on 2017/3/31.
 *
 * 顶部菜单 接受PROPS参数 ，遍历出多级菜单
 */
import React from 'react';
import {Link} from 'react-router';

class Menu extends React.Component{

    getList(data){
        let menuName={
            ReportForm:{title:"数据报表",type:"ReportForm"},
            HelpLoan:{title:"助贷",type:"HelpLoan"},
            //Customer:{title:"400 客服",type:"Customer"},
            System:{title:"系统管理",type:"System"},
            Photovoltaic:{title:'光伏',type:'Photovoltaic'}
        }
        let menuList=[];
        for(let key in menuName){
            //循环一级菜单
            if(data[key]&&data[key].menus.length>0){
                //循环二级菜单
                let listArray=[];
                listArray=this.mapChildren(data[key].menus,key);
                menuList.push(<li className={key}  key={key}><a href="#">{menuName[key].title}</a><ul>{listArray}</ul></li>);
            }
        }
        return menuList;
    }
    //递归循环子菜单
    mapChildren(arr,url){
        let childrenArray=[];
        for(let i=0;i<arr.length;i++){
            if(arr[i].children&&arr[i].children.length>0){
                childrenArray.push(<li  key={i}><a href="#">{arr[i].name}</a><ul>{this.mapChildren(arr[i].children,url+'/'+arr[i].routerStr)}</ul></li>);
            }else{
                childrenArray.push(<li  key={i}><Link to={"/"+url+"/"+arr[i].routerStr}>{arr[i].name}</Link></li>);
            }
        }
        return childrenArray;
    }

    render(){
        return(
            <ul className="top-menu">
               <li><Link to="/">首页</Link></li>
               {this.getList(this.props.list)}
            </ul>
        )
    }
}

export default  Menu;
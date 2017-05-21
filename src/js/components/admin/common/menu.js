/**
 * Created by apple on 17/5/16.
 */
import React from 'react';
import {Link} from 'react-router';

class Menu extends React.Component{
    render(){
        return(
            <ul className="top-menu">
                <li>
                    <a href="#">栏目管理</a>
                    <ul>
                       <li><Link to="/admin/column/list">栏目列表</Link></li>
                       <li><Link to="/admin/column/add">栏目添加</Link></li>
                    </ul>
                </li>
                <li>
                    <a href="#">文章管理</a>
                    <ul>
                        <li><Link to="/admin/article/list">文章列表</Link></li>
                        <li><Link to="/admin/article/add">文章添加</Link></li>
                    </ul>
                </li>
                <li>
                    <a href="#">链接管理</a>
                    <ul>
                        <li><Link to="/admin/link/list">链接列表</Link></li>
                        <li><Link to="/admin/link/add">链接添加</Link></li>
                    </ul>
                </li>
            </ul>
        )
    }
}

export default  Menu;
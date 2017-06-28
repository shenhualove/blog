/**
 * Created by zhangminglei on 2017/3/8.
 *
 * 顶部组件
 */
import React from 'react';
import {connect} from 'react-redux';
import {browserHistory } from 'react-router';
import {topHandle,logOut,setPassWord} from '../../../actions/admin/top';
import {dialogHandle} from '../../../actions/admin/dialog';
import Menu from '../../../components/admin/common/menu';

class Top extends React.Component{

    //退出登录
    signOut(){
        this.props._logOut();
    }

    render(){
        return(
            <div className="top-content clearfix">
                <span className="left-icon"></span>
                <Menu list={this.props.login.Jurisdiction} />
                <div className="right clearfix">
                    <span className="user-icon"></span>
                    <span className="user-name">{this.props.login.account.userName}</span>
                    <span className="right-down"></span>
                    {/*用户下拉框*/}
                    <div className="user-select">
                        <ul>
                            <li onClick={this.signOut.bind(this)}>退出系统</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}


function mapDispatchToProps(dispatch){
    return {
        _topHandle:(options)=>{
            dispatch(topHandle(options));
        },
        _logOut   :(options)=>{
            dispatch(logOut(options));
        },
        _dialogHandle :(options)=>{
            dispatch(dialogHandle(options));
        }
    }
}

const TopMenu = connect(
    mapStateToProps,
    mapDispatchToProps
)(Top);

export default  TopMenu;
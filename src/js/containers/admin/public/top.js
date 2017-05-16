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
    //修改密码
    editPassword(){
        let html =[];
        html.push(<p className='ptb15 text-c' key="oldPsd"><input id='oldPsd'  type='password' maxLength='32' placeholder='请输入旧密码' /></p>);
        html.push(<p className='ptb15 text-c' key="newPsd"><input id='newPsd' type='password' maxLength='32' placeholder='请输入新密码' /></p>);
        html.push(<p className='ptb15 text-c' key="confirmPsd"><input id='confirmPsd' type='password' maxLength='32' placeholder='请再次输入新的密码' /></p>);
        html.push(<p key="editPassword-error" className='editPassword-error'></p>);
        this.props._dialogHandle({
            show:true,
            type:"confirm",
            width:'400px',
            height:'400px',
            failBtn:false,
            content:html,
            title:'修改密码',
            success:function(){
                var oldPsd = $("#oldPsd").val();
                var newPsd = $("#newPsd").val();
                var confirmPsd = $("#confirmPsd").val();

                let oldPasswCheck=$.XlCheck({
                    val:oldPsd,
                    len:"6,32",
                    rule:["Empty","NumberAndEng","Length"]
                });
                //校验密码格式
                if(!oldPasswCheck.result){
                    if(!oldPasswCheck.Empty){
                        $(".editPassword-error").html("<span></span>原密码不能为空");
                        return false;
                    }
                    if(!oldPasswCheck.NumberAndEng){
                        $(".editPassword-error").html("<span></span>请输入6-32位数字、字母格式的密码");
                        return false;
                    }
                    if(!oldPasswCheck.Length){
                        $(".editPassword-error").html("<span></span>请输入6-32位数字、字母格式的密码");
                        return false;
                    }
                }

                let newPasswCheck=$.XlCheck({
                    val:newPsd,
                    len:"6,32",
                    rule:["Empty","NumberAndEng","Length"]
                });
                //校验密码格式
                if(!newPasswCheck.result){
                    if(!newPasswCheck.Empty){
                        $(".editPassword-error").html("<span></span>新密码不能为空");
                        return false;
                    }
                    if(!newPasswCheck.NumberAndEng){
                        $(".editPassword-error").html("<span></span>请输入6-32位数字、字母格式的密码");
                        return false;
                    }
                    if(!newPasswCheck.Length){
                        $(".editPassword-error").html("<span></span>请输入6-32位数字、字母格式的密码");
                        return false;
                    }
                }

                let confirmPasswCheck=$.XlCheck({
                    val:confirmPsd,
                    len:"6,32",
                    rule:["Empty","NumberAndEng","Length"]
                });
                //校验密码格式
                if(!confirmPasswCheck.result){
                    if(!confirmPasswCheck.Empty){
                        $(".editPassword-error").html("<span></span>请再次输入新的密码不能为空");
                        return false;
                    }
                    if(!confirmPasswCheck.NumberAndEng){
                        $(".editPassword-error").html("<span></span>请输入6-32位数字、字母格式的密码");
                        return false;
                    }
                    if(!confirmPasswCheck.Length){
                        $(".editPassword-error").html("<span></span>请输入6-32位数字、字母格式的密码");
                        return false;
                    }
                }

                if(newPsd!=confirmPsd){
                    $(".editPassword-error").html("<span></span>两次密码输入不一致");
                    return false;
                }

                this.props._setPassWord({
                    callBack:()=>{browserHistory.push('/')},
                    errMesg:()=>{$(".editPassword-error").html("<span></span>原始密码不正确,请重新输入");}
                });
            }.bind(this)
        })

    }

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
                            <li onClick={this.editPassword.bind(this)}>修改密码</li>
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
        _setPassWord:(options)=>{
            dispatch(setPassWord(options))
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
/**
 * Created by apple on 17/3/29.
 *
 * 登录页面
 */
import React from 'react';
import {connect} from 'react-redux';
import {loginHandle,accountLogin} from '../../../actions/admin';

class LoginMain extends React.Component{
	componentDidMount(){
        sessionStorage.clear();//防止退出时候，残留SESSINO没清空
	}

    //直接登录点击
    showLogin(){
        this.props._loginHandle({
            currentState:"login",
            status:1,
            errorShow:false,//是否展示错误信息
            errorMsg:""//错误信息
        });
    }

    //用户名文本框改变事件
    userNameChange(event){
        this.props._loginHandle({
            userName:event.target.value
        });
    }

    //登录密码文本框改变事件
    passWordChange(event){
        this.props._loginHandle({
            passWord:event.target.value
        });
    }

    //登录按钮 点击事件
    loginBtn(){
        if(!this.props.login.loginHash){
            return false;
        }

        this.props._loginHandle({
            errorMsg:"",
            errorShow:false,
            loginHash:false
        });

        let userName=this.props.login.userName;
        let passWord=this.props.login.passWord;

        //校验用户名
        if(!userName){
            this.props._loginHandle({
                errorMsg:"请输入帐号",
                errorShow:true,
                loginHash:true
            });
            return false;
        }else{
            this.props._loginHandle({
                errorMsg:"",
                errorShow:false,
                loginHash:true
            });
        }

        //校验密码
        if(!passWord){
            this.props._loginHandle({
                errorMsg:"请输入密码",
                errorShow:true
            });
            return false;
        }

        this.props._accountLogin({
            userName:this.props.login.userName,
            passWord:this.props.login.passWord
        });
    }

    render(){
        return(
            <div className="login-content">
                <div className="form-content">
                    <div className="login-title"></div>
                    {/*登录*/}
                    <div className="login" id="loginBtn">
                        <input className="user-name" type="text" value={this.props.login.userName} onChange={this.userNameChange.bind(this)} placeholder="请输入帐号"/>
                        <input className="pass-word" type="password" maxLength="32" value={this.props.login.passWord} onChange={this.passWordChange.bind(this)} placeholder="请输入密码"/>
                        <div className="error-content">
                            <div className="error" style={{display:this.props.login.errorShow?"block":"none"}}>
                                <span className="error-icon"></span>
                                <span className="error-val">{this.props.login.errorMsg}</span>
                            </div>
                        </div>
                        <span className="login-btn"  onClick={this.loginBtn.bind(this)}>登录</span>
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
        _loginHandle:(data)=>{
            dispatch(loginHandle(data));
        },
        _accountLogin:(options)=>{
            dispatch(accountLogin(options));
        }
    }
}

const UserLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginMain);

export default  UserLogin;
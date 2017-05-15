/**
 * Created by apple on 17/3/29.
 *
 * 登录页面
 */
import React from 'react';
import {connect} from 'react-redux';
import {loginHandle,accountLogin,sendMessage,smsBiz,validateSmsCode,getPartyId,submitPassword} from '../../../actions/admin';

class LoginMain extends React.Component{

	componentDidMount(){
        sessionStorage.clear();//防止退出时候，残留SESSINO没清空

		let _that=this;
		$('#loginBtn').keydown(function(e){   //直接登录回车事件
            if(_that.props.login.loginHash){
                if(e.keyCode == 13){
                    _that.loginBtn();
                }
            }

        });
        $('#nextStepBtn').keydown(function(e){   //下一步回车事件
            if(_that.props.login.nextHash) {
                if (e.keyCode == 13) {
                    _that.nextStep();
                }
            }
        });
        
        $('#resetPassLogin').keydown(function(e){   //重置密码回车事件
            if(_that.props.login.setPsdHash) {
                if (e.keyCode == 13) {
                    _that.setPassWord();
                }
            }
        });       
        
	}


    //首次登录点击
    firstLogin(){
        this.props._loginHandle({
            currentState:"phonecheck",
            status:2,
            errorShow:false,//是否展示错误信息
            errorMsg:""//错误信息
        });
    }

    //忘记密码点击
    forgetPassword(){
        this.props._loginHandle({
            currentState:"phonecheck",
            status:3,
            errorShow:false,//是否展示错误信息
            errorMsg:""//错误信息
        });
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

    //手机号码文本框改变事件
    phoneNumberChange(event){
        this.props._loginHandle({
            phoneNumber:event.target.value
        });
    }

    //短信验证码文本框改变事件
    verificationCodeChange(event){
        this.props._loginHandle({
            verificationCode:event.target.value
        });
    }

    //忘记密码--密码文本框改变事件
    fPasswordChange(event){
        this.props._loginHandle({
            fPassword:event.target.value
        });
    }

    //忘记密码--确认密码文本框改变事件
    confirmPasswordChange(event){
        this.props._loginHandle({
            confirmPassword:event.target.value
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
        let userNameCheck= $.XlCheck({
            val:userName,
            rule:["Empty"] //
        });
        let passWordCheck=$.XlCheck({
            val:passWord,
            len:"6,32",
            rule:["Empty","NumberEng","Length"]
        });
        //校验用户名
        if(!userNameCheck.result){
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
        if(!passWordCheck.result){
            if(!passWordCheck.Empty){
                this.props._loginHandle({
                    errorMsg:"请输入密码",
                    errorShow:true
                });
                return false;
            }
        }

        this.props._accountLogin({
            userName:this.props.login.userName,
            passWord:this.props.login.passWord
        });
    }

    //获取短信验证码
    getVerificationCode(){
    	let getCheckNumber=document.getElementById('getCheckNumber');
		console.log(getCheckNumber.innerText);
        if(getCheckNumber.innerText!="获取验证码"){
            return false;
        }

        this.props._loginHandle({
            errorMsg:"",
            errorShow:false
        });

        let phoneNum=this.props.login.phoneNumber;
        let phoneNumCheck=$.XlCheck({
            val:phoneNum,
            rule:["Empty","Phone"]
        });
        if(!phoneNumCheck.result){
            if(!phoneNumCheck.Empty){
                this.props._loginHandle({
                    errorMsg:"请输入手机号码",
                    errorShow:true,
                    loginHash:true
                });
                return false;
            }
            if(!phoneNumCheck.Phone){
                this.props._loginHandle({
                    errorMsg:"手机号码格式不正确",
                    errorShow:true,
                    loginHash:true
                });
                return false;
            }
        }

        this.searchUserInfo();
    }

    //发送短信
    sendMessage(){
        this.countDown(this.props.login.secondsNum);
        this.props._sendMessage({
            mobilePhone:this.props.login.phoneNumber
        });
    }

    //倒计时
    countDown(second){
        let getCheckNumber=document.getElementById('getCheckNumber');
        let codeMsg='';
        if(second==-1){
            codeMsg='获取验证码';
            getCheckNumber.innerText=codeMsg;
            return false;
        }
        codeMsg="重新发送("+second+"s)";
        getCheckNumber.innerText=codeMsg;
        let _that=this;
        setTimeout(function(){
            _that.countDown((second-1));
        },1000);
    }

    //根据手机号去匹配数据库
    searchUserInfo(){
        this.props._smsBiz({
            phoneNumber:this.props.login.phoneNumber,
            callback   :()=>{this.sendMessage()}
        });
    }


    //下一步点击事件
    nextStep(){
        this.props._loginHandle({
            errorMsg:"",
            errorShow:false,
            nextHash:false
        });
        let phoneNum=this.props.login.phoneNumber;
        let codeVal=this.props.login.verificationCode;
        let phoneNumCheck=$.XlCheck({
            val:phoneNum,
            rule:["Empty","Phone"]
        });
        let codeCheck=$.XlCheck({
            val:codeVal,
            len:"6",
            rule:["Empty","Number","Length"]
        });
        //校验手机号
        if(!phoneNumCheck.result){
            if(!phoneNumCheck.Empty){
                this.props._loginHandle({
                    errorMsg:"请输入手机号码",
                    errorShow:true,
                    nextHash:true
                });
                return false;
            }
            if(!phoneNumCheck.Phone){
                this.props._loginHandle({
                    errorMsg:"手机号码格式不正确",
                    errorShow:true,
                    nextHash:true
                });
                return false;
            }
        }
        //校验验证码
        if(!codeCheck.result){
            if(!codeCheck.Empty){
                this.props._loginHandle({
                    errorMsg:"请获取验证码",
                    errorShow:true,
                    nextHash:true
                });
                return false;
            }
            if(!codeCheck.Number){
                this.props._loginHandle({
                    errorMsg:"验证码输入错误",
                    errorShow:true,
                    nextHash:true
                });
                return false;
            }
            if(!codeCheck.Length){
                this.props._loginHandle({
                    errorMsg:"验证码输入错误",
                    errorShow:true,
                    nextHash:true
                });
                return false;
            }
        }

        //验证短信验证码
        this.props._validateSmsCode({
            verificationCode:this.props.login.verificationCode,
            mobilePhone:this.props.login.phoneNumber,
            callback:()=>{this.getPartyId()}
        })
    }
    //获取partyId
    getPartyId(){
        this.props._getPartyId({phoneNumber:this.props.login.phoneNumber})
    }

    //忘记密码/首次登录  输入密码和确认密码的登录按钮
    setPassWord(){
        this.props._loginHandle({
            errorMsg:"",
            errorShow:false,
            setPsdHash:false
        });
        let fpassw=this.props.login.fPassword;//密码
        let cpassw=this.props.login.confirmPassword;//确认密码
        let fpasswCheck=$.XlCheck({
            val:fpassw,
            len:"6,32",
            rule:["Empty","NumberAndEng","Length"]
        });
        let cpasswCheck=$.XlCheck({
            val:cpassw,
            len:"6,32",
            rule:["Empty","NumberAndEng","Length"]
        });
        //校验密码格式
        if(!fpasswCheck.result){
            if(!fpasswCheck.Empty){
                this.props._loginHandle({
                    errorMsg:"密码不能为空",
                    errorShow:true,
                    setPsdHash:true
                });
                return false;
            }
            if(!fpasswCheck.NumberAndEng){

                this.props._loginHandle({
                    errorMsg:"请输入6-32位数字、字母格式的密码",
                    errorShow:true,
                    setPsdHash:true
                });
                return false;
            }
            if(!fpasswCheck.len){
                this.props._loginHandle({
                    errorMsg:"请输入6-32位数字、字母格式的密码",
                    errorShow:true,
                    setPsdHash:true
                });
                return false;
            }

        }
        //校验确认密码格式
        if(!cpasswCheck.result){
            if(!cpasswCheck.Empty){
                this.props._loginHandle({
                    errorMsg:"请再次输入新的密码不能为空",
                    errorShow:true,
                    setPsdHash:true
                });
                return false;
            }
            if(!cpasswCheck.NumberAndEng){
                this.props._loginHandle({
                    errorMsg:"请输入6-32位数字、字母格式的密码",
                    errorShow:true,
                    setPsdHash:true
                });
                return false;
            }
            if(!cpasswCheck.len){
                this.props._loginHandle({
                    errorMsg:"请输入6-32位数字、字母格式的密码",
                    errorShow:true,
                    setPsdHash:true
                });
                return false;
            }
        }
        if(fpassw!=cpassw){
            this.props._loginHandle({
                errorMsg:"两次密码输入不一致",
                errorShow:true,
                setPsdHash:true
            });
            return false;
        }
        //设置密码提交
        this.props._submitPassword({
            partyId:this.props.login.partyId,
            newpwd:this.props.login.confirmPassword
        });
    }


    render(){
        return(
            <div className="login-content">
                <div className="form-content">
                    <div className="login-title"></div>

                    {/*登录*/}
                    <div className="login" id="loginBtn" style={{display:this.props.login.currentState=="login"?"block":"none"}}>
                        <input className="user-name" type="text" value={this.props.login.userName} onChange={this.userNameChange.bind(this)} placeholder="请输入员工帐号或手机号"/>
                        <input className="pass-word" type="password" maxLength="32" value={this.props.login.passWord} onChange={this.passWordChange.bind(this)} placeholder="请输入密码"/>
                        <div className="error-content">
                            <div className="error" style={{display:this.props.login.errorShow?"block":"none"}}>
                                <span className="error-icon"></span>
                                <span className="error-val">{this.props.login.errorMsg}</span>
                            </div>
                        </div>
                        <span className="login-btn"  onClick={this.loginBtn.bind(this)}>登录</span>
                        <div className="sc-or-wj"><span onClick={this.firstLogin.bind(this)}>首次登录</span>　/　<span onClick={this.forgetPassword.bind(this)}>忘记密码</span></div>
                    </div>

                    {/* 忘记密码和首次登录  输入密码和确认密码 */}
                    <div className="forget-password" id="resetPassLogin"  style={{display:this.props.login.currentState=="passowrd"?"block":"none"}}>
                        <input className="user-name" type="password" maxLength="32" value={this.props.login.fPassword} onChange={this.fPasswordChange.bind(this)} placeholder="请设置新的密码"/>
                        <input className="pass-word" type="password" maxLength="32" value={this.props.login.confirmPassword} onChange={this.confirmPasswordChange.bind(this)} placeholder="请确认新的密码"/>
                        <div className="error-content">
                            <div className="error" style={{display:this.props.login.errorShow?"block":"none"}}>
                                <span className="error-icon"></span>
                                <span className="error-val" >{this.props.login.errorMsg}</span>
                            </div>
                        </div>
                        <span className="login-btn" onClick={this.setPassWord.bind(this)}>登录</span>
                        <div className="sc-or-wj" onClick={this.showLogin.bind(this)}><span>返回登录</span></div>
                    </div>
                    {/* 忘记密码和首次登录  输入手机号码和验证码 */}
                    <div className="phone-check" id="nextStepBtn" style={{display:this.props.login.currentState=="phonecheck"?"block":"none"}}>
                        <input className="user-name" type="text" value={this.props.login.phoneNumber} onChange={this.phoneNumberChange.bind(this)} placeholder="请输入手机号"/>
                        <p className="code-cont">
                            <input className="code-word" type="text" maxLength="6" value={this.props.login.verificationCode} onChange={this.verificationCodeChange.bind(this)} placeholder="请输入验证码"/>
                            <span className="code-btn" id="getCheckNumber" onClick={this.getVerificationCode.bind(this)}>获取验证码</span>
                        </p>

                        <div className="error-content">
                            <div className="error" style={{display:this.props.login.errorShow?"block":"none"}}>
                                <span className="error-icon"></span>
                                <span className="error-val" >{this.props.login.errorMsg}</span>
                            </div>
                        </div>
                        <span className="login-btn"  onClick={this.nextStep.bind(this)}>下一步</span>
                        <div className="sc-or-wj"><span onClick={this.showLogin.bind(this)}>返回登录</span></div>
                    </div>

                </div>
                <div className="login-record">
                    <span>沪ICP备15036680号-1</span>
                    <a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=31011502004297" ><i></i><p >沪公网安备 31011502004297号</p></a>
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
        _loginHandle:(options)=>{
            dispatch(loginHandle(options));
        },
        _accountLogin:(options)=>{
            dispatch(accountLogin(options));
        },
        _sendMessage :(options)=>{
            dispatch(sendMessage(options));
        },
        _smsBiz      :(options)=>{
            dispatch(smsBiz(options));
        },
        _validateSmsCode:(options)=>{
            dispatch(validateSmsCode(options));
        },
        _getPartyId   :(options)=>{
            dispatch(getPartyId(options));
        },
        _submitPassword:(options)=>{
            dispatch(submitPassword(options));
        }
    }
}

const UserLogin = connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginMain);

export default  UserLogin;
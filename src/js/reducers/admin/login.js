/**
 * Created by shenhua
 *
 * 登录模块
 */
//初始化state
const initalize = Object.assign({},{
    account:{},//用户信息
    isLogin:false,//是否登录
    userName:"",//登录名
    passWord:"",//登录密码
    verificationCode:"",//验证码
    errorShow:false,//是否展示错误信息
    errorMsg:"",//错误信息
    loginHash:true,//登录按钮防重提交
},sessionStorage.getItem("login")?JSON.parse(sessionStorage.getItem("login")):{});

function login (state = initalize,action) {
    switch (action.type) {
        case "LOGIN_HANDLE":
            return Object.assign({},state,action.data);
        case "LOGIN_SUCCESS":
            sessionStorage.setItem("login",JSON.stringify({account:action.data,isLogin:true}));
            return Object.assign({},state,{account:action.data,isLogin:true});
        default :
            return state;
    }
}

export default login;
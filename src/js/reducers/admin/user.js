/**
 * Created by ex-wangxin on 2017/4/1.
 */
import objectAssign from 'object-assign';
//初始化state
const initalize = sessionStorage.getItem('userIndexState')?JSON.parse(sessionStorage.getItem('userIndexState')):{
    pageSize:10,//每页加载10条
    loadPageFlag: true,//加载分页标识  true:加载  false:不加载
    curPage: 1,//当前页
    totalSize: 0,//总数据条数
    userName: "",//用户名
    searchUserName: '',//搜索的用户名
    accountNumber: "",//账号
    searchAccountNumber: "",//搜索的账号
    phoneNumber: "",//手机号
    searchPhoneNumber: "",//搜索的手机号
    employeeNumber: "",//部门编号
    employeeText:"请选择",//部门编号对应的文案
    searchEmployeeNumber: "",//搜索的部门编号
    roleCode: "",//角色编码
    searchRoleCode: "",//搜索的角色编号
    workingState:'',//在职状态
    searchWorkingState:'',//用于搜索的在职状态
    roleCodeList: false,//角色下拉框展示列表
    roleOldList: [],//角色下拉框原数据
    checkAll: false,
    list: '数据请求中',//数据列表
    tableList: false,//展示列表

    status:'loading',//加载状态字段
    //id:"",
    userRoleList: [],//给某个用户分配的权限列表
    departmentData: '',
    queryCheck: 0,//查询防重复提交字段
    allotCheck: 0,//分配资源防重复提交字段
    allocateResourcesBtnShow: false,//分配资源按钮权限
    btnList: [],//按钮权限数组
    nullData: ""

};

function user (state = initalize,action) {
    switch (action.type) {
        case "USER_HANDLE"  :
            sessionStorage.setItem("userIndexState",JSON.stringify(objectAssign({},state,action.options)));
            return objectAssign({},state,action.options);
        default :
            return state;
    }
}

export default user;

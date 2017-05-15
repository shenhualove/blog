import objectAssign from 'object-assign';
//初始化state

const initalize =sessionStorage.getItem('rolesAddState')?JSON.parse(sessionStorage.getItem('rolesAddState')):{
        roleName:"",//角色名称
    	roleDescribe:"",//角色描述

		roleCode:"",//编辑角色  角色Code
		levelTow:"",//顶部面包屑  二级标题
    	logListShow:false,//日志数据
    	logListData:[],
    	operationType:"",//操作状态  add添加  edit编辑
    	roleId:"",
	    parentList:[{name:"系统管理"},{name:"角色管理",url:"/System/RoleManager"}],
    	submitFlag:true,//提交按钮防重提交标识
    	treeData:[],//左侧权限树形数据
};


function addRole (state = initalize,action) {
    switch (action.type) {
        case "ADDROLE_HANDLE"  :
			sessionStorage.setItem("rolesAddState",JSON.stringify(objectAssign({},state,action.options)));
            return objectAssign({},state,action.options);

        default :
            return state;
    }
}
export default addRole;
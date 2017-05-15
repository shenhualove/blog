import objectAssign from 'object-assign';
//初始化state
const initalize =sessionStorage.getItem('homeState')?JSON.parse(sessionStorage.getItem('homeState')): {
        listData:[],//图表X轴日期
		listBalance:[],//业绩余额
		listNodeCount:[]//站点个数
};

function home (state = initalize,action) {
    switch (action.type) {

        case "HOME_HANDLE"  :
            sessionStorage.setItem("homeState",JSON.stringify(objectAssign({},state,action.options)));
            return objectAssign({},state,action.options);

        default :
            return state;
    }
}

export default home;
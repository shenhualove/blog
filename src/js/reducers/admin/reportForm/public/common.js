/**
 * Created by gaolei on 2017/4/25.
 *
 * 报表公用reducers
 */
import objectAssign from 'object-assign';
//初始化state
const initalize =sessionStorage.getItem('reportFormCommonState')?JSON.parse(sessionStorage.getItem('reportFormCommonState')): {
    provinceList:[],//省列表
    cityList:[],//城市列表
    countyList:[],//县列表
    bankList:[],//银行列表
    companyList:[],//部门列表
    nodeLableList:[]//站点标签列表
};

function reportFormCommon (state = initalize,action) {
    switch (action.type) {

        case "REPORT_FORM_COMMON_HANDLE"  :
            sessionStorage.setItem("reportFormCommonState",JSON.stringify(objectAssign({},state,action.options)));
            return objectAssign({},state,action.options);

        default :
            return state;
    }
}

export default reportFormCommon;
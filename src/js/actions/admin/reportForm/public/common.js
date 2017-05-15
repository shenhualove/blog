/**
 * Created by gaolei on 2017/4/25.
 *
 * 报表通用的action
 */
import {dialogHandle,ajaxErrorLog} from '../../dialog';
function reportFormCommonHandle(options){
    return {
        type:"REPORT_FORM_COMMON_HANDLE",
        options
    }
}

//查省
function queryProvince(options){
   return dispatch=>{
       $.XlAjax({
           url:"queryProvince",
           type:"GET",
           data:options,
           success:function(data){
               if(data.status=="0000"){
                   dispatch(reportFormCommonHandle({
                       provinceList:data.data
                   }));
               }
           },
           errorDialog:function(xhr, errorType, error){
               ajaxErrorLog(xhr, errorType, error,dispatch);
           }
       })
   }
}

//查市
function queryCity(options){
    return dispatch=>{
        $.XlAjax({
            url:"queryCity",
            type:"GET",
            data:options?options:{},
            success:function(data){
                if(data.status=="0000"){
                    dispatch(reportFormCommonHandle({
                        cityList:data.data
                    }));
                }
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}

//查县、区
function queryCounty(options){
    return dispatch=>{
        $.XlAjax({
            url:"queryCounty",
            type:"GET",
            data:options?options:{},
            success:function(data){
                if(data.status=="0000"){
                    dispatch(reportFormCommonHandle({
                        countyList:data.data
                    }));
                }
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}

//指定查询某类别的部门
function getCompanyByCompanyType(options){
    return dispatch=>{
        $.XlAjax({
            url:"getCompanyByCompanyType",
            type:"GET",
            data:options?options:{},
            success:function(data){
                if(data.status=="0000"){
                    dispatch(reportFormCommonHandle({
                        companyList:data.data
                    }));
                }
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}

//获取银行
function getBankTypeCodes(options){
    return dispatch=>{
        $.XlAjax({
            url:"getBankTypeCodes",
            type:"GET",
            data:options?options:{},
            success:function(data){
                if(data.status=="0000"){
                    dispatch(reportFormCommonHandle({
                        bankList:data.data
                    }));
                }
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}


//获取站点标签列表
function getNodeLabel(options){
    return dispatch=>{
        $.XlAjax({
            url:"getNodeLabelList",
            type:"GET",
            data:options?options:{},
            success:function(data){
                if(data.status=="0000"){
                    dispatch(reportFormCommonHandle({
                        nodeLableList:data.data
                    }));
                }
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}
export  {reportFormCommonHandle,queryProvince,queryCity,queryCounty,getCompanyByCompanyType,getBankTypeCodes,getNodeLabel};
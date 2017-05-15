/**
 * Created by gaolei on 2017/4/24.
 *
 * 全辖银行业务全量银行数据汇总报表-日
 */
import {dialogHandle,ajaxErrorLog} from '../dialog';
function bankAllDataDayHandle(options){
    return {
        type:"BANKALLDATADAY_HANDLE",
        options
    }
}

function bankAllDataDayLoad(options){
    return dispatch=>{
        dispatch(bankAllDataDayHandle({
            status:"loading"
        }));
        $.XlAjax({
            url:"bankbizRoutineReport",
            type:"GET",
            data:options,
            success:function(data){
                if(data.status=="0000"){
                    if(data.data.data.bankbizRoutineList.length>0) {
                        let isShow=false;
                        if(options.curPage==Math.ceil(data.data.count/options.pageSize)){
                            //当前是最后一页
                            isShow=true;
                        }
                        dispatch(bankAllDataDayHandle({
                            listData:data.data.data.bankbizRoutineList,
                            totalData:data.data.data.bankbizRoutineExt,
                            totalSize:data.data.count,
                            showTotal:isShow,
                            status:"success"
                        }));
                    }else{
                        dispatch(bankAllDataDayHandle({
                            listData:data.data.data.bankbizRoutineList,
                            totalData:data.data.data.bankbizRoutineExt,
                            totalSize:data.data.count,
                            status:"nothing"
                        }));
                    }
                }else{
                    dispatch(bankAllDataDayHandle({
                        status:"fail"
                    }));
                }
            },
            error:function(){
                dispatch(bankAllDataDayHandle({
                    status:"fail"
                }));
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}

function bankAllDataDayExport(options){
    return dispatch=>{
        $.XlAjax({
            url:"bankbizRoutineExportExcel",
            type:"GET",
            data:options,
            success:function(data){
                if(data.status=="0000"){
                    window.location.href=data.data.url;
                }else{
                    dispatch(dialogHandle({
                        show:true,
                        type:'tips',
                        tipsType:'warning',
                        content:data.message
                    }))
                }
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}

export  {bankAllDataDayHandle,bankAllDataDayLoad,bankAllDataDayExport};
/**
 * Created by apple on 17/5/16.
 */
import Fetch from '../../../utils/common/fetch';
import {dialogHandle,ajaxErrorLog} from '../dialog';

//触发action
export function columnListHandle(data){
    return {
        type:"COLUMN_LIST_HANDLE",
        data
    }
}

//获取栏目列表
export function getColumnList(options){
    return dispatch=>{
        dispatch(columnListHandle({
            status:"loading",
            curPage:options.curPage,
            pageSize:options.pageSize
        }));
        
        Fetch({
            url:"getColumnList",
            data:{
                pageSize:options.pageSize,
                curPage:options.curPage
            },
            success:function(data){
                if(data.status=="1"){
                    if(data.data.length>0){
                        dispatch(columnListHandle({
                            listData:data.data,
                            totalSize:data.count,
                            status:"success"
                        }));
                    }else{
                        dispatch(columnListHandle({
                            listData:data.data,
                            totalSize:data.count,
                            status:"nothing"
                        }));
                    }
                }else{
                    dispatch(columnListHandle({
                        status:"fail"
                    }));
                }
            },
            error:function(){
                dispatch(columnListHandle({
                    status:"fail"
                }));
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}
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

//删除栏目
export function deleteColumn(id,fn){
    return dispatch=>{
        Fetch({
            url:"deleteColumn",
            data:{
                id:id
            },
            success:function(data){
                if(data.status=="1"){
                    dispatch(dialogHandle({
                        show:true,
                        type:"tips",
                        tipsType:"success",
                        success:function(){
                            return true;
                        },
                        time:2000,
                        content:data.message
                    }))
                    typeof fn == 'function' && fn();
                }else{
                    dispatch(dialogHandle({
                        show:true,
                        type:"tips",
                        tipsType:"fail",
                        success:function(){
                            return true;
                        },
                        time:2000,
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
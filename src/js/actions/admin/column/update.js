/**
 * Created by shenhua on 2017/5/21.
 */
import Fetch from '../../../utils/common/fetch';
import {dialogHandle,ajaxErrorLog} from '../dialog';
import {browserHistory} from 'react-router';

//触发action
export function handle(data){
    return {
        type:"COLUMN_UPDATE_HANDLE",
        data
    }
}

//修改栏目
export function updateColumn(options){
    return dispatch=>{
        dispatch(handle({
            isSave:true
        }));

        Fetch({
            url:"updateColumn",
            data:options,
            success:function(data){
                if(data.status==1){
                    dispatch(dialogHandle({
                        show:true,
                        type:"tips",
                        tipsType:"success",
                        hide:function(){
                            browserHistory.push("/admin/column/list");
                        },
                        time:2000,
                        content:data.message
                    }))
                }else{
                    dispatch(dialogHandle({
                        show:true,
                        type:"tips",
                        tipsType:"fail",
                        content:data.message
                    }))
                }
                dispatch(handle({
                    isSave:false
                }));
            },
            error:function(){
                dispatch(handle({
                    isSave:false
                }));
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}

//获取栏目信息
export function getColumn(id){
    return dispatch=>{
        Fetch({
            url:"getColumn",
            data:{id:id},
            success:function(data){
                if(data.status==1){
                    dispatch(handle({
                        title:data.data.title,//名称
                        keyWord:data.data.keyWord,//关键字
                        caption:data.data.caption,//说明
                        sort :data.data.sort,//排序
                    }));
                }else{
                    dispatch(dialogHandle({
                        show:true,
                        type:"tips",
                        tipsType:"fail",
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
/**
 * Created by shenhua on 2017/6/4.
 */
import Fetch from '../../../utils/common/fetch';
import {dialogHandle,ajaxErrorLog} from '../dialog';
import {browserHistory} from 'react-router';

//触发action
export function handle(data){
    return {
        type:"LINK_UPDATE_HANDLE",
        data
    }
}

//修改栏目
export function updateLink(options){
    return dispatch=>{
        dispatch(handle({
            isSave:true
        }));

        Fetch({
            url:"updateLink",
            data:options,
            success:function(data){
                if(data.status==1){
                    dispatch(dialogHandle({
                        show:true,
                        type:"tips",
                        tipsType:"success",
                        hide:function(){
                            browserHistory.push("/admin/link/list");
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
export function viewLink(id,columnId){
    return dispatch=>{
        Fetch({
            url:"viewLink",
            data:{
                id,
                columnId
            },
            success:function(data){
                if(data.status==1){
                    dispatch(handle({
                        title:data.data.title,//名称
                        url:data.data.url,//地址
                        sort :data.data.sort//排序
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
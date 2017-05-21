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

//添加栏目
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

export function getColumn(id){
    return dispatch=>{
        dispatch(handle({
            isSave:true
        }));

        Fetch({
            url:"getColumn",
            data:{id:id},
            success:function(data){
                if(data.status==1){

                }else{

                }
            },
            error:function(){

            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        })
    }
}
/**
 * Created by shenhua on 2017/5/20.
 */
import Fetch from '../../../utils/common/fetch';
import {dialogHandle,ajaxErrorLog} from '../dialog';
import {browserHistory} from 'react-router';

//触发action
export function handle(data){
    return {
        type:"LINK_ADD_HANDLE",
        data
    }
}

//添加链接
export function addLink(options){
    return dispatch=>{
        dispatch(handle({
            isSave:true
        }));

        Fetch({
            url:"addLink",
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
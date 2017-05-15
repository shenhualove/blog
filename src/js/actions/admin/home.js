
//首页模块事件处理
import {ajaxErrorLog} from './dialog';
function homeHandle(options){
    return {
        type:"HOME_HANDLE",
        options
    }
}

//首页 图表数据
function getEchartData(options){
    return dispatch=>{
        $.XlAjax({
            url:"report",
            data:{
            	
            },
            success:function(data){
                if(data.status=="0000"){  
                   var list=data.data;
                   dispatch(homeHandle({
                        listData:list.date,
                        listBalance:list.balance,
                        listNodeCount:list.nodeCount
                    }));
                    options.callback();
                }else{
                    $.dialog({
                        type:'message',
                        title:"",
                        content:data.message
                    });
                }
            },
            errorDialog:function(xhr, errorType, error){
                ajaxErrorLog(xhr, errorType, error,dispatch);
            }
        });
    }
}

export {
    getEchartData,homeHandle
};
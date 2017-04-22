/**
 * Created by shenhua on 2017/4/22.
 *
 * 列表页面
 */
import Fetch from '../../utils/common/fetch';

export function listHandle(type,data){
    return {
        type,
        data
    }
}


//获取列表数据
export function getList(id,page,pageSize){
    return dispatch=>{
        Fetch({
            url:"list",
            data:{
                columnId:id,
                page:page,
                pageSize:pageSize
            },
            success:function(data){
                if(data.code===200000&&data.list.length>0){
                    dispatch(listHandle("GET_NEW",data.list))
                }
            }
        });
    }
}
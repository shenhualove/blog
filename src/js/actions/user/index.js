/**
 * Created by apple on 17/4/19.
 *
 * 首页
 */
import Fetch from '../../utils/common/fetch';

export function indexHandle(type,data){
    return {
        type,
        data
    }
}


//获取导航
export function getNav(){
    return dispatch=>{
        Fetch({
            url:"columnList",
            success:function(data){
                if(data.code===200000){
                    data.list.splice(3,0,{});//增加一个空对象方便输出LOGO排版
                    dispatch(indexHandle("GET_NAV",data.list));
                    dispatch(indexHandle("SHOW_VIEW",true));
                }
            }
        });
    }
}

//获取文档链接
export function getStudyLink(){
    return dispatch=>{
        Fetch({
            url:"studyLinks",
            success:function(data){
                if(data.code===200000&&data.list.length>0){
                    dispatch(indexHandle("GET_STUDY_LINKS",data.list));
                }
            }
        });
    }
}

//获取友情链接
export function getFriendLink(){
    return dispatch=>{
        Fetch({
            url:"friendLinks",
            success:function(data){
                if(data.code===200000&&data.list.length>0){
                    dispatch(indexHandle("GET_FRIEND_LINKS",data.list));
                }
            }
        });
    }
}
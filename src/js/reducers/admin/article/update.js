/**
 * Created by shenhua on 2017/6/4.
 */
//初始化state
const initalize = {
    title:'',//名称
    keyWord:'',//关键字
    caption:'',//说明
    imgUrl:'',//文章缩略图
    content:'',//文章内容
    columnId:'',//选中的栏目ID
    columnName:'',//选中的栏目名称
    columnList:[],//栏目列表
    author:'',//作者
    source:'',//来源
    totalReView:0,//评论总数
    totalViews:0,//浏览总数
    time:'',//添加时间
    isHot:false,//热门推荐
    isSave:false//防重复提交
};

function articleUpdate (state = initalize,action) {
    switch (action.type) {
        case "ARTICLE_UPDATE_HANDLE"  :
            return Object.assign({},state,action.data);
        default :
            return state;
    }
}

export default articleUpdate;
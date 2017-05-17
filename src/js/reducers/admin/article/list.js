/**
 * Created by apple on 17/5/16.
 */
//初始化state
const initalize = {
    columnId:'',//选择栏目
    columnList:[],//栏目列表
    title:"",//文章标题
    temp_options:{
        columnId:'',//选择栏目
        title:"",//文章标题
    },//临时搜索条件
    listData:[],//数据列表
    curPage:1,//默认为当前第一页
    pageSize:10,//默认显示多少条
    totalSize:0,//总条数
    status:"loading",//默认请求加载中
    titleList:[
        {title:"文章名称",type:"title"},
        {title:"所属栏目",type:"columnName"},
        {title:"文章作者",type:"author"},
        {title:"文章来源",type:"source"},
        {title:"浏览次数",type:"totalViews"},
        {title:"添加时间",type:"time"},
        {title:"操作",htmlType:[
            {type:"button",text:"修改",callBack:null,param:"id"},
            {type:"button",text:"删除",callBack:null,param:"id"}
        ]}
    ]
};

function articleList (state = initalize,action) {
    switch (action.type) {
        case "ARTICLE_LIST_HANDLE"  :
            return Object.assign({},state,action.data);
        default :
            return state;
    }
}

export default articleList;
var router = require('koa-router')();
var mySql  = require('../../utils/mysql');

router.get('/admin', async function (ctx, next) {
    await ctx.render('admin');
});

//登录接口
router.post('/admin/accountLogin', async function (ctx, next) {
    ctx.body = {
        status:1,
        data:{
         userName:"神话"
        },
        message:'登录成功'
    }
});

//获取栏目列表
router.post('/admin/getColumnList', async function (ctx, next) {
    let sql  = "select * from `column` order by  `sort` desc";
    let list = await mySql.query(sql);
    ctx.body = {
        status:1,
        data:list,
        count:list.length,
        message:'登录成功'
    }
});

//获取文章列表
router.post('/admin/getArticleList', async function (ctx, next) {
    var page = {
        curPage:ctx.request.body.curPage,
        pageSize:ctx.request.body.pageSize
    };
    var sql  = "select * from `article` order by id desc LIMIT "+
               (page.curPage-1)*page.pageSize+','+page.pageSize;
    let list = await mySql.query(sql);
    ctx.body = {
        status:1,
        data:list,
        count:list.length,
        message:'成功'
    }
});

//获取全部栏目
router.post('/admin/getColumnAll', async function (ctx, next) {
    let sql  = "select * from `column`";
    let list = await mySql.query(sql);
    ctx.body = {
        status:1,
        data:list,
        message:'成功'
    }
});

//删除文章
router.post('/admin/deleteArticle', async function (ctx, next) {
    let id   = ctx.request.body.id;
    let sql  = "DELETE FROM `article`  WHERE `id`="+id;
    let result = await mySql.query(sql);
    if(result.affectedRows===1){//判断是否影响一行
        ctx.body = {
            status:1,
            message:'删除文章成功'
        }
    }else{
        ctx.body = {
            status:2,
            message:'删除文章失败'
        }
    }
});


//定位到后台首页
router.get('/admin/*', async function (ctx, next) {
    await ctx.render('admin');
});

//定位到前台首页
router.get('/*', async function (ctx, next) {
    await ctx.render('index');
});

module.exports = router;
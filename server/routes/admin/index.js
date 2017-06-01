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
    let count = await mySql.query("select count(id) as total from `column`");
    ctx.body = {
        status:1,
        data:list,
        count:count[0].total,
        message:'登录成功'
    }
});

//查询栏目
router.post('/admin/getColumn', async function (ctx, next) {
    let id   = ctx.request.body.id;
    let sql  = "select * from `column` where  `id` = "+id;
    let list = await mySql.query(sql);
    ctx.body = {
        status:1,
        data:list[0],
        message:'登录成功'
    }
});

//新增栏目
router.post('/admin/addColumn', async function (ctx, next) {
    let postData={
        title:ctx.request.body.title,
        keyWord:ctx.request.body.keyWord,
        sort:ctx.request.body.sort,
        caption:ctx.request.body.caption,
    };
    let sql="INSERT INTO `column`(`id`, `title`, `keyWord`, `sort`, `caption`, `time`) VALUES (NULL,'"+postData.title+"','"+postData.keyWord+"','"+postData.sort+"','"+postData.caption+"',CURRENT_TIMESTAMP)";
    let result = await mySql.query(sql);
    if(result.affectedRows===1){//判断是否影响一行
        ctx.body = {
            status:1,
            message:'添加栏目成功'
        }
    }else{
        ctx.body = {
            status:2,
            message:'添加栏目失败'
        }
    }
});

//更新栏目
router.post('/admin/updateColumn', async function (ctx, next) {
    let postData={
        id:ctx.request.body.id,
        title:ctx.request.body.title,
        keyWord:ctx.request.body.keyWord,
        sort:ctx.request.body.sort,
        caption:ctx.request.body.caption,
    };
    let sql="UPDATE  `column` SET  `title` = '"+postData.title+"', `keyWord` = '"+postData.keyWord+"'," +
            " `sort` = '"+postData.sort+"', `caption` = '"+postData.caption+"' WHERE `id` = "+postData.id;
    let result = await mySql.query(sql);
    if(result.affectedRows===1){//判断是否影响一行
        ctx.body = {
            status:1,
            message:'修改栏目成功'
        }
    }else{
        ctx.body = {
            status:2,
            message:'修改栏目失败'
        }
    }
});

//删除栏目
router.post('/admin/deleteColumn', async function (ctx, next) {
    let id   = ctx.request.body.id;
    let sql  = "DELETE FROM `column`  WHERE `id`="+id;
    let result = await mySql.query(sql);
    if(result.affectedRows===1){//判断是否影响一行
        ctx.body = {
            status:1,
            message:'删除栏目成功'
        }
    }else{
        ctx.body = {
            status:2,
            message:'删除栏目失败'
        }
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
    let count = await mySql.query("select count(id) as total from `article`");
    ctx.body = {
        status:1,
        data:list,
        count:count[0].total,
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

//获取链接列表
router.post('/admin/getLinkList', async function (ctx, next) {
    var page = {
        curPage:ctx.request.body.curPage,
        pageSize:ctx.request.body.pageSize,
        columnId:ctx.request.body.columnId
    };
    let tableName = page.columnId == 1?"link":"study";//1为link,2为study
    var sql  = "select * from `"+tableName+"` order by id desc LIMIT "+
        (page.curPage-1)*page.pageSize+','+page.pageSize;
    let list = await mySql.query(sql);
    let count = await mySql.query("select count(id) as total from `"+tableName+"`");
    ctx.body = {
        status:1,
        data:list,
        count:count[0].total,
        message:'成功'
    }
});

//删除链接
router.post('/admin/deleteLink', async function (ctx, next) {
    let id   = ctx.request.body.id;
    let columnId = ctx.request.body.columnId;
    let tableName = columnId == 1?"link":"study";//1为link,2为study
    let sql  = "DELETE FROM `"+tableName+"`  WHERE `id`="+id;
    let result = await mySql.query(sql);
    if(result.affectedRows===1){//判断是否影响一行
        ctx.body = {
            status:1,
            message:'删除链接成功'
        }
    }else{
        ctx.body = {
            status:2,
            message:'删除链接失败'
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
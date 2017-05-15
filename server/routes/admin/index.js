var router = require('koa-router')();

router.get('/admin', async function (ctx, next) {
  await ctx.render('admin', {

  });
});

//定位到后台首页
router.get('/admin/*', async function (ctx, next) {
  await ctx.render('admin', {
  });
});

//定位到前台首页
router.get('/*', async function (ctx, next) {
  await ctx.render('index', {
  });
});

module.exports = router;
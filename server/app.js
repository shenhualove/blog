const Koa = require('koa');
const app = new Koa();
const views = require('koa-views');
const json = require('koa-json');
const onerror = require('koa-onerror');
const bodyparser = require('koa-bodyparser')();
const logger = require('koa-logger');
const session = require("koa-session2");
const RedisStore = require("./utils/store");


console.log(RedisStore)

const index = require('./routes/user/index');
const admin = require('./routes/admin/index');

// error handler
onerror(app);

// middlewares
app.use(bodyparser);
app.use(json());
app.use(logger());
app.use(require('koa-static')(__dirname + '/views'));

app.use(views(__dirname + '/views', {
  extension:'html'
}));

//设置SESSION
app.use(session({
  key: "SESSIONID",   //default "koa:sess"
  store:new RedisStore(),
  maxAge: 50000  //设置session超时时间
}));

// logger
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
});

// routes
app.use(index.routes(), index.allowedMethods());
app.use(admin.routes(), admin.allowedMethods());

module.exports = app;

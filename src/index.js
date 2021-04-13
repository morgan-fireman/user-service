const Koa = require("koa");
const logger = require("koa-logger");
const bodyParser = require("koa-bodyparser');
    const app = new Koa();
    const port = 30000;

    // adding logging
    app.use(logger()); app.use(bodyParser());

    app.use(async ctx => {
      ctx.body = 'Hello World';
    });

    app.listen(port);

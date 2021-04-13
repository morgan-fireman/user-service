const utils = require('./utils');

const router = async (ctx, next) => {
  const { method, url } = ctx.request;

  if (method === 'GET') {
    await utils.responseResolver(ctx, url);
  } else {
    ctx.status = 404;
  }
  await next();
};

module.exports = router;

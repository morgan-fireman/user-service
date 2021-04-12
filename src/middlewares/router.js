const utils = require('./utils');

const router = (path) => async (ctx, next) => {
  const { method, url } = ctx.request;

  if (method === 'GET' && (url === path || url === `${path}/`)) {
    await utils.responseResolver(ctx, path);
  } else {
    ctx.response.status = 404;
  }
  await next();
};

module.exports = router;

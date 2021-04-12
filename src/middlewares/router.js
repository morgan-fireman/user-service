const db = require('../db');

const responseResolver = async (ctx, path) => {
  try {
    const data = await db.getData(path);
    ctx.response.type = 'application/json';
    ctx.response.body = data;
  } catch (err) {
    ctx.response.status = 500;
  }
};

const router = (path) => async (ctx, next) => {
  const { method, url } = ctx.request;

  if (method === 'GET' && (url === path || url === `${path}/`)) {
    await responseResolver(ctx, path);
  } else {
    ctx.response.status = 404;
  }
  await next();
};

module.exports = router;

const db = require('../db');

const users = async (ctx, next) => {
  const { method, url } = ctx.request;
  if (method === 'GET' && url.includes('users')) {
    try {
      const data = await db.getData('users');
      ctx.response.type = 'application/json';
      ctx.response.body = data;
    } catch (err) {
      ctx.response.status = 500;
    }
  }
  await next();
};

module.exports = {
  users,
};

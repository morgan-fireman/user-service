const db = require('../db');

const responseResolver = async (ctx, path) => {
  try {
    const data = await db.getData(path);
    ctx.response.type = 'application/json';
    ctx.response.body = data;
  } catch (err) {
    ctx.status = 500;
  }
};

module.exports = {
  responseResolver,
};

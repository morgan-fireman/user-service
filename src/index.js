const Koa = require('koa');
const logger = require('koa-logger');

const app = new Koa();
const port = 3000;

app.use(logger());

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`server is running at http://localhost:${port}`);
});

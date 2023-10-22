const Koa = require("koa");

const app = new Koa();
const PORT = 3000;

// app.use(ebayRoutes.routes()).use(ebayRoutes.allowedMethods());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

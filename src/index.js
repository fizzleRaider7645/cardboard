import fetchMarketplaceInsights from "./services/ebay/marketPlaceInsights.js";
import dotenv from "dotenv";

dotenv.config({ path: "./.env", debug: true });

// const Koa = require("koa");

// const app = new Koa();
// const PORT = 3000;

// // app.use(ebayRoutes.routes()).use(ebayRoutes.allowedMethods());

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const queryString = encodeURIComponent("Jayson Tatum");

fetchMarketplaceInsights(queryString);

import axios from "axios";
import { BASE_URL } from "../../routes/ebay/index.js";
import fetchToken from "./authentication/index.js";

async function fetchMarketplaceInsights(queryParams = {}) {
  const token = await fetchToken();

  const url = `${BASE_URL}/buy/marketplace_insights/v1_beta/item_sales/search`; // Adjust this endpoint to the specific API call you're making within Marketplace Insights

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    params: querystring.stringify(queryParams),
  };

  try {
    const response = await axios.get(url, config);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error.response.data);
    throw new Error(
      `Error fetching Marketplace Insights from eBay: ${error.message}`
    );
  }
}

export default fetchMarketplaceInsights;

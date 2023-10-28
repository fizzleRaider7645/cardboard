import axios from "axios";
import { BASE_URL } from "../../routes/ebay/index.js";
import fetchToken from "./authentication/index.js";

async function fetchMarketplaceInsights(queryParams = {}) {
  const token = await fetchToken();

  const url = `${BASE_URL}/buy/marketplace_insights/v1_beta/item_sales/search?`; // Adjust this endpoint to the specific API call you're making within Marketplace Insights

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    // params: queryParams,
  };

  try {
    const response = await axios.get(
      `${BASE_URL}/buy/browse/v1/item_summary/search?q=shirt&category_ids=15724&aspect_filter=categoryId%3A15724%2CColor%3A%7BRed%7D`,
      config
    );
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

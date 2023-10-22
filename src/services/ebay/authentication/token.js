import axios from "axios";
import querystring from "querystring";
import { BASE_URL, routes } from "../../../routes/ebay/index.js";

export default async function requestToken() {
  const { CLIENT_ID, CLIENT_SECRET } = process.env;

  const url = `${BASE_URL}${routes.TOKEN}`;

  const base64Credentials = Buffer.from(
    `${CLIENT_ID}:${CLIENT_SECRET}`
  ).toString("base64");

  // URL-encode data
  const data = querystring.stringify({
    grant_type: "client_credentials",
    scope: "https://api.ebay.com/oauth/api_scope",
  });

  const config = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${base64Credentials}`,
    },
  };

  try {
    const response = await axios.post(url, data, config);
    return response.data;
  } catch (error) {
    throw new Error(`Failed to fetch token: ${error.message}`);
  }
}

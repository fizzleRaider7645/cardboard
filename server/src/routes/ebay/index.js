const { NODE_ENV } = process.env;

export const BASE_URL =
  NODE_ENV === "production"
    ? "https://api.ebay.com"
    : "https://api.sandbox.ebay.com";

export const routes = {
  TOKEN: "/identity/v1/oauth2/token",
};

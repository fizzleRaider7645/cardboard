import requestToken from "./token.js";
import dotenv from "dotenv";

dotenv.config({ path: "../../../.env", debug: true });

async function main() {
  try {
    const tokenData = await requestToken();
    console.log("Token received:", tokenData);
  } catch (error) {
    console.error(error.message);
  }
}

main();

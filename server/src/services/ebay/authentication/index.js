import requestToken from "./token.js";

async function main() {
  try {
    const { access_token } = await requestToken();
    return access_token;
  } catch (error) {
    console.error(error.message);
  }
}

export default main;

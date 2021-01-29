const URL = "https://api.coincap.io/v2";
const metodo = {
  method: "GET"
};
async function getAssets() {
  try {
    const response = await fetch(`${URL}/assets?limit=20`, metodo);
    const btc = await response.json();
    return btc.data;
  } catch (error) {
    return console.log("error", error);
  }
}

async function getAsset(coin) {
  const resp = await fetch(`${URL}/assets/${coin}`);
  const resp_1 = await resp.json();
  return resp_1.data;
}

async function getAssetHistory(coin) {
  const now = new Date();
  // console.log("now", now)
  const end = now.getTime();
  // console.log("end", end)
  now.setDate(now.getDate() - 1);
  const start = now.getTime();
  const resp = await fetch(
    `${URL}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  );
  const resp_1 = await resp.json();
  return resp_1.data;
}

//Obtiene la lista de mercados para una modena en espesifico
async function getMarkets(coin) {
  const resp = await fetch(`${URL}/assets/${coin}/markets?limit=5`);
  const resp_1 = await resp.json();
  return resp_1.data;
}

//devuelve un exchange a apartir de un id
async function getExchange(id) {
  const resp = await fetch(`${URL}/exchanges/${id}`);
  const resp_1 = await resp.json();
  return resp_1.data;
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange
};

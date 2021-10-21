import CoinGecko from 'coingecko-api';

const GetData = (() => {
   
    const CoinGeckoClient = new CoinGecko();

    const getCoinsList = async () => {
        let coinsList = await CoinGeckoClient.coins.list();
        return coinsList;
    };
  

    const ping = async() => {
        const data = await CoinGeckoClient.ping();
        return data;
    };
    return {ping, getCoinsList}

})();


export { GetData };


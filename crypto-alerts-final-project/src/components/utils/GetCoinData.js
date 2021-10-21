import CoinGecko from 'coingecko-api';

const GetData = (() => {
   
    const CoinGeckoClient = new CoinGecko();

    const ping = async() => {
        const data = await CoinGeckoClient.ping();
        return data;
    };
    return {ping}

})();


export { GetData };


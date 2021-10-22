import CoinGecko from 'coingecko-api';

const GetData = (() => {
   
    const CoinGeckoClient = new CoinGecko();


    const getAllCoins = async () => {


        try {
               let allCoins = await CoinGeckoClient.coins.all({
            order: 'gecko_desc',
            per_page: 100
            });
        return allCoins;
        
        }
  catch(error) {
    console.error('Cant fetch data or doesnt exist', error);
        }
     
}

    const getCoinsList = async () => {
        let coinsList = await CoinGeckoClient.coins.list();
        return coinsList;
    };
  

    const ping = async() => {
        const data = await CoinGeckoClient.ping();
        return data;
    };
    return {ping, getCoinsList, getAllCoins}

})();


export { GetData };


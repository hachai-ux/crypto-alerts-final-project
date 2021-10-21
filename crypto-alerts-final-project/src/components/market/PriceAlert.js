
import { GetData } from '../utils/GetCoinData';
import { useEffect, useState } from 'react';

const PriceAlert = () => {

    
    const [ping, setPing] = useState(null);
    const [coinsList, setCoinsList] = useState(null);

    useEffect(() => {

        const showPing = async () => {
            const tempPing = await GetData.ping();
        
            //api data needs to be assigned to state to be usable, because react wants something to render and you cannot render a promise
            setPing(tempPing)
    
        }

        const showCoinslist = async () => {
            const tempCoinsList = await GetData.getCoinsList();
            setCoinsList(tempCoinsList);
            console.log(tempCoinsList);
        } 

        showPing();
        showCoinslist();

    }, []);

    
     


    const DisplayData = () => {
        if (ping !== null ) {
            
            return ( 
                <div>
                    <div>{ping.data.gecko_says}</div>
                    <div>{coinsList.data[4000].name}({coinsList.data[4000].symbol})</div>
                    
                    
            </div>
            )
           
        }
            
        else return null
    }
    


    return (
        <div>
            <DisplayData />
        </div>
    )
}

export default PriceAlert;
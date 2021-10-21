
import { GetData } from '../utils/GetCoinData';
import { useEffect, useState } from 'react';

const PriceAlert = () => {

    
    const [data, setData] = useState(null);

    useEffect(() => {

        const showData = async () => {
            const tempData = await GetData.ping();
        
            //api data needs to be assigned to state to be usable, because react wants something to render and you cannot render a promise
            setData(tempData)
            console.log(data);
        }
           showData();
    }, []);


    const DisplayData = () => {
        if (data !== null ) {
            
            return ( 
                 <div>
            {data.data.gecko_says}
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
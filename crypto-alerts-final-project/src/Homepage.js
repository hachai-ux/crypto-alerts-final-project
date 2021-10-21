
import { Link } from 'react-router-dom';
import Alert from './components/scaffold/Alert';
import PriceAlert from './components/market/PriceAlert';

const Homepage = () => {



    return (
        <div className="homepage">
            <h1>Crypto Alerts</h1>
            <Alert>
                <PriceAlert />
            </Alert>
            
            
            
        </div>
        
    );
};

export default Homepage;
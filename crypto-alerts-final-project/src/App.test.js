// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { App } from './App.js';
import { GetData } from './components/utils/GetCoinData';

test('Is code 200', async () => {

    //make test async so that expect will wait for data to be received
   
    const result = await GetData.ping();
    expect(result.code).toEqual(200);
       
  });
    
  
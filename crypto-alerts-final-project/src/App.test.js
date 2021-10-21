// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { App } from './App.js';

test('Does App component exist?', () => {
    console.log(App);
        expect(App).toEqual(true);
  });
    
  
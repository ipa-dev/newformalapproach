import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// We will need to import this from redux to create our store and make use of the thunk
import { createStore, applyMiddleware } from 'redux';
// Dont forget to import redux thunk
import thunk from 'redux-thunk';
// Getting our combined reducers
import reducers from './reducers/reducers';
// And our Recipe component
import PageContainer from './components/PageContainer';
import './scss/style.scss';

const store = createStore(reducers, applyMiddleware(thunk));


// This will be the entry point of our app
const App = () => {
  return (
    // We will add our components here
    <PageContainer page="Home"/>
  );
};

ReactDOM.render(
  // We need to wrap our app in provider to make use of redux
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('.react-container'));

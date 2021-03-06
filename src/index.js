import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
 import App from './App';
import * as serviceWorker from './serviceWorker';
 import store from './redux/store';
import { Provider } from 'react-redux';
// import Test, { store } from './Test';

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
), document.getElementById('root'));
serviceWorker.unregister();

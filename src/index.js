import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'semantic-ui-css/semantic.min.css';
import 'typeface-roboto';
import store from './store/store';
import '../src/assets/styles/global.css';
import App from './App';

/* Application rendering. */
ReactDOM.render(
    <BrowserRouter>
        <Provider store={ store }>
            <App />
            <ToastContainer />
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

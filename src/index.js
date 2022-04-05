import React from 'react';
import ReactDOM from 'react-dom';
import '@/index.css';
import App from './app';
import reportWebVitals from '@/reportWebVitals';
import {Router} from 'react-router-dom';
import history from '@/utils/history';
import {Provider} from 'react-redux';
import store from '@/redux/store';
import {AppContextProvider} from '@/context/appContext';

ReactDOM.render(
    <React.StrictMode>
        <Router history={history}>
            <Provider store={store}>
                <AppContextProvider>
                    <App/>
                </AppContextProvider>
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

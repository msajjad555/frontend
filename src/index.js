import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux'
import {Provider as AlertProvider,positions,transitions} from 'react-alert'
import store from './store'
// import './index.css';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
// import { AlertTemplate } from 'react-alert-template-basic';
// import { positions,transitions,Provider as AlertProvider } from 'react-alert';
const options={
    timeout:5000,
    position:positions.BOTTOM_CENTER,
    transition:transitions.Scale
}
const AlertTemplate={
    
}
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <Provider store={store}> 
 <AlertProvider template={AlertTemplate}{...options}>
<AlertProvider>
<App/>,
</AlertProvider>
</AlertProvider>

 
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

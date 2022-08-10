import React from 'react';
import ReactDOM from 'react-dom/client';
// import "./assets/css/aos.css"
// import "./assets/css/bootstrap.min.css"
// import "./assets/css/dark-theme.css"
// import "./assets/css/fancybox.css"
// import "./assets/css/aos.css"
// import "./assets/css/jquery-ui-min.css"
// import "./assets/css/owl.carousel.min.css"
// import "./assets/css/remixicon.css"
// import "./assets/css/style.css"
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

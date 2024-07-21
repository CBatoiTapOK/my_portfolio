import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

document.fonts.load("1em Source Sans Pro").then(function() {
  console.log("Шрифт Source Sans Pro загружен");
}).catch(function(error) {
  console.error("Ошибка загрузки шрифта:", error);
});

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
ReactDOM.render(
    <p>Hello Igor</p>,
    document.querySelector('#root')
);

if (module.hot) {
  module.hot.accept();
}
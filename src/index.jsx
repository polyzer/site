import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
    <p>Hello world</p>,
    document.querySelector('body')
);

if (module.hot) {
  module.hot.accept();
}
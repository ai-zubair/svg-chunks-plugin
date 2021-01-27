import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

function renderApp(){
  render(
    <App />,
    document.getElementById("app")
  );
}

renderApp();



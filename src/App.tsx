import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AsyncRoute, ComponentProps } from './components/AsyncRoute';

namespace ModuleLoaders{
  export const landingLoader = () => import(
    /* webpackChunkName: "Landing" */
    /* webpackPrefetch: true */
    './components/Landing');
  
  export const dummyLoader = () => import(
    /* webpackChunkName: "Dummy" */
    /* webpackPrefetch: true */
    './components/Dummy');
}

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            component={(props: ComponentProps) => <AsyncRoute componentLoader={ModuleLoaders.landingLoader} componentProps={props} />}
          />
          <Route
            path="/dummy"
            component={(props: ComponentProps) => <AsyncRoute componentLoader={ModuleLoaders.dummyLoader} componentProps={props} />}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export { App };
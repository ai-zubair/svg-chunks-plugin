import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { AsyncRoute, ComponentProps } from './components/AsyncRoute';

namespace ModuleLoaders{
  export const landingLoader = () => import(/* webpackChunkName: "Landing" */'./components/Landing');
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
          <Route path="/demo" component={()=><div>This is another demo path</div> } />
        </Switch>
      </BrowserRouter>
    )
  }
}

export { App };
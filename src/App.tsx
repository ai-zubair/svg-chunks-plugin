import React, { Fragment, Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={()=><div>This is a demo path</div> } />
          <Route path="/demo" component={()=><div>This is another demo path</div> } />
        </Switch>
      </BrowserRouter>
    )
  }
}

export { App };
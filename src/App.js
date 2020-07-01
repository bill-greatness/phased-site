import React from 'react';
import {Homepage, Portfolio} from './components'
import {TopNavigation} from './layouts'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
      <>
    <Router>
        <TopNavigation />
        <Switch>
            <Route path='/' exact component={Homepage} />
            <Route path='/portfolio' component={Portfolio} />
        </Switch>
    </Router>
     </>
  );
}

export default App;

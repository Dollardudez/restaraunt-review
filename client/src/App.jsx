import React from 'react';
import {BrowserRouter as Router, Switch, Route} from  "react-router-dom";
import Home from './routes/Home';
import UpdatePage from './routes/UpdatePage';
import RestaurantDetail from './routes/RestaurantDetail';
import { RestaurantContextProvider } from './context/RestaurantsContext';

const App = () => {
  return (
    <RestaurantContextProvider>
      <div className="container">
    <Router>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/restaurants/:id/update" component={UpdatePage}/>
          <Route exact path="/restaurants/:id" component={RestaurantDetail}/>
      </Switch>
    </Router>
    </div>
    </RestaurantContextProvider>
  );
}

export default App;
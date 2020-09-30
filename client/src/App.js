import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import OneDayWeatherForm from './components/weatherForms/OneDayWeatherForm';
import Requests from './components/weatherForms/Requests';
import FiveDayByThreeHourWeatherForm from './components/weatherForms/FiveDayByThreeHourWeatherForm';
import Analysis from './components/weatherForms/Analysis';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () =>
{
  return (
    <Provider store={store}>
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path='/' component={Landing} />
          <Route exact path='/OneDayWeather' component={OneDayWeatherForm} />
          <Route exact path='/Requests' component={Requests} />
          <Route exact path='/FiveDayByThreeHourWeather' component={FiveDayByThreeHourWeatherForm} />
          <Route exact path='/Analysis' component={Analysis} />
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;

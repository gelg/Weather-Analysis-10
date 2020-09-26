import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/layouts/Navbar';
import Landing from './components/layouts/Landing';
import OneDayWeatherForm from './components/weatherForms/OneDayWeatherForm';
import FourDayHourlyWeatherAverageForm from './components/weatherForms/FourDayHourlyWeatherAverageForm';
import FiveDayByThreeHourWeatherForm from './components/weatherForms/FiveDayByThreeHourWeatherForm';

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
          <Route exact path='/FourDayHourlyWeatherAverage' component={FourDayHourlyWeatherAverageForm} />
          <Route exact path='/FiveDayByThreeHourWeather' component={FiveDayByThreeHourWeatherForm} />
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;

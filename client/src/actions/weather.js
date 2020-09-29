import axios from 'axios';

import{
  GET_ONEDAYWEATHERSUCCESS,
  GET_FIVEDAYBYTHREEHOURWEATHERSUCCESS
} from './types';


// Get One Day Weather Data
export const getOneDayWeather = ({ city, state, country}) => async dispatch => {

  // make a config object that says we are sending a json object
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // store city, state, and country into a json object
  const body = JSON.stringify({ city, state, country});

  try
  {
    // send a post request to our express backend and wait for a response
    const res = await axios.post('/api/oneDayWeather', body, config);

    // dispatch the action with data from the response to the reducer to update the state
    //console.log(res.data);
    dispatch({
      type: GET_ONEDAYWEATHERSUCCESS,
      payload: res.data
    });

  }
  catch (err)
  {
    console.log(err);
  }

}

// Get Five Day By Three Hour Weather Data
export const getFiveDayByThreeHourWeather = ({ city, state, country}) => async dispatch => {

  // make a config object that says we are sending a json object
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // store city, state, and country into a json object
  const body = JSON.stringify({ city, state, country});

  try
  {
    // send a post request to our express backend and wait for a response
    const res = await axios.post('/api/fiveDayByThreeHourWeather', body, config);

    // dispatch the action with data from the response to the reducer to update the state
    dispatch({
      type: GET_FIVEDAYBYTHREEHOURWEATHERSUCCESS,
      payload: res.data
    });

  }
  catch (err)
  {
    console.log(err);
  }

}

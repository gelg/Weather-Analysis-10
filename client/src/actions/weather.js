import axios from 'axios';

import{
  GET_ONEDAYWEATHERSUCCESS,
  GET_FIVEDAYBYTHREEHOURWEATHERSUCCESS,
  GET_REQUESTSSUCCESS,
  GET_ANALYSISSUCCESS
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

// Get Weather Requests for one day
export const getRequests = ({ date }) => async dispatch => {
  // make a config object that says we are sending a json object
  // console.log(date);
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // store city, state, and country into a json object
  const body = JSON.stringify({ date });
  try
  {
    // send a post request to our express backend and wait for a response
    const res = await axios.post('/api/requests', body, config);


    // dispatch the action with data from the response to the reducer to update the state
    dispatch({
      type: GET_REQUESTSSUCCESS,
      payload: res.data
    });

  }
  catch (err)
  {
    console.log(err);
  }

}

export const getAnalysis = ({ file }) => async dispatch => {

  // make a config object that says we are sending a json object
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // store city, state, and country into a json object
  const body = JSON.stringify({ file });

  try
  {
    // send a post request to our express backend and wait for a response
    const res = await axios.post('/api/analysis', body, config);

    // console.log(res.data);
    // dispatch the action with data from the response to the reducer to update the state
    dispatch({
      type: GET_ANALYSISSUCCESS,
      payload: res.data
    });

  }
  catch (err)
  {
    console.log(err);
  }

}

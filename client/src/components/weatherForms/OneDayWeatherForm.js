import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getOneDayWeather } from '../../actions/weather';
import PropTypes from 'prop-types';
import axios from 'axios';
import store from '../../store';
import '../../App.css';

const OneDayWeatherForm = ({getOneDayWeather}) =>
{
  const [formData, setFormData] = useState({
    country: '',
    state: '',
    city: ''
  });

  const { country, state, city } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if(country !== 'US' && country !== 'uS' && country !== 'us' && state !== '')
    {
      console.log("You cannot have a state in this website if you have a country other than the US.");
    }
    else
    {
      await getOneDayWeather({city: city, state: state, country: country});
      setFormData({ ...formData, city: city });
    }

  }
  useEffect(() => {
    if(store.getState().weather.oneDayWeather.base != undefined)
    {
      const odWeather = store.getState().weather.oneDayWeather;
      document.getElementById("oneDayWeatherResults").innerHTML =
      "<div class=\"row d-flex justify-content-center mT10 mB10\">" +
        "<div class=\"card\">" +
          "<div class=\"card-header\" id =\"demo\">"+
            "City: " + city + "   " + "State: " + state + "   " + "Country: " + country +
          "</div>" +
          "<ul class=\"list-group list-group-flush\">" +
            "<li class=\"list-group-item\">Description: " + odWeather.weather[0].main + ", " + odWeather.weather[0].description + "</li>" +
            "<li class=\"list-group-item\">Temp: " + odWeather.main.temp + " degrees F" + "</li>" +
            "<li class=\"list-group-item\">Max Temp: " + odWeather.main.temp_max + " degrees F" + "</li>" +
            "<li class=\"list-group-item\">Min Temp: " + odWeather.main.temp_min + " degrees F" + "</li>" +
            "<li class=\"list-group-item\">Humidity: " + odWeather.main.humidity + "</li>" +
            "<li class=\"list-group-item\">Wind Speed: " + odWeather.wind.speed + " miles/hour" + "</li>" +
          "</ul>" +
        "</div>"+
      "</div>"
    }
    //
    else if(store.getState().weather.oneDayWeather.cod === "404")
    {
      document.getElementById("oneDayWeatherResults").innerHTML =
      "<div class=\"row d-flex justify-content-center mT10 mB10\">" +
        "<div class=\"card\">" +
          "<div class=\"card-header\" id =\"demo\">"+
            "City: " + city + "   " + "State: " + state + "   " + "Country: " + country +
          "</div>" +
          "<ul class=\"list-group list-group-flush\">" +
            "<li class=\"list-group-item\">Description: " + "There are no results for this location" +"</li>" +
          "</ul>" +
        "</div>" +
      "</div>"
    }
  });
  return(
    <div>
      <h2 className="mt-3 mb-5 text-center title navyText"> One Day Weather</h2>
      <form className="mt-5 mL30 mR30" onSubmit= {e => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="country" className="secondaryText navyText">Country</label>
          <input type="text" className="form-control secondaryText" name="country" id="country" placeholder="Country" value={country} onChange={e => onChange(e)} required/>
        </div>
        <div className="form-group">
          <label htmlFor="state" className="secondaryText navyText">State</label>
          <input type="text" className="form-control secondaryText" name="state" id="state" placeholder="State" value={state} onChange={e => onChange(e)}/>
          <small id="stateWarning" className="form-text text-danger secondaryText">*** Only fill in if country is US. ***</small>
        </div>
        <div className="form-group">
          <label htmlFor="city" className="secondaryText navyText">City</label>
          <input type="text" className="form-control secondaryText" name="city" id="city" placeholder="City" value={city} onChange={e => onChange(e)} required/>
        </div>
        <button type="submit" className="btn btn-info float-right secondaryText">Submit</button>
      </form>
      <div id = "oneDayWeatherResults" class="mt-5">
      </div>
    </div>
  )
}

export default connect(
  null,
  {getOneDayWeather}
) (OneDayWeatherForm);

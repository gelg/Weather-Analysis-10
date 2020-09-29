import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFiveDayByThreeHourWeather } from '../../actions/weather';
import PropTypes from 'prop-types';
import axios from 'axios';
import store from '../../store';
import '../../App.css'

const FiveDayByThreeHourWeatherForm = ({getFiveDayByThreeHourWeather}) =>
{
  const [formData, setFormData] = useState({
    country: '',
    state: '',
    city: ''
  });

  const { country, state, city } = formData;

  var resultCity = "";
  var resultState = "";
  var resultCountry = "";
  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if(country !== 'US' && country !== 'uS' && country !== 'us' && state !== '')
    {
      console.log("You cannot have a state in this website if you have a country other than the US.");
    }
    else
    {
      await getFiveDayByThreeHourWeather({city: city, state: state, country: country});
      setFormData({ ...formData, city: city });
    }

  }
  useEffect(() => {
    console.log(store.getState());
    if(store.getState().weather.fiveDayByThreeHourWeather.cod == "200")
    {
      console.log(store.getState().weather.oneDayWeather.base);
      document.getElementById("fiveDayByThreeHourWeatherResults").innerHTML = ""
      const fdWeather = store.getState().weather.fiveDayByThreeHourWeather;
      for(var i = 0; i < 40; i++)
      {
        document.getElementById("fiveDayByThreeHourWeatherResults").innerHTML +=
        "<div class=\"mT10 col-md-6\">" +
          "<div class=\"card\">"+
            "<div class=\"card-header\" id =\"demo\">"+
              "City: " + city + "   " + "State: " + state + "   " + "Country: " + country +
          "</div>" +
          "<ul class=\"list-group list-group-flush\">" +
            "<li class=\"list-group-item\">Date and Time: " + fdWeather.list[i].dt_txt +"</li>" +
            "<li class=\"list-group-item\">Description: " + fdWeather.list[i].weather[0].main + ", " + fdWeather.list[i].weather[0].description + "</li>" +
            "<li class=\"list-group-item\">Temp: " + fdWeather.list[i].main.temp + "</li>" +
            "<li class=\"list-group-item\">Max Temp: " + fdWeather.list[i].main.temp_max + "</li>" +
            "<li class=\"list-group-item\">Min Temp: " + fdWeather.list[i].main.temp_min + "</li>" +
            "<li class=\"list-group-item\">Humidity: " + fdWeather.list[i].main.humidity + "</li>" +
            "<li class=\"list-group-item\">Wind Speed: " + fdWeather.list[i].wind.speed + "</li>" +
          "</ul>" +
        "</div>"
      }
    }
    else if(store.getState().weather.fiveDayByThreeHourWeather.cod === "404")
    {
      document.getElementById("fiveDayByThreeHourWeatherResults").innerHTML =
      "<div class=\"row d-flex justify-content-center mT10 mB10 \">" +
        "<div class=\"card\">"+
          "<div class=\"card-header\" id =\"demo\">"+
            "City: " + city + "   " + "State: " + state + "   " + "Country: " + country +
        "</div>" +
        "<ul class=\"list-group list-group-flush\">" +
          "<li class=\"list-group-item\">Description: " + "There are no results for this location" +"</li>" +
        "</ul>" +
      "</div>"
    }

  });
  return(
    <div>
      <h2 className="mt-3 mb-5 text-center title navyText"> Five Day By Three Hour Weather</h2>
      <form className="mt-5 mL30 mR30" onSubmit= {e => onSubmit(e)}>
        <div className="form-group">
          <label for="country" className="secondaryText navyText">Country</label>
          <input type="text" className="form-control secondaryText" name="country" id="country" placeholder="Country" value={country} onChange={e => onChange(e)} required/>
        </div>
        <div class="form-group">
          <label for="state" className="secondaryText navyText">State</label>
          <input type="text" className="form-control secondaryText" name="state" id="state" placeholder="State" value={state} onChange={e => onChange(e)}/>
          <small id="stateWarning" className="form-text text-danger secondaryText">*** Only fill in if country is US. ***</small>
        </div>
        <div class="form-group">
          <label for="city" className="secondaryText navyText">City</label>
          <input type="text" className="form-control secondaryText" name="city" id="city" placeholder="City" value={city} onChange={e => onChange(e)} required/>
        </div>
        <button type="submit" className="btn btn-info float-right secondaryText">Submit</button>
      </form>
      <div id="fiveDayByThreeHourWeatherResults" className="row mL30 mR30">
      </div>
    </div>
  )
}

export default connect(
  null,
  {getFiveDayByThreeHourWeather}
)(FiveDayByThreeHourWeatherForm);

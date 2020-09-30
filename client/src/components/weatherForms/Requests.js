import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRequests } from '../../actions/weather';
import PropTypes from 'prop-types';
import axios from 'axios';
import store from '../../store';
import '../../App.css'

const Requests = ({ getRequests }) =>
{
  const [formData, setFormData] = useState({
    date:''
  });

  const { date } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    const datetoString = date.toString();
    if(datetoString === '')
    {
      console.log("You must enter a date");
    }
    else
    {
      await getRequests({date: datetoString});
      setFormData({ ...formData, date: date });
    }
  }
  useEffect(() => {
    const requestsArr = store.getState().weather.requests;
    if(requestsArr.length != 0 && requestsArr[0] != "No Requests")
    {
      document.getElementById("requestsResults").innerHTML = "";
      for(var i = 0; i < requestsArr.length; i++)
      {
        document.getElementById("requestsResults").innerHTML +=
        "<div class=\"mT10 col-md-6\">" +
          "<div class=\"card\">"+
            "<div class=\"card-header\" id =\"demo\">"+
              "City: " + requestsArr[i].city + "   " +  "Country: " + requestsArr[i].country +
            "</div>" +
            "<ul class=\"list-group list-group-flush\">" +
              "<li class=\"list-group-item\">Date : " + requestsArr[i].date +"</li>" +
              "<li class=\"list-group-item\">Description: " + requestsArr[i].typeOfRequest + "</li>" +
              "<li class=\"list-group-item\">Analysis Search: "+ requestsArr[i].file + "</li>" +
            "</ul>" +
          "</div>" +
        "</div>"
      }
    }
    else if( requestsArr.length != 0 && requestsArr[0] == "No Requests")
    {
      document.getElementById("requestsResults").innerHTML =
      "<div class=\"row d-flex justify-content-center mT10 mB10 \">" +
        "<div class=\"card\">"+
          "<div class=\"card-header\" id =\"demo\">"+
            "No Requests on this date" +
          "</div>" +
          "<ul class=\"list-group list-group-flush\">" +
            "<li class=\"list-group-item\">Description: " + "There are no results for this date "+ date +"</li>" +
          "</ul>" +
        "</div>" +
      "</div>"
    }
  });
  return(
    <div>
      <h2 className="mt-3 mb-5 text-center title navyText"> Requests</h2>
      <form className="mt-5 mL30 mR30" onSubmit= {e => onSubmit(e)}>
        <div className="form-group">
          <label for="date" className="secondaryText navyText">Date</label>
          <input type="date" className="form-control secondaryText" name="date" id="date" placeholder="Date" value={date} onChange={e => onChange(e)}/>
        </div>
        <button type="submit" className="btn btn-info float-right secondaryText">Submit</button>
      </form>
      <div id="requestsResults" className="row mL30 mR30">
      </div>
    </div>
  )
}


export default connect(
  null,
  {getRequests}
)(Requests);

import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { getAnalysis } from '../../actions/weather';
import store from '../../store';
import '../../App.css';

const Analysis = ({ getAnalysis }) =>
{
  const [formData, setFormData] = useState({
    file:''
  });

  const { file } = formData;

  const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async e => {
    e.preventDefault();
    if(file === '')
    {
      console.log("You must enter a file name");
    }
    else
    {
      await getAnalysis({file: file});
      setFormData({ ...formData, file: file });
    }
  }
  useEffect(() => {

    const analysisDisp = store.getState().weather.analysis;
    if(analysisDisp.cod == "200")
    {
      if(analysisDisp.list != undefined)
      {
        document.getElementById("analysisResults").innerHTML = ""
        for(var i = 0; i < 40; i++)
        {
          document.getElementById("analysisResults").innerHTML +=
          "<div class=\"mT10 col-md-6\">" +
            "<div class=\"card\">"+
              "<div class=\"card-header\" id =\"demo\">"+
                "Results for Search: " + file +
              "</div>" +
              "<ul class=\"list-group list-group-flush\">" +
                "<li class=\"list-group-item\">Date and Time: " + analysisDisp.list[i].dt_txt +"</li>" +
                "<li class=\"list-group-item\">Description: " + analysisDisp.list[i].weather[0].main + ", " + analysisDisp.list[i].weather[0].description + "</li>" +
                "<li class=\"list-group-item\">Temp: " + analysisDisp.list[i].main.temp + " degrees F" + "</li>" +
                "<li class=\"list-group-item\">Max Temp: " + analysisDisp.list[i].main.temp_max + " degrees F" + "</li>" +
                "<li class=\"list-group-item\">Min Temp: " + analysisDisp.list[i].main.temp_min + " degrees F" + "</li>" +
                "<li class=\"list-group-item\">Humidity: " + analysisDisp.list[i].main.humidity + "</li>" +
                "<li class=\"list-group-item\">Wind Speed: " + analysisDisp.list[i].wind.speed + " miles/hour" + "</li>" +
              "</ul>" +
            "</div>" +
          "</div>"
        }
      }
      else
      {
        document.getElementById("analysisResults").innerHTML =
        "<div class=\"row d-flex justify-content-center mT10 mB10\">" +
          "<div class=\"card\">"+
            "<div class=\"card-header\" id =\"demo\">"+
              "Results for Search: " + file +
            "</div>" +
            "<ul class=\"list-group list-group-flush\">" +
              "<li class=\"list-group-item\">Description: " + analysisDisp.weather[0].main + ", " + analysisDisp.weather[0].description + "</li>" +
              "<li class=\"list-group-item\">Temp: " + analysisDisp.main.temp + " degrees F" + "</li>" +
              "<li class=\"list-group-item\">Max Temp: " + analysisDisp.main.temp_max + " degrees F" + "</li>" +
              "<li class=\"list-group-item\">Min Temp: " + analysisDisp.main.temp_min + " degrees F" + "</li>" +
              "<li class=\"list-group-item\">Humidity: " + analysisDisp.main.humidity + "</li>" +
              "<li class=\"list-group-item\">Wind Speed: " + analysisDisp.wind.speed + " miles/hour" + "</li>" +
            "</ul>" +
          "</div>"+
        "</div>"
      }
    }
    else if (analysisDisp.message == "Internal server error")
    {
      document.getElementById("analysisResults").innerHTML =
      "<div class=\"row d-flex justify-content-center mT10 mB10 \">" +
        "<div class=\"card\">"+
          "<div class=\"card-header\" id =\"demo\">"+
            "Results For Search:" + file +
          "</div>" +
          "<ul class=\"list-group list-group-flush\">" +
            "<li class=\"list-group-item\">Description: " + "There are no results for this search" +"</li>" +
          "</ul>" +
        "</div>" +
      "</div>"
    }

  });
  return(
    <div>
      <h2 className="mt-3 mb-5 text-center title navyText"> Analysis</h2>
      <form className="mt-5 mL30 mR30" onSubmit= {e => onSubmit(e)}>
        <div className="form-group">
          <label for="file" className="secondaryText navyText">File</label>
          <input type="text" className="form-control secondaryText" name="file" id="file" placeholder="File" value={file} onChange={e => onChange(e)}/>
        </div>
        <button type="submit" className="btn btn-info float-right secondaryText">Submit</button>
      </form>
      <div id="analysisResults" className="row mL30 mR30">
      </div>
    </div>
  )
}


export default connect(
  null,
  {getAnalysis}
)(Analysis);

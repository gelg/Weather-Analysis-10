import React, {useState} from 'react';
import axios from 'axios';

import '../../App.css';

const OneDayWeatherForm = () =>
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
      console.log(formData);
    }

  }
  return(
    <div>
      <h2 className="mt-3 mb-5 text-center title navyText"> One Day Weather</h2>
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
    </div>
  )
}

export default OneDayWeatherForm;

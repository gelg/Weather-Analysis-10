import React from 'react';
import '../../App.css'

const FourDayHourlyWeatherAverageForm = () =>
{
  return(
    <div>
      <h2 className="mt-3 mb-5 text-center title navyText"> Four Day Hourly Weather Average</h2>
      <form className="mt-5 mL30 mR30">
        <div className="form-group">
          <label for="country" className="secondaryText navyText">Country</label>
          <input type="text" className="form-control secondaryText" name="country" id="country" placeholder="Country"/>
        </div>
        <div class="form-group">
          <label for="state" className="secondaryText navyText">State</label>
          <input type="text" className="form-control secondaryText" name="state" id="state" placeholder="State"/>
          <small id="stateWarning" className="form-text text-danger secondaryText">*** Only fill in if country is US. ***</small>
        </div>
        <div class="form-group">
          <label for="city" className="secondaryText navyText">City</label>
          <input type="text" className="form-control secondaryText" name="city" id="city" placeholder="City"/>
        </div>
        <button type="submit" className="btn btn-info float-right secondaryText">Submit</button>
      </form>
    </div>
  )
}

export default FourDayHourlyWeatherAverageForm;

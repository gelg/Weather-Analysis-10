import React from 'react';
import '../../App.css'

const Requests = () =>
{
  return(
    <div>
      <h2 className="mt-3 mb-5 text-center title navyText"> Requests</h2>
      <form className="mt-5 mL30 mR30">
        <div className="form-group">
          <label for="date" className="secondaryText navyText">Date</label>
          <input type="date" className="form-control secondaryText" name="date" id="date" placeholder="Date"/>
        </div>
        <button type="submit" className="btn btn-info float-right secondaryText">Submit</button>
      </form>
    </div>
  )
}

export default Requests;

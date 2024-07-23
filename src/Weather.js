import React from "react";
export default function Weather() {
  return (
    <div className="Weather">
      <div className="row" id="form">
        <form>
          <input type="search" placeholder="Enter a city" />
          <input type="submit" value="Search" className="btn btn-primary" />
        </form>
      </div>
      <div className="container">
        <h1>Vancouver</h1>
        <ul>
          <li>Tuesday 15:45</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://png.pngtree.com/png-clipart/20190619/original/pngtree-vector-cloudy-icon-png-image_3985760.jpg"
              alt="Mostly Cloudy"
              height="50px"
            />
            15°C
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 10%</li>
              <li>Humidity: 30%</li>
              <li>Wind: 5km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

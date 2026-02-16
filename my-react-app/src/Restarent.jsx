import React from "react";
import './login.css'
import './App.css'
const Restarent = (props) => {
    return (
        <div className="res-div">
            <h3 class="res-name">{props.resName}</h3>

    <p class="res-category">•{props.category}</p>

    <p class="res-description">
      {props.description}
    </p>

    <div class="res-meta">
      <span class="res-status open">Open Now</span><br />
      <span class="res-time">Delivery Time:🕒 {props.estimatedDeliveryTime}</span>
    </div>

    <p class="res-location">📍 {props.Distict}, {props.City}</p>

    <p class="res-phone">📞 +91 {props.phoneNumber}</p>

        </div>
    )

}
export default Restarent
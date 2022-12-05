import React from "react";
import "./Service.css";
function Services({ props }) {
  return (
    <div className="col-12 col-lg-6 container">
      <section id="services" className="services">
        <div className="icon-box">
          <img src={props.image} width={60} height={60} alt="" />
          <h4>
            <a href="#">{props.label}</a>
          </h4>
          <p>{props.paragraph}</p>
        </div>
      </section>
    </div>
  );
}

export default Services;

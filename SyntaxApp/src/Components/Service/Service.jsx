import React, { useEffect, useState } from "react";
import "./Service.css";
import Services from "./Services";
function Service() {
  const [service, setService] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [service]);
  return (
    <div>
      <div className="m-3 p-3 servicehead">
        <h2>Service</h2>
      </div>

      <div className="row mx-auto">
        {service.map((props) => (
          <Services key={props._id} props={props}></Services>
        ))}
      </div>
    </div>
  );
}

export default Service;

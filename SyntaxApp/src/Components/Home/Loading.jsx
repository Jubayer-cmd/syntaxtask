import React from "react";
import { Spinner } from "react-bootstrap";

function Loading() {
  return (
    <div className=" d-flex justify-content-center align-items-center mt-5">
      <Spinner animation="border" role="status"></Spinner>
    </div>
  );
}

export default Loading;

import React from "react";
export default function Submitted(props) {
  return (
    <div className="submitted-box">
      <h1>Successful !</h1>

      <h2>Hello {props.username}</h2>
      <p>We are waiting for you. ;)</p>
    </div>
  );
}

import React from "react";

const Confirmation = ({ location }) => {

  return (
    <div className="confirmation">
      <h1>
        Welcome, <br />
        <b>{location?.state?.first_name}!</b>
      </h1>
      <p>
        You have been registered for this awesome service. <br /> Please check your
        email listed below for instructions.
      </p>
      <p>
        <b>{location?.state?.email}</b>
      </p>

      <button className="button signIn-btn" type="button">
        Sign In
      </button>
    </div>
  );
};

export default Confirmation;
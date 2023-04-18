import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

function Bio() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="card mx-auto col-lg-3 mt-3 rounded d-none d-lg-block text-muted h-100">
      <h5 className="pt-2">BIO DATA</h5>
      <hr className="mt-0" />
      <p>
        <strong className="text-dark">name</strong>: {currentUser?.username}
      </p>
      <p>
        <strong className="text-dark">email</strong>: {currentUser?.email}
      </p>
      <p>
        <strong className="text-dark">location</strong>: kenya
      </p>
      <p>
        <strong className="text-dark">occupation</strong>: developer
      </p>
      <p>
        <strong className="text-dark">marriage</strong>: married
      </p>
      <p>
        <strong className="text-dark">employer</strong>: atwira
      </p>
    </div>
  );
}

export default Bio;

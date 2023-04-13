import React from "react";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h2>Error, the page is not found...</h2>
      <p>
        <Link to="/">return home</Link>
      </p>
    </div>
  );
}

export default ErrorPage;

import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

function Navbar() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <div className="border-bottom shadow-sm">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          AtwiraTech
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <span className="ml-auto">{currentUser?.username}</span>
        {currentUser ? (
          <span className="ml-2" onClick={logout}>
            logout
          </span>
        ) : (
          <span>
            <a href="/login">login</a>
          </span>
        )}
      </nav>
    </div>
  );
}

export default Navbar;

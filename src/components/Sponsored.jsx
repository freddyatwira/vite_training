import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function Sponsored() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="card mx-auto col-lg-3 my-3 rounded d-none d-lg-block h-100">
      <p className="mb-0 mt-2">
        <small className="text-muted pl-2">sponsored</small>
      </p>
      <hr className="muted mt-0" />
      <p
        className="text-muted "
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <strong>Dear {currentUser?.username}</strong>
        <small>would you like to promote your site?</small>
        <img
          className="my-2"
          style={{ height: "auto", width: 50, borderRadius: "50%" }}
          src="https://cdn.siasat.com/wp-content/uploads/2020/11/tom.jpg"
          alt=""
        />

        <small>
          but it will add upYou can also use utilities to set the width and
          height relative to the viewport.
        </small>
      </p>
      <div className="text-center mb-2">
        <button className="btn btn-outline-secondary">TRY NOW</button>
      </div>
    </div>
  );
}

export default Sponsored;

import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";

function Poster() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="mt-2 col-sm-12 col-lg-6 d-md-block mx-auto">
      <div>
        <div className="card pt-3 pl-2 mb-0 rounded-top">
          <img
            className=""
            style={{ height: 50, width: 50, borderRadius: "50%" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRITnCyIM9mlmOGgw2oDCaIz44LuTafEceOdg&usqp=CAU"
            alt=""
          />
          <span className="">{currentUser?.username}</span>
        </div>

        <div className="">
          <img
            src="https://wallpapers.com/images/featured/2f5fbl2k3wwi31aq.jpg"
            className="mw-100 img-fluid"
            alt=""
          />
        </div>
        <p className="card px-3 pb-3">
          Containers provide a means to center and horizontally pad your site’s
          contents. Use .container for a responsive pixel width or
          .container-fluid for width: 100% across all viewport and device sizes.
          Rows are wrappers for columns. Each column has horizontal padding
          (called a gutter) for controlling the space between them. This padding
          is then counteracted on the rows with negative margins. This way, all
          the content in your columns is visually aligned down the left side. In
          a grid{" "}
        </p>
      </div>
    </div>
  );
}

export default Poster;

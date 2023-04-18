import React from "react";
import Bio from "../components/Bio";
import Sponsored from "../components/Sponsored";
import Poster from "./Poster";

function Home() {
  return (
    <div className="d-flex flex-direction-column col-lg-10 col-md-11 col-sm-12 mx-auto">
      <Bio />
      <Poster />
      <Sponsored />
    </div>
  );
}

export default Home;

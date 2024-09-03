import React from "react";
import ScaleLoader from "react-spinners/ScaleLoader";

const Loader = ({ type = "ScaleLoader", color = "olive" }) => (
  <div className="w-full h-full flex items-center justify-center py-10">
    <ScaleLoader height={40} width={8} />
  </div>
);

export default Loader;

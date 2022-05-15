import React from "react";

const ButtonPrimary = ({ children }) => {
  return (
    <div>
      <button className="btn bg-primary bg-gradient-to-r from-secondary to-primary ">
        {children}
      </button>
    </div>
  );
};

export default ButtonPrimary;

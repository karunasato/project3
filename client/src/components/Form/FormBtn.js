import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ marginLeft: 75 }} className="btn btn-success">
    {props.children}
  </button>
);
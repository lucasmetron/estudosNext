"use client";

import React from "react";

const CheckBtn = ({ checked }) => {
  console.log("✌️checked --->", checked);
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => e.target.form.requestSubmit()}
    />
  );
};

export default CheckBtn;

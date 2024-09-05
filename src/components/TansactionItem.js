import React from "react";

const TansactionItem = ({ trans, index }) => {
  const { amount, type, createdAt } = trans;
  const withdraw = type === "withdraw";
  return (
    <div
      className="d-flex card flex-row justify-content-around mt-2"
      style={{ minHeight: 70, width: "70%" }}>
      <p className="m-0">{index}</p>
      <p className="m-0" style={{ color: withdraw ? "red" : "green" }}>
        {withdraw ? "-" : "+"}
        {amount}
      </p>
      <p className="m-0">{type}</p>
      <p className="m-0">{new Date(createdAt).toLocaleDateString("en-GB")}</p>
    </div>
  );
};

export default TansactionItem;

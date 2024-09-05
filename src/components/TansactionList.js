import React from "react";
import TansactionItem from "./TansactionItem";

const TansactionList = ({ list, filter }) => {
  const transactions = list
    ?.filter((trans) => trans.type.includes(filter))
    .map((trans, index) => <TansactionItem trans={trans} index={index + 1} />);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-2 w-100">
      {transactions}
    </div>
  );
};

export default TansactionList;

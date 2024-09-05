import React from "react";
import TansactionItem from "./TansactionItem";

const TansactionList = ({ list, filter, search, date, byDate }) => {
  const stripTime = (date) => {
    const d = new Date(date);
    d.setHours(0, 0, 0, 0);
    return d;
  };

  const transactions = list
    ?.filter((trans) => {
      if (byDate) {
        return (
          stripTime(trans.createdAt) >= stripTime(date.from) &&
          stripTime(trans.createdAt) <= stripTime(date.to)
        );
      } else {
        return trans;
      }
    })
    .filter(
      (trans) =>
        trans.type.includes(filter) && trans.amount.toString().includes(search)
    )
    .map((trans, index) => <TansactionItem trans={trans} index={index + 1} />);
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-2 w-100">
      {transactions}
    </div>
  );
};

export default TansactionList;

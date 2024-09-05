import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { getMytransactions } from "../api/transactions";
import TansactionList from "../components/TansactionList";

const Transaction = () => {
  const [filter, setFilter] = useState("");
  const { data: transactions } = useQuery({
    queryKey: ["transactions"],
    queryFn: getMytransactions,
  });
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      {/* Filter */}
      <div className="d-flex ">
        <strong>Filter:</strong>
        <div key={`filter`} className="mb-3 ms-2">
          <Form.Check
            onChange={handleChange}
            inline
            label="All"
            name="group1"
            value=""
            type={"radio"}
            id={`filter-1`}
          />
          <Form.Check
            onChange={handleChange}
            inline
            label="Deposit"
            name="group1"
            value="deposit"
            type={"radio"}
            id={`filter-2`}
          />
          <Form.Check
            onChange={handleChange}
            inline
            label="Withdraw"
            name="group1"
            value="withdraw"
            type={"radio"}
            id={`filter-3`}
          />
          <Form.Check
            onChange={handleChange}
            inline
            label="Transfer"
            name="group1"
            value="transfer"
            type={"radio"}
            id={`filter-3`}
          />
        </div>
      </div>
      <TansactionList list={transactions} filter={filter} />
    </div>
  );
};

export default Transaction;

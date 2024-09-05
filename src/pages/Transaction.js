import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { getMytransactions } from "../api/transactions";
import TansactionList from "../components/TansactionList";

const Transaction = () => {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const [byDate, setByDate] = useState("");
  const [date, setDate] = useState({});
  const { data: transactions } = useQuery({
    queryKey: ["transactions"],
    queryFn: getMytransactions,
  });
  const handleChange = (e) => {
    setFilter(e.target.value);
  };
  const handleDate = (e) => {
    setDate({ ...date, [e.target.name]: e.target.value });
  };
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
      {/* Filter */}
      <Form.Control
        type="text"
        name="serch"
        style={{ width: "60%" }}
        placeholder="Search"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />

      <div className="d-flex mt-3">
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
          <Form.Check
            onChange={(e) => {
              setByDate(e.target.checked);
            }}
            inline
            label="By Date"
            name="group1"
            type="checkbox"
            id={`filter-3`}
          />
        </div>
      </div>
      <div className="d-flex">
        <Form.Control
          type="date"
          name="from"
          style={{ width: "60%", margin: 10 }}
          placeholder="Search"
          onChange={handleDate}
        />
        <Form.Control
          type="date"
          name="to"
          style={{ width: "60%", margin: 10 }}
          placeholder="Search"
          onChange={handleDate}
        />
      </div>
      <TansactionList
        list={transactions}
        filter={filter}
        search={search}
        date={date}
        byDate={byDate}
      />
    </div>
  );
};

export default Transaction;

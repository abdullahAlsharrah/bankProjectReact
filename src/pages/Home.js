import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { getMyProfile } from "../api/profile";
import { depositOrwithdraw } from "../api/transactions";
import { mainColor } from "../utilities/constants";

const Home = () => {
  const [trasnData, setTrasnData] = useState({ type: "deposit" });
  const queryClient = useQueryClient();

  const { data: user } = useQuery({
    queryKey: ["myProfile"],
    queryFn: getMyProfile,
  });
  const { mutate } = useMutation({
    mutationKey: ["deposWithdraw"],
    mutationFn: () => depositOrwithdraw(trasnData),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myProfile"] });
      setTrasnData({ ...trasnData, amount: 0 });
    },
  });
  const handleChange = (e) => {
    if (e.target.name === "type") {
      if (!e.target.checked) {
        setTrasnData({ ...trasnData, [e.target.name]: "deposit" });
      } else {
        setTrasnData({ ...trasnData, [e.target.name]: "withdraw" });
      }
    } else {
      setTrasnData({ ...trasnData, [e.target.name]: e.target.value });
    }
  };
  return (
    <div
      className="d-flex flex-column justify-content-around align-items-center "
      style={{ height: "50vh" }}>
      <div className="card d-flex justify-content-around align-items-center ">
        <h4>Your available Balance:</h4>
        <h5>
          {user?.balance} <strong style={{ color: mainColor }}>KWD</strong>
        </h5>
      </div>
      <Form>
        <div className="card d-flex justify-content-around align-items-center ">
          <div className="d-flex">
            <p>Deposit</p>
            <Form.Check // prettier-ignore
              type="switch"
              name="type"
              id="custom-switch"
              className="me-2 ms-2"
              onChange={handleChange}
            />
            <p>Withdraw</p>
          </div>
          <p>Amount</p>
          <Form.Control
            type="text"
            value={trasnData?.amount}
            name="amount"
            placeholder="Amount"
            onChange={handleChange}
          />
          <Button
            onClick={mutate}
            variant="outline-light mt-3"
            style={{ color: "#fff", background: mainColor }}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default Home;

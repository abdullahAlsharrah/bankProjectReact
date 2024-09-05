import React, { useState } from "react";
import Input from "./Input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { transfer } from "../api/transactions";
import { Modal, Button } from "react-bootstrap";

const ModalPage = ({ show, setShowModal, username }) => {
  const [amount, setAmount] = useState("");
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationKey: "transfer",
    mutationFn: () => transfer({ username, amount }),
    onSuccess: () => {
      setShowModal(false);
      queryClient.invalidateQueries({ queryKey: ["getAllUsers"] });
    },
  });
  const handleClose = () => {
    setShowModal(false);
  };
  if (!show) return "";
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Transfer to {username}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Input
          name=""
          onChange={(e) => {
            setAmount(e.target.value);
          }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={mutate}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPage;

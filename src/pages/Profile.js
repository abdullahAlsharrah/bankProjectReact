import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import Skeleton from "react-loading-skeleton";
import { getMyProfile, updateProfile } from "../api/profile";
import { baseURL, mainColor } from "../utilities/constants";

const Profile = () => {
  const [newImage, setImage] = useState("");
  const queryClient = useQueryClient();
  const { data: user } = useQuery({
    queryKey: ["myProfile"],
    queryFn: getMyProfile,
  });

  const { mutate } = useMutation({
    mutationKey: ["updateProfile"],
    mutationFn: () => updateProfile(newImage),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["myProfile"] });
    },
  });
  const handleChange = (e) => {
    setImage(e.target.files[0]);
  };
  if (!user)
    return (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="d-flex justify-content-center align-items-center mt-5">
          <div
            className="card justify-content-around align-items-center "
            style={{ minHeight: 600 }}>
            <div style={{ height: 300, width: "90%" }}>
              <Skeleton style={{ height: "100%", width: "100%" }} />
            </div>
            <div className="d-flex flex-column justify-content-around align-items-center ">
              <Skeleton style={{ height: 15, width: 300 }} />
              <Skeleton style={{ height: 15, width: 300 }} />
              <Skeleton style={{ height: 15, width: 300 }} />
              <Skeleton style={{ height: 50, width: 300 }} />
            </div>
            <Skeleton height={50} width={90} className="mb-2" />
          </div>
        </div>
      </div>
    );
  const { image, username, balance } = user;

  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
      <div
        className="card justify-content-around align-items-center "
        style={{ minHeight: 600 }}>
        <div style={{ height: 300, width: "90%" }}>
          <img
            style={{ height: "100%", width: "100%", objectFit: "contain" }}
            src={baseURL + image}
            alt={username}
          />
        </div>
        <div className="d-flex flex-column justify-content-around align-items-center ">
          <p className="fw-bold">{username}</p>
          <p className="fw-bold">Balance: {balance}</p>
          <Form.Label style={{ textAlign: "center" }}>
            Upload a new profile picture
          </Form.Label>
          <Form.Control
            type="file"
            name="image"
            placeholder="Image"
            onChange={handleChange}
          />
        </div>
        <Button
          type="submit"
          // className="w-100"
          onClick={mutate}
          variant="outline-light"
          style={{ color: "#fff", background: mainColor }}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default Profile;

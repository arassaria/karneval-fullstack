import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  getAllBids,
  getUserRights,
  updateData,
  deleteData,
} from "../utils/api";
import styled from "styled-components/macro";

const Admin = () => {
  const [bids, setBids] = useState([]);

  const history = useHistory();

  useEffect(() => {
    try {
      const doFetch = async () => {
        if (localStorage.getItem("token")) {
          const rank = await getUserRights({
            token: localStorage.getItem("token"),
          });
          if (rank === "2") {
            const data = await getAllBids();
            setBids(data);
          } else history.push("/");
        } else history.push("/");
      };
      doFetch();
    } catch (error) {
      console.log(error);
    }
  }, [history]);

  return (
    <div>
      {bids?.map((bid) => (
        <Bidding>
          <div>
            <p>Name: {bid.name}</p>
            <p>Straße: {bid.street}</p>
            <p>Stadt: {bid.city}</p>
            <p>E-Mail: {bid.mail}</p>
            <p>Telefon: {bid.phone}</p>
            <p>Personalausweisnummer: {bid.idcard}</p>
            <p>Gebot: {bid.money}</p>
          </div>
          <Form>
            <AllowButton
              onClick={() => {
                updateData(
                  { collectionName: "bidVerification", id: bid._id },
                  {
                    name: bid.name,
                    street: bid.street,
                    city: bid.city,
                    mail: bid.mail,
                    phone: bid.phone,
                    idcard: bid.idcard,
                    money: bid.money,
                    verification: 1,
                  }
                );
              }}
            >
              ✔
            </AllowButton>
            <DenyButton
              onClick={() => {
                deleteData({ collectionName: "bidVerification", id: bid._id });
              }}
            >
              X
            </DenyButton>
          </Form>
        </Bidding>
      ))}
    </div>
  );
};

export default Admin;

const Bidding = styled.div`
  border: 1px solid black;
  box-shadow: 3px 3px 3px grey;
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
`;

const AllowButton = styled.button`
  background-color: limegreen;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

const DenyButton = styled.button`
  background-color: red;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;

const Form = styled.form`
  display: inline-block;
  align-self: center;
`;

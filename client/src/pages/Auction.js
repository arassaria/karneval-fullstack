import React, { useEffect, useState } from "react";
import { addBid, getHighestBid } from "../utils/api";
import styled from "styled-components/macro";

const Auction = () => {
  const [bid, setBid] = useState({
    name: "",
    street: "",
    city: "",
    mail: "",
    phone: "",
    idcard: "",
    verification: 0,
  });

  const [highestBid, setHighestBid] = useState([]);

  useEffect(() => {
    try {
      const doFetch = async () => {
        const highest = await getHighestBid();
        setHighestBid(highest);
      };
      doFetch();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Auctionator>
      <AuctionHighest>
        <h3 className="HighestBid">Höchstgebot:</h3>
        {highestBid?.map((bid) => (
          <>
            <p>Name: {bid.name}</p>
            <p>Gebot: {bid.money}€</p>
          </>
        ))}
      </AuctionHighest>
      <FormContainer>
        <form
          className="BiddingForm"
          onSubmit={(event) => {
            event.preventDefault();
            addBid(bid);
            setBid({
              name: "",
              street: "",
              city: "",
              mail: "",
              phone: "",
              money: "",
              idcard: "",
              verification: 0,
            });
            alert(
              "Da wir uns um eine sichere und faire Auktion bemühen, bitten wir sie nun ein Foto ihres Personalausweises mit der von ihnen angegebenen eMail-Adresse an verifizierung@karneval-verbindet.de zu senden. Erst sobald ihre Identität verifiziert ist, wird ihr Gebot der Auktion hinzugefügt."
            );
          }}
        >
          <Input
            type="text"
            value={bid.name}
            onChange={(event) => setBid({ ...bid, name: event.target.value })}
            placeholder="Vorname Nachname"
            required
          />
          <Input
            type="text"
            value={bid.street}
            onChange={(event) => setBid({ ...bid, street: event.target.value })}
            placeholder="Straße Hausnummer"
            required
          />
          <Input
            type="text"
            value={bid.city}
            onChange={(event) => setBid({ ...bid, city: event.target.value })}
            placeholder="PLZ Stadt"
            required
          />
          <Input
            type="mail"
            value={bid.mail}
            onChange={(event) => setBid({ ...bid, mail: event.target.value })}
            placeholder="E-Mail"
            required
          />
          <Input
            type="phone"
            value={bid.phone}
            onChange={(event) => setBid({ ...bid, phone: event.target.value })}
            placeholder="Telefon"
            required
          />
          <Input
            type="text"
            value={bid.idcard}
            onChange={(event) => setBid({ ...bid, idcard: event.target.value })}
            placeholder="Personalausweisnummer"
            required
          />
          <Input
            type="number"
            value={parseFloat(bid.money)}
            onChange={(event) =>
              setBid({ ...bid, money: parseFloat(event.target.value) })
            }
            placeholder="Gebot"
            required
          />
          <Datenschutz>
            <Input
              type="checkbox"
              id="datenschutz"
              required
              onChange={() =>
                alert(
                  "Ich bin mit dem Speichern meiner Daten bis zum Ende der Auktion und der Verarbeitung der Daten zur Ermittlung des Auktionsgewinners einverstanden."
                )
              }
            />
            <label for="datenschutz">
              Zustimmung zur Datenschutzerklärung.
            </label>
          </Datenschutz>
          <button type="submit">Gebot abgeben</button>
        </form>
      </FormContainer>
    </Auctionator>
  );
};

export default Auction;

const Auctionator = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 3%;
`;

const AuctionHighest = styled.div`
  background-color: white;
  border: 1px solid black;
  box-shadow: 2px 2px grey;
  padding: 10px;
  height: fit-content;
  border-radius: 10px;
`;

const FormContainer = styled.div`
  background-color: white;
  border: 1px solid black;
  box-shadow: 2px 2px grey;
  padding: 10px;
  height: fit-content;
  border-radius: 10px;
  max-width: 550px;
`;

const Input = styled.input`
  box-shadow: 2px 2px grey;
  border-radius: 10px;
  margin-bottom: 5px;
  padding-left: 10px;
`;

const Datenschutz = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

import React, { useEffect, useState } from "react";
import { addBid, getHighestBid } from "../utils/api";

const Auction = () => {
  const [bid, setBid] = useState({
    name: "",
    street: "",
    city: "",
    mail: "",
    phone: "",
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
    <div className="Auctionator">
      <div>
        <h3 className="HighestBid">Höchstgebot:</h3>
        {highestBid?.map((bid) => (
          <>
            <p>Name: {bid.name}</p>
            <p>Gebot: {bid.money}€</p>
          </>
        ))}
      </div>
      <div>
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
            });
          }}
        >
          <input
            type="text"
            value={bid.name}
            onChange={(event) => setBid({ ...bid, name: event.target.value })}
            placeholder="Vorname Nachname"
            required
          />
          <input
            type="text"
            value={bid.street}
            onChange={(event) => setBid({ ...bid, street: event.target.value })}
            placeholder="Straße Hausnummer"
            required
          />
          <input
            type="text"
            value={bid.city}
            onChange={(event) => setBid({ ...bid, city: event.target.value })}
            placeholder="PLZ Stadt"
            required
          />
          <input
            type="mail"
            value={bid.mail}
            onChange={(event) => setBid({ ...bid, mail: event.target.value })}
            placeholder="E-Mail"
            required
          />
          <input
            type="phone"
            value={bid.phone}
            onChange={(event) => setBid({ ...bid, phone: event.target.value })}
            placeholder="Telefon"
            required
          />
          <input
            type="number"
            value={parseFloat(bid.money)}
            onChange={(event) =>
              setBid({ ...bid, money: parseFloat(event.target.value) })
            }
            placeholder="Gebot"
            required
          />
          <input type="checkbox" id="datenschutz" required />
          <label for="datenschutz">
            Ich bin damit einverstanden, dass meine Daten bis zum Ende der
            Auktion für die Verarbeitung gespeichert werden.
          </label>
          <button type="submit">Gebot abgeben</button>
        </form>
      </div>
    </div>
  );
};

export default Auction;

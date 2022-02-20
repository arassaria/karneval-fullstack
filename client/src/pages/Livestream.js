import React, { useEffect, useState } from "react";
import { getHighestBid } from "../utils/api";
import styled from "styled-components/macro";

const Livestream = () => {
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
    <StreamContainer>
      <Stream
        src="https://kolbe-live.de/embed/video"
        title="Owncast"
        height="350px"
        width="550px"
        referrerpolicy="origin"
        scrolling="no"
        allowFullScreen
      ></Stream>
      <ChatAuction>
        <iframe
          src="https://kolbe-live.de/embed/chat/readwrite"
          title="Chat"
          height="350px"
          width="300px"
          referrerpolicy="origin"
          scrolling="no"
        ></iframe>
        <AuctionHighest>
          <h3 className="HighestBid">Höchstgebot:</h3>
          {highestBid?.map((bid) => (
            <>
              <p>Name: {bid.name}</p>
              <p>Gebot: {bid.money}€</p>
            </>
          ))}
        </AuctionHighest>
      </ChatAuction>
    </StreamContainer>
  );
};

export default Livestream;

const ChatAuction = styled.div`
  display: flex;
  min-width: 550px;
  justify-content: space-between;
  @media only screen and (max-width: 550px) {
    flex-wrap: wrap;
    min-width: 0;
  }
`;

const AuctionHighest = styled.div`
  background-color: white;
  border: 1px solid black;
  box-shadow: 2px 2px grey;
  padding: 10px;
  height: fit-content;
  border-radius: 10px;
  display: none;
`;

const StreamContainer = styled.div`
  margin-top: 3%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Stream = styled.iframe`
  flex-basis: 550px;
`;

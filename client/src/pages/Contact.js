import React from "react";
import styled from "styled-components/macro";

const Contact = () => {
  return (
    <Body>
      <h1>Kontakt</h1>
      <div>
        <h2>Technik</h2>
        <p>Eventservice Mario Bachmeier</p>
        <p>Südring 23</p>
        <p>56412 Ruppach-Goldhausen</p>
        <p>Tel: 02602 / 1 69 15</p>
        <p>
          Homepage:{" "}
          <a href="https://www.eventservice-mb.de/">www.eventservice-mb.de</a>{" "}
        </p>
        <p>
          eMail:{" "}
          <FlowLink href="mailto: info@eventservice-mb.de">
            info@eventservice-mb.de
          </FlowLink>
        </p>
      </div>
      <div>
        <h2>Webseite und Streamserver</h2>
        <p>Kolbe Audio</p>
        <p>Dominique Kolbe</p>
        <p>Am Tannenhain 16</p>
        <p>56242 Ellenhausen</p>
        <p>Tel: 0151 / 165 68 37 4</p>
        <p>
          Homepage: <a href="https://www.kolbe-audio.de">www.kolbe-audio.de</a>
        </p>
        <p>
          eMail:{" "}
          <FlowLink href="mailto: info@kolbe-audio.de">
            info@kolbe-audio.de
          </FlowLink>
        </p>
      </div>
      <div>
        <h2>Schloss-Garde Mons Tabor 1986 e.V.</h2>
        <p>1. Vorsitzender: Carsten Irrgang</p>
        <p>
          Homepage:{" "}
          <a href="https://www.schlossgardemonstabor.de">
            www.schlossgardemonstabor.de
          </a>
        </p>
        <p>
          eMail:{" "}
          <FlowLink href="mailto:info@schlossgardemonstabor.de">
            info@schlossgardemonstabor.de
          </FlowLink>
        </p>
      </div>
    </Body>
  );
};

export default Contact;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 900px) {
    margin: 50px 20%;
  }
  @media screen and (max-width: 900px) {
    margin: 20px 0;
  }
`;

const FlowLink = styled.a`
  color: #e31e25;
`;

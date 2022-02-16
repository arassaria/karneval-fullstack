import React from "react";
import styled from "styled-components";

const Impressum = () => {
  return (
    <Body>
      <h1>Impressum</h1>

      <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
      <p>
        Dominique Kolbe
        <br />
        Kolbe Audio
        <br />
        Am Tannenhain 16
        <br />
        56242 Ellenhausen
      </p>

      <h2>Kontakt</h2>
      <p>
        Telefon: 015116568374
        <br />
        E-Mail: info@kolbe-audio.de
      </p>

      <h2>Umsatzsteuer-ID</h2>
      <p>
        Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
        Umsatzsteuergesetz:
        <br />
        DE345116644
      </p>

      <h2>Angaben zur Berufs&shy;haftpflicht&shy;versicherung</h2>
      <p>
        <strong>Name und Sitz des Versicherers:</strong>
        <br />
        SIGNAL IDUNA Group
        <br />
        44121 Dortmund
      </p>
      <h2>
        Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
      </h2>
      <p>
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
        vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>

      <p>
        Quelle:{" "}
        <a href="https://www.e-recht24.de/impressum-generator.html">
          https://www.e-recht24.de/impressum-generator.html
        </a>
      </p>
    </Body>
  );
};

export default Impressum;

const Body = styled.div`
  text-align: center;
`;

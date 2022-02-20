import React from "react";
import styled from "styled-components";

const Impressum = () => {
  return (
    <Body>
      <h1>Impressum</h1>
      <div class="entry-content">
        <p>
          Schloss-Garde Mons Tabor 1986 e.V.
          <br />
          1. Vorsitzender Carsten Irrgang
        </p>
        <p>
          Adresse:
          <br />
          Sonnenblumenweg 2<br />
          D-56410 Montabaur
          <br />
          Rheinland-Pfalz
          <br />
          Deutschland
        </p>
        <p>
          E-Mail: info@schlossgardemonstabor.de
          <br />
          http://www.schlossgardemonstabor.de
        </p>
        <hr />
        <ContentContainer>
          <p>
            <strong>Disclaimer</strong>
          </p>
          <p>
            1. Inhalt des Onlineangebotes
            <br />
            Der Autor übernimmt keinerlei Gewähr für die Aktualität,
            Korrektheit, Vollständigkeit oder Qualität der bereitgestellten
            Informationen. Haftungsansprüche gegen den Autor, welche sich auf
            Schäden materieller oder ideeller Art beziehen, die durch die
            Nutzung oder Nichtnutzung der dargebotenen Informationen bzw. durch
            die Nutzung fehlerhafter und unvollständiger Informationen
            verursacht wurden, sind grundsätzlich ausgeschlossen, sofern seitens
            des Autors kein nachweislich vorsätzliches oder grob fahrlässiges
            Verschulden vorliegt.
            <br />
            Alle Angebote sind freibleibend und unverbindlich. Der Autor behält
            es sich ausdrücklich vor, Teile der Seiten oder das gesamte Angebot
            ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen
            oder die Veröffentlichung zeitweise oder endgültig einzustellen.
          </p>
          <p>
            2. Verweise und Links
            <br />
            Bei direkten oder indirekten Verweisen auf fremde Webseiten
            (&#8222;Hyperlinks&#8220;), die außerhalb des
            Verantwortungsbereiches des Autors liegen, würde eine
            Haftungsverpflichtung ausschließlich in dem Fall in Kraft treten, in
            dem der Autor von den Inhalten Kenntnis hat und es ihm technisch
            möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger
            Inhalte zu verhindern.
            <br />
            Der Autor erklärt hiermit ausdrücklich, dass zum Zeitpunkt der
            Linksetzung keine illegalen Inhalte auf den zu verlinkenden Seiten
            erkennbar waren. Auf die aktuelle und zukünftige Gestaltung, die
            Inhalte oder die Urheberschaft der verlinkten/verknüpften Seiten hat
            der Autor keinerlei Einfluss. Deshalb distanziert er sich hiermit
            ausdrücklich von allen Inhalten aller verlinkten /verknüpften
            Seiten, die nach der Linksetzung verändert wurden. Diese
            Feststellung gilt für alle innerhalb des eigenen Internetangebotes
            gesetzten Links und Verweise sowie für Fremdeinträge in vom Autor
            eingerichteten Gästebüchern, Diskussionsforen, Linkverzeichnissen,
            Mailinglisten und in allen anderen Formen von Datenbanken, auf deren
            Inhalt externe Schreibzugriffe möglich sind. Für illegale,
            fehlerhafte oder unvollständige Inhalte und insbesondere für
            Schäden, die aus der Nutzung oder Nichtnutzung solcherart
            dargebotener Informationen entstehen, haftet allein der Anbieter der
            Seite, auf welche verwiesen wurde, nicht derjenige, der über Links
            auf die jeweilige Veröffentlichung lediglich verweist.
          </p>
          <p>
            3. Urheber- und Kennzeichenrecht
            <br />
            Der Autor ist bestrebt, in allen Publikationen die Urheberrechte der
            verwendeten Bilder, Grafiken, Tondokumente, Videosequenzen und Texte
            zu beachten, von ihm selbst erstellte Bilder, Grafiken,
            Tondokumente, Videosequenzen und Texte zu nutzen oder auf
            lizenzfreie Grafiken, Tondokumente, Videosequenzen und Texte
            zurückzugreifen.
            <br />
            Alle innerhalb des Internetangebotes genannten und ggf. durch Dritte
            geschützten Marken- und Warenzeichen unterliegen uneingeschränkt den
            Bestimmungen des jeweils gültigen Kennzeichenrechts und den
            Besitzrechten der jeweiligen eingetragenen Eigentümer. Allein
            aufgrund der bloßen Nennung ist nicht der Schluss zu ziehen, dass
            Markenzeichen nicht durch Rechte Dritter geschützt sind!
            <br />
            Das Copyright für veröffentlichte, vom Autor selbst erstellte
            Objekte bleibt allein beim Autor der Seiten. Eine Vervielfältigung
            oder Verwendung solcher Grafiken, Tondokumente, Videosequenzen und
            Texte in anderen elektronischen oder gedruckten Publikationen ist
            ohne ausdrückliche Zustimmung des Autors nicht gestattet.
          </p>
          <p>
            4. Datenschutz
            <br />
            Sofern innerhalb des Internetangebotes die Möglichkeit zur Eingabe
            persönlicher oder geschäftlicher Daten (Emailadressen, Namen,
            Anschriften) besteht, so erfolgt die Preisgabe dieser Daten seitens
            des Nutzers auf ausdrücklich freiwilliger Basis. Die Inanspruchnahme
            und Bezahlung aller angebotenen Dienste ist &#8211; soweit technisch
            möglich und zumutbar &#8211; auch ohne Angabe solcher Daten bzw.
            unter Angabe anonymisierter Daten oder eines Pseudonyms gestattet.
            Die Nutzung der im Rahmen des Impressums oder vergleichbarer Angaben
            veröffentlichten Kontaktdaten wie Postanschriften, Telefon- und
            Faxnummern sowie Emailadressen durch Dritte zur Übersendung von
            nicht ausdrücklich angeforderten Informationen ist nicht gestattet.
            Rechtliche Schritte gegen die Versender von sogenannten Spam-Mails
            bei Verstössen gegen dieses Verbot sind ausdrücklich vorbehalten.
          </p>
        </ContentContainer>
      </div>
    </Body>
  );
};

export default Impressum;

const Body = styled.div`
  text-align: center;
`;

const ContentContainer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
`;

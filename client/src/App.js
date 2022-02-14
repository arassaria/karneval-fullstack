import "./App.css";
import hachenburger from "./assets/hachenburger.png";
import stadtLogo from "./assets/stadt logo.png";
import esLogo from "./assets/logo-eventservice.png";
import { useEffect, useState } from "react";
import { addBid, getHighestBid } from "./utils/api";

function App() {
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
      console.log(highestBid[0]);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="App">
      <h1>Karneval Verbindet</h1>
      <div className="ContentWrapper">
        <div className="Stream">
          <iframe
            src="https://kolbe-live.de/embed/video"
            title="Owncast"
            height="350px"
            width="550px"
            referrerpolicy="origin"
            scrolling="no"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://kolbe-live.de/embed/chat/readwrite"
            title="Chat"
            height="350px"
            width="300px"
            referrerpolicy="origin"
            scrolling="no"
          ></iframe>
        </div>
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
                onChange={(event) =>
                  setBid({ ...bid, name: event.target.value })
                }
                placeholder="Vorname Nachname"
                required
              />
              <input
                type="text"
                value={bid.street}
                onChange={(event) =>
                  setBid({ ...bid, street: event.target.value })
                }
                placeholder="Straße Hausnummer"
                required
              />
              <input
                type="text"
                value={bid.city}
                onChange={(event) =>
                  setBid({ ...bid, city: event.target.value })
                }
                placeholder="PLZ Stadt"
                required
              />
              <input
                type="mail"
                value={bid.mail}
                onChange={(event) =>
                  setBid({ ...bid, mail: event.target.value })
                }
                placeholder="E-Mail"
                required
              />
              <input
                type="phone"
                value={bid.phone}
                onChange={(event) =>
                  setBid({ ...bid, phone: event.target.value })
                }
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
        <div className="Footer">
          <h3>Unsere Sponsoren</h3>
          <div className="LogoContainer">
            <img src={hachenburger} alt="Hachenburger Brauerei" />
            <img src={stadtLogo} alt="Karneval Montabaur" />
            <img
              src={esLogo}
              alt="Eventservice Mario Bachmeier"
              className="ESLogo"
            />
          </div>
          <div className="LinkContainer">
            <a href="https://www.eventservice-mb.de/rechtliches/impressum/">
              Impressum
            </a>
            <a href="https://www.eventservice-mb.de/rechtliches/datenschutz/">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

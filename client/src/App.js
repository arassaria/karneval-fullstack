import "./App.css";
import GlobalStyle from "./GlobalStyles";
import styled from "styled-components/macro";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Schriftzug from "./assets/Karneval-Verbindet Schriftzug.svg";
import Hut from "./assets/KarnevalHut.svg";
import Livestream from "./pages/Livestream";
import Auction from "./pages/Auction";
import Sponsors from "./pages/Sponsors";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header>
          <Logo src={Hut} alt="Hut" />
          <Logo src={Schriftzug} alt="Logo" />
          <Logo src={Hut} alt="Hut" />
        </Header>
        <Nav>
          <Link to="/">Livestream</Link>
          <Link to="/programm">Programm</Link>
          <Link to="/sponsors">Sponsoren</Link>
          <Link to="/contact">Kontakt</Link>
          <Link to="/auction">Auktion</Link>
        </Nav>
        <Switch>
          <Route path="/programm">Programm</Route>
          <Route path="/sponsors">
            <Sponsors />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/auction">
            <Auction />
          </Route>
          <Route path="/">
            <Livestream />
          </Route>
        </Switch>
        <Footer>
          <div className="LinkContainer">
            <a href="https://www.eventservice-mb.de/rechtliches/impressum/">
              Impressum
            </a>
            <a href="https://www.eventservice-mb.de/rechtliches/datenschutz/">
              Datenschutz
            </a>
          </div>
        </Footer>
      </Router>
    </>
  );
}

export default App;

const Nav = styled.div`
  background-color: grey;
  list-style-type: none;
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0;
`;

const Header = styled.div`
  display: flex;
  height: 100px;
  justify-content: space-between;
  max-width: 100vw;
  @media screen and (min-width: 900px) {
    margin: 0 20%;
    > :last-child {
      margin-right: 0;
    }
  }
  @media screen and (max-width: 900px) {
    margin: 0;
    > :last-child {
      margin-right: 10px;
    }
  }
`;

const Footer = styled.div`
  background-color: black;
  color: white;
  position: fixed;
  bottom: 0;
  text-align: center;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const Logo = styled.img`
  height: 100px;
  padding-right: 5px;
`;

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
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Register from "./pages/Register";
import { useEffect, useState } from "react";
import { getUserRights } from "./utils/api";

function App() {
  const [token, setToken] = useState();
  const [rank, setRank] = useState();

  useEffect(() => {
    const doFetch = async () => {
      setToken(localStorage.getItem("token"));
      if (localStorage.getItem("token")) {
        const rank = await getUserRights({
          token: localStorage.getItem("token"),
        });
        setRank(rank);
      }
    };
    doFetch();
  }, []);

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
          <Link to="/sponsors">Sponsoren</Link>
          <Link to="/contact">Kontakt</Link>
          <Link to="/auction">Auktion</Link>
          {token && rank === "2" && <Link to="/admin">Admin</Link>}
          {token && rank === "1" && <Link to="/dj">DJ</Link>}
          {!token && <Link to="/login">Login</Link>}
          {token && <Link to="/logout">Logout</Link>}
        </Nav>
        <Switch>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/impressum">
            <Impressum />
          </Route>
          <Route path="/datenschutz">
            <Datenschutz />
          </Route>
          <Route path="/sponsors">
            <Sponsors />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/logout">
            <Logout />
          </Route>
          <Route path="/staff/register">
            <Register />
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
            <Link to="/impressum">Impressum</Link>
            <Link to="/datenschutz">Datenschutz</Link>
          </div>
        </Footer>
      </Router>
    </>
  );
}

export default App;

const Nav = styled.div`
  background-color: #3f789b;
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

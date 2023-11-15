import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../style/card.scss";
import { userContext } from "../store/createContextStore";

export default function header() {
  const { favorite, count } = useContext(userContext);

  return (
    <>
      <Navbar className="nav_bar" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              style={{ width: "50px", cursor: "pointer" }}
              src="./images/logo2.png"
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link to="/" as={NavLink}>
                Home
              </Nav.Link>
              <Nav.Link to="/card" as={NavLink}>
                Anime List
              </Nav.Link>
              <Nav.Link to="/Favorite" as={NavLink}>
                <span style={{ marginRight: "5px" }}>Favorite List</span>
                {count !== 0 ? (
                  <span className="badge text-bg-primary">{count}</span>
                ) : null}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

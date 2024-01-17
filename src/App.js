import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Badge from 'react-bootstrap/Badge';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <Navbar
          bg="primary"
          data-bs-theme="dark"
          className="bg-body-tertiary"
          sticky="top"
        >
          <Container>
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <h1 style={{marginLeft:"40%"}}>
        Titrou page bi <Badge bg="secondary">V 1.0</Badge>
        </h1>
        <div
          className="card-container"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://img.freepik.com/photos-gratuite/portrait-homme-style-anime-prise-moyenne_23-2151067450.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1705017600&semt=ais"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://img.freepik.com/photos-gratuite/portrait-homme-style-anime-prise-moyenne_23-2151067427.jpg?w=360&t=st=1705497293~exp=1705497893~hmac=432243198e02f52be5ae8fee340075e9aa081413a0a3fc34fceedd1672e35b1c"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://img.freepik.com/photos-gratuite/portrait-homme-style-anime-prise-moyenne_23-2151067431.jpg?w=360&t=st=1705497046~exp=1705497646~hmac=ea91f578101176c511edd07380eb5f29416f138c2403a0609e064b0f958213a8"
            />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;

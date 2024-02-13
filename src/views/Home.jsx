import ContinueWatching from "../components/ContinueWatching";
import Recommended from "../components/Recommended";
import Categories from "../components/Categories";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Home = () => {
  // const { user, logout } = useAuth();

  // const handleLogout = async () => {
  //   await logout();
  // };

  return (
    <div>
      <Navbar style={{ backgroundColor: "#080b14" }} expand="lg">
        <Container>
          <Navbar.Brand href="/" style={{ color: "white" }}>
            Stream App
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            style={{ backgroundColor: "white" }}
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Link style={{ color: "white" }} href="/">
                Home
              </Nav.Link>
              <Nav.Link style={{ color: "white" }} href="/upcoming">
                Upcoming movies
              </Nav.Link>

              {/* <Nav.Link style={{ color: "white" }} onClick={handleLogout}>
                Logout
              </Nav.Link> */}
              {/* <Navbar.Text className="justify-content-end text-light">
                Welcome!
              </Navbar.Text> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Categories />
      <ContinueWatching />
      <Recommended />
    </div>
  );
};

export default Home;

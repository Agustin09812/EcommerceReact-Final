import { Container, Nav, Navbar as BNavbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import CartWidget from "./Cart/CartWidget"

function Navbar() {
  return (
    <>
      <BNavbar bg="dark" variant="dark">
        <Container>
          <BNavbar.Brand as={Link} to="/">
            Music Store
          </BNavbar.Brand>
          <Nav className="m-auto justify-content-around">
            <Nav.Link as={Link} to="/category/guitarra">
              Guitarras
            </Nav.Link>
            <Nav.Link as={Link} to="/category/bajo">
              Bajos
            </Nav.Link>
            <Nav.Link as={Link} to="/category/percusion">
              Percusion
            </Nav.Link>
            <Nav.Link as={Link} to="/category/teclado">
              Teclados
            </Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
      </BNavbar>
    </>
  )
}

export default Navbar
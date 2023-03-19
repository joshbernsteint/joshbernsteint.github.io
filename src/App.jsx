import 'bootstrap/dist/css/bootstrap.min.css';
import { Stack, Nav, Navbar, Container, Col } from "react-bootstrap";
import navStyles from "./MyNavBar.module.css"


export function MyNavBar() {
  return (
  <>
    <Navbar bg="black" variant="dark" fixed = "top" expand = "lg" className={`my-0`}>
      <Container fluid>
        <Navbar.Brand href="/#/" style={{fontSize: "x-large"}}>Joshua Bernstein</Navbar.Brand>
        <Navbar.Toggle aria-controls = "navbarScroll"/>
        <Navbar.Collapse id = "navbarScroll" style = {{alignItems: "right",justifyContent:"right"}}>
        <Nav className={`my-1 my-lg-2 ${navStyles.nav}`}  navbarScroll>
            <Nav.Link href="/#/" className={`${navStyles.navLink}`}>Home</Nav.Link>
            <Nav.Link href="/#/projects" className={`${navStyles.navLink}`}>Projects</Nav.Link>
            <Nav.Link href="/#/resume" className={`${navStyles.navLink}`}>Resumé</Nav.Link> 
            <Nav.Link href="https://www.linkedin.com/in/joshua-bernstein-9700261b0/" className={`${navStyles.navLink}`} target="_blank" rel="noreferrer noopener">LinkedIn</Nav.Link>
            <Nav.Link href="https://github.com/joshbernsteint" className={`${navStyles.navLink}`} target="_blank" rel="noreferrer noopener">GitHub</Nav.Link>
          
        </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
  )
}

export function Footer () {
  return (
    <Stack direction="horizontal" style={{
      backgroundColor: "rgb(39,39,39)",border: "0px", color: "white", opacity: "75%"}}>

      <Col style={{margin: "1rem", alignItems: "center", top: "0", bottom: "auto"}}>
        <h5 style={{alignContent: "center"}}>Credits</h5>
        <hr style={{width: "200px"}}/>
       <b>Coded by:</b> Joshua Bernstein (Me) <br/>
       <b>Head Supervisor:</b> Gigi the Cat <br/>
       <b>Contributing developer: </b> Angel the Dog <br/><br/>
      </Col>
        
      <Col style={{margin: "1rem", alignItems: "center", top: "0", bottom: "auto"}}>
        <h5 style={{alignContent: "center"}}>Acknowledgements</h5>
        <hr style={{width: "200px"}}/>
        <ul>
          <li>React.js framework used for the entirety of this site
            <ul>
              <li>react-router-dom, react-three-fiber, react-bootstrap</li>
            </ul>
          </li>

          <li>Three.js used for 3D models</li>
        </ul>
      </Col>


      <Col style={{margin: "1rem", alignItems: "center", top: "0", bottom: "auto"}}>
        <h5 style={{alignContent: "center"}}>Contact Me</h5>
        <hr style={{width: "200px"}}/>
       <b>Email:</b> joshuatbernstein@gmail.com <br/>
       <b>LinkedIn:</b> joshuabernsteint <br/>
       <b>Discord:</b> WastedPotenti4l#5354 <br/><br/>
      </Col>
    </Stack>
  )
}
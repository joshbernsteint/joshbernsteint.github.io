import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./home"
import { MyProjects } from './MyProjects'
import { Stack, Nav, Navbar, Container, Col } from "react-bootstrap";
import styles from './App.module.css';
import navStyles from "./MyNavBar.module.css"


export function MyNavBar() {
  return (
  <>
    <Navbar bg="black" variant="dark" fixed = "top" expand = "lg" className={`my-0`}>
      <Container fluid>
        <Navbar.Brand href="/#">Joshua Bernstein</Navbar.Brand>
        <Navbar.Toggle aria-controls = "navbarScroll"/>
        <Navbar.Collapse id = "navbarScroll" style = {{alignItems: "right",justifyContent:"right"}}>
        <Nav className={`my-1 my-lg-2 ${navStyles.nav}`}  navbarScroll>
            <Nav.Link href="/#" className={`${navStyles.navLink}`}>Home</Nav.Link>
            <Nav.Link href="/#projects" className={`${navStyles.navLink}`}>Projects</Nav.Link>
            <Nav.Link href="/#resume" className={`${navStyles.navLink}`}>Resumé</Nav.Link> 
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

          <li>Farm Image taken from <a target = "_blank" rel="noreferrer noopener" href="https://www.ewg.org/news-insights/news/2023/02/nearly-20000-farmers-received-farm-subsidies-37-consecutive-years">EWG</a></li>
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

function App() {
  const [count, setCount] = useState(0)


  return (
    <Stack gap={2} className={`${styles.base}`}>
      <h1>-----</h1>
      <MyNavBar />
      {/* <HashRouter>
        <Routes>
            <Route path="/#" element={<Home />} />
            <Route path="/#projects" element={<MyProjects/>} />
            <Route path="/#resume" element={
                <embed
                src="./joshuabernsteinresume-2.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
                />}/>
            <Route path="*" element={<Navigate to ="/#" />} />
        </Routes>
      </HashRouter> */}
      <RouterProvider router={router}/>
      <Footer style={{height: "100px"}}/>
    </Stack >
  )
}

export default App

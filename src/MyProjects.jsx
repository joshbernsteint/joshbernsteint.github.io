import { Button, Col,Stack, Card } from "react-bootstrap";
import styles from './App.module.css';



export function MyProjects () {
    return (
        <Stack gap={2}>
            <Card className="bg-dark text-white">
                <Card.Img src="./code.png" alt="Card image" height={"500px"} style={{opacity: "15%"}}/>
                <Card.ImgOverlay>
                    <Card.Text style={{opacity: "100%", fontSize: "larger"}}>
                    <h1>This Website!</h1>
                    <ul>
                        <li><b style={{fontSize: "larger"}}>When: </b>Spring 2023</li>
                        <li><b style={{fontSize: "larger"}}>Languages Used: </b>HTML, CSS, JavaScript (React)</li>
                        <li><b style={{fontSize: "larger"}}>Summary: </b>
                            <ul>
                                <li>Fully functioning website with different pages</li>
                                <li>Made using React and Three.js</li>
                            </ul>
                        </li>
                        <li><b style={{fontSize: "larger"}}>Features:</b>
                            <ul>
                                <li>Original solar system model (not accurate) made with Three.js</li>
                                <li>List of all my relevant projects (here!)</li>
                                <li>Electronic copy of my resumé</li>
                            </ul>
                        </li>
                    </ul>
                    <Button href='https://github.com/joshbernsteint/joshbernsteint.github.io' target={"_blank"} variant='secondary' style={{width: "auto",height: "auto", padding: "10px"}}>Check out the source code on <img src="./gitHub.png" style={{width: "50px", top: "0"}}/> </Button>
                    </Card.Text>
                </Card.ImgOverlay>
                </Card>
            <Card className="bg-dark text-white">
                <Card.Img src="./Ethel5.png" alt="Card image" height={"600px"} style={{opacity: "15%"}}/>
                <Card.ImgOverlay>
                    <Card.Text style={{opacity: "100%", fontSize: "larger"}}>
                    <h1>ETHEL: Simulating a custom CPU and Assembly Language</h1>
                    <ul>
                        <li><b style={{fontSize: "larger"}}>When: </b>Fall 2022</li>
                        <li><b style={{fontSize: "larger"}}>Tools Used: </b>Logisim Evolution and Python</li>
                        <li><b style={{fontSize: "larger"}}>Summary: </b>
                            <ul>
                                <li>Utilized Logisim evolution simulation software to create a completely functional virtual CPU. </li>
                                <li>Developed an assembly language (and assembler) that can be directly run on the simulation via Python. </li>
                                <li>Synthesized documentation to allow for greater ease in learning assembly language. </li>
                                <li>Named after one of the dogs I raised (that one →)</li>
                            </ul>
                        </li>
                        <li><b style={{fontSize: "larger"}}>Features:</b>
                            <ul>
                                <li>8 general-purpose 64 bit registers</li>
                                <li>Can handle operations using register identifiers or immediate numbers</li>
                                <li>Able to perform basic math calculations like add and subtract</li>
                                <li>Fully-integrated branching (Unconditional, Conditional, Branch-and-link)</li>
                                <li>Capability to load variable values from memory</li>
                            </ul>
                        </li>
                    </ul>
                    <Button href='https://github.com/joshbernsteint/My-Projects/tree/main/ETHEL%20Assembler' target={"_blank"} variant='secondary' style={{width: "auto",height: "auto", padding: "10px"}}>Check out the source code on <img src="./gitHub.png" style={{width: "50px", top: "0"}}/> </Button>
                    </Card.Text>
                </Card.ImgOverlay>
                </Card>

                <Card className="bg-dark text-white">
                <Card.Img src="./risk.png" alt="Card image" height={"500px"} style={{opacity: "15%"}}/>
                <Card.ImgOverlay>
                    <Card.Text style={{opacity: "100%", fontSize: "larger"}}>
                    <h1>Creating a Plant Pathogen Forecasting System</h1>
                    <ul>
                        <li><b style={{fontSize: "larger"}}>When: </b>Fall 2022</li>
                        <li><b style={{fontSize: "larger"}}>Language Used: </b>Python (Matplot)</li>
                        <li><b style={{fontSize: "larger"}}>Summary: </b>
                            <ul>
                                <li>Constructed a basic plant disease forecasting model for common corn rust.</li>
                                <li>Used localized weather data from Moonochie, NJ.</li>
                                <li>Determined risk percentage of diease outbreak over time.</li>
                            </ul>
                        </li>
                        <li><b style={{fontSize: "larger"}}>Features:</b>
                            <ul>
                                <li>Model can be applied to any location, all it needs is weather data.</li>
                                <li>Currently only focused on one Pathogen, but can easily be expanded to work on multiple simultaneously.</li>
                                <li>Accompanying research paper outlines the history of these forecasting models as well as their necessity.</li>
                            </ul>
                        </li>
                    </ul>
                    <Button href='https://github.com/joshbernsteint/My-Projects/tree/main/Plant%20Disease%20Forcasting%20System' target={"_blank"} variant='secondary' style={{width: "auto",height: "auto", padding: "10px"}}>Check out the source code on <img src="./gitHub.png" style={{width: "50px", top: "0"}}/> </Button>
                    </Card.Text>
                </Card.ImgOverlay>
                </Card>
        </Stack>
    )
}
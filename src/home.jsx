import { Button, Col,Stack, Card } from "react-bootstrap";
import styles from './App.module.css';
import { MyRing } from './MyRing'

export function Home(){
    return (
        <Stack gap={10}
            initial={{width: 0}}
            animate={{width: "100%"}}
            exit={{x: "100%"}}
        >
        <div style={{//Holds the planet model
            backgroundColor: "black",
            height: "80%",
            position: "fixed",
            top: "0",
            left: "0",
            bottom: "auto",
            right: "auto",
            overflow: "auto",
            }}>
            <MyRing/>
        </div>
        <Col className={`${styles.homeText}`}>
            <Card style={{ width: '38rem', borderRadius: "5%"}} className={`${styles.textChildren}`}>
            <Card.Header style={{fontSize: "xx-large" }}>About Me</Card.Header>
            <Card.Img variant="top" src="./me.jpg"/>
            <Card.Body>
                <Card.Text>
                    <h3>Hello!</h3> 
                    I'm Josh, currently a 20-year-old 3rd year Computer Science major at 
                    Stevens Institute of Technology in Hoboken, NJ. <br/> <br/>
                    
                    I describe myself as a nerd, being a huge fan of franchises like <i>Lord of the Rings</i> and <i>Star Wars</i>. I am a big fan of video games, my current favorite being <i>Destiny 2</i> and <i>Rainbow Six: Siege</i>.  
                    I also love animals (especially my dog and cat!), and I
                    volunteering in my spare time with <a href='https://www.seeingeye.org/' target={"_blank"} className={`${styles.textLink}`} rel="noreferrer noopener">The Seeing Eye</a> in Morristown, 
                    NJ to help raise guide dogs for the blind. <br/><br/>

                    Currently, I am looking for a software developer or engineer internship for Summer 2024. <br/><br/>

                    <Stack direction='horizontal' gap={2}>
                        <Button href='https://www.linkedin.com/in/joshua-bernstein-9700261b0/' target={"_blank"} variant='secondary' style={{width: "50%",height: "45px", padding: "10px"}}>Connect with me on   <img src="./linkedIn.png" style={{width: "70px", top: "0"}}/> </Button>
                        <Button href='https://github.com/joshbernsteint' target={"_blank"} variant='secondary' style={{width: "50%",height: "45px", padding: "10px"}}>Check out my activity on <img src="./gitHub.png" style={{width: "50px", top: "0"}}/> </Button>

                    </Stack>
                    <hr/>
                    <h3>Skills</h3>
                    <h5><b>Programming Languages</b></h5>
                    <Stack direction="horizontal" gap={5}>
                        <Col>
                            <b>Highly Skilled: </b>
                            <ul>
                                <li>C/C++</li>
                                <li>Python</li>
                                <li>Java</li>
                                <li>ARM Assembly</li>
                            </ul>
                        </Col>
                        
                        <Col>
                            <b>Proficient: </b>
                            <ul>
                                <li>Javascript, CSS</li>
                                <li>OCaml</li>
                                <li>Linux shell</li>
                                <li>Racket</li>
                            </ul>

                        </Col>
                    </Stack>
                    <h5><b>Cloud-based Virtual Machines</b></h5>
                    <ul>
                        <li>Experienced with Oracle Cloud-based VMs.</li>
                        <li>Adept at machine manipulation, including but not limited to server hosting, transferring data between machines (via SSH Protocol), and configuring network protocols to optimize server capabilities.</li>
                    </ul>

                    <h5><b>GIS Software</b></h5>
                    <ul>
                        <li>Versed in manipulating and illistruating data with GIS softwares, including ArcMap and ArcGIS pro</li>
                        <li>Skilled in designing python scripts to automate the creation of GIS maps and features</li>
                    </ul>                   

                    {/* Education Experience */}
                    <hr/>
                    <h3>Education</h3>
                    <b style={{fontSize: "15pt"}}>Stevens Institute of Technology</b><br/>
                    <em>September 2021 - Present</em>
                    <ul>
                        <li>Expected Graduation Spring 2024</li>
                        <li>3.9 GPA</li>
                        <li><b>Relevant Coursework</b>
                            <ul>
                                <li>Data Structures - A</li>
                                <li>Algorithms - A</li>
                                <li>Computer Organization & Systems - A</li>
                                <li>Systems Programming - A</li>
                            </ul>
                        </li>
                    </ul>

                    <b style={{fontSize: "15pt"}}>Mahwah High School</b><br/>
                    <em>September 2017 - June 2021</em>
                    <ul>
                        <li>Weighted 4.0 GPA</li>
                        <li>Member of Marching and Symphonic Band</li>
                    </ul>


                    <hr/>
                    <h3>Work Experience</h3>
                    {/* Research Assistant HTML */}
                    <>
                        <h5><b>Research Assistant</b></h5>
                        <ul>
                            <li><b>When: </b>Summer 2022</li>
                            <li><b>Where: </b>Hoboken, NJ</li>
                            <li><b>Company: </b>Stevens Institute of Technology</li>
                            <li><b>Responsibilites: </b></li>
                            <ul>
                                <li>Developed scripts in Python to handle large amounts of image data. 
                                    Scripts automated tasks such as downloading, converting, analyzing, and storing image data.
                                </li>
                                <li>Performed weekly presentations with my weekly progress.</li>
                                <li>Collaborated with other research assistants to maximize efficiency of code.</li>
                            </ul>
                    
                        </ul>
                    </>
                    {/* Puppy Raiser HTML */}
                    <>
                        <h5><b>Certified Puppy Raiser</b></h5>
                        <ul>
                            <li><b>When: </b>August 2019 - Present</li>
                            <li><b>Where: </b>Mahwah, NJ</li>
                            <li><b>Company: </b>The Seeing Eye</li>
                            <li><b>Responsibilites: </b></li>
                            <ul>
                                <li>Tasked with training a 8-week-old puppy for 12-14 months. Training includes basic commands such as sit, down, and rest(stay).
                                </li>
                                <li>Engage in activities with other puppy raisers, intended to expose the puppy to a variety of different environments. </li>
                            </ul>
                        </ul> 
                    </>
                    {/* Pool Attendant HTML */}
                    <>
                    <h5><b>Pool Attendant</b></h5>
                        <ul>
                            <li><b>When: </b>Summer 2020, 2021</li>
                            <li><b>Where: </b>Upper Saddle River, NJ / Mahwah, NJ</li>
                            <li><b>Company: </b>Adamas Building Services</li>
                            <li><b>Responsibilites: </b></li>
                            <ul>
                                <li>Ensure guests follow assigned COVID policy to minimize spread.</li>
                                <li>Performed various custodial duties when required.</li>
                            </ul>
                        </ul> 
                    </>



                {/* Awards */}
                <hr/>
                <h3>Awards & Accolades</h3>
                <b style={{fontSize: "15pt"}}>Stevens Pinnacle Scholar</b><br/>
                <em>September 2021 - Present</em> <br/>

                <b style={{fontSize: "15pt"}}>Stevens Dean's List</b><br/>
                <em>Fall 2021 - Fall 2022</em> <br/>

                <b style={{fontSize: "15pt"}}>3<sup>rd</sup> Place Overall: ReHack 2021</b><br/>
                <em>November 2021</em><br/>
                
                <b style={{fontSize: "15pt"}}>Platinum Thunderbird Scholar</b><br/>
                <em>June 2021</em><br/>

                <b style={{fontSize: "15pt"}}>Academic Decathalon: Gold medal in Economics</b><br/>
                <em>Winter 2021</em><br/>

                <b style={{fontSize: "15pt"}}>Academic Decathalon: Gold medal in Social Science</b><br/>
                <em>Winter 2021</em><br/>
                </Card.Text>
            </Card.Body>
            </Card>
            
        </Col>
        </Stack>
    )
}
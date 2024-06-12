import { Button, Col,Stack, Card } from "react-bootstrap";
import styles from './App.module.css';
import { MyRing } from './MyRing'

/**
 * Creates a Work Prop
 * @param {str} title Name of position
 * @param {str} when When position was held
 * @param {str} company Company where position was held
 * @param {str} where Physical Location of company
 * @param {Array[str]} des Description
 * @returns A Work Component
 */
function Work(props){
    return (
        <>
            <h5><b>{props.title}</b></h5>
            <ul>
                <li><b>When: </b>{props.when}</li>
                <li><b>Company: </b>{props.company}</li>
                <li><b>Where: </b>{props.where}</li>
                <li><b>Description: </b></li>
                <ul>
                    {props.des.map((el,i) => (
                        <li key={i}>{el}</li>
                    ))}
                </ul>
            </ul>
        </>
    );
}

/**
 * Makes an Award Component
 * @param {str} name Name of Award 
 * @param {str} when Date of Award receival 
 * @returns Award Component
 */
function Award(props){
    return (
        <>
            <b style={{fontSize: "15pt"}}>{props.name}</b><br/>
            <em>{props.when}</em><br/>
        </>
    );
}

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
                    I'm Josh, currently a 21-year-old 3rd year Computer Science major at 
                    Stevens Institute of Technology in Hoboken, NJ.  I will be graduating with my masters degree in May with a Masters in Computer Science.<br/> <br/>
                
                    I describe myself as a nerd, being a huge fan of franchises like <i>Lord of the Rings</i> and <i>Star Wars</i>. I am a big fan of video games, my current favorite being <i>Destiny 2</i> and <i>Rainbow Six: Siege</i>.  
                    I also love animals (especially my dog and cat!), and I
                    volunteering in my spare time with <a href='https://www.seeingeye.org/' target={"_blank"} className={`${styles.textLink}`} rel="noreferrer noopener">The Seeing Eye</a> in Morristown, 
                    NJ to help raise guide dogs for the blind. <br/><br/>

                    Currently, I am looking for a software developer or engineer full-time position.<br/><br/>

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
                                <li>Javascript</li>
                                <li>Python</li>
                                <li>Java</li>
                                <li>Linux shell</li>
                            </ul>
                        </Col>
                        
                        <Col>
                            <b>Proficient: </b>
                            <ul>
                                <li>ARM Assembly</li>
                                <li>OCaml</li>
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
                        <li>Versed in manipulating and illistruating data with GIS softwares, including ArcMap and ArcGIS pro.</li>
                        <li>Skilled in designing python scripts to automate the creation of GIS maps and features.</li>
                    </ul>                   

                    {/* Education Experience */}
                    <hr/>
                    <h3>Education</h3>

                    <b style={{fontSize: "15pt"}}>Stevens Institute of Technology</b><br/>
                    <em>Spring 2023 - Present</em>
                    <ul>
                        <li>Expected Graduation Spring 2025 with Master's in Computer Science.</li>
                        <li>4.0 GPA</li>
                        <li><b>Relevant Coursework</b>
                            <ul>
                                <li>Agile Methodology - A</li>
                                <li>Human-Computer Interaction - A</li>
                                <li>Database Management Systems II - A</li>
                            </ul>
                        </li>
                    </ul>

                    <b style={{fontSize: "15pt"}}>Stevens Institute of Technology</b><br/>
                    <em>September 2021 - Spring 2024</em>
                    <ul>
                        <li>Bachelor's Degree in Computer Science</li>
                        <li>3.96 GPA</li>
                        <li><b>Relevant Coursework</b>
                            <ul>
                                <li>Data Structures - A</li>
                                <li>Algorithms - A</li>
                                <li>Computer Organization & Systems - A</li>
                                <li>Systems Programming - A</li>
                                <li>Web Development - A</li>
                            </ul>
                        </li>
                    </ul>

                    {/* <b style={{fontSize: "15pt"}}>Mahwah High School</b><br/>
                    <em>September 2017 - June 2021</em>
                    <ul>
                        <li>Weighted 4.0 GPA</li>
                        <li>Member of Marching and Symphonic Band</li>
                    </ul> */}


                    <hr/>
                    <h3>Work Experience</h3>
                    <Work
                        title="Student Assistant"
                        when="Fall 2023 - Present"
                        company="Stevens Institute of Technology"
                        where="Hoboken, NJ"
                        des={["Developed an interactive service dashboard in NodeJS and React.", "Connected to a dual-database system in MongoDB and GraphDB.", "Communicated with team members to incorporate additional contributions into the dashboard."]}
                    />
                    <Work
                        title="Course Assistant"
                        when="Fall 2023 - Present"
                        company="Stevens Institute of Technology"
                        where="Hoboken, NJ"
                        des={["Tasked with grading assigned homeworks and exams.", "Conducted weekly office hours to aid students with the course material.", "Ran lab sessions to showcase examples and explain course material in greater detail."]}
                    />
                    <Work
                        title="Research Assistant"
                        when="Summer 2022, Summer 2023"
                        company="Stevens Institute of Technology"
                        where="Hoboken, NJ"
                        des={["Developed scripts in Python to handle large amounts of image data.","Scripts automated tasks such as downloading, converting, analyzing, and storing image data.",
                        "Performed weekly presentations on my progress.", "Collaborated with other research assistants to maximize efficiency of code."]}
                    />
                    <Work
                        title="Certified Puppy Raiser (Volunteer)"
                        when="August 2019 - Present"
                        company="The Seeing Eye"
                        where="Mahwah, NJ"
                        des={["Worked with The Seeing Eye to help provide the visually impaired with guide dogs.","Tasked with training a 8-week-old puppy for 12-14 months. Training includes basic commands such as sit, down, and rest(stay).",
                        "Engage in activities with other puppy raisers, intended to expose the puppy to a variety of different environments."]}
                    />
                    {/* <Work
                        title="Pool Attendant"
                        when="Summer 2020, 2021"
                        company="Adamas Building Services"
                        where="Upper Saddle River, NJ / Mahwah, NJ"
                        des={["Ensured guests follow assigned COVID policy to minimize spread.","Performed various custodial duties when required.","Periodically checked pool temperature and pH to maintain optimal swimming environment."]}
                    /> */}

                <hr/>
                <h3>Awards & Accolades</h3>
                    <Award name="Stevens Dean's List" when="September 2021 - Present"/>
                    <Award name="Stevens Pinnacle Scholar" when="September 2021 - Spring 2024"/>
                    <Award name="Finalist: ReHack 2021" when="November 2021"/>
                    {/* <Award name="Mahwah High School: Platinum Thunderbird Scholar" when="June 2021"/> */}
                </Card.Text>
            </Card.Body>
            </Card>
            
        </Col>
        </Stack>
    )
}
import { Button, Col,Stack, Card } from "react-bootstrap";
import styles from './App.module.css';

/**
 * Creates a Project Card
 * @param {str} image Path to the image file for the background
 * @param {str} title Name of the project
 * @param {str} when Date specifiying when the project was completed 
 * @param {str} languages String specifying what programming languages and technologies were used
 * @param {Array[str]} summary A list of strings containing a summary of the project
 * @param {str} features A list of strings containing the features of the project
 * @param {str} github_link A url containing the link to the github repo
 * @returns A Project component
 */
function Project({...props}){
    return (
        <Card className="bg-dark text-white">
            <Card.Img src={props.image} alt="Card image" height={"500px"} style={{opacity: "15%"}}/>
            <Card.ImgOverlay>
                    <Card.Text style={{opacity: "100%", fontSize: "larger"}}>
                    <h1>{props.title}</h1>
                    <ul>
                        <li><b style={{fontSize: "larger"}}>When: </b>{props.when}</li>
                        <li><b style={{fontSize: "larger"}}>Languages & Technologies Used: </b>{props.languages}</li>
                        <li><b style={{fontSize: "larger"}}>Summary: </b>
                            <ul>
                                {
                                    props.summary.map((el,i) => (
                                        <li key={i}>{el}</li>
                                    ))
                                }
                            </ul>
                        </li>
                        <li><b style={{fontSize: "larger"}}>Features:</b>
                            <ul>
                                {
                                    props.features.map((el,i) => (
                                        <li key={i}>{el}</li>
                                    ))
                                }
                            </ul>
                        </li>
                    </ul>
                    <Button href={props.github_link} target={"_blank"} variant='secondary' style={{width: "auto",height: "auto", padding: "10px"}}>Check out the source code on <img src="./gitHub.png" style={{width: "50px", top: "0"}}/> </Button>
                    </Card.Text>
                </Card.ImgOverlay>
        </Card>
    );
}


export function MyProjects () {
    return (
        <Stack gap={2}>
            <Project
                title="AlgoRacer: Interactive Game for Learning CS Algorithms"
                image="./algoracer.png"
                when="Fall 2023"
                languages="React.js, Express.js, MongoDB"
                summary={["Web Application to teach fundamental computer science algorithms.", "Users must outcompete an accelerating computer in walking through the steps of various algorithms.", "The goal is to see how far (or fast) you can get before the computer overtakes you."]}
                features={["Learning page with in-depth guides on how to perform each step for every supported algorithm.", "Practice gamemode without a robot to dry-run the basic mechanics of the game.", "Two different gamemodes with selectable difficulty: Endless and Race.",
            "Leaderboard to compare your score with other users."]}
                github_link = "https://github.com/joshbernsteint/AlgoRacer"
            
            />

            <Project
                title="ANGEL: Node-based Downloader and Converter Application"
                image="./angel.png"
                when="Summer 2023"
                languages="React.js, Express.js, Electron.js, C++, ffmpeg"
                summary={["Electron-based Node and React Application to download and convert audio and video files","Installed as a Desktop Application"]}
                features={["Full-fledged installer executable to facilitate a pain-free install process","Customizable accessiblity, download, and converter settings", "Advanced download options, inclduding being able to choose video/audio quality, and desired frame rate of download"]}
                github_link = "https://github.com/joshbernsteint/ANGEL"
            />

            <Project
                title="This Website!"
                image="./code.png"
                when="Spring 2023"
                languages="HTML, CSS, React.js, Three.js"
                summary={["Fully functioning website with different pages","Made using React for frontend and Three.js for 3D models"]}
                features={["Extended version of my resumé with more information","Original solar system model (not accurate) made with Three.js", "List of all my relevant projects","Electronic copy of my paper resumé"]}
                github_link = "https://github.com/joshbernsteint/joshbernsteint.github.io"
            />

            <Project
                title="Scrumptious Solar Services"
                when="Spring 2023"
                languages="React.js, Node.js, Firebase, and Stripe"
                image="./team11.png"
                summary={["Online portal that allows for the management of solar panel-related projects","Made in collaboration with Joshua Gorman, Antonio Cardona, Sohan Chatterjee, Jasmine Perez, and Campbell Tedtsen"]}
                features={["Multiple different account types, such as Manager, Sales Rep, Construction worker, and end-customer","Creation and deletion of tasks by managers","Responsive database to reliably and securely hold account and task data",
                "Email and private chat service to facilitate efficient communication amongst employees and customers"]}
                github_link="https://github.com/joshbernsteint/team11-scrumptious_7"
            />


            <Project
                title="ETHEL: Simulating a custom CPU and Assembly Language"
                when="Fall 2022"
                image="./Ethel5.png"
                languages="Python, Logisim Evolution"
                summary={["Utilized Logisim evolution simulation software to create a completely functional virtual CPU","Developed an assembly language (and assembler) that can be directly run on the simulation via Python",
                        "Synthesized documentation to allow for greater ease in learning assembly language"]}
                features={["8 general-purpose 64 bit registers", "Can handle operations using register identifiers or immediate numbers", 
                            "Able to perform basic math calculations like add and subtract as well as fully-integrated branching (Unconditional, Conditional, Branch-and-link)", "Capability to load/store variable values from/to memory"]}
                github_link='https://github.com/joshbernsteint/My-Projects/tree/main/ETHEL%20Assembler'
            />

            <Project 
                title="Plant Pathogen Forecasting System"
                image="./risk.png"
                when="Fall 2022"
                languages="Python (Matplot)"
                summary={["Constructed a basic plant disease forecasting model to predict the spread of common corn rust", "Determined a risk percentage of disease outbreak over time based on weather data"]}
                features={["Model can be applied to any location with available weather data", "Currently only focused on one pathogen (common corn rust), but can easily be expanded to work on multiple simultaneously, or a different pathogen if its ideal conditions are known",
                            "Accompanying research paper outlines the history of forecasing models as well as their necessity"]}
                github_link='https://github.com/joshbernsteint/My-Projects/tree/main/Plant%20Disease%20Forcasting%20System'
            
            />
        </Stack>
    )
}
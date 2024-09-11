import { Button, Col,Stack, Card } from "react-bootstrap";
import styles from './App.module.css';

/**
 * Creates a Project Card
 * @param {Object} props
 * @param {str} props.image Path to the image file for the background
 * @param {str} props.title Name of the project
 * @param {str} props.when Date specifiying when the project was completed 
 * @param {str} props.languages String specifying what programming languages and technologies were used
 * @param {Array.<String>} props.summary A list of strings containing a summary of the project
 * @param {str} props.features A list of strings containing the features of the project
 * @param {str} props.github_link A url containing the link to the github repo
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
                title="CoverAI: AI-Assisted Cover Letter Generation"
                image="./coverai.png"
                when="Fall 2023 - Spring 2024"
                languages="OpenAI, Clerk, React.js, Express.js, MongoDB, TailwindCSS"
                summary={[
                    "Generate personalized cover letters based on your personal skills/experience and job posting.",
                    "Also incorporates a custom-built chrome browser extension to streamline getting job data."
                ]}
                features={[
                    "Upload a resume or fill out a manual form to allow for better letter creation.",
                    "A user can have multiple resumes stored on their accounts to create cover letters tailored for different uses (Business vs. Technical).",
                    "Cover letters are automatically saved to a MonogoDB database and can be manually updated (via a text editor) and re-downloaded at any time.",
                    "Browser extension automatically acquires job data through a web scraper, this creates more customized letters for the specific job.",
                    "Previous cover letters are fed into the AI to make it more accurate over time."
                ]}
                github_link = "https://github.com/joshbernsteint/CoverAI"
            />

            <Project 
                title="Extended-Syntax Relational Algebra Compiler"
                image={"./algebropiler.png"}
                when={"Spring 2024"}
                languages={"C, Javascript"}
                summary={[
                    "Compiler for converting relational algebraic expressions to executable files that when run, are the result of the algebra.",
                    "Specifically, it is primarily meant to convert the extended algebraic operator Phi. This operator is able to combine typical SQL 'Group By' queries into one.",
                    "Using C's inherit speed and efficiency, this leads to queries being compiled and completed very quickly.",
                ]}
                features={[
                    "Project itself built with entirely vanilla POSIX-compliant C code, no external libraries.",
                    "Visual Studio Code Extension that adds syntax highlighting and basis macros for ease of creating valid algebraic expressions. This is the only place where Javascript is used in the project.",
                    "Two input types: file (where the above extension can be used), or manual, which is done over the command line.",
                ]}
                github_link={"https://github.com/joshbernsteint/Algebropiler"}
            />

            <Project 
                title="Rhythm Game: Educational Typing Game"
                image="./rhythm.png"
                when="Spring 2024"
                languages="ffmpeg, Docker, Clerk, React.js, Express.js, MongoDB, TailwindCSS"
                summary={[
                    "Rhythm game to teach better typing skills by typing keys to the beat of a song.",
                    "Play individually or as a group, and compare with your friends with a leaderboard."
                ]}
                features={[
                    "Two gamemodes: singleplayer or multiplayer, where users can join or create lobbies of their favorite levels.",
                    "Level creator to build your own levels from a song file that is uploaded by the user.",
                    "Friend system, where you can add users to your friends list to see their levels more prominently.",
                    "Clerk integration to allow for easier account management.",
                ]}
                github_link = "https://github.com/ulrokx/cs554-rhythm"
            />

            <Project
                title="AlgoRacer: Interactive Game for Learning CS Algorithms"
                image="./algoracer.png"
                when="Fall 2023"
                languages="React.js, Express.js, MongoDB"
                summary={["Web Application to teach fundamental computer science algorithms.", "Users must out-compete an accelerating computer in walking through the steps of various algorithms.", "The goal is to see how far (or fast) you can get before the computer overtakes you."]}
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
                features={["Full-fledged installer executable to facilitate a pain-free install process","Customizable accessibility, download, and converter settings", "Advanced download options, inclduding being able to choose video/audio quality, and desired frame rate of download"]}
                github_link = "https://github.com/joshbernsteint/ANGEL"
            />

            <Project
                title="This Website!"
                image="./code.png"
                when="Spring 2023"
                languages="HTML, CSS, React.js, Three.js"
                summary={["Fully functioning website with different pages","Made using React for frontend and Three.js for 3D models"]}
                features={["Extended version of my resume with more information","Original solar system model (not accurate) made with Three.js", "List of all my relevant projects","Electronic copy of my paper resumé"]}
                github_link = "https://github.com/joshbernsteint/joshbernsteint.github.io"
            />

            <Project
                title="Scrumptious Solar Services"
                when="Spring 2023"
                languages="React.js, Node.js, Firebase, and Stripe"
                image="./team11.png"
                summary={["Online portal that allows for the management of solar panel-related projects"]}
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
                            "Accompanying research paper outlines the history of forecasting models as well as their necessity"]}
                github_link='https://github.com/joshbernsteint/My-Projects/tree/main/Plant%20Disease%20Forcasting%20System'
            
            />
        </Stack>
    )
}
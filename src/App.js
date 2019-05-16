import React, { Component } from 'react';
import './App.css';
class App extends Component {
  constructor(){
    super()
    this.state={
      showAntotechwireframes:false,
      showAntotechwireframestext:"Watch Video",
      iosfinaltext:"Watch Video",
      uiuxtext:"Watch Video",
      cheopainText:"Try Demo",
      aceText:"Watch Video",
      iosfinal:false,
      uiux:false,
      cheopain:false,
      ace:false,
      listCount:0

    }
  }
  componentDidMount(){
    let list=document.querySelectorAll('.skills-animation');
    let listCount=0
    if(listCount>6)listCount=0

    console.log(list)
    setInterval(()=>{
      list[this.state.listCount].classList.add("activate")
        setTimeout(()=>{
          list[this.state.listCount].classList.remove("activate");
          let listCountAdder=this.state.listCount
      listCountAdder++
      if(listCountAdder>6)listCountAdder=0
        this.setState({
          listCount:listCountAdder
        })
        }, 500)
      
      }, 1000)
    //  },8000);
  }
  showGraphics=(ev)=>{
    this.setState({
      showAntotechwireframes:false,
      iosfinal:false,
      uiux:false,
      cheopain:false,
      ace:false,
      showAntotechwireframestext:"Watch Video",
      iosfinaltext:"Watch Video",
      uiuxtext:"Watch Video",
      cheopainText:"Try Demo",
      aceText:"Watch Video",
    })
    let show=ev.target.id
    switch(show){
      case "ios":
      let original=this.state.iosfinaltext;
      if(original==="Watch Video"){
        original="Close";
      }else if(original === "Close"){
        original="Watch Video"
      }
    this.setState({
      iosfinal:!this.state.iosfinal,
      iosfinaltext:original,
    })
    break;
    case "ace":
      let orgnal=this.state.aceText;
      if(orgnal==="Watch Video"){
        orgnal="Close";
      }else if(orgnal === "Close"){
        orgnal="Watch Video"
      }
    this.setState({
      ace:!this.state.ace,
      aceText:orgnal,
    })
    break;
    case "antotech":
    let origina=this.state.showAntotechwireframestext;
      if(origina==="Watch Video"){
        origina="Close";
      }else if(origina === "Close"){
        origina="Watch Video"
      }
    this.setState({
      showAntotechwireframes:!this.state.showAntotechwireframes,
      showAntotechwireframestext:origina
    })
    break;
    case "uiux":
    let origin=this.state.uiuxtext;
      if(origin==="Watch Video"){
        origin="Close";
      }else if(origin === "Close"){
        origin="Watch Video"
      }
    this.setState({
      uiuxtext:origin,
      uiux:!this.state.uiux
    })
    break;
    case "cheopain":
    let origi=this.state.cheopainText;
      if(origi==="Try Demo"){
        origi="Close";
      }else if(origi === "Close"){
        origi="Try Demo"
      }
    this.setState({
      cheopain:!this.state.cheopain,
      cheopainText:origi,
    })
    break;
    default:
  }

    console.log(this.state.showAntotechwireframes);
  }
  render() {
    return (
      <div className="App">
      
        <header className="App-header">
          <h1> Mobile Application Developer | Software Developer | Full-Stack Developer</h1>
          <div className="objective">
              <h4>Objective</h4>
              <p>To work in a company where there is constant learning and collaboration that values innovation, creativity and quality.</p>
            </div>
        </header>
        <div className="doc">
          <div className="left-col">
            <div className="name"><h1>Dharaksinh</h1><h1>Raj</h1></div>
            <div className="contact">
              <img alt="mail" src={require("./assets/email.svg")} />
              <a href="mailto:raj00008@algonquinlive.com">raj00008@algonquinlive.com</a>
              <img alt="mail" src={require('./assets/phone.svg')} />
              <a href="tel:+13439888394">(343)988-8394</a>
              <img alt="mail" src={require('./assets/linkedin.svg')} />
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/dharak-raj-252082114/">https://www.linkedin.com/in/devndesign/</a>
            </div>
            <div className="skills">
              <h2>Skills</h2>
              <ul>
                <li className="skills-animation">Innovative problem solving skills.</li>
                <li className="skills-animation">Strong social and interpersonal skills.</li>
                <li className="skills-animation">Goal oriented.</li>
                <li className="skills-animation">Leadership skills and initiative.</li>
                <li className="skills-animation">Strong collaboration skills.</li>
                <li className="skills-animation">Strong software development experience.</li>
                <li className="skills-animation">High level of attention to detail and strong aptitude for learning new technologies.</li>
              </ul>
            </div>
          </div>
          <div className="right-col">
            <div className="experience">
            <div className="exp">
              <h2>Work Experience</h2>
            </div>
              <h3>Research Assistant/Applied Research and Innovation (ARI)    - ALGONQUIN COLLEGE</h3>
              <i>May 2018 – January 2019</i>
                <ul>
                    <li>As an applied Research Assistant, I experienced industry-centric projects from start to finish for clients, learning team work, scope dictated work plan all the way to successful final solution delivery.</li>
                    <li>Developed productive algorithm for levelled and clean PDF data to Text data extraction using Python library PDFPlumber.</li>
                    <li>Worked on document similarity, word tokenization and word embedding by NLTK and Spacy.</li>
                    <li>Developed an Algorithm using 5 core multithread processing, it can extract 5 pdf files   at same time, which saves lots of time to extract large dataset.</li>
                    <li>Implemented iOS based smart Chatbot using ObjectiveC and SQLite database.  </li>
                </ul>
              <h3>Software Developer    - Promact Pvt Ltd</h3>
              <i>June 2016– September 2016</i>
             <ul>
               <li>Gained expertise in Web development languages.</li>
               <li>Worked on client project and learned how to make a role-based REST API using Asp.net MVC 5.</li>
               <li>Used single page application using Angular.js for front end development.</li>
               <li>Learned Agile methodology of software development and applied all steps successfully.</li>
               <li>Learned relational database MySQL, how to generate schema for relational database and complex queries of MySQL.</li>
             </ul>
            </div>
            <div className="experience-h1-ed experience-h1 marg">
              <h2>MILESTONE PROJECTS</h2>
              </div>
          <div className="education">
              <h3>REACT NATIVE APP FOR CBSA</h3>
              <p className="miletone-left-para-600">Advanced Conveyance Examination (ACE) App for Canadian Boarder Services Agency (CBSA).</p>
              <p className="miletone-left-para">The ACE app is currently being developed by myself and a team of 4 classmates as part of our final project for the Mobile Application Design &amp; Development program. It is designed to assist boarder officers at international ports find illegal contraband hidden inside of vehicles.</p>
              <p className="miletone-left-para">My role within the app is development lead. I took an active role in developing the back-end API for the app with NodeJs, Express and MongoDB. Also, contributed largely on the front-end, as well as, integration of the front and back end.</p>
              <p className="miletone-left-para-600">Features:</p>
              <ul className="education-ul mileston">
                <li>Searching vehicles by Make/Model/Year.</li>
                <li>Finding hiding spots within that vehicle.</li>
                <li>Seeing details about a hiding spot.</li>
                <li>Adding hiding spots/vehicles.</li>
                <li>Notifying boarder officers about new hiding spots added.</li>
              </ul>
            </div>
            <div className="experience-h1-ed experience-h1 marg">
              <h2>Education</h2>
              </div>
          <div className="education">
              <h3>MOBILE APPLICATION DESIGN &amp; DEVELOPMENT</h3>
              <p className="miletone-left-para-600">Algonquin College of Applied Arts and Technology</p>
              <p>Expected Graduate: Spring 2019.</p>
              <ul className="education-ul">
                <li>Dean's Honours List: Fall 2017, Winter 2018 and Fall 2018</li>
                <li>GPA: 3.7/4</li>
              </ul>
              <h3>BACHELOR'S IN COMPUTER SCIENCE</h3>
              <p className="miletone-left-para-600">Gujarat Technological University </p>
              <ul className="education-ul">
                <li>Undergraduate Coursework: Operating Systems; Databases; Algorithms; Programming Languages; Comp. Architecture; Comp. Networking; Applied Electronics; Mathematics.</li>
                <li>CPI: 7.1/10.</li>
              </ul>
            </div>
            <div className="experience-h1 experience-h1-ed marg">
              <h2>TECHNICAL EXPERTISE</h2>
              </div>
            <div className="Pro-rel-skills">
              <ul className="Pro-rel-skills-ul">
                <li><h3>Programming Languages</h3><p>Java, C#, C++, Python.</p></li>
                <li><h3>Operating Systems</h3><p>Windows, Linux, Mac OS.</p></li>
                <li><h3>Web Based Languages, Frameworks and Libraries</h3><p> React.js, Express, JavaScript, Nodejs, PHP, HTML5, CSS3, XML, Cordova, Workbox, Mocha, Chai, JSON, SaaS, TypeScript.js, Angular.js, Node.js, MVC5, ES6, ASP.net, GraphQL, React Native, Xamarin, JSON, XML, Ajax.
              </p></li>
                <li><h3>Native Mobile</h3><p>React Native, Swift, Kotlin, ObjectiveC.</p></li>
                <li><h3>Databases</h3><p>Firebase, MySQL, MongoDB, SQLite, CosmosDB, PostgreSQL.</p></li>
                <li><h3>Cloud Services</h3><p>Microsoft Azure Node.js App Services, Amazon Web Services.</p></li>
                <li><h3>Testing Tools</h3><p> JavaScript: Mocha and Chai, Android: Record Espresso Test and iOS: Unit Testing.</p></li>
                <li><h3>Tools &amp; IDE</h3><p>Visual Studio, Eclipse Java, Git, Microsoft Office Suite, Android Studio, Xcode.</p></li>
              </ul>
             
            </div>
          </div>
          
        </div>
        <div className="skills-port-section">
        <div className="exp">
              <h2>HONORS &amp; AWARDS</h2>
        </div>
        <div className="skills-port">
        <div id="col-left-portfolio">
        <ul>
          <li>
          Achieved 2nd place for in Algonquin Applied Research Day. Our project ACE for Canadian Border Service Agency awarded by second place among 113 projects for our APP development skills and design.
          </li>
        </ul>
        </div></div>
        <div className="exp">
              <h2>Skills Portfolio</h2>
        </div>
        <div className="skills-port">
        <div id="col-left-portfolio">
        <h3>React Native App for CBSA<i> Development in progress</i></h3>
              <a href="#ace" onClick={this.showGraphics} id="ace" className="vid">{this.state.aceText}</a>
              {this.state.ace&&
              <video width="300" height="600" controls autoPlay>
              <source src={require("./assets/ace.mov")} type="video/mp4"/>
              </video>
              }
               <ul className="skills-port-ul">
                <li>Built with React Native.</li>
                <li>Built back-end api with NodeJs, Express.</li>
                <li>API talks to MongoDB to store and fetch data.</li>
              </ul>
              <h3>IOS Passport Application</h3>
              <a id="ios" target="_blank" rel="noopener noreferrer" href="https://github.com/guer0157/iosFinal">https://github.com/guer0157/iosFinal</a>
              <a href="#ios" onClick={this.showGraphics} id="ios" className="vid">{this.state.iosfinaltext}</a>
             
              {this.state.iosfinal&&
              <video width="300" height="600" controls autoPlay>
              <source src={require("./assets/iosdevelopment.mov")} type="video/mp4"/>
              </video>
              }
               <ul className="skills-port-ul">
                <li>Used Swift to develop a passport application to track trips.</li>
                <li>Implemented URLSession and URLRequest to make calls to a JSON API for data.</li>
              </ul>
              
              </div>
              <div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;

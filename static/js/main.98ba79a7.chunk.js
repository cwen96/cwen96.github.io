(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,function(e,a,t){e.exports=t(10)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(2),c=t.n(r);t(8),t(9);class s extends l.Component{render(){return n.a.createElement("div",null,n.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light fixed-top"},n.a.createElement("a",{className:"navbar-brand nav-link disabled",id:"navbar-name"},"Chris Wen"),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarCollapse","aria-controls":"navbarCollapse","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarCollapse"},n.a.createElement("ul",{className:"navbar-nav mr-auto"},n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#about"},"About")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#experience"},"Experience")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#hackathons"},"Hackathons")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#projects"},"Projects")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#academia"},"Academia"))))))}}class m extends l.Component{render(){return n.a.createElement("div",{className:"jumbotron vertical-center"},n.a.createElement("div",{className:"overlay"}),n.a.createElement("div",{className:"inner",id:"intro"},n.a.createElement("h1",{className:"jumbotron__name"},"Hey,",n.a.createElement("br",null),"I'm Chris"),n.a.createElement("div",{className:"jumbotron__line"}),n.a.createElement("p",{className:"jumbotron__description"},"Software developer")))}}var i=function(e){const[a,t]=n.a.useState(!1),l=n.a.useRef();return n.a.useEffect(()=>{const e=l.current,a=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting&&t(e.isIntersecting)})});return a.observe(e),()=>a.unobserve(e)},[]),n.a.createElement("div",{className:"fade-in-section ".concat(a?"is-visible":""),ref:l},e.children)};class o extends l.Component{render(){return n.a.createElement("div",{className:"gray new-section",id:"about"},n.a.createElement("h1",{className:"title"},"About Me"),n.a.createElement(i,null,n.a.createElement("div",{className:"container"},n.a.createElement("div",{id:"carouselExampleIndicators",className:"carousel slide","data-ride":"carousel","data-interval":"false"},n.a.createElement("ol",{className:"carousel-indicators"},n.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"0",class:"active"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"1"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"2"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"3"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"4"}),n.a.createElement("li",{"data-target":"#carouselExampleIndicators","data-slide-to":"5"})),n.a.createElement("div",{className:"carousel-inner"},n.a.createElement("div",{className:"carousel-item active"},n.a.createElement("br",null),n.a.createElement("img",{className:"d-block w-75 mx-auto",src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/home.jpg",alt:"First slide"}),n.a.createElement("div",{className:"carousel-space"})),n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{className:"d-block w-75 mx-auto",src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/sendai.png",alt:"Second slide"})),n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{className:"d-block w-75 mx-auto",src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/seoul.png",alt:"Third slide"})),n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{className:"d-block w-75 mx-auto",src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/sapporo.png",alt:"Fourth slide"})),n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{className:"d-block w-75 mx-auto",src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/bambooforest.png",alt:"Fifth slide"})),n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{className:"d-block w-75 mx-auto",src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/volcano.png",alt:"Sixth slide"})),n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{className:"d-block w-75 mx-auto",src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/lakeLouise.png",alt:"Seventh slide"})),n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{className:"d-block w-75 mx-auto",src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/banff.png",alt:"Eighth slide"})),n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{className:"d-block w-75 mx-auto",src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/golden-gate-bridge.png",alt:"Nineth slide"})),n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{className:"d-block w-75 mx-auto",src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/tori.png",alt:"Nineth slide"})),n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{className:"d-block w-75 mx-auto",src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/nara.png",alt:"Nineth slide"})),n.a.createElement("div",{className:"carousel-item"},n.a.createElement("img",{className:"d-block w-75 mx-auto",src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/nagoya.png",alt:"Nineth slide"}))),n.a.createElement("a",{className:"carousel-control-prev",href:"#carouselExampleIndicators",role:"button","data-slide":"prev"},n.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Previous")),n.a.createElement("a",{className:"carousel-control-next",href:"#carouselExampleIndicators",role:"button","data-slide":"next"},n.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Next")))),n.a.createElement("div",{className:"end-section"})))}}class u extends l.Component{render(){return n.a.createElement("div",null,n.a.createElement("div",{className:"fade-in-section"}),n.a.createElement("div",{className:"divider container"}),n.a.createElement("div",{className:"proj-color"},n.a.createElement("div",{className:"new-section",id:"projects"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"title"},"Projects"),n.a.createElement("h2",{className:"subsection"},"Academic Projects"),n.a.createElement(i,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"text-center"},n.a.createElement("img",{src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/pattern-matching.jpg",className:"img-fluid shadow",alt:"Responsive"}),n.a.createElement("br",null),n.a.createElement("br",null))),n.a.createElement("div",{className:"col-9"},n.a.createElement("h3",{className:"subtitle"},"Embedded Pattern Matching Game (C)"),n.a.createElement("span",{className:"date"},"Embedded and Real Time System Software"),n.a.createElement("br",null),n.a.createElement("a",{href:"http://www.sfu.ca/about.html",target:"_blank",rel:"noreferrer"},"Simon Fraser University"),n.a.createElement("br",null),n.a.createElement("ul",{className:"remove-bullets"},n.a.createElement("li",null,"Developed a pattern matching game where the user needs to copy the correct sequence displayed on an 8x8 LED matrix. After every round, the sequence length increases by 1 until the user makes a mistake, resulting in a game over."),n.a.createElement("br",null),n.a.createElement("li",null,"Mapped an 8x8 LED matrix, 4 buttons, power, and ground to pins on the BeagleBone Green development board."),n.a.createElement("br",null),n.a.createElement("li",null,"Used sleeps for button debouncing and to prevent the user from updating values too early.")))),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement(i,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"text-center"},n.a.createElement("img",{src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/rushHour.png",className:"img-fluid shadow",alt:"Responsive"}),n.a.createElement("br",null),n.a.createElement("br",null))),n.a.createElement("div",{className:"col-9"},n.a.createElement("h3",{className:"subtitle"},"Rush Hour Game (Java)"),n.a.createElement("span",{className:"date"},"Data Structures and Programming"),n.a.createElement("br",null),n.a.createElement("a",{href:"http://www.sfu.ca/about.html",target:"_blank",rel:"noreferrer"},"Simon Fraser University"),n.a.createElement("br",null),n.a.createElement("ul",{className:"remove-bullets"},n.a.createElement("li",null,'Recreated the "Rush Hour" game where the user has to move cars out of the way in order to clear a path for the target car to exit the board.'),n.a.createElement("br",null),n.a.createElement("li",null,"Created a solver using Breadth-First Search to find a solution to a given board and output a step-by-step solution to a file."),n.a.createElement("br",null),n.a.createElement("li",null,"Implemented unit testing to systematically test edge cases, invalid cases, and normal cases.")))),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement(i,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"text-center"},n.a.createElement("img",{src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/lineFollowingRobot.png",className:"img-fluid shadow",alt:"Responsive"}),n.a.createElement("br",null),n.a.createElement("br",null))),n.a.createElement("div",{className:"col-9"},n.a.createElement("h3",{className:"subtitle"},"Line Following Robot (C)"),n.a.createElement("span",{className:"date"},"Introduction to Microcontrollers"),n.a.createElement("br",null),n.a.createElement("a",{href:"https://www.kpu.ca/about",target:"_blank",rel:"noreferrer"},"Kwantlen Polytechnic University"),n.a.createElement("br",null),n.a.createElement("ul",{className:"remove-bullets"},n.a.createElement("li",null,"Developed a program using C to communicate with a microcontroller and several infrared sensors in order to guide a robot through a complex line path."),n.a.createElement("br",null),n.a.createElement("li",null,"Constructed multiple test tracks to identify and debug unexpected behaviour."),n.a.createElement("br",null),n.a.createElement("li",null,"Demonstrated effective time management and teamwork skills by delegating tasks through a project schedule in order to meet important deadlines.")))),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement(i,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"text-center"},n.a.createElement("img",{src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/TPU.png",className:"img-fluid shadow",alt:"Responsive"}),n.a.createElement("br",null),n.a.createElement("br",null))),n.a.createElement("div",{className:"col-9"},n.a.createElement("h3",{className:"subtitle"},"Google Tensor Processing Unit (VHDL)"),n.a.createElement("span",{className:"date"},"Fundamentals of Digital Logic and Design"),n.a.createElement("br",null),n.a.createElement("a",{href:"http://www.sfu.ca/about.html",target:"_blank",rel:"noreferrer"},"Simon Fraser University"),n.a.createElement("br",null),n.a.createElement("ul",{className:"remove-bullets"},n.a.createElement("li",null,"Used VHDL to design and implement a Tensor Processing Unit (TPU) that mimics the functionality of Google's TPUv1 that was introduced in 2016 to process ML workloads."),n.a.createElement("br",null),n.a.createElement("li",null,"Designed each component from the ground up using the engineering design process with minimal guidance from the instructor."),n.a.createElement("br",null),n.a.createElement("li",null,"Verified the correct functionality of the components by creating testbenches to simulate the design in ModelSim.")))),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement("h2",{className:"subsection"},"Personal Projects"),n.a.createElement(i,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"text-center"},n.a.createElement("img",{src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/githubPages.png",className:"img-fluid shadow",alt:"Responsive"}),n.a.createElement("br",null),n.a.createElement("br",null))),n.a.createElement("div",{className:"col-9"},n.a.createElement("h3",{className:"subtitle"},"Personal Website (HTML/CSS + React)"),n.a.createElement("ul",{className:"remove-bullets"},n.a.createElement("li",null,"Created this web page using HTML, CSS, JavaScript, and the Bootstrap framework to track my academic and professional journey"),n.a.createElement("br",null),n.a.createElement("li",null,"Used React for the website's front-end for a more modular approach to web development."),n.a.createElement("br",null),n.a.createElement("li",null,"Implemented fade in animations using JavaScript for a more natural viewing experience.")))),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement(i,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"text-center"},n.a.createElement("img",{src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/snake.png",className:"img-fluid shadow",alt:"Responsive"}))),n.a.createElement("div",{className:"col-9"},n.a.createElement("h3",{className:"subtitle"},"Snake (Python)"),n.a.createElement("ul",{className:"remove-bullets"},n.a.createElement("li",null,"Created a fully functioning Snake game complete with a user interface using pygame."),n.a.createElement("br",null),n.a.createElement("li",null,"Implemented a scoring system that tracks the user's current score and also the user's high score.")))),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement(i,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"text-center"},n.a.createElement("img",{src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/wordCloud.png",className:"img-fluid shadow",alt:"Responsive"}))),n.a.createElement("div",{className:"col-9"},n.a.createElement("h3",{className:"subtitle"},"Word Cloud Generator (Python)"),n.a.createElement("ul",{className:"remove-bullets"},n.a.createElement("li",null,"Created a program that generates a word cloud with the most frequent words appearing the largest and the least common words appearing the smallest."),n.a.createElement("br",null),n.a.createElement("li",null,"Used the TkInter Python library for the program's UI.")))),n.a.createElement("div",{className:"end-section"}))))))}}class d extends l.Component{render(){return n.a.createElement("div",null,n.a.createElement("div",{className:"divider container"}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"new-section",id:"hackathons"},n.a.createElement("h1",{className:"title"},"Hackathons"),n.a.createElement(i,null,n.a.createElement("h2",{className:"subsection"},"nwHacks"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"text-center"},n.a.createElement("img",{src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/nwHacks.png",className:"img-fluid shadow",alt:"Responsive"}),n.a.createElement("br",null),n.a.createElement("br",null))),n.a.createElement("div",{className:"col-9"},n.a.createElement("h3",{className:"subtitle"},"Speech-to-Text Processing App (Python + Google Cloud API)"),n.a.createElement("ul",{className:"remove-bullets"},n.a.createElement("li",null,"Created a mobile app that transcribes a video, audio, or text file and then summarizes and organizes the data into several main topics determined through NLP."),n.a.createElement("br",null),n.a.createElement("li",null,"Achieved 40% - 50% text condensation for lectures and research articles without omitting key ideas."),n.a.createElement("br",null),n.a.createElement("li",null,"Built the app using Google Cloud's Speech-To-Text API for audio/video transcription and Python's spaCy NLP library to analyze the transcribed text.")))),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement(i,null,n.a.createElement("h2",{className:"subsection"},"Hack the Northeast"),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"text-center"},n.a.createElement("img",{src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/htne.png",className:"img-fluid shadow",alt:"Responsive"}),n.a.createElement("br",null),n.a.createElement("br",null))),n.a.createElement("div",{className:"col-9"},n.a.createElement("h3",{className:"subtitle"},"Political Bias Detection App (Python + Google Cloud API)"),n.a.createElement("ul",{className:"remove-bullets"},n.a.createElement("li",null,"Created a Google Chrome extension using Python that analyzes the text of an online news article and lets the user know if the article is politically left leaning, right leaning, or centrist."),n.a.createElement("br",null),n.a.createElement("li",null,"Trained a machine learning algorithm using over 200 data points to identify a text input as left leaning or right leaning with over 85% accuracy."),n.a.createElement("br",null),n.a.createElement("li",null,"Built the app using Google Cloud's AutoML Natural Language API, Python, React, JavaScript, and Flask.")))),n.a.createElement("div",{className:"end-section"})))))}}class E extends l.Component{render(){return n.a.createElement("div",null,n.a.createElement("div",{className:"divider container"}),n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"new-section",id:"academia"},n.a.createElement("h1",{className:"title"},"Academia"),n.a.createElement("h2",{className:"subsection"},"Education"),n.a.createElement(i,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"text-center"},n.a.createElement("img",{src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/sfuLogo.png",className:"img-fluid shadow",alt:"trulioo-logo"}),n.a.createElement("br",null),n.a.createElement("br",null))),n.a.createElement("div",{className:"col-9"},n.a.createElement("h4",{className:"subtitle"},"BASc, Computer Engineering"),n.a.createElement("span",null,n.a.createElement("a",{href:"https://www.sfu.ca/about.html",target:"_blank",rel:"noreferrer"},"Simon Fraser University"),n.a.createElement("br",null),"Burnaby, BC",n.a.createElement("br",null),n.a.createElement("div",{className:"date"},"Sep 2020 - Present")),n.a.createElement("p",null,"I am currently pursuing a degree in Computer Engineering from Simon Fraser University and expect to complete my degree by 2025. My interests in this area include software development, computer architecture, and AI."," ",n.a.createElement("br",null),n.a.createElement("br",null),"A collection of projects that I am currently working on as well as projects that I have completed can be found on my GitHub\xa0",n.a.createElement("a",{href:"https://github.com/cwen96",target:"blank"},"here"),"."))),n.a.createElement("br",null),n.a.createElement("br",null)),n.a.createElement(i,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"text-center"},n.a.createElement("img",{src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/ubcLogo.png",className:"img-fluid shadow",alt:"Responsive"}),n.a.createElement("br",null),n.a.createElement("br",null))),n.a.createElement("div",{className:"col-9"},n.a.createElement("h4",{className:"subtitle"},"BSc, Environmental Sciences"),n.a.createElement("span",null,n.a.createElement("a",{href:"https://www.ubc.ca/about/",target:"_blank",rel:"noreferrer"},"University of British Columbia"),n.a.createElement("br",null),"Vancouver, BC",n.a.createElement("br",null),n.a.createElement("div",{className:"date"},"Sep 2014 - May 2018")),n.a.createElement("p",null,"I graduated from the University of British Columbia with a degree in Environmental Sciences in 2018. My interests in this topic area include topography, marine ecology, and atmospheric chemistry.",n.a.createElement("br",null),n.a.createElement("br",null),"I spent the latter half of my degree working as a research consultant with the\xa0",n.a.createElement("a",{href:"http://jerichostewardship.ca/",target:"blank"},"Jericho Stewardship Group"),". My research team collected streamflow data using ArcGIS and used this data along with secondary research to make a recommendation to the Jericho Stewardship Group regarding the possibility of reintroducing salmon into Jericho Beach Park (full report available\xa0",n.a.createElement("a",{href:"https://github.com/cwen96/Jericho-Beach-Park-Research-Project",target:"blank"},"here"),")."))),n.a.createElement("div",{className:"end-section"})))))}}class h extends l.Component{render(){return n.a.createElement("div",null,n.a.createElement("div",{className:"fade-in-section"}),n.a.createElement("div",{className:"divider container"}),n.a.createElement("div",{className:"proj-color"},n.a.createElement("div",{className:"new-section",id:"experience"},n.a.createElement("div",{className:"container"},n.a.createElement("h1",{className:"title"},"Experience"),n.a.createElement(i,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"text-center"},n.a.createElement("img",{src:"https://raw.githubusercontent.com/cwen96/cwen96.github.io/master/images/trulioo.png",className:"img-fluid shadow",alt:"trulioo-logo"}),n.a.createElement("br",null),n.a.createElement("br",null))),n.a.createElement("div",{className:"col-9"},n.a.createElement("a",{className:"subtitle",href:"https://www.trulioo.com/company/about-us",target:"_blank",rel:"noreferrer"},"Trulioo"),n.a.createElement("div",null,n.a.createElement("b",null,"Software Engineering Intern")),n.a.createElement("div",null,"Vancouver, BC"),n.a.createElement("span",{className:"date"},"Sep 2022 - Apr 2023"),n.a.createElement("ul",{className:"remove-bullets"},n.a.createElement("li",null,"Implemented REST API endpoints using Kotlin to fetch, store, and delete user images from a database."),n.a.createElement("br",null),n.a.createElement("li",null,"Parsed JWTs to ensure that users have permissions to access an image stored in the database."),n.a.createElement("br",null),n.a.createElement("li",null,"Maintained and improved Trulioo's iOS and Android clients.")),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("a",{className:"subtitle",href:"https://www.trulioo.com/company/about-us",target:"_blank",rel:"noreferrer"},"Trulioo"),n.a.createElement("div",null,n.a.createElement("b",null,"Software QA Engineering Intern")),n.a.createElement("div",null,"Vancouver, BC"),n.a.createElement("span",{className:"date"},"Sep 2021 - Apr 2022"),n.a.createElement("ul",{className:"remove-bullets"},n.a.createElement("li",null,"Developed automation test scripts using C# to reduce manual testing during release."),n.a.createElement("br",null),n.a.createElement("li",null,"Used React, JavaScript, and TypeScript to develop the front-end and back-end for an internal tool to reduce manual test data creation."),n.a.createElement("br",null),n.a.createElement("li",null,"Systematically tested new features by going through expected cases, edge cases, and errors to ensure full coverage.")))),n.a.createElement("br",null),n.a.createElement("div",{className:"end-section"}))))))}}var g=class extends l.Component{render(){return n.a.createElement("div",null,n.a.createElement(s,null),n.a.createElement(m,null),n.a.createElement(o,null),n.a.createElement(h,null),n.a.createElement(d,null),n.a.createElement(u,null),n.a.createElement(E,null))}};c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(g,null)),document.getElementById("root"))}],[[3,1,2]]]);
//# sourceMappingURL=main.98ba79a7.chunk.js.map
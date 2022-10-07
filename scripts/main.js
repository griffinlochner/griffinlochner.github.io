const header = document.getElementById("header");
const main = document.getElementById("main");

function toggleNav() {
  if (header.className === "header-closed") {
      header.className = "header-open";
    } else {
      header.className = "header-closed";
  }
}

function navAbout() {
  main.className = "about-text"
  main.innerHTML = `
  <h2>About</h2>
  <img src="images/kate_griff_psychedelic.jpg" width="520px" height= "520px" alt="Kate & Griff" />
  <p>
  Hey I'm Griff. For much of my professional life I've been a software test engineer. I appreciate
  and enjoy high quality accessible software and the testing processes required to sustain such quality. 
  I also enjoy front and back end development.
  </p>
  <p>This site exists to share a bit about myself as well as function 
  as a sort of sandbox where I can experiment with different web technology. I intend to make this site as 
  accessible as possible with respect to responsive design and WCAG (Web Content Accessibility Guidelines).
  </p>
  <p>
  Outside of work, I love spending time with my wife Kate and our dogs Grace and Zeppelin. We enjoy various 
  entertainment in Madison Wisconsin such as stand up comedy, live music, art exhibits, and nature conservancies.
  </p>
  <p>
  I'm extremely passionate about learning. The process of learning about a subject that I know nothing about 
  is very satisfying. Reading is my preferred learning method. I love non-fiction books about science, history, 
  astronomy, technology, and more. Some of my favorites can be found in the Books page.
  </p>
  <p>
  We live in an incredible 
  time with access to an abundance of knowledge. It's a huge missed opportunity for one to exist and not learn 
  as much as possible about the world, solar system, galaxy, universe, multiverse, or whatever reality we live in.
  </p>
  <p>
  Other interests of mine include gaming, art, and music. I dabble in content creation for the popular trading 
  card game Magic: The Gathering. High rank strategy and gameplay videos can be found on my YouTube channel (see Links page). 
  I've always been a huge Nintendo fan as well and currently am enjoying lots of games on Nintendo Switch.
  </p>
  <p>
  As for art, I like many different styles and subject matter such as anime, comic, digital, nature, pinup, psychedelic, 
  traditional, and more. I enjoy traditional drawing and using powerful tools like Photoshop and Procreate for digital 
  artwork. Some of my stuff can be found in the Art page.
  </p>
  <p>
  As for music, I also like many different styles such as classical, metal, phonk, and more. However, my absolute favorite style, 
  and it's not even close, is psychedelic trance. I've dabbled in producing music of this style a bit using tools such as 
  Ableton Live and other digital audio workstation programs.
  </p>
  <p>
  If you wish to reach out for professional inquiry or just want to say hi on social media please see the Links page for the 
  appropriate place to do so (LinkedIn, Twitter, etc.). ☮
  </p>
  <br><br>
  `;
  header.className = "header-closed";
  document.title = "Griffin Lochner - About";
}

function navResume() {
  main.className = "resume-text"
  main.innerHTML = 
  `
  <h2>Resume</h2>
  <br>
  <h3>Widen Enterprises / Acquia</h3> <time>June 2009 - Present</time> <span> Madison, WI</span>
  <br><br>
  <h4>Senior Software Test Engineer</h4><time>September 2012 - Present</time>
  <ul>
  <li>Write, manage, and refactor test automation suites to support continuous integration of new
  product features and identify issues</li>
  <li>Develop and execute test plans for new and existing functionality</li>
  <li>Perform code reviews for developers and other test engineers</li>
  <li>Create detailed reports that identify underlying causes of issues</li>
  <li>Work with product managers, tech leads, and developers to ensure the quality of products</li>
  <li>Provide visibility, transparency and accountability to testing process and the state of testing</li>
  </ul>
  <br>
  <h4>Software Technical Support</h4> <time>June 2009 - September 2012</time>
  <ul>
  <li>Provide technical support via email, chat, and phone for a suite of marketing technology
  applications</li>
  <li>Communicate best practices with client administrators to ensure their successful use and
  engagement of various application features</li>
  <li>Assist with the planning and configuration of new client Digital Asset Management SaaS</li>
  </ul>
  <br>
  <h3>Esker Software</h3> <time>June 2007 - June 2009</time> <span>Madison, WI</span>
  <br><br>
  <h4>Client Support Specialist</h4>
  <ul>
  <li>Lead technical support triage responsible for qualifying client software issue severity,
  troubleshooting, and providing timely resolution to live issues</li>
  <li>Process client requests for account setup, product upgrades, and professional services</li>
  </ul>
  <h2>Education & Certificates</h2>
  <ul>
  <li>O'reilly School Of Technology - Professional Java Development</li>
  <li>O'reilly School Of Technology - Web programming</li>
  <li>Infraguard - Information Security Awareness in the Workplace</li>
  <li>IAAP WAS Certification Curriculum Preparation from Deque Systems Inc.</li>
  <li>Minneapolis Community & Technical College - Computer Science</li>
  </ul>
  <h2>Skills</h2>
  <div class="skills-grid">
  <ul>
  <li>Scrum and Agile methodologies</li>
  <li>Atom, IntelliJ, Visual Studio Code</li>
  <li>Ruby, Rspec, Airborne</li>
  <li>Adobe Photoshop</li>
  <li>Docker</li>
  </ul>
  <ul>
  <li>Selenium / Webdriver / Playwright</li>
  <li>GitHub</li>
  <li>Java / PHP / HTML / CSS</li>
  <li>MySQL, DynamoDB</li>
  <li>Buildkite</li>
  </ul>
  <ul>
  <li>REST API testing</li>
  <li>Slack / Jira</li>
  <li>Javascript / Typescript</li>
  <li>Amazon Web Services</li>
  <li>Node, NPM, React</li>
  </ul>
  </div>
  <span>Note: The above list is a small sampling of apps, frameworks, languages, and tools that I'm experienced with. 
  It is by no means complete as enumerating every tool I've used would be too exhaustive. </span>
  <br><br><br>
  `;
  header.className = "header-closed";
  document.title = "Griffin Lochner - Resume";
}

function navArt() {
  main.className = "art-text"
  main.innerHTML = `
  <h2>Eventually various art I've made will be here...</h2>
  `;
  header.className = "header-closed";
  document.title = "Griffin Lochner - Art";
}

function navBooks() {
  main.className = "books-text"
  main.innerHTML = `
  <h2>Recommended Reading</h2>
  <ul>
  <li>A Brief History of Time <span>Stephen Hawking</span></li>
  <li>Arguably <span>Christopher Hitchens</span></li>
  <li>Billions & Billions <span>Carl Sagan</span></li>
  <li>Brief Answers to the Big Questions <span>Stephen Hawking</span></li>
  <li>Broca's Brain <span>Carl Sagan</span></li>
  <li>Cosmos <span>Carl Sagan</span></li>
  <li>Free Will <span>Sam Harris</span></li>
  <li>How to Change Your Mind <span>Michael Pollan</span></li>
  <li>How to Create a Mind <span>Ray Kurzweil</span></li>
  <li>Hyperspace <span>Michio Kaku</span></li>
  <li>In Defense of Food <span>Michael Pollan</span></li>
  <li>Lying <span>Sam Harris</span></li>
  <li>Pale Blue Dot <span>Carl Sagan</span></li>
  <li>Physics of the Future <span>Michio Kaku</span></li>
  <li>Shadows of Forgotten Ancestors <span>Ann Druyan, Carl Sagan</span></li>
  <li>Superintelligence <span>Nick Bostrom</span></li>
  <li>The Age of Spiritual Machines <span>Ray Kurzweil</span></li>
  <li>The Demon Haunted World <span>Carl Sagan</span></li>
  <li>The Dragons of Eden <span>Carl Sagan</span></li>
  <li>The French House <span>Courtney Lochner</span></li>
  <li>This is Your Mind on Plants <span>Michael Pollan</span></li>

  </ul>`;
  header.className = "header-closed";
  document.title = "Griffin Lochner - Books";
}

function navLinks() {
  main.className = "links-text"
  main.innerHTML = `
  <h2>Links</h2>
  <br>
  <a href="https://www.amazon.com/hz/wishlist/ls/3FKEIVL4KK36V?ref_=wl_share">Amazon Wish List</a>
  <br><br>
  <a href="https://www.facebook.com/griffin.lochner">Facebook</a>
  <br><br>
  <a href="https://github.com/griffinlochner">GitHub</a>
  <br><br>
  <a href="https://www.linkedin.com/in/griffin-lochner-68482970/">LinkedIn</a>
  <br><br>
  <a href="https://www.youtube.com/channel/UCUi_TJ_OQppW-z8DP5nqz4w">Magic: the Gathering Youtube Channel</a>
  <br><br>
  <a href="https://www.twitch.tv/psyhye420">Twitch</a>
  <br><br>
  <a href="https://twitter.com/PsyHye">Twitter</a>
  `;
  header.className = "header-closed";
  document.title = "Griffin Lochner - Links";
}
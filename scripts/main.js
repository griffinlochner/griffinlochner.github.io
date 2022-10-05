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
  main.innerHTML = "<h2>About</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>";
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
  <li>This is Your Mind on Plants <span>Michael Pollan</span></li>

  </ul>`;
  header.className = "header-closed";
  document.title = "Griffin Lochner - Books";
}

function navLinks() {
  main.className = "links-text"
  main.innerHTML = "<h2>Eventually links to other sites related to me will be here...</h2><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p><p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.</p><p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>";
  header.className = "header-closed";
  document.title = "Griffin Lochner - Links";
}
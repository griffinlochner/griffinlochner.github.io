class Header extends HTMLElement {
    constructor() {
      super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header id="header" class="header-closed">
        <h1>Griffin Lochner</h1>
        <nav>
          <ul>
            <li><a id="hamburger" href="javascript:void(0);" class="icon" onclick=toggleNav()>&#9776;</a></li>
            <li><a class="about-link" href="index.html">About</a></li>
            <li><a class="resume-link" href="resume.html">Resume</a></li>
            <li><a class="art-link" href="art.html">Art</a></li>
            <li><a class="books-link" href="books.html">Books</a></li>
            <li><a class="links-link" href="links.html">Links</a></li>
          </ul>
        </nav>
        </header>
        `;
    }
}



  customElements.define('header-component', Header);
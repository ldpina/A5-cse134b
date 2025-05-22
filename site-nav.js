class SiteNav extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <header>
            <input type="checkbox" id="toggle">
            <nav>
                <a id="titleSite" href="index.html">
                    Luis Pina
                </a>
                <label class="navbar-toggler" for="toggle">
                    <span class="bar"></span>
                    <span class="bar"></span>
                    <span class="bar"></span>
                </label>
                <input type = "checkbox" id = "mood-toggle" class = "mood-toggle">
                <label for = "mood-toggle" class = "mood-toggle-label" aria-label="Toggle Dark Mode">
                    <span class = "sun">☀</span>
                    <span class = "moon">🌙</span>
                </label>
                <ul class="nav-list">  
                    <li class="nav-item">
                        <a class="nav-link" href = "index.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href = "designPort.html">Design Portfolio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href = "https://github.com/ldpina">Github</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href = "https://www.linkedin.com/in/ldpina/">Linkedin</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href = "contactme.html">Contact Me</a>
                    </li>
                </ul>
              
            </nav>
        </header>
      `;
      const checkbox = this.querySelector("#mood-toggle");
      checkbox.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode", checkbox.checked);
      });
    }
  }
  
  customElements.define("site-nav", SiteNav);
  
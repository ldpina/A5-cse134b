class ProjectCard extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      const card = document.createElement("article");
      card.classList.add("card");
  
      card.innerHTML = `
       <style>
            .card {
                padding: 2%;
                display: flex;
                flex-direction: column;
                animation: fadeIn 0.6s ease-in-out;
            }
            .card img {
                width: 38em;
                height: auto;
            }
            .card a {
                text-decoration: none;
                color: rgb(98, 216, 200);
                font-weight: 500;
            }
        </style>

        <h2>Project Title</h2>
        <picture>
          <img src="placeholder.jpg" alt="Project Image">
        </picture>
        <p>No description available.</p>
        <a href="#">View Project</a>
      `;
      this.shadowRoot.append(card);
    }
  
    static get observedAttributes() {
      return ["title", "image", "description", "link"];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      const card = this.shadowRoot.querySelector("article");
      if (name === "title") {
        card.querySelector("h2").textContent = newValue || "Project Title";
      } else if (name === "image") {
        card.querySelector("img").setAttribute("src", newValue || "placeholder.jpg");
      } else if (name === "description") {
        card.querySelector("p").textContent = newValue || "No description available.";
      } else if (name === "link") {
        card.querySelector("a").setAttribute("href", newValue || "#");
      }
    }
  }
  
  customElements.define("project-card", ProjectCard);
  
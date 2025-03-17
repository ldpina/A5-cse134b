document.addEventListener("DOMContentLoaded", async function () {
    const projectArea = document.getElementById("projectArea");
  
    try {
      const response = await fetch("projects.json");
      const projects = await response.json();
  
      const localProjects = JSON.parse(localStorage.getItem("savedProjects")) || [];
      const allProjects = [...projects, ...localProjects];
  
      allProjects.forEach(project => {
        const card = document.createElement("project-card");
  
        card.setAttribute("title", project.title);
        card.setAttribute("image", project.image);
        card.setAttribute("description", project.description);
        card.setAttribute("link", project.link);
  
        projectArea.appendChild(card);
      });
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  });
  
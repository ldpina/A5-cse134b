document.addEventListener("DOMContentLoaded", async function () {
  const projectArea = document.getElementById("projectArea");
  const designProjectArea = document.getElementById("designProjectArea");

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
    console.error("Error fetching projects:", error);
  }
});

document.addEventListener("DOMContentLoaded", async function () {
  const designProjectArea = document.getElementById("designProjectArea");
  if (!designProjectArea) {
    console.error("designProjectArea not found!");
    return;
  }

  try {
    const designResponse = await fetch("designprojects.json");
    const designProjects = await designResponse.json();

    designProjects.forEach(project => {
      const card = document.createElement("project-card");
      card.setAttribute("title", project.title);
      card.setAttribute("image", project.image);
      card.setAttribute("description", project.description);
      card.setAttribute("link", project.link);
      designProjectArea.appendChild(card);
    });
  } catch (err) {
    console.error("Failed to load design projects:", err);
  }
});

document.getElementById("loadLocal").addEventListener("click", loadLocal);
document.getElementById("loadRemote").addEventListener("click", loadRemote);

function loadLocal() {
    const localData = JSON.parse(localStorage.getItem("projects"));
    if (localData) {
        populateCards(localData);
    }
}

function loadRemote() {
    fetch("https://api.jsonbin.io/v3/b/67d7ab748960c979a5730cb8", {
        headers: {
            "X-Master-Key": "$2a$10$YNEaAJM9khRewtJ3gE4xaOSuROULBtBJmgAGXyGgqnzpT93z2vwTK"
        }
    })
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log("Fetched data:", data);
        if (!data || !data.record) {
            throw new Error("Unexpected JSON structure");
        }
        populateCards(data.record);
    })
    .catch((error) => {
        console.error("Fetch error:", error);
    });
}


function populateCards(data) {
    const cardContainer = document.getElementById("cardContainer");
    cardContainer.innerHTML = '';

    data.forEach((project) => {
        const projectCard = document.createElement("project-card");
        projectCard.setAttribute("title", project.title);
        projectCard.setAttribute("image", project.image);
        projectCard.setAttribute("description", project.description);
        projectCard.setAttribute("link", project.link);

        cardContainer.appendChild(projectCard);
    });
}

const sampleData = [
    {
        title: "Project 1",
        image: "image1.jpg",
        description: "Description for Project 1",
        link: "https://example.com"
    },
    {
        title: "Project 2",
        image: "image2.jpg",
        description: "Description for Project 2",
        link: "https://example.com"
    }
];
localStorage.setItem("projects", JSON.stringify(sampleData));

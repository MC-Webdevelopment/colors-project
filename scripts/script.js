const colors = document.querySelector("#colors");
const libraryButton = document.querySelector("#generateButton");
const saveButton = document.querySelector("#saveButton");

fetch("https://www.colr.org/json/colors/random/10")
    .then(response => response.json())
    .then(json => {
        for (let i = 0; i < 5; i++) {
            const colorTitle = document.createElement("div");
            colorTitle.innerHTML = "#" + json.matching_colors[i];
            colorTitle.style.height = "50%";

            const newLock = document.createElement("i");
            newLock.setAttribute("class", "fas fa-lock-open")
            newLock.style.height = "50%";

            const newColor = document.createElement("div");
            newColor.setAttribute("class", "colorDiv");
            newColor.style.backgroundColor = "#" + json.matching_colors[i];

            newColor.append(colorTitle);
            newColor.append(newLock);
            colors.append(newColor);
        }
    })
const colors = document.querySelector("#colors");
const libraryButton = document.querySelector("#libraryButton");
const generateButton = document.querySelector("#generateButton");
const saveButton = document.querySelector("#saveButton");

fetch("https://www.colr.org/json/colors/random/10")
    .then(response => response.json())
    .then(json => {

        console.log(json);
        let counter = 1;

        json.matching_colors.forEach(color => {
            if (!color == "" && counter < 6) {
                const colorTitle = document.createElement("div");
                colorTitle.setAttribute("id", color);
                colorTitle.innerHTML = "#" + color.toUpperCase();
                if (lightOrDark("#" + color) == "dark") colorTitle.style.color = "white";

                const newLock = document.createElement("i");
                newLock.setAttribute("class", "fas fa-lock-open")
                newLock.setAttribute("id", color + "lock");
                if (lightOrDark("#" + color) == "dark") newLock.style.color = "white";

                const newColor = document.createElement("div");
                newColor.setAttribute("class", "colorDiv");
                newColor.style.backgroundColor = "#" + color.toUpperCase();

                newColor.append(colorTitle);
                newColor.append(newLock);
                colors.append(newColor);
                counter++;
            }
        });

        const colorsDiv = document.getElementById("colors");
        colorsDiv.addEventListener("click", (e) => {
            console.log(e.target);
            if (e.target.localName == "i") {
                // lockerChange();
            }
            if (e.target.localName == "div") copyFunction(e.target.id);

        })
    })

function lightOrDark(color) {

    var r, g, b, hsp;
    color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, '$&$&'));

    r = color >> 16;
    g = color >> 8 & 255;
    b = color & 255;

    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );

    if (hsp > 127.5) {
        return 'light';
    } else {
        return 'dark';
    }
}

function copyFunction(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}

// let locked = false;
// function lockerChange() {

// }
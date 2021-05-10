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

    if (hsp > 128) {
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
    copyModal.style.display = "block";
    setTimeout(() => {
        copyModal.style.display = "none";
    }, 2000)
}

const colors = document.querySelector("#colors");
const libraryButton = document.querySelector("#libraryButton");
const generateButton = document.querySelector("#generateButton");
const saveButton = document.querySelector("#saveButton");
const saveModal = document.getElementById("saveModal");
const savePallete = document.getElementById("savePallete");
const span1 = document.getElementsByClassName("close")[0];
const copyModal = document.getElementById("copyModal");
const libraryModal = document.getElementById("libraryModal");
const loadedPalletes = document.getElementById("loadedPalletes");
const span2 = document.getElementsByClassName("close")[1];
let locked = [false, false, false, false, false];

let randomColors = [];
const refreshColors = () => {

    randomColors = [];
    for (let i = 0; i < 5; i++) {
        randomColors[i] = "#000000".replace(/0/g, function () {
            return (~~(Math.random() * 16)).toString(16);
        });
    }

    colors.innerHTML = "";

    let counter = 1;
    randomColors.forEach((color, i) => {
        const colorTitle = document.createElement("div");
        colorTitle.setAttribute("id", color);
        colorTitle.innerHTML = color.toUpperCase();
        colorTitle.style.border = "2px solid black";
        colorTitle.style.borderRadius = "10px";
        if (lightOrDark(color) == "dark") {
            colorTitle.style.color = "white";
            colorTitle.style.border = "2px solid white";
        }
        const newLock = document.createElement("i");
        if (i == 0) {
            if (locked[0] == false) newLock.setAttribute("class", "fas fa-lock-open");
            if (locked[0] == true) newLock.setAttribute("class", "fas fa-lock");
        } else if (i == 1) {
            if (locked[1] == false) newLock.setAttribute("class", "fas fa-lock-open");
            if (locked[1] == true) newLock.setAttribute("class", "fas fa-lock");
        } else if (i == 2) {
            if (locked[2] == false) newLock.setAttribute("class", "fas fa-lock-open");
            if (locked[2] == true) newLock.setAttribute("class", "fas fa-lock");
        } else if (i == 3) {
            if (locked[3] == false) newLock.setAttribute("class", "fas fa-lock-open");
            if (locked[3] == true) newLock.setAttribute("class", "fas fa-lock");
        } else if (i == 4) {
            if (locked[4] == false) newLock.setAttribute("class", "fas fa-lock-open");
            if (locked[4] == true) newLock.setAttribute("class", "fas fa-lock");
        }
        newLock.setAttribute("id", color + "lock");
        newLock.style.width = "min-content";
        newLock.style.margin = "0px auto";
        firstTime = false;
        if (lightOrDark(color) == "dark") newLock.style.color = "white";
        const newColor = document.createElement("div");
        newColor.setAttribute("class", "colorDiv");
        newColor.style.backgroundColor = color.toUpperCase();
        newColor.append(colorTitle);
        newColor.append(newLock);
        colors.append(newColor);
    });

    colors.addEventListener("click", (e) => {
        if (e.target.localName == "i") {
            if (e.target.id == randomColors[0] + "lock") {
                if (locked[0] == false) {
                    e.target.setAttribute("class", "fas fa-lock");
                    locked[0] = true;
                } else if (locked[0] == true) {
                    e.target.setAttribute("class", "fas fa-lock-open");
                    locked[0] = false;
                } else {
                    console.log("There is an error with lock1!");
                }
            } else if (e.target.id == randomColors[1] + "lock") {
                if (locked[1] == false) {
                    e.target.setAttribute("class", "fas fa-lock");
                    locked[1] = true;
                } else if (locked[1] == true) {
                    e.target.setAttribute("class", "fas fa-lock-open");
                    locked[1] = false;
                } else {
                    console.log("There is an error with lock2!");
                }
            } else if (e.target.id == randomColors[2] + "lock") {
                if (locked[2] == false) {
                    e.target.setAttribute("class", "fas fa-lock");
                    locked[2] = true;
                } else if (locked[2] == true) {
                    e.target.setAttribute("class", "fas fa-lock-open");
                    locked[2] = false;
                } else {
                    console.log("There is an error with lock3!");
                }
            } else if (e.target.id == randomColors[3] + "lock") {
                if (locked[3] == false) {
                    e.target.setAttribute("class", "fas fa-lock");
                    locked[3] = true;
                } else if (locked[3] == true) {
                    e.target.setAttribute("class", "fas fa-lock-open");
                    locked[3] = false;
                } else {
                    console.log("There is an error with lock4!");
                }
            } else if (e.target.id == randomColors[4] + "lock") {
                if (locked[4] == false) {
                    e.target.setAttribute("class", "fas fa-lock");
                    locked[4] = true;
                } else if (locked[4] == true) {
                    e.target.setAttribute("class", "fas fa-lock-open");
                    locked[4] = false;
                } else {
                    console.log("There is an error with lock5!");
                }
            } else {
                console.log("There is an error with the lock elements!");
            }
        }
        if (e.target.localName == "div") copyFunction(e.target.id);
    })
}
generateButton.addEventListener("click", refreshColors);
refreshColors();

saveButton.onclick = function () {
    saveModal.style.display = "block";
}
span1.onclick = function () {
    saveModal.style.display = "none";
}

window.onclick = function (e) {
    if (e.target == saveModal) {
        saveModal.style.display = "none";
    }
    if (e.target == libraryModal) {
        libraryModal.style.display = "none";
    }
}

savePallete.onclick = function () {
    const palleteName = document.getElementById("palleteName").value;
    if (palleteName in localStorage) alert("Name already exists!\nPlease write a different name!")
    else {
        randomColors += "," + palleteName;
        localStorage.setItem(palleteName, randomColors);
        saveModal.style.display = "none";
    }
}

libraryButton.onclick = function () {

    loadedPalletes.innerHTML = "";

    for (let i = 0; i < localStorage.length; i++) {
        console.log(localStorage.getItem(localStorage.key(i)));
        const loadedItem = localStorage.getItem(localStorage.key(i)).split(",");

        const loadedPallete = document.createElement("div");
        loadedPallete.setAttribute("class", "loadedItem");

        const loadedPalleteName = document.createElement("span");
        loadedPalleteName.style.display = "inline-block";
        loadedPalleteName.style.width = "25%";
        loadedPalleteName.style.overflowWrap = "anywhere";
        loadedPalleteName.innerHTML = localStorage.key(i) + ":";

        const loadedPalleteColorList = document.createElement("div");
        loadedPalleteColorList.setAttribute("class", "loadedPallete");

        const fiveColorsContainer = document.createElement("span");
        fiveColorsContainer.style.display = "inline-block";
        fiveColorsContainer.style.width = "50%";
        fiveColorsContainer.style.height = "100%";

        const loadedPalleteColor1 = document.createElement("div");
        loadedPalleteColor1.setAttribute("class", "palleteColor");
        loadedPalleteColor1.style.backgroundColor = loadedItem[0];

        const loadedPalleteColor2 = document.createElement("div");
        loadedPalleteColor2.setAttribute("class", "palleteColor");
        loadedPalleteColor2.style.backgroundColor = loadedItem[1];

        const loadedPalleteColor3 = document.createElement("div");
        loadedPalleteColor3.setAttribute("class", "palleteColor");
        loadedPalleteColor3.style.backgroundColor = loadedItem[2];

        const loadedPalleteColor4 = document.createElement("div");
        loadedPalleteColor4.setAttribute("class", "palleteColor");
        loadedPalleteColor4.style.backgroundColor = loadedItem[3];

        const loadedPalleteColor5 = document.createElement("div");
        loadedPalleteColor5.setAttribute("class", "palleteColor");
        loadedPalleteColor5.style.backgroundColor = loadedItem[4];

        const loadedPalleteLoad = document.createElement("span");
        loadedPalleteLoad.setAttribute("id", localStorage.key(i))
        loadedPalleteLoad.setAttribute("class", "loadButton");
        loadedPalleteLoad.innerHTML = "Load";

        loadedPalleteColorList.append(loadedPalleteColor1);
        loadedPalleteColorList.append(loadedPalleteColor2);
        loadedPalleteColorList.append(loadedPalleteColor3);
        loadedPalleteColorList.append(loadedPalleteColor4);
        loadedPalleteColorList.append(loadedPalleteColor5);

        fiveColorsContainer.append(loadedPalleteColorList);

        loadedPallete.append(loadedPalleteName);
        loadedPallete.append(fiveColorsContainer);
        loadedPallete.append(loadedPalleteLoad);

        loadedPalletes.append(loadedPallete)
    };

    libraryModal.style.display = "block";
}
span2.onclick = function () {
    libraryModal.style.display = "none";
}
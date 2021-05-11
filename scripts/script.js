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

};

const runColor = () => {

    for (let i = 0; i < 5; i++) {
        if (locked[i] == false) {
            randomColors[i] = "#000000".replace(/0/g, function () {
                return (~~(Math.random() * 16)).toString(16);
            });
        }
    }
    refreshColors();

};

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
const loadModal = document.getElementById("loadModal");
const loadedText = document.getElementById("loadedText");

let randomColors = [];
let locked = [false, false, false, false, false];
const refreshColors = () => {

    colors.innerHTML = "";

    randomColors.forEach((color, i) => {

        const colorTitle = document.createElement("div");
        colorTitle.setAttribute("id", color);
        colorTitle.innerHTML = color.toUpperCase();
        colorTitle.style.border = "3px solid black";
        colorTitle.style.borderRadius = "10px";
        if (lightOrDark(color) == "dark") {
            colorTitle.style.color = "white";
            colorTitle.style.border = "3px solid white";
        }

        const newLock = document.createElement("i");
        if (locked[i] == false) newLock.setAttribute("class", "fas fa-lock-open");
        if (locked[i] == true) newLock.setAttribute("class", "fas fa-lock");
        newLock.setAttribute("id", color + "lock");
        newLock.style.width = "min-content";
        newLock.style.margin = "0px auto";
        if (lightOrDark(color) == "dark") newLock.style.color = "white";

        const newColor = document.createElement("div");
        newColor.setAttribute("class", "colorDiv");
        newColor.style.backgroundColor = color;

        newColor.append(colorTitle);
        newColor.append(newLock);
        colors.append(newColor);

    });

}
generateButton.addEventListener("click", runColor);
runColor();

colors.addEventListener("click", (e) => {
    if (e.target.localName == "i") {
        for (let i = 0; i < 5; i++) {

            if (e.target.id == randomColors[i] + "lock") {
                if (locked[i] == false) {
                    e.target.setAttribute("class", "fas fa-lock");
                    locked[i] = true;
                } else if (locked[i] == true) {
                    e.target.setAttribute("class", "fas fa-lock-open");
                    locked[i] = false;
                } else {
                    console.log(`There is an error with lock${i}!`);
                }
            }

        }
    }

    if (e.target.id.length == 7) {

        window.navigator.clipboard.writeText(e.target.id.toUpperCase());
        copyModal.style.display = "block";
        setTimeout(() => {
            copyModal.style.display = "none";
        }, 2000);

    }

});

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

    const palleteName = document.getElementById("palleteName");
    if (palleteName.value in localStorage) alert("Name already exists!\nPlease write a different name!")
    else if (palleteName.value == "") alert("Please enter a name!");
    else {
        randomColors.push(palleteName.value);
        localStorage.setItem(palleteName.value, randomColors);
        saveModal.style.display = "none";
        palleteName.value = "";
        randomColors = randomColors.slice(0, 5);
    }

}

libraryButton.onclick = function () {

    if (localStorage.length == 0) alert("You haven't saved anything!")
    else {

        loadedPalletes.innerHTML = "";

        for (let i = 0; i < localStorage.length; i++) {

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
            loadedPalleteColorList.style.width = "50%";

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


            loadedPallete.append(loadedPalleteName);
            loadedPallete.append(loadedPalleteColorList);
            loadedPallete.append(loadedPalleteLoad);

            loadedPalletes.append(loadedPallete);

        }

        libraryModal.style.display = "block";

    }

}

span2.onclick = function () {
    libraryModal.style.display = "none";
}

loadedPalletes.addEventListener("click", (e) => {

    let clickedItem = e.target;

    if (clickedItem.className == "loadButton") {

        randomColors = localStorage.getItem(clickedItem.id).split(",");
        loadedText.innerHTML = randomColors[5] + " Color Pallete Loaded ✔!";
        randomColors = randomColors.slice(0, 5);
        refreshColors();
        libraryModal.style.display = "none";
        loadModal.style.display = "block";
        setTimeout(() => {
            loadModal.style.display = "none";
        }, 2000);

    }

});
const createRandomColor = () =>
  Math.floor(Math.random() * 16777215).toString(16);

let colors = [
  { value: `#${createRandomColor()}`, locked: false },
  { value: `#${createRandomColor()}`, locked: false },
  { value: `#${createRandomColor()}`, locked: false },
  { value: `#${createRandomColor()}`, locked: false },
  { value: `#${createRandomColor()}`, locked: false },
];

let library = [];

const colorBoxes = document.getElementsByClassName("color-box");
const generateBtn = document.getElementById("generate");
const lockButtons = [...document.getElementsByClassName("lock-btn")];
const hexColors = [...document.getElementsByClassName("hex-number")];
const saveHexCode = document.getElementById("save-hexCode");

const pallets = document.getElementById("pallets");
const saveBtn = document.getElementById("save");
const section = document.getElementById("main-container");
const colorSave = document.getElementById("color-save");
const libraryBtn = document.getElementById("Library");
const colorLibrary = document.getElementById("color-library");
const colorSaveClose = document.getElementById("color-save-close");
const colorLibraryClose = document.getElementById("color-library-close");

const togglePanel = (panel) => {
  switch (panel) {
    case "save":
      {
        if (section.style.display === "block") {
          colorSave.style.display = "none";
          section.style.display = "none";
        } else {
          section.style.display = "block";
          colorSave.style.display = "block";
        }
      }

      break;

    case "library":
      {
        if (section.style.display === "block") {
          colorLibrary.style.display = "none";
          section.style.display = "none";
        } else {
          colorLibrary.style.display = "block";
          section.style.display = "block";
        }
      }
      break;
  }

  colorSaveInput.value = null;
};

const copied = () => {
  section.style.display = "block";
  saveHexCode.style.display = "block";
  setTimeout(function () {
    section.style.display = "none";
    saveHexCode.style.display = "none";
  }, 1500);
};

hexColors.forEach((hex) => {
  hex.onclick = () => {
    navigator.clipboard.writeText(hex.textContent).then(copied);
  };
});

const toggleLockButton = (button) => {
  if (button.children[0].style.display === "none") {
    button.children[0].style.display = "block";
    button.children[1].style.display = "none";
  } else {
    button.children[0].style.display = "none";
    button.children[1].style.display = "block";
  }
};

const checkLocks = (colors) => {
  lockButtons.forEach((button, i) => {
    if (colors[i].locked) {
      toggleLockButton(button);
    }
  });
};

const loadLibrary = () => {
  const getLibrary = JSON.parse(localStorage.getItem("library"));
  getLibrary && (library = getLibrary);

  library.forEach((pallet) => {
    const palletItem = document.createElement("div");
    const palletColors = document.createElement("div");
    const selectBtn = document.createElement("button");

    selectBtn.onclick = () => {
      colors = pallet.colors;
      updateColors(colors);
      togglePanel("library");
      checkLocks(colors);
    };

    selectBtn.classList.add(`pallet-select-btn`);
    selectBtn.textContent = "Select";

    palletItem.classList.add("pallet-item");
    palletItem.innerHTML = `<h2 class='pallet-name'>${pallet.name}</h2>`;

    pallet.colors.forEach((color) => {
      palletColors.innerHTML += `<div class='pallet-colors' style="background-color: ${color.value}"></div>`;
    });

    palletColors.append(selectBtn);
    palletItem.append(palletColors);

    pallets.append(palletItem);
  });
};

const updateColors = (colors) => {
  for (let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].style.backgroundColor = `${colors[i].value}`;
    colorBoxes[i].firstElementChild.textContent = colors[i].value;
  }
};

window.onload = () => {
  loadLibrary();
  updateColors(colors);
};

const save = (name, colors) => {
  library.push({ name, colors });
  localStorage.setItem("library", JSON.stringify(library));
  loadLibrary();
};

const colorPick = (pick) => {
  colors = pick.colors;
  updateColors(colors);
};

const toggleLockColor = (colors, color) => {
  colors[color].locked = !colors[color].locked;

  return colors;
};

const generateColor = (colors) => {
  colors.forEach((color) => {
    if (!color.locked) {
      color.value = `#${createRandomColor()}`;
    }
  });

  updateColors(colors);
};

generateColor(colors);

generateBtn.onclick = () => generateColor(colors);

lockButtons.forEach((button, i) => {
  toggleLockButton(button);

  button.onclick = () => {
    console.log(colors);
    toggleLockColor(colors, i);
    toggleLockButton(button);
  };
});

saveBtn.onclick = () => togglePanel("save");

colorSaveClose.onclick = () => togglePanel("save");

libraryBtn.onclick = () => togglePanel("library");

colorLibraryClose.onclick = () => {
  colorLibrary.style.display = "none";
  section.style.display = "none";
};

const saveColorBtn = document.getElementById("save-color-btn");
const colorSaveInput = document.getElementById("color-save-input");

saveBtn.onclick = () => togglePanel("save");

saveColorBtn.onclick = () => {
  if (colorSaveInput.value) {
    save(colorSaveInput.value, colors);
    togglePanel("save");
  } else alert("Please enter palette name");
};

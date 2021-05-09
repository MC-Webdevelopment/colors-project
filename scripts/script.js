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

// const libraryBtn = document.getElementById("Library");
const lockButtons = [...document.getElementsByClassName("lock-btn")];
const hexColors = [...document.getElementsByClassName("hex-number")];

const copied = () => {};

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

// const loadLibrary = () => {
//   const getLibrary = JSON.parse(localStorage.getItem("library"));
//   getLibrary && (library = getLibrary);
// };

const updateColors = (colors) => {
  for (let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].style.backgroundColor = `${colors[i].value}`;
    colorBoxes[i].firstElementChild.textContent = colors[i].value;
  }
};

const checkLocks = (colors) => {
  lockButtons.forEach((button, i) => {
    colors[i].locked && toggleLockButton(button);
  });
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

generateBtn.onclick = () => {
  generateColor(colors);
};

generateBtn.onclick = () => generateColor(colors);

lockButtons.forEach((button, i) => {
  toggleLockButton(button);

  button.onclick = () => {
    toggleLockColor(colors, i);
    toggleLockButton(button);
  };
});

const saveBtn = document.getElementById("save");
const section = document.getElementById("main-container");
const colorSave = document.getElementById("color-save");
const libraryBtn = document.getElementById("Library");
const colorLibrary = document.getElementById("color-library");
const colorSaveClose = document.getElementById("color-save-close");
const colorLibraryClose = document.getElementById("color-library-close")

saveBtn.onclick = () => {
  section.style.display = "block";
  colorSave.style.display = "block";
}
colorSaveClose.onclick = () =>{
  section.style.display = "none";
  colorSave.style.display = "none";
}
libraryBtn.onclick = () => {
  colorLibrary.style.display = "block";
  section.style.display = "block";
}
colorLibraryClose.onclick = () => {
  colorLibrary.style.display = "none";
  section.style.display = "none";
}
const saveColorBtn = document.getElementById("save-color-btn");
const colorSaveInput = document.getElementById("color-save-input");
const closeColorSave = document.getElementById("close-color-save");

const toggleSavePanel = () => {
  if (section.style.display === "block") {
    colorSave.style.display = "none";
    section.style.display = "none";
  } else {
    section.style.display = "block";
    colorSave.style.display = "block";
  }

  colorSaveInput.value = null;
};

saveBtn.onclick = () => toggleSavePanel();

closeColorSave.onclick = () => toggleSavePanel();

saveColorBtn.onclick = () => {
  if (colorSaveInput.value) {
    save(colorSaveInput.value, colors);
    toggleSavePanel();
  } else alert("Please enter palette name");
};

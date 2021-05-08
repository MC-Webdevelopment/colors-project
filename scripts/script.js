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

const libraryBtn = document.getElementById("Library");
const lockButtons = [...document.getElementsByClassName("lock-btn")];

const toggleLockButton = (button) => {
  if (button.children[0].style.display === "none") {
    button.children[0].style.display = "block";
    button.children[1].style.display = "none";
  } else {
    button.children[0].style.display = "none";
    button.children[1].style.display = "block";
  }
};

const loadLibrary = () => {
  const getLibrary = JSON.parse(localStorage.getItem("library"));
  getLibrary && (library = getLibrary);
};

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

let i = 0;
// saveBtn.onclick = () => {
//   console.log("colors on save", colors);
//   console.log("library on save", library);
//   save(i, colors);
//   i++;
// };

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

saveBtn.onclick = () => {
  section.style.display = "block";
  colorSave.style.display = "block";
}
const closeColorSave = document.getElementById("close-color-save");
closeColorSave.onclick = () =>{
  section.style.display = "none";
  colorSave.style.display = "none";
}
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
const saveBtn = document.getElementById("save");
const libraryBtn = document.getElementById("Library");

const loadLibrary = () => {
  const getLibrary = JSON.parse(localStorage.getItem("library"));
  getLibrary && (library = getLibrary);
};

const updateColors = (colors) => {
  for (let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].style.backgroundColor = `${colors[i].value}`;
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

let i = 0;
saveBtn.onclick = () => {
  console.log("colors on save", colors);
  console.log("library on save", library);
  save(i, colors);
  i++;
};

const colorPick = (pick) => {
  colors = pick.colors;
  updateColors(colors);
};

const lockColor = (colors, color) => {
  colors[color].locked = true;

  return colors;
};

for (let i = 0; i < colorBoxes.length; i++) {
  colorBoxes[i].onclick = () => lockColor(colors, i);
}

const generateColor = (colors) => {
  colors.forEach((color) => {
    if (!color.locked) {
      color.value = `#${createRandomColor()}`;
    }
  });

  updateColors(colors);
};

generateBtn.onclick = () => {
  generateColor(colors);
};

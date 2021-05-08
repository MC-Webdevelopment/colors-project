const createRandomColor = () =>
  Math.floor(Math.random() * 16777215).toString(16);

const colors = [
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

const loadLibrary = () => {
  const getLibrary = JSON.parse(localStorage.getItem("library"));
  getLibrary && (library = getLibrary);
};

window.onload = () => loadLibrary();

const save = (name, colors) => {
  console.log(library);
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
  colors = library[pick];
};

const lockColor = (colors, color) => {
  colors[color].locked = true;

  return colors;
};

for (let i = 0; i < colorBoxes.length; i++) {
  colorBoxes[i].onclick = () => lockColor(colors, i);
}

const updateColors = (colors) => {
  for (let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].style.backgroundColor = `${colors[i].value}`;
  }
};

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

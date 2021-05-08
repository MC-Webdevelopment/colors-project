const createRandomColor = () =>
  Math.floor(Math.random() * 16777215).toString(16);

const colors = [
  { value: `#${createRandomColor()}`, locked: false },
  { value: `#${createRandomColor()}`, locked: false },
  { value: `#${createRandomColor()}`, locked: false },
  { value: `#${createRandomColor()}`, locked: false },
  { value: `#${createRandomColor()}`, locked: false },
];

const colorBoxes = document.getElementsByClassName("color-box");
const generateBtn = document.getElementById("generate");

const lockColor = (colors, color) => {
  colors[color].locked = true;

  return colors;
};

for (let i = 0; i < colorBoxes.length; i++) {
  colorBoxes[i].onclick = () => lockColor(colors, i);
}

const updateColors = (colors) => {
  // console.log((colorBoxes[0].style.backgroundColor = "red"));
  console.log(colors[0].value);
  for (let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].style.backgroundColor = `${colors[i].value}`;
  }
};

const generateColor = (colors) => {
  console.log(colors);

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

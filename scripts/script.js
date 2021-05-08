const colors = {
  color1: { value: "#fff", locked: false },
  color2: { value: "#fff", locked: false },
  color3: { value: "#fff", locked: false },
  color4: { value: "#fff", locked: false },
  color5: { value: "#fff", locked: false },
};

// const colors = document.getElementsByClassName("colors");

const lockColor = (colors, color) => {
  colors[`color${color}`].locked = true;

  return colors;
};

const createRandomColor = () =>
  Math.floor(Math.random() * 16777215).toString(16);

const generateColor = (colors) => {
  for (const color in colors) {
    if (!color.locked) {
      colors[color].value = `#${createRandomColor()}`;
    }
  }
  //   return colors;
};

generateColor(colors);

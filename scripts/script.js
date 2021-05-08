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
// saveBtn.onclick = () => {
//   console.log("colors on save", colors);
//   console.log("library on save", library);
//   save(i, colors);
//   i++;
// };

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

generateColor(colors);

const firstUnLockBtn = document.querySelector("#first-unlock-btn");
const secondUnLockBtn = document.querySelector("#second-unlock-btn");
const thirdUnLockBtn = document.querySelector("#third-unlock-btn");
const fourthUnLockBtn = document.querySelector("#fourth-unlock-btn");
const fifthUnLockBtn = document.querySelector("#fifth-unlock-btn");

const firstLockBtn = document.querySelector("#first-lock-btn");
const secondLockBtn = document.querySelector("#second-lock-btn");
const thirdLockBtn = document.querySelector("#third-lock-btn");
const fourthLockBtn = document.querySelector("#fourth-lock-btn");
const fifthLockBtn = document.querySelector("#fifth-lock-btn");


firstUnLockBtn.addEventListener("click",()=>{
  firstUnLockBtn.style.display = "none";
  firstLockBtn.style.display = "block";
})
secondUnLockBtn.addEventListener("click",()=>{
  secondUnLockBtn.style.display = "none";
  secondLockBtn.style.display = "block";
})
thirdUnLockBtn.addEventListener("click",()=>{
  thirdUnLockBtn.style.display = "none";
  thirdLockBtn.style.display = "block";
})
fourthUnLockBtn.addEventListener("click",()=>{
  fourthUnLockBtn.style.display = "none";
  fourthLockBtn.style.display = "block";
})
fifthUnLockBtn.addEventListener("click",()=>{
  fifthUnLockBtn.style.display = "none";
  fifthLockBtn.style.display = "block";
})


firstLockBtn.addEventListener("click",()=>{
  firstLockBtn.style.display = "none";
  firstUnLockBtn.style.display = "block";
})
secondLockBtn.addEventListener("click",()=>{
  secondLockBtn.style.display = "none";
  secondUnLockBtn.style.display = "block";
})
thirdLockBtn.addEventListener("click",()=>{
  thirdLockBtn.style.display = "none";
  thirdUnLockBtn.style.display = "block";
})
fourthLockBtn.addEventListener("click",()=>{
  fourthLockBtn.style.display = "none";
  fourthUnLockBtn.style.display = "block";
})
fifthLockBtn.addEventListener("click",()=>{
  fifthLockBtn.style.display = "none";
  fifthUnLockBtn.style.display = "block";
})
generateBtn.onclick = () => {
  generateColor(colors);
};

const section = document.querySelector("#main container");
const colorSave = document.querySelector("#color-save");
// const save = document.querySelector("#save");
// saveBtn.addEventListener("click", ()=>{
//   section.style.display = "block";
//   colorSave.style.display = "block";
// })
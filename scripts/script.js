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
document.addEventListener("DOMContentLoaded", () => {
  const bgContainer = document.querySelector(".selectionBox .connectingBg");

  if (!bgContainer) return;

  // pick number of boxes based on screen size
  let numBoxes = 10; // default
  if (window.innerWidth > 1100) {
    numBoxes = 30;
  } else if (window.innerWidth > 550) {
    numBoxes = 20;
  }

  for (let i = 0; i < numBoxes; i++) {
    const box = document.createElement("div");
    box.classList.add("randomBox");

    // random size 100–200 px
    let width = Math.floor(Math.random() * 101) + 100;  // 100–200
    let height;

    // 70% chance square, 30% chance rectangle
    if (Math.random() < 0.7) {
      height = width;
    } else {
      height = Math.floor(Math.random() * 101) + 100;
    }

    // apply size
    box.style.width = width + "px";
    box.style.height = height + "px";

    // random position inside container
    box.style.position = "absolute";
    box.style.top = Math.floor(Math.random() * 80) + "%";
    box.style.left = Math.floor(Math.random() * 80) + "%";

    // pick random grey background
    const greys = [
      "rgba(50, 50, 50, 0.2)",   // dark grey
      "rgba(100, 100, 100, 0.2)", // medium-dark grey
      "rgba(150, 150, 150, 0.2)", // medium grey
      "rgba(200, 200, 200, 0.2)", // light grey
      "rgba(230, 230, 230, 0.2)"  // very light grey
    ];
    const randomGrey = greys[Math.floor(Math.random() * greys.length)];
    box.style.background = randomGrey;

    // optional border & rounding
    box.style.border = "1px solid rgba(0, 0, 0, 0.1)";
    box.style.borderRadius = "8px";

    bgContainer.appendChild(box);
  }
});

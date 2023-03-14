const refreshButton = document.querySelector(".refresh-button");
const container = document.querySelector(".container");
const maxPaletteBox = 32;

const generatePalette = () => {
  //Clearing the Container
  container.innerHTML = "";
  for (let i = 0; i < maxPaletteBox; i++) {
    //Generating a Random Hex Color Code
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;
    //   console.log(randomHex);

    // Creating a new 'li' element and inserting it to the Container
    const color = document.createElement("li");
    color.classList.add("color");
    color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                    <span class="hex-value">${randomHex}</span>`;

    // Copying the Color
    color.addEventListener("click", () => copyColor(color, randomHex));
    container.appendChild(color);
  }
};

generatePalette();

const copyColor = (element, hexValue) => {
  // Copy the Hex Value
  const colorValue = element.querySelector(".hex-value");
  navigator.clipboard
    .writeText(hexValue)
    .then(() => {
      colorValue.innerText = "Copid";

      // Change Text Back to Original Hex Value
      setTimeout(() => {
        colorValue.innerText = hexValue;
      }, 1000);
    })
    .catch(() => {
      alert("Failed to Copy The Color Code");
    });
};
refreshButton.addEventListener("click", generatePalette);

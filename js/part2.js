let changeTextBtn = document.getElementById("change-text-btn");
let targetParagraph = document.getElementById("target-paragraph");
let textState = false;

if (changeTextBtn && targetParagraph) {
  changeTextBtn.addEventListener("click", function() {
    if (!textState) {
      targetParagraph.textContent = "The paragraph text has been successfully changed with JavaScript!";
      textState = true;
    } else {
      targetParagraph.textContent = "This is the original paragraph text before clicking the button.";
      textState = false;
    }
  });
}

let styleBox = document.getElementById("style-box");
let changeBgBtn = document.getElementById("change-bg-btn");
let changeFontBtn = document.getElementById("change-font-btn");

let colors = ["#dbeafe", "#dcfce7", "#fef3c7", "#fee2e2", "#f3e8ff", "#e0e7ff"];
let colorIndex = 0;

if (changeBgBtn && styleBox) {
  changeBgBtn.addEventListener("click", function() {
    colorIndex = (colorIndex + 1) % colors.length;
    styleBox.style.backgroundColor = colors[colorIndex];
  });
}

let fontSizes = ["16px", "20px", "24px", "28px"];
let fontIndex = 0;

if (changeFontBtn && styleBox) {
  changeFontBtn.addEventListener("click", function() {
    fontIndex = (fontIndex + 1) % fontSizes.length;
    styleBox.style.fontSize = fontSizes[fontIndex];
  });
}

let dynamicList = document.getElementById("dynamic-list");
let addItemBtn = document.getElementById("add-item-btn");
let removeItemBtn = document.getElementById("remove-item-btn");
let itemCount = 3;

if (addItemBtn && dynamicList) {
  addItemBtn.addEventListener("click", function() {
    itemCount++;
    let newItem = document.createElement("li");
    newItem.className = "list-group-item d-flex justify-content-between align-items-center";
    newItem.textContent = "Item " + itemCount;
    dynamicList.appendChild(newItem);
  });
}

if (removeItemBtn && dynamicList) {
  removeItemBtn.addEventListener("click", function() {
    if (dynamicList.lastElementChild) {
      dynamicList.removeChild(dynamicList.lastElementChild);
    }
  });
}

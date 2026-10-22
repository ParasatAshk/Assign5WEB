# Web Technologies — Assignment #5: JavaScript Basics (DOM Manipulation & Events)

**Student:** Parasat Ashkarbekova  
**Group:** SE-2529  
**Course:** Web Technologies (Front-End Development)  
**University:** Astana IT University  
**Repository:** [https://github.com/ParasatAshk/Assign5WEB](https://github.com/ParasatAshk/Assign5WEB)  
**Live Demo (GitHub Pages):** [https://parasatashk.github.io/Assign5WEB/](https://parasatashk.github.io/Assign5WEB/)

---

## 📌 Project Overview

This project implements **Assignment #5** of the Web Technologies course. The objective is to master fundamental JavaScript programming, Document Object Model (DOM) manipulation, and event handling in web applications.

All scripts, HTML structures, and styles are written cleanly, simply, and strictly in English, without comments in the code.

---

## 🗂 Project Structure & Tasks Breakdown

```text
Assign5WEB/
├── .gitignore               # Ignored files configuration
├── README.md                # Project documentation and guide
├── index.html               # Home dashboard with navbar and task navigation
├── part1.html               # Part 1: Task 0 & Task 1 (Console logs, alert, variables & operators)
├── part2.html               # Part 2: Task 2, Task 3 & Task 4 (DOM content, styles, element addition/removal)
├── part3.html               # Part 3: Task 5, Task 6 & Task 7 (Mouseover, keyup real-time, basic calculator)
├── part4.html               # Part 4: Task 8 (Mini Project: Interactive To-Do list with array storage)
├── task0.html ... task8.html# Direct navigation aliases for all individual tasks
├── css/
│   └── style.css            # Styles for navbar, layout, interactive cards, and To-Do app
└── js/
    ├── part1.js             # JavaScript logic for Part 1 (Tasks 0 & 1)
    ├── part2.js             # JavaScript logic for Part 2 (Tasks 2, 3 & 4)
    ├── part3.js             # JavaScript logic for Part 3 (Tasks 5, 6 & 7)
    └── part4.js             # JavaScript logic for Part 4 (Task 8 To-Do App)
```

### Detailed Breakdown of Parts and Tasks

1. **Part 1: Introduction to JavaScript (`part1.html`)**
   - **Task 0: First Script**
     - External JavaScript inclusion.
     - Logs student full name and group to the browser console (`console.log()`).
     - Triggers an alert popup: `alert("Hello, JavaScript World!")`.
     - Includes an interactive button to re-run the script on demand.
   - **Task 1: Variables & Operators**
     - Declares variables of various primitive data types: `string`, `number`, `boolean`.
     - Executes standard arithmetic operations: addition (`+`), subtraction (`-`), multiplication (`*`), division (`/`), and modulus (`%`).
     - Demonstrates string concatenation.
     - Outputs all variables, calculations, and concatenated strings to the browser console and mirrors them in a visual dashboard card.

2. **Part 2: DOM Manipulation (`part2.html`)**
   - **Task 2: Changing Content**
     - Target paragraph and a trigger button.
     - Clicking the button changes the paragraph text dynamically via `textContent`.
   - **Task 3: Changing Styles**
     - Dedicated container block.
     - Button 1: Changes background color dynamically among varied palette shades.
     - Button 2: Toggles/adjusts the container font size dynamically.
   - **Task 4: Creating & Removing Elements**
     - Dynamic unordered list (`<ul>`).
     - "Add Item" button creates a new `<li>` element dynamically and appends it to the list.
     - "Remove Item" button removes the last child element from the list safely.

3. **Part 3: Events (`part3.html`)**
   - **Task 5: Mouse Events**
     - Interactive box with `mouseover` and `mouseout` event listeners.
     - Changes color when the pointer enters the area and restores the initial color when the pointer leaves.
   - **Task 6: Keyboard Events**
     - Input field attached to the `keyup` event.
     - Displays the entered text in real time below the input field.
   - **Task 7: Calculator**
     - Basic interactive calculator with two number inputs.
     - Four arithmetic operation buttons: Addition (`+`), Subtraction (`-`), Multiplication (`*`), and Division (`/`).
     - Displays calculation result with validation for division by zero.

4. **Part 4: Mini Project — Interactive To-Do List (`part4.html`)**
   - **Task 8: Interactive To-Do App**
     - Form with title input and multiline description textarea.
     - "Add task" button that registers new tasks.
     - In-memory array storage (`tasks = []`) holding task objects (`id`, `title`, `description`, `completed`).
     - Dynamic task list rendered from the array.
     - Completion toggle feature applying a strike-through styling effect.
     - Delete button next to each task removing it from array storage and updating the DOM.

---

## 💻 How to Run the Project Locally

### Option 1: Direct File Open
Simply open `index.html` in any modern web browser:
```bash
open index.html
```
*(On macOS, double-click `index.html` in Finder or run the command above in Terminal).*

### Option 2: Local HTTP Server (Recommended)
Using Python 3 built-in HTTP server:
```bash
cd Assign5WEB
python3 -m http.server 8000
```
Open your browser and navigate to:
```text
http://localhost:8000
```

### Opening the Browser Console
To view the outputs of **Task 0** and **Task 1**:
- In Google Chrome / Brave / Edge: Press `F12` or `Ctrl + Shift + I` (on macOS: `Cmd + Option + I`), then select the **Console** tab.
- In Safari: Enable Developer Menu in Preferences > Advanced, then press `Cmd + Option + C`.

---

## 🎓 Oral Defense & Live Coding Summary

- **DOM Selection:** `document.getElementById()`, `document.querySelector()`
- **DOM Modification:** `element.textContent`, `element.style.backgroundColor`, `element.style.fontSize`
- **DOM Node Creation:** `document.createElement()`, `parentElement.appendChild()`, `element.remove()`, `parentElement.removeChild()`
- **Event Listeners:** `addEventListener("click", ...)`, `addEventListener("mouseover", ...)`, `addEventListener("mouseout", ...)`, `addEventListener("keyup", ...)`
- **Data Handling:** JavaScript arrays (`push()`, `filter()`, `find()`), objects, and dynamic re-rendering.

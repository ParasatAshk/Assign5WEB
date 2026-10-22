function runTask0() {
  console.log("Name: Parasat Ashkarbekova");
  console.log("Group: SE-2529");
  alert("Hello, JavaScript World!");
}

function runTask1() {
  let studentName = "Parasat Ashkarbekova";
  let studentAge = 19;
  let isEnrolled = true;

  let num1 = 20;
  let num2 = 5;

  let sum = num1 + num2;
  let difference = num1 - num2;
  let product = num1 * num2;
  let quotient = num1 / num2;
  let remainder = num1 % num2;

  let greeting = "Hello, my name is " + studentName + ", I am " + studentAge + " years old, and my enrollment status is " + isEnrolled + ".";

  console.log("Task 1 Results:");
  console.log("String Variable (studentName):", studentName);
  console.log("Number Variable (studentAge):", studentAge);
  console.log("Boolean Variable (isEnrolled):", isEnrolled);
  console.log("Arithmetic - Addition (20 + 5):", sum);
  console.log("Arithmetic - Subtraction (20 - 5):", difference);
  console.log("Arithmetic - Multiplication (20 * 5):", product);
  console.log("Arithmetic - Division (20 / 5):", quotient);
  console.log("Arithmetic - Modulus (20 % 5):", remainder);
  console.log("Concatenated String:", greeting);

  let outputElement = document.getElementById("task1-output");
  if (outputElement) {
    outputElement.innerHTML = `
      <div class="row g-3">
        <div class="col-md-6">
          <div class="p-3 bg-light rounded border">
            <h6 class="fw-bold text-primary">Variables Declared</h6>
            <ul class="list-unstyled mb-0 small">
              <li><strong>String:</strong> studentName = "${studentName}"</li>
              <li><strong>Number:</strong> studentAge = ${studentAge}</li>
              <li><strong>Boolean:</strong> isEnrolled = ${isEnrolled}</li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <div class="p-3 bg-light rounded border">
            <h6 class="fw-bold text-success">Arithmetic Operations (20 and 5)</h6>
            <ul class="list-unstyled mb-0 small">
              <li><strong>Addition (20 + 5):</strong> ${sum}</li>
              <li><strong>Subtraction (20 - 5):</strong> ${difference}</li>
              <li><strong>Multiplication (20 * 5):</strong> ${product}</li>
              <li><strong>Division (20 / 5):</strong> ${quotient}</li>
              <li><strong>Modulus (20 % 5):</strong> ${remainder}</li>
            </ul>
          </div>
        </div>
        <div class="col-12">
          <div class="p-3 bg-light rounded border">
            <h6 class="fw-bold text-secondary">String Concatenation</h6>
            <p class="mb-0 small font-monospace">${greeting}</p>
          </div>
        </div>
      </div>
    `;
  }
}

runTask0();
runTask1();

let runTask0Btn = document.getElementById("run-task0-btn");
if (runTask0Btn) {
  runTask0Btn.addEventListener("click", runTask0);
}

let runTask1Btn = document.getElementById("run-task1-btn");
if (runTask1Btn) {
  runTask1Btn.addEventListener("click", runTask1);
}

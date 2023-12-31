const bill = document.querySelector(".billinput");
const people = document.querySelector(".billinput2");
const button = document.querySelectorAll(".greenbutton");
const custom = document.querySelector(".whitebutton");
const sum = document.querySelector(".greeninput");
const total = document.querySelector(".second");
const reset = document.querySelector(".reset");
const error = document.querySelector(".red");
const firsterror = document.querySelector(".rederror");

let x = 0.0;
bill.addEventListener("input", getBill);

function getBill() {
  if (bill.value == "-") {
    bill.value = "";
  }
  calculator(bill.value, x, peopleValue);
  if (bill.value > 0) {
    firsterror.style.display = "none";
  } else {
    firsterror.style.display = "block";
  }
}
people.addEventListener("input", numberPeople);

let peopleValue = 0.0;

function numberPeople() {
  peopleValue = people.value;

  if (people.value == "-") {
    people.value = "";
  }

  calculator(bill.value, x, peopleValue);

  if (people.value > 0) {
    error.style.display = "none";
  } else {
    error.style.display = "block";
  }
}

custom.addEventListener("input", getCustom);

let customValue = 0.0;

function getCustom() {
  x = custom.value;
}
button.forEach((button, index) => {
  button.addEventListener("click", () => {
    x = button.textContent.replace("%", "");
    calculator(bill.value, x, peopleValue);
  });
});

function calculator(billValue, x, peopleValue) {
  let BillNum = Number(billValue);
  let peopleNum = Number(peopleValue);
  let xNum = Number(x);

  if (xNum && BillNum && peopleNum) {
    const toFixed = (BillNum * (xNum / 100)) / peopleNum;
    const tofixed2 = BillNum / peopleNum + toFixed;

    sum.textContent = toFixed.toFixed(2);
    total.textContent = tofixed2.toFixed(2);
    return toFixed;
  }
}

reset.addEventListener("click", function () {
  changeText();
});

function changeText() {
  bill.value = "0";
  people.value = "0";
  custom.value = "0";
  x = 0.0;
  sum.innerHTML = "0";
  total.innerHTML = "0";
}

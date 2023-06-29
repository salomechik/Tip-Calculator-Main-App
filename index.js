const bill = document.querySelector(".billinput")
const people = document.querySelector(".billinput2")
const button = document.querySelectorAll(".greenbutton")
const custom = document.querySelector(".whitebutton")
const sum = document.querySelector(".greeninput")
const total = document.querySelector(".second")

bill.addEventListener("input", getBill)

let billValue = 0.0

function getBill() {
    billValue = bill.value;
    calculator(billValue, x, peopleValue)
}
people.addEventListener("input", numberPeople)

  let peopleValue = 0.0

function numberPeople() {
    peopleValue = people.value;
    calculator(billValue, x, peopleValue)

}

custom.addEventListener("input", getCustom)

   let customValue = 0.0

 function getCustom() {
    x = custom.value;

}
let x = 0.0


button.forEach((button, index) => {
  button.addEventListener("click", () => {

    x = button.textContent.replace("%", "")
    calculator(billValue, x, peopleValue)
  })
})

function calculator(billValue, x, peopleValue) {
  let BillNum = Number(billValue);
  let peopleNum = Number(peopleValue);
  let xNum = Number(x);

  if (xNum && BillNum && peopleNum ){

  const toFixed = (BillNum * (xNum / 100)) / peopleNum;
  const tofixed2 = (BillNum/peopleNum) + toFixed;


  sum.textContent = toFixed.toFixed(2);
  total.textContent = tofixed2.toFixed(2);
  return toFixed;
  }

}
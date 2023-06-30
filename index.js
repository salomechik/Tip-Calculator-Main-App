const bill = document.querySelector(".billinput")
const people = document.querySelector(".billinput2")
const button = document.querySelectorAll(".greenbutton")
const custom = document.querySelector(".whitebutton")
const sum = document.querySelector(".greeninput")
const total = document.querySelector(".second")
const reset = document.querySelector(".reset")

let x = 0.0
bill.addEventListener("input", getBill)



function getBill() {
   
    calculator(bill.value, x, peopleValue)
}
people.addEventListener("input", numberPeople)

  let peopleValue = 0.0

function numberPeople() {
    peopleValue = people.value;
    calculator(bill.value, x, peopleValue)

}

custom.addEventListener("input", getCustom)

   let customValue = 0.0

 function getCustom() {
    x = custom.value;

}



button.forEach((button, index) => {
  button.addEventListener("click", () => {

    x = button.textContent.replace("%", "")
    calculator(bill.value, x, peopleValue)
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

 reset.addEventListener("click", function() {
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

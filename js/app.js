
// Total Tip = Bill amount * (Tip percentage / 100);
// Total Amount = Bill amount + Tip Amount
// Tip per person = Total tip / Number of people
// Total per person = Total amount / Number of people  */


// Getting the inputs and the tipPercentages
const bill_input = document.querySelector("#bill");
const people_input = document.querySelector("#people-amount");
const selectBoxes = document.querySelectorAll('.select-box');
const btnReset = document.querySelector('#reset-btn');
const customInput = document.querySelector('#custom-input');



let tipDisplay = document.querySelector(".tip-value");
let totalAmountDisplay = document.querySelector(".total-value")




// Calculate function controls the calculations and also UI
const Calculate = (billValue, tipPercentage, peopleValue) => {
     this.billValue = parseFloat(billValue);
     this.tipPercentage = parseFloat(tipPercentage);
     this.peopleValue = parseFloat(peopleValue);

     // let ttip = {
     //      totaltip: parseFloat(billValue) * parseFloat(tipPercentage),
     // }

     // console.log(ttip.totaltip)

     // let message = 'Please Fill in all fields'

     let body = document.querySelector('body')
     let text = document.createElement('p');
     text.textContent = 'Please Fill in all fields';
     // let tipValues = document.querySelector('.tip-percentages');
     // tipValues.appendChild(text);

     const showBorder = () => {
          bill_input.style.border = '2px solid red';
          people_input.style.border = '2px solid red';

          // console.log(text.textContent);
          // body.insertBefore(text, tipValues);
          let timing = 3000;
          setTimeout(removeBorder, timing);
     }

     const removeBorder = () => {
          bill_input.style.border = 'none';
          people_input.style.border = 'none';
          text.style.display = 'none';
     }



     if (isNaN(billValue) || isNaN(peopleValue) || billValue.value === '' || peopleValue.value === '') {
          showBorder();
          tipDisplay.textContent = '$0.00';
          totalAmountDisplay.textContent = '$0.00'
     }

     else {
          const totalTip = (parseFloat(billValue) * (parseFloat(tipPercentage) / 100)).toFixed(2);

          const totalAmount = (parseFloat(billValue) + parseFloat(totalTip)).toFixed(2);

          const tipPerPerson = `$ ${(parseFloat(totalTip) / parseFloat(peopleValue)).toFixed(2)}`;


          const totalPerPerson = `$ ${(parseFloat(totalAmount) / parseFloat(peopleValue)).toFixed(2)}`;





          // console.log(`tipPerPerson:${tipPerPerson}, totalPerPerson ${totalPerPerson}`);


          // UI function outputs the values of the calculation into the UI

          const UI = () => {
               tipDisplay.innerText = tipPerPerson;
               totalAmountDisplay.innerText = totalPerPerson;


               // Timeout
               // Reset Button
          }

          UI();


     }
}

const reset = () => {
     tipDisplay.innerText = '$0.00';
     totalAmountDisplay.innerText = '$0.00';
     people_input.value = '';
     bill_input.value = '';
     customInput.value = '';

     // console.log("reset")
}


btnReset.addEventListener("click", () => {
     reset()
});



// Adding Event listeners to each box 

selectBoxes.forEach((box) => box.addEventListener("click", () => {

     box.style.background = 'var(--clr-primary)';

     const changeBackground = () => {
          box.style.background = 'var(--clr-dark)';
     }

     setTimeout(changeBackground, 1000);

     customInput.addEventListener("input", () => {
          Calculate(
               parseFloat(bill_input.value),
               parseFloat(customInput.value),
               parseFloat(people_input.value)
          )
     });


     bill_input.addEventListener("input", () => {
          Calculate(
               parseFloat(bill_input.value),
               parseFloat(box.innerText),
               parseFloat(people_input.value)
          );
     });


     people_input.addEventListener("input", () => {
          Calculate(
               parseFloat(bill_input.value),
               parseFloat(box.innerText),
               parseFloat(people_input.value)
          )
     });

     Calculate(
          parseFloat(bill_input.value),
          parseFloat(box.innerText),
          parseFloat(people_input.value)
     )


}));




// class Calculater {
//      // constructor(billValue, peopleValue, tipPercentage) {
//      //      this.billValue = billValue;
//      //      this.peopleValue = peopleValue;
//      //      this.tipPercentage = tipPercentage;
//      // }

//      static calculate(billValue, peopleValue, tipPercentage) {
//           let totalTip = parseFloat(billValue * (tipPercentage / 100)).toFixed(2);

//           let totalAmount = parseFloat(billValue + totalTip).toFixed(2);

//           let tipPerPerson = parseFloat((totalTip) / (peopleValue)).toFixed(2);

//           let totalPerPerson = parseFloat((totalAmount) / (peopleValue)).toFixed(2);

//           console.log(`tipPerPerson:${tipPerPerson}, totalPerPerson ${totalPerPerson}`);

//           // console.log(totalTip);
//           // console.log(peopleValue)
//      }

// }


// selectBoxes.forEach((box) => {
//      box.addEventListener("click", () => {
//           Calculater.calculate(
//                parseFloat(bill_input.value),
//                parseFloat(people_input.value),
//                parseFloat(box.innerText)
//           );
//      })
// })




// class UI {
//      constructor() {

//      }

//      static showError(error) {
//           error.style.border = `1px solid red`;
//      }

//      static addEvents() {
//           selectBoxes.forEach((box) => {
//                box.addEventListener("click", Calculate.totalAmount(bill_input, box))
//           })
//      }
// }

// class Calculate {
//      constructor() {

//      }

//      static totalTip(billValue, tipPercentage) {
//           return parseFloat(billValue) * parseFloat(tipPercentage / 100);
//      }

//      static totalAmount(bill_value, tipPercentage) {
//           return parseFloat(bill_value) + (parseFloat(bill_value) * parseFloat(tipPercentage / 100))
//      }




// }



// UI.addEvents();


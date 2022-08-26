
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
     // tipValues.appendChild(text);

     const errorMessage = document.querySelectorAll('.error-message');


     // Show border for both inputs
     const showBorder = () => {
          bill_input.style.border = '2px solid red';
          people_input.style.border = '2px solid red';
          let timing = 2000;
          setTimeout(removeBorder, timing);
          errorMessage.forEach((error) => error.style.display = 'block');
     }


     // Show Border for the bill Input
     const billShowBorder = () => {
          bill_input.style.border = '2px solid red';
          // billSection.appendChild(text);
          // console.log(text.textContent);
          // body.insertBefore(text, tipValues);
          let timing = 2000;
          setTimeout(removeBorder, timing);
          errorMessage[0].style.display = 'block';
     }



     // Show border for people input
     const peopleShowBorder = () => {
          people_input.style.border = '2px solid red'
          let timing = 2000;
          setTimeout(removeBorder, timing);
          errorMessage[1].style.display = 'block'
     }




     // Removes border from each input
     const removeBorder = () => {
          bill_input.style.border = 'none';
          people_input.style.border = 'none';
          errorMessage.forEach((error) => {
               error.style.display = 'none';
          })
          // billSection.removeChild(text);
     }











     // Validations

     if (bill_input.value === '' && people_input.value === '' || isNaN(bill_input.value) && isNaN(people_input.value)) {
          showBorder();
          tipDisplay.textContent = '$0.00';
          totalAmountDisplay.textContent = '$0.00'
          let timing = 2000;
          setTimeout(removeBorder, timing);
     }

     else if (bill_input.value === '' || isNaN(bill_input.value)) {
          billShowBorder();
          let timing = 2000;
          setTimeout(removeBorder, timing);
          tipDisplay.textContent = '$0.00';
          totalAmountDisplay.textContent = '$0.00'
     }

     else if (people_input.value === '' || isNaN(people_input.value)) {
          peopleShowBorder();
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

selectBoxes.forEach((box, index) =>
     box.addEventListener("click", () => {

          // console.log(`${selectBoxes[index].innerText} was Clicked`);


          selectBoxes.forEach((box) => {
               box.classList.remove('active-state');
          })

          selectBoxes[index].classList.add('active-state');

          // box.style.background = 'var(--clr-primary)';

          // const changeBackground = () => {
          //      box.style.background = 'var(--clr-dark)';
          //      console.log("Background Changed")
          // }





          // When a percentage is clicked, the custom input value should be cleared
          customInput.value = '';

          // setTimeout(changeBackground, 1000);



          // ================Event Listeners==================


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


          // ============Event Listeners End ==============




          // Calling the calculate method to execute calculations

          Calculate(
               parseFloat(bill_input.value),
               parseFloat(box.innerText),
               parseFloat(people_input.value)
          )


     }

     )
);





customInput.addEventListener("input", () => {

     if (customInput.value === '') {
          // console.log("custom Can't be nothing")
          tipDisplay.innerText = '$0.00';
          totalAmountDisplay.innerText = '$0.00';
     }

     else {
          Calculate(
               parseFloat(bill_input.value),
               parseFloat(customInput.value),
               parseFloat(people_input.value)
          )
     }

});

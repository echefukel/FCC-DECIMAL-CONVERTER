



const numberInput = document.getElementById("number-input");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("result");

const countdown = (number) =>{
   console.log(number);

   if(number === 0){
     return
   } else {
    countdown(number - 1)

   }
}



const decimalToBinary = (input) =>{
    if (input === 0 || input === 1) {
        return String(input);
      } else{
      return  decimalToBinary(Math.floor(input/2)) + (input % 2);
    }


}



// checking user input

const checkUserInput = ()=>{
if (
    !numberInput.value || 
    isNaN(parseInt(numberInput.value)) ||
    parseInt(numberInput.value) < 0

){
    alert("Please provide a decimal number greater than or equal to 0")
    return;
}

result.textContent = decimalToBinary(parseInt(numberInput.value));
numberInput.value = "";

};

// add event listener to the click button
convertBtn.addEventListener('click',checkUserInput)

// add an event listener to the input box
numberInput.addEventListener('keydown',(e)=>{
     if(e.key === "Enter"){
          checkUserInput()
     }
})
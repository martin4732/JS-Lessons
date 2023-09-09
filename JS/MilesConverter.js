const formContent = document.getElementById('formContent');
const submitButton = document.getElementById('submit');
const displayArea = document.getElementById('resultsDisplay');
const inputField = document.getElementById('input');


formContent.addEventListener('submit', function (event) {
    event.preventDefault();
    
    var inputValue = document.getElementById('input').value;
    inputValue = parseFloat(inputValue);

    if(inputValue){
        const milesToKilometers = 1.609344;
        var conversion = inputValue * milesToKilometers;
        var roundedNumber = conversion.toFixed(3);
        displayArea.innerHTML = `${inputValue} Miles to Kilometers is ${roundedNumber} Kilometers`

    }     
    else{
        inputField.style.color = '10px solid red';
        displayArea.innerHTML = 'Invalid Input';
    }
   

    
    
        
})
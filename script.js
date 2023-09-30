// Get the slider element and the value display element
const slider = document.getElementById('mySlider');
const sliderValueDisplay = document.getElementById('sliderValue');
let specialSymbols = true;
var passwordField = document.getElementById("passwordField");
var fillButton = document.getElementById("fillButton");
let finalPassword;
// Update the displayed value when the slider value changes
slider.addEventListener('input', function() {
  const sliderValue = slider.value;
  sliderValueDisplay.textContent = sliderValue;
});

// Set an initial value (optional)
sliderValueDisplay.textContent = slider.value;
   

function genarateRandomPassword(length){
   
   let password =""
      
    for (let index = 1; index <= length; index++) {
        let newChar = Math.floor(Math.random() * (126 - 33 + 1)) + 33
        if(!specialSymbols)
        if ((newChar >= 48 && newChar <= 57) ||   // Digits 0-9
        (newChar >= 65 && newChar <= 90) ||   // Uppercase letters A-Z
        (newChar >= 97 && newChar <= 122)) {  // Lowercase letters a-z
        password += String.fromCharCode(newChar);
        }else{
            index--;
        }
        else{
            password += String.fromCharCode(newChar);
        }
      
       
    }
 
    finalPassword = password
    return password;
    

}


    const downloadButton = document.getElementById('downloadButton');
  

    // Function to create and trigger the download
    function downloadTextFile() {
        const textFieName = document.getElementById('textFileName');
        const textField = document.getElementById('textFileId');
        const textFiePassword = document.getElementById('textFilePassword');
        const name = textFieName.value;
        const id = textField.value;
        const Password = finalPassword
        // Content of the text file
        const textContent = '\n id:'+id+'\n\n password:'+Password;

        // Create a Blob (Binary Large Object) containing the text
        const blob = new Blob([textContent], { type: 'text/plain' });

        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);

        // Create a download link
        const a = document.createElement('a');
        a.href = url;
        a.download = name +'.txt'; // Set the desired file name

        // Simulate a click on the download link
        a.click();

        // Clean up
        URL.revokeObjectURL(url);
    }

    // Add a click event listener to the download button
    downloadButton.addEventListener('click', downloadTextFile);

 // JavaScript to toggle the button state
 const toggleButton = document.getElementById('toggleButton');


 toggleButton.addEventListener('click', () => {
     specialSymbols = !specialSymbols;
     toggleButton.textContent = specialSymbols ? 'On' : 'Off';
     toggleButton.classList.toggle('on', specialSymbols);
     toggleButton.classList.toggle('off', !specialSymbols);
 });



 // Add an event listener to the button
 fillButton.addEventListener("click", function() {
     // Fill the text field with "hello" when the button is clicked
     passwordField.value = genarateRandomPassword(slider.value);
 });
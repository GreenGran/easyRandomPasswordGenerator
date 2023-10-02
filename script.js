// Get the slider element and the value display element
const slider = document.getElementById('mySlider');
const sliderValueDisplay = document.getElementById('sliderValue');
let specialSymbols = true;
var passwordField = document.getElementById("passwordField");
var fillButton = document.getElementById("fillButton");
let finalPassword;



// Create a new Date object
var currentDate = new Date();

// Get the current time components
var hours = currentDate.getHours();
var minutes = currentDate.getMinutes();
var seconds = currentDate.getSeconds();
var year = currentDate.getFullYear(); // Get the year (e.g., 2023)
var month = currentDate.getMonth() + 1; // Get the month (0-11, so add 1 to get 1-12)
var day = currentDate.getDate(); // Get the day of the month (1-31)


// Update the displayed value when the slider value changes
slider.addEventListener('input', function() {
  const sliderValue = slider.value;
  sliderValueDisplay.textContent = sliderValue;
});

// Set an initial value (optional)
sliderValueDisplay.textContent = slider.value;
   

function genarateRandomPassword(length){
    if( downloadButton.disabled === true){
        downloadButton.classList.toggle("download-button-disable");
        downloadButton.classList.toggle("download-button");
        fillButton.textContent= "↻";
      
    }
    downloadButton.disabled = false;

    
   
    
   
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
 
    
    if (hasNumbers(password)) {
        console.log("The string contains numbers:"+password );
    } else {

        while(!hasNumbers(password)){
            console.log("The string does not contain numbers:"+password);
            password =""
          
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
    }
 
    }


    
    finalPassword = password

    return finalPassword;
    

}

function hasNumbers(inputString) {
    var regex = /\d/;
    return regex.test(inputString);
}



    const downloadButton = document.getElementById('downloadButton');
  

    // Function to create and trigger the download
    function downloadTextFile() {
        const textFieName = document.getElementById('textFileName');
        const textField = document.getElementById('textFileId');
        const textFiePassword = document.getElementById('textFilePassword');
        let name = textFieName.value;
        const id = textField.value;
        const Password = finalPassword
        // Content of the text file
        const textContent = '\n id:'+id+'\n\n password:\n'+Password+"\n\n\n\n ***time of creation*** \n    day/month/year \n    date:"+day+":"+month+":"+year+"\n    time:"+hours+":"+minutes+":"+seconds;
        if(name == ""){
            name = "NoName"
        }
        // Create a Blob (Binary Large Object) containing the text
        const blob = new Blob([textContent], { type: 'text/plain' });

        // Create a URL for the Blob
        const url = URL.createObjectURL(blob);

        // Create a download link
        const a = document.createElement('a');
        a.href = url;
        a.download = name +"_"+year+"-"+month+"-"+day+'.txt'; // Set the desired file name

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

 function copyToClipboard() {
    
    
    // Select the text inside the text field
    passwordField.select();

    // Copy the selected text to the clipboard
    document.execCommand("copy");

    // Deselect the text field to avoid visual confusion
    passwordField.selectionEnd = passwordField.selectionStart;
    showMessage()
}




function showMessage() {
    // Create a new message element
    var message = document.createElement("div");
    message.className = "message";
    if(finalPassword != undefined){
        message.textContent = finalPassword+" copyed to clipboard";
    }else{
        message.textContent = "please press the play button before copying to clipboard"
       
    }

    // Add the message to the message container
    var messageContainer = document.getElementById("message-container");
    messageContainer.appendChild(message);

    // Show the message
    message.style.display = "block";

    // Remove the message after a certain duration (e.g., 1.5 seconds)
    setTimeout(function() {
        message.style.display = "none";
        // Remove the message element from the container
        messageContainer.removeChild(message);
    }, 1300); // 1500 milliseconds (1.5 seconds)
}




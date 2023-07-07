
    // // Get the phone number input field
    // var phoneInput = document.getElementById('phone');

    // // Add an event listener for input changes
    // phoneInput.addEventListener('input', function() {
    //   formatPhoneNumber(this);
    // });

    // // Function to format the phone number
    // function formatPhoneNumber(input) {
    //   var phoneNumber = input.value.replace(/\D/g, '');
    //   var phoneNumberFormatted = '';

    //   // Check for the length of the phone number
    //   if (phoneNumber.length === 0) {
    //     phoneNumberFormatted = '';
    //   } else if (phoneNumber.length <= 3) {
    //     phoneNumberFormatted = '(' + phoneNumber;
    //   } else if (phoneNumber.length <= 6) {
    //     phoneNumberFormatted = '(' + phoneNumber.slice(0, 3) + ') ' + phoneNumber.slice(3);
    //   } else {
    //     phoneNumberFormatted = '(' + phoneNumber.slice(0, 3) + ') ' + phoneNumber.slice(3, 6) + '-' + phoneNumber.slice(6, 10);
    //   }

    //   // Set the formatted phone number as the input value
    //   input.value = phoneNumberFormatted;
    // }
  
    // Function to format the phone number
function formatPhoneNumber(input) {
  // Remove all non-digit characters from the input
  const phoneNumber = input.value.replace(/\D/g, '');

  // Format the phone number using regex
  const formattedPhoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3');

  // Update the input value with the formatted phone number
  input.value = formattedPhoneNumber;

  // Calculate the caret position offset
  const caretOffset = formattedPhoneNumber.length - phoneNumber.length;

  // Set the caret position
  input.setSelectionRange(input.selectionStart + caretOffset, input.selectionEnd + caretOffset);
}

// Get the phone number input element
const phoneNumberInput = document.getElementById('phone');

// Add an event listener for input changes
phoneNumberInput.addEventListener('input', function() {
  formatPhoneNumber(this);
});
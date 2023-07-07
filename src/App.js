import React, { useState } from "react";

// Component for the phone number input
const PhoneNumberInput = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  // Function to format the phone number
  const formatPhoneNumber = (event) => {
    // Remove all non-digit characters from the input
    const inputPhoneNumber = event.target.value.replace(/\D/g, "");

    // Format the phone number using regex
    const formattedPhoneNumber = inputPhoneNumber.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "($1) $2-$3"
    );

    // Update the phone number state
    setPhoneNumber(formattedPhoneNumber);

    // Calculate the caret position offset
    const caretOffset = formattedPhoneNumber.length - inputPhoneNumber.length;

    // Set the caret position
    event.target.setSelectionRange(
      event.target.selectionStart + caretOffset,
      event.target.selectionEnd + caretOffset
    );
  };

  return (
    <input
      type="text"
      value={phoneNumber}
      onChange={formatPhoneNumber}
      placeholder="Enter phone number"
    />
  );
};

// Usage
function App() {
  return (
    <div>
      <PhoneNumberInput />
    </div>
  );
}

export default App;

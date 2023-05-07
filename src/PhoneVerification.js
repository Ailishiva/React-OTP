import React, {  useRef } from "react";
import './PhoneVerification.css'
function PhoneVerification() {
  const otpInputs = useRef([]);
  const verifyBtn = useRef(null);

  // Function to move focus to the next input
  function moveToNextInput(currentIndex) {
    if (currentIndex < otpInputs.current.length - 1) {
      otpInputs.current[currentIndex + 1].focus();
    } else {
      verifyBtn.current.focus();
    }
  }
  

  // Function to move focus to the previous input and delete the input value
  function moveToPreviousInput(currentIndex) {
    if (currentIndex > 0) {
      otpInputs.current[currentIndex - 1].value = "";
      otpInputs.current[currentIndex - 1].focus();
    }
  }

  // Event listener for input keydown
  function handleInputKeyDown(e, currentIndex) {
    if (e.key === "Backspace" && !e.target.value) {
      e.preventDefault();
      moveToPreviousInput(currentIndex);
    } else if (/^\d$/.test(e.key)) {
      e.preventDefault();
      e.target.value = e.key;
      moveToNextInput(currentIndex);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      moveToPreviousInput(currentIndex);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      moveToNextInput(currentIndex);
    }
  }

  
  // Event listener for verify button click
  function handleVerifyClick() {
    const otp = otpInputs.current.map((input) => input.value).join("");
    //alert("OTP entered:", otp);
    alert(`OTP entered: ${otp}`);
    // Call your verification API or perform any other required action with the entered OTP
  }


  return (
    <>
     
        <div className="popup-container">
          <div className="popup">
            <div className="otp-inputs">
            <h3> Phone Verification</h3>
            <p className="info">Enter the OTP you recieved on  86778-XXXXX</p>
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  pattern="[0-9]"
                  className="otp-input"
                  inputMode="numeric"
                  maxLength={1}
                  onKeyDown={(e) => handleInputKeyDown(e, index)}
                  ref={(input) => {
                    otpInputs.current[index] = input;
                  }}
                />
              ))}
              <button ref={verifyBtn} onClick={handleVerifyClick}>
              Verify PhoneNumber
            </button>
            </div>
                      </div>
        </div>
      
    </>
  );
}
export default PhoneVerification;

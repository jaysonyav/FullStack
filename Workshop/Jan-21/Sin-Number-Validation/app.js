function validateSSN() {
    // Get the SSN from the input field
    let ssn = document.querySelector("#ssn").value;
  
    // Check if SSN has 9 digits
    if (ssn.replace(/-/g,"").length !== 9) {
      alert("Invalid: SSN must have 9 digits");
      return false;
    }
  
    // Check if SSN is divided into 3 parts by hyphen (-)
    if (!ssn.includes("-") || ssn.split("-").length !== 3) {
      alert("Invalid: SSN must be divided into 3 parts by hyphen (-)");
      return false;
    }
  
    // Get the 3 parts of the SSN
    let [firstPart, secondPart, thirdPart] = ssn.split("-");
  
    // Check if the first part has 3 digits and is not 000, 666, or between 900 and 999
    if (firstPart.length !== 3 || firstPart === "000" || firstPart === "666" || (firstPart >= 900 && firstPart <= 999)) {
      alert("Invalid: The first part of the SSN must have 3 digits and should not be 000, 666, or between 900 and 999");
      return false;
    }
  
    // Check if the second part has 2 digits and it is from 01 to 99
    if (secondPart.length !== 2 || (secondPart < 1 || secondPart > 99)) {
      alert("Invalid: The second part of the SSN must have 2 digits and it should be from 01 to 99");
      return false;
    }
  
    // Check if the third part has 4 digits and it should be from 0001 to 9999
    if (thirdPart.length !== 4 || (thirdPart < 1 || thirdPart > 9999)) {
      alert("Invalid: The third part of the SSN must have 4 digits and it should be from 0001 to 9999");
      return false;
    }
  
    alert("Valid");
    return true;
  }
  
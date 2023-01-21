function validateEmail() {
    // Get the email address from the input field
    let email = document.querySelector("#email").value;
  
    // Check if email starts with '@' symbol
    if (email[0] === '@') {
      alert("Invalid: Email cannot start with '@' symbol");
      return false;
    }
  
    // Check if email contains more than one '@' sign
    if (email.split('@').length > 2) {
      alert("Invalid: Email cannot contain more than one '@' symbol");
      return false;
    }
  
    // Check if there is at least one '.' after the '@' sign
    if (!email.includes('@') || !email.split('@')[1].includes('.')) {
      alert("Invalid: Email must contain at least one '.' after the '@' symbol");
      return false;
    }
  
    // Check if there are at least two characters after the '.' sign
    if (email.split('.')[email.split('.').length - 1].length < 2) {
      alert("Invalid: Email must have at least two characters after the '.' symbol");
      return false;
    }
  
    // Check if email contains invalid characters
    if(!/^[abcdefghijklmnopqrstuvwxyz0123456789_+.@]+$/.test(email)){
      alert("Invalid: Email contains invalid characters");
      return false;
    }
    alert("Valid");
    return true;
  }
  
//Select SSN from input field

let ssn =document.querySelector("#ssn");
let button =document.querySelector('button');

// console.log(button);


//Should have 9 digits
button.addEventListener("click", function(){
let ssnvalue=ssn.value;
if(ssnvalue.replace(/-/g,"").length !==9){
    alert("invalid: SSN must be have 9 digits");
    return;
}
//should be divided into 3 parts by hyphen (-).
// console.log(!(ssnvalue.split("-").length ===3));
if(!ssnvalue.includes("-") || !(ssnvalue.split("-").length ===3)){
    alert("Invalid: SSN must be divided into 3 parts by hyphen")
    return;
}
// The first part should have 3 digits and should not be 000, 666, or between 900 and 999.

let [firstPart, secondPart, thirdPart]=ssnvalue.split("-")
// console.log(firstPart);
// console.log(secondPart);
// console.log(thirdPart);

if(firstPart.length !== 3 || firstPart ==='000' || firstPart ==='666' || (firstPart >=900 && firstPart<=999) ){
    alert("Invalid:The first part should have 3 digits and should not be 000, 666, or between 900 and 999. ")
    return false;
}
// The second part should have 2 digits and it should be from 01 to 99.

if((secondPart.length !==2 || (secondPart <1 ||secondPart>99))){
    alert("Invalid: The second part should have 2 digits and it should be from 01 to 99. ")
    return false;
}
// The third part should have 4 digits and it should be from 0001 to 9999.
if(thirdPart.length !==4 || (Number(thirdPart) <1 || Number(thirdPart)>9999)){
    alert("Invalid: The third part should have 4 digits and it should be from 0001 to 9999.")
    return false
}
alert('Valid');
}

)
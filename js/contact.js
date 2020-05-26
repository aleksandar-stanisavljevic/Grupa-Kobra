//click phone, skype or email to call
function buttonEvent(action){
  window.location.href = action;
}

var select = document.getElementById("select");
var yourCheck = document.getElementById("yourSelectInput");
var selectInput = document.getElementById("selectInput");

//enable/disable checkbox option
function checkboxClick() {
    var check = document.getElementById("contact_input").checked;

    if(check == true){
      select.style.display = "inline-block";
      yourCheck.style.display = "block";
    }
    else {
      select.style.display = "none";
      yourCheck.style.display = "none";
      select.options[0].selected = true;
      selectInput.innerText = "";
    }
}

var inputData = document.getElementsByClassName("inputData");
var myForm = document.getElementById("myform");
var submitContact = document.getElementById('submit_contact');
var sentData = document.getElementById('sentData');

//reset form after submit and success message
document.getElementById('submit_contact').onclick = function() {
    setTimeout(function(){
      myForm.reset();
      submitContact.disabled = true;
      sentData.innerText = "Vaši podaci su poslati.";
      select.style.display = "none";
      for (var i = 0; i < inputData.length; i++) {
        inputData[i].innerText = "";
      }
    }, 100);
}

var inputBoxName = document.getElementById('name');
var inputBoxLastname = document.getElementById('lastname');
var inputBoxEmail = document.getElementById('email_input');
var inputBoxPhone = document.getElementById('phone_input');
var inputBoxMessage = document.getElementById('feedback_input');
var inputBoxCheckSelect = document.getElementById('select');

//update text value when typing in form input
function showInputData(){
  document.getElementById('nameInput').innerHTML = inputBoxName.value;
  document.getElementById('lastnameInput').innerHTML = inputBoxLastname.value;
  document.getElementById('emailInput').innerHTML = inputBoxEmail.value;
  document.getElementById('phoneInput').innerHTML = inputBoxPhone.value;
  document.getElementById('messageInput').innerHTML = inputBoxMessage.value;
  document.getElementById('selectInput').innerHTML = inputBoxCheckSelect.value;
}

var errorMessage = document.getElementsByClassName('errorMessage');
var noneInput = document.getElementsByClassName('none_input');

//validate name and last name
function errorValidate(errorInput, errorBox, errorEmpty, child){
  if (errorBox.value == ""){
    submitContact.disabled = true;
    errorBox.style.border = "1px solid red";
    errorBox.style.boxShadow = "0 0 5px red";
    errorMessage[child].style.display = "inline";
    noneInput[child].style.display = "inline-block";
    document.getElementById(errorInput).innerHTML = errorBox.value;
    errorBox.addEventListener("blur", function (){
      errorBox.style.boxShadow = "0 0 5px red";
      errorBox.style.border = "1px solid red";
    });
  }
  else{
    if(errorEmpty.value == "" || inputBoxEmail.value == ""){
      submitContact.disabled = true;
    }
    else{
      submitContact.disabled = false;
    }
    errorMessage[child].style.display = "none";
    noneInput[child].style.display = "none";
    errorBox.style.border = "1px solid rgba(81, 203, 238, 1)";
    errorBox.style.boxShadow = "0 0 5px rgba(81, 203, 238, 1)";
    document.getElementById(errorInput).innerHTML = errorBox.value;
    errorBox.addEventListener("blur", function () {
      errorBox.style.boxShadow = "none";
      errorBox.style.border = "1px solid #DDDDDD";
    });
  }
};

//validate an email address
document.getElementById('email_input').oninput = function(){
  var emailRegEx = /^[A-Z0-9_%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (inputBoxEmail.value == ""){
    submitContact.disabled = true;
    this.style.border = "1px solid red";
    this.style.boxShadow = "0 0 5px red";
    errorMessage[2].style.display = "inline";
    errorMessage[3].style.display = "none";
    noneInput[2].style.display = "inline-block";
    document.getElementById('emailInput').innerHTML = inputBoxEmail.value;
    inputBoxEmail.addEventListener("blur", function () {
      this.style.boxShadow = "0 0 5px red";
      this.style.border = "1px solid red";
    });
  }
  else if (inputBoxEmail.value.search(emailRegEx) == -1){
    submitContact.disabled = true;
    this.style.border = "1px solid red";
    this.style.boxShadow = "0 0 5px red";
    errorMessage[2].style.display = "none";
    errorMessage[3].style.display = "inline";
    noneInput[2].style.display = "inline-block";
    document.getElementById('emailInput').innerHTML = inputBoxEmail.value;
    inputBoxEmail.addEventListener("blur", function () {
      this.style.boxShadow = "0 0 5px red";
      this.style.border = "1px solid red";
    });
  }
  else {
    if(inputBoxName.value == "" || inputBoxLastname.value == ""){
      submitContact.disabled = true;
    }
    else{
      submitContact.disabled = false;
    }
    errorMessage[3].style.display = "none";
    errorMessage[2].style.display = "none";
    noneInput[2].style.display = "none";
    this.style.border = "1px solid rgba(81, 203, 238, 1)";
    this.style.boxShadow = "0 0 5px rgba(81, 203, 238, 1)";
    document.getElementById('emailInput').innerHTML = inputBoxEmail.value;
    inputBoxEmail.addEventListener("blur", function () {
      this.style.boxShadow = "none";
      this.style.border = "1px solid #DDDDDD";
    });
  }
};

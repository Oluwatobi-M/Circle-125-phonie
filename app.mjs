// // IDENTIFY INTERNET SERVICE PROVIDER

function startApp() {
  const ISPs = {
    MTN: ["0803", "0806", "0703", "0706", "0813", "0816", "0810", "0814", "0903", "0906"],
    GLO: ["0805", "0807", "0705", "0815", "0811", "0905"],
    AIRTEL: ["0802", "0808", "0708", "0704", "0812", "0701", "0901", "0902", "0904"],
    ETISALAT: ["0809", "0818", "0817", "0909"],
  };

  const phoneNumberInput = document.getElementById("phone");
  const icon = document.querySelector(".isp-icon");

// Validate Phone number
  function validatePhoneNumber() {
    let ispType = "";
    for (let isp in ISPs) {
      if (ISPs[isp].includes(phoneNumberInput.value)) {
        ispType = isp;
        icon.classList.add("stop-animate")
        // // insert icons
        icon.setAttribute("src", `assets/${ispType}.svg`);
        return
        // // State and reference conditionals
      } else if (phoneNumberInput.value < 4) {
        icon.classList.remove("stop-animate")
        icon.setAttribute("src", `assets/Loading.svg`);
      } else {
        icon.classList.remove("stop-animate")
        icon.setAttribute("src", `assets/Loading.svg`);
      }
    }
  }
// // Add an event listener
  phoneNumberInput.addEventListener("input", validatePhoneNumber)
}

// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //





// // VALIDATE FORM DETAILS
const email = document.getElementById('email')
const password = document.getElementById('password')
const phone = document.getElementById('phone')
const username = document.getElementById('username')
const form = document.getElementById('form')

// add an event listener
form.addEventListener('submit', (e) => {
  e.preventDefault();

  validateInputs();
});

function validateInputs() {
  // Get values from inputs
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const phoneValue = phone.value.trim();
  const usernameValue = username.value.trim();

  // Validate email
  if (emailValue === '') {
    //show error by adding error class
    setErrorFor(email, 'Email is required');
  } else {
    // show success class
    setSuccessFor(email);
  }

  // Validate username
  if (usernameValue === '') {
    setErrorFor(username, 'Enter your username')
  } else {
    setSuccessFor(username);
  }

  // Validate password
  if (passwordValue === '') {
    setErrorFor(password, 'Enter your password');
  }
  else if (passwordValue.length <=5 ) {
    setErrorFor(password, 'Password must be up to 6 characters')
  } else {
    setSuccessFor(password);
  }

  // Validate phone number
  if (phoneValue === '') {
    setErrorFor(number, 'Enter your phone number');
  } else if (phoneValue < 11) {
    setErrorFor(phone, 'Not a valid phone number');
  }
  else {
    setSuccessFor(phone);
  }
  
}

function setErrorFor(input, message) {
  const inputBox = input.querySelector('form')
  // const form = inputBox.querySelector('.all');

  inputBox = alert(message);

  // form = alert(message);
}
function setSuccessFor(input) {
  const inputBox = input.parentElement;
  inputBox.className = 'success';
}

function subscribe() {
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    const userEmail = document.getElementById("signupForm").value;
    const card = document.getElementById("card");
    const error = document.getElementById("error");
  
    if (isValidEmail(userEmail)) {
  
        card.innerHTML = `
            <img src='assets/images/icon-success.svg' id='successIcon' />
            <h1>Thanks for subscribing!</h1>
            <p>A confirmation has been sent to ${userEmail}. Please open it and click the button inside to confirm your subscription.</p>
            <br>
            <button id="dismissMsg" onclick="dismiss()">Dismiss message</button>
        `;
  
        card.style.width = '504px';
        card.style.height = '520px';
        card.style.padding = '90px';
  
        const image = document.getElementById("signup");
        image.remove();
    } else {
        document.getElementById("signupForm").style.backgroundColor = 'rgba(255, 98, 87, 0.5)';
        document.getElementById("signupForm").style.color = "#FF6155";
        document.getElementById("signupForm").style.fontWeight = "bold";
        document.getElementById("signupForm").style.fontSize = "12px";
  
        error.innerHTML = "Valid email required";
  
    }
  }
  
  function resize() {
const signupElement = document.getElemmentById("signup");
    if (window.innerWidth < 700) {

     signupElement.innerHTML  = `<img src="assets\images\illustration-sign-up-mobile.svg" id="mobileSignup">`
    }
}

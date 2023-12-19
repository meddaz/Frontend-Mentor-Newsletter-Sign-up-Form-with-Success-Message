function subscribe() {
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
  
    const userEmail = document.getElementById("signupForm").value;
    const card = document.getElementById("card");
    const error = document.getElementById("error");
    const image = document.getElementById("signup");
const mobileImg = document.getElementsByClassName("mobile-img");  
    
    
    if (isValidEmail(userEmail)) {
  
        card.innerHTML = `
            <img src='icon-success.svg' id='successIcon' />
            <h1>Thanks for subscribing!</h1>
            <p>A confirmation has been sent to ${userEmail}. Please open it and click the button inside to confirm your subscription.</p>
            <br>
            <button id="dismissMsg" onclick="dismiss()">Dismiss message</button>
        `;
  
        card.style.width = '504px';
        card.style.height = '520px';
        card.style.padding = '90px';
  
        image.remove();
    } else {
        document.getElementById("signupForm").style.backgroundColor = 'rgba(255, 98, 87, 0.5)';
        document.getElementById("signupForm").style.color = "#FF6155";
        document.getElementById("signupForm").style.fontWeight = "bold";
        document.getElementById("signupForm").style.fontSize = "12px";
  
        error.innerHTML = "Valid email required";
   mobileImg.remove();
    }
  }

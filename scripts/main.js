const inputEmailEl = document.getElementById("inputEmail");
const wrongEmailEl = document.getElementById("wrongEmail");
const sendBtn = document.getElementById("sendBtn");

inputEmailEl.addEventListener("keyup", function() {
    validateEmailInput();
});

function validateEmailInput() {
    const email = inputEmailEl.value;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regex.test(email)) {
        wrongEmailEl.classList.remove('active'); // Oculta el mensaje de error
    }

    else if(email === '') {
        wrongEmailEl.classList.remove('active');
        return;
    }
    
    else {
        wrongEmailEl.classList.add('active'); // Muestra el mensaje de error
    }
}
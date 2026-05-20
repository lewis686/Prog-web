
document.addEventListener('DOMContentLoaded', function() {
    
    
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        
        event.preventDefault(); 

       
        const numeValue = document.getElementById('nume').value;
        const emailValue = document.getElementById('email').value;
        const mesajValue = document.getElementById('mesaj').value;

        
        feedback.textContent = "";
        feedback.style.color = "red"; 

        
        if (!emailValue.includes('@')) {
            feedback.textContent = "EMAIL INVALID: Trebuie să conțină '@'.";
            return; 
        }
        
        if (mesajValue.length < 10) {
            feedback.textContent = "MESAJ PREA MIC: Minim 10 caractere.";
            return;
        }
        
        if (numeValue.length < 3) {
            feedback.textContent = "NUME PREA MIC: Minim 3 caractere.";
            return;
        }

        
        feedback.style.color = "green";
        feedback.textContent = "Formular trimis cu succes!";
        form.reset(); 
    });
});

 const date = new Date();
 const ora = date.getHours();
const paragrafreader = document.querySelector('header p');
if( ora >  6 && ora < 12){
    paragrafreader.textContent = "Buna dimineata.";
}
else if ( ora >  12 && ora < 18){
    paragrafreader.textContent = "Buna ziua.";
}
else{
    paragrafreader.textContent = "Buna seara.";
}
const btnDarkMode = document.getElementById('theme-toggle');

        btnDarkMode.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                btnDarkMode.textContent = 'Light Mode';
            } else {
                btnDarkMode.textContent = 'Dark Mode';
            }
        });
document.querySelectorAll('main h2')
.forEach(function(h2){});
const titluriH2 = document.querySelectorAll('main h2');

titluriH2.forEach(function(h2) {

    h2.innerHTML = '▼ ' + h2.innerHTML;
    h2.style.cursor = 'pointer'; 
    h2.addEventListener('click', function() {
        
        if (this.textContent.includes('▼')) {
            this.textContent = this.textContent.replace('▼', '▶');
        } else {
            this.textContent = this.textContent.replace('▶', '▼');
        }

        let elementUrmator = this.nextElementSibling;
      
        while (elementUrmator) {
            
            elementUrmator.classList.toggle('hidden');
            
            
            elementUrmator = elementUrmator.nextElementSibling;
        }
    });
});
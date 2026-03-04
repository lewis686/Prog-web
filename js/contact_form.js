function submitForm() {
    const nume = document.getElementById("un_name").value;
    const email = document.getElementById("email").value;
    const mesaj = document.getElementById("mesaj").value;
    if(nume.length < 2){
        console.warn("Introduceti cel putin doua caractere. ")
    }
    console.warn( "Goodbye World!");
    if(email.includes = " @ "){

    }
    else{
        console.warn("Email incorect")
    }
    if(mesaj.length < 10){
        console.warn("mesajul trebuie sa contina cel putin 10 caractere")
    }
}
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

        const sectiuni = document.querySelectorAll('main h2');

        sectiuni.forEach(function(h2) {

            h2.textContent = '▼ ' + h2.textContent;

            h2.addEventListener('click', function() {

                if (this.textContent.startsWith('▼')) {
                    this.textContent = this.textContent.replace('▼', '▶');
                } else {
                    this.textContent = this.textContent.replace('▶', '▼');
                }

                let frate = this.nextElementSibling;
                
                while (frate && frate.tagName !== 'H2' && frate.tagName !== 'FOOTER') {
                    frate.classList.toggle('hidden');
                    frate = frate.nextElementSibling;
                }
            });
        });
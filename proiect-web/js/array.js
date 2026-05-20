document.addEventListener('DOMContentLoaded', function() {
    const elementeEducatie = document.querySelectorAll('#education ol li');
    const arrayEducatie = [];
    elementeEducatie.forEach(function(li) {
        const textLi = li.textContent.trim();
        arrayEducatie.push(textLi);
    });
    console.log("Lista educație:", arrayEducatie);
    const filtru2025 = arrayEducatie.filter(function(element) {
        return element.includes('2025'); 
    });
    console.log("1. Filtru '2025':", filtru2025); 

    //alte 3 filtre diferite 
    const filtruIESC = arrayEducatie.filter(function(element) {
        return element.includes('IESC');
    });
    console.log("2. Filtru 'IESC':", filtruIESC); 

    const filtruLiceu = arrayEducatie.filter(function(element) {
        return element.includes('Liceul');
    });
    console.log("3. Filtru 'Liceul':", filtruLiceu); 

    const filtruUnity = arrayEducatie.filter(function(element) {
        return element.includes('Unity');
    });
    console.log("4. Filtru 'Unity':", filtruUnity);

    const tipuriEd = arrayEducatie.map(function(element){
        const cuvinte = element.split(' ');
        return cuvinte[0];
        });
    console.log("lista tipuri ed:", tipuriEd)
    const totalAniStudiu = arrayEducatie.reduce(function(totalAcumulat,element){
        const aniGasiti = element.match(/\d{4}/g);
        if(aniGasiti && aniGasiti.length === 2 ){
const anInceput = parseInt(aniGasiti[0]);
const anSfarsit = parseInt(aniGasiti[1]);
const durata = anSfarsit - anInceput;
return totalAcumulat + durata;
        }
        else if(aniGasiti && aniGasiti.length === 1){
    const anInceput = parseInt(aniGasiti[0]);
    const anCurent = new Date().getFullYear();
    const durata = anCurent - anInceput;
    return totalAcumulat + durata;
        }
        return totalAcumulat;
        
}, 0);
console.log("total ani studiu:", totalAniStudiu);
})
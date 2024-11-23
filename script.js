function leap(a) {
if ( (a%4===0) && ((a%100!=0) || (a%100==0 && a%400==0)) ) 
    return (`${a} est bisextile`) ;

return `${a} n'est pas bisextile`;
}
console.log(leap(18)); //retourne 18 n'est pas bisextile

function ticketPricing(age) {
    age = parseInt(age, 10); // Convertit l'entrée en un entier
    
    if (isNaN(age) || age < 0) {
        return "Veuillez entrer un âge valide.";
    }
    
    if (age <= 12) {
        return "Le prix du billet est de 10 $.";
    } else if (age >= 13 && age <= 17) {
        return "Le prix du billet est de 15 $.";
    } else if (age >= 18) {
        return "Le prix du billet est de 20 $.";
    }
}

console.log(ticketPricing(8));
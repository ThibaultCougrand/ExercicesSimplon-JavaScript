/*  
Le programme demande la couleur du cheval blanc d'Henri 4,

puis combien y a-t-il de 7 nains ? 
*/
var i = 0;
var j = 0;
while (i < 1) {
    var chevalB = prompt("Quel est la couleur du cheval blanc d'Henri 4 ?");
    if (chevalB === "blanc" || chevalB === "Blanc") {
        alert("Bravo ! pas trop dur");
        i++;
    } else {
        alert("Tu en est vraiment sur ???");
    }
}
while (j < 1) {
    var septNain = prompt("Combien y a-t-il de 7 nains ?")
    if (septNain === "7") {
        alert("Bravo ! tu es vraiment trop fort");
        j++;
    } else {
        alert("franchement t'abuse...");
    }
}

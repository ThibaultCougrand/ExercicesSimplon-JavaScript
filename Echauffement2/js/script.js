/*  
Le programme demande la couleur du cheval blanc d'Henri 4,

puis combien y a-t-il de 7 nains ? 
*/
var i = 0;
var j = 0;
while (i < 1) {
    var chevalB = window.prompt("Quel est la couleur du cheval blanc d'Henri 4 ?");
    if (chevalB === "blanc" || chevalB === "Blanc") {
        window.alert("Bravo ! pas trop dur");
        i++;
    } else {
        window.alert("Tu en est vraiment sur ???");
    }
}
while (j < 1) {
    var septNain = window.prompt("Combien y a-t-il de 7 nains ?")
    if (septNain === 7) {
        window.alert("Bravo ! tu es vraiment trop fort");
        j++;
    } else {
        window.alert("franchement t'abuse...");
    }
}

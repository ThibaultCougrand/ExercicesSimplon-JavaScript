/*
Le programme tire au hasard une opération ( + * - ) et deux chiffres

● le programme demande le résultat de l'opération à l'utilisateur » ex : "combien font 4 * 7"

● affiche si la réponse est juste ou fausse
*/

var a = Math.floor(Math.random() *10);
var b = Math.floor(Math.random() *10);
var opératorId = Math.floor(Math.random() *3);
switch (opératorId) {
    case 0: 
        var plus prompt("Combien font " + a + " + " + b);
        if ()
        break;
    case 1 : 
        prompt("Combien font " + a + " - " + b);
        break;
    case 2 :
        prompt("Combien font " + a + " x " + b);
        break;
    default:
        break;
}
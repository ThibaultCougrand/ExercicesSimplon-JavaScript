/* Comment tu t’appelles? Vérifier le nom :

● Entre 1 et 10 caractères.

● Non-vide.

Répondre :

● “Bonjour !” */

var name = prompt("Saisir votre nom");
if (name.length > 0 && name.length < 11) {
    alert("Bonjour " + name + " !")
} else {
    alert("Ce nom n'est pas valide")
}
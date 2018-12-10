/* Comment tu t’appelles? Vérifier le nom :

● Entre 1 et 10 caractères.

● Non-vide.

Répondre :

● “Bonjour !” */

var name = window.prompt("Saisir votre nom");
if (name.length > 0 && name.length < 11) {
    window.alert("Bonjour " + name + " !")
} else {
   window.alert("Ce nom n'est pas valide")
}
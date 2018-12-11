/*
● Réaliser un calculatrice simple

○ choisir une opération : + * / -

○ choisir un 1er nombre

○ choisir un 2eme nombre

○ Afficher le résultat

● Bonus (Pour ceux qui ont encore du temps devant eux..)

○ améliorer l'UI/UX pour que cela ressemble à une vraie calculatrice */

refresh();//réinitialise la saisi au rafraichissement de la page et lancement du script

function insertNumber(elemID, text) {//fonction pour envoyer la valeur d'un bouton dans la valeur de la zone de calcul.
    var elem = document.getElementById(elemID);//recupère la zone de calcul dans une variable.
    elem.value += text;//et on lui assigne la valeur souhaité.
}//la fonction est appeller dans le onClick des boutons en html.

function calculateThis() {// fonction pour calculer les éléments de la zone de clalcul.
    var input = document.getElementById('js-valeur').value;//on enferme la valeur contenu dans la zone de calcul dans une variable.
    var results = eval(input);//on créer une variable avec le calcul de notre précédente valeur.
    document.getElementById('js-valeur').value = results;// et on écrase la valeur de la zone de calcul par le resultat.
}

function refresh() {//fonction pour rafraichir la zone de calcul.
    document.getElementById('js-valeur').value = "";//écrase sa valeur par une string vide.
}
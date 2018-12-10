/*
● Demander l'identifiant puis le mot de passe

● vérifier que :

    l'identifiant saisi a plus de 4 caractères

    l'identifiant contient un @

    l'identifiant est "lea@gmail.com" et son mot de passe "12345"

Bonus : reprendre l'exercice login/password en acceptant cette fois plusieurs paires mail/mdp et en donnant 4 essais à l'utilisateur.
*/

var i = 0;
while (i < 4) {// Boucle pour les 4 essais.
    var id = prompt("Veuillez saisir votre addresse mail :");// récupère la saisi de l'email.
    var verif = id.indexOf("@");// vérifie que l'email contien bien un "@".
    var mdp = prompt("Veuillez saisir votre mot de passe :");// recupère la saisi du mot de passe.
    if (id === "lea@gmail.com" && mdp === "12345" || id === "bruno@gmail.com" && mdp === "56789" || id === "corine@gmail.com" && mdp === "02468" || id === "henri@gmail.com" && mdp === "13579") {// condition de respect des couple email/mdp.
        alert("Bravo vous etes connecté à .... je sais pas");
        i = 4;// sort de la boucle.
    } else if (id.length < 4 || verif < 0) {// si l'email fais moins de 4 char ou ne contiens pas de "@".
        alert("l'email entrer n'est pas un email valide")
        i++;
    } else {
        alert("Email ou mot de passe incorect");
        i++;
    }
}

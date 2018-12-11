/* 
Nombre mystère

● Il faut deviner le nombre choisi par l'ordinateur

○ choisir un nombre entre 0 et 9

○ le programme dit si le nombre mystère est plus ou moins

○ après 3 tentatives, la partie est perdue

● Bonus

○ pouvoir choisir les nombres min et max

○ pouvoir choisir le nombre de tentatives lecture */

var continu = true;//Boolean pour relancer le jeu en cas d'echec.
var error = true;//Boolean pour relancer la saisi des nombres min et max en cas de mauvaise saisi.
var error2 = true;//Boolean pour relancer la saisi du nombre de tentatives en cas de mauvaise saisi.
while (continu) {//Boucle pour relancer le jeu en cas d'échec.
    while (error) {//Boucle pour relancer la saisi des nombre min et max.
        var min = Number(prompt("Choisir nombre minimum"));//saisi du nombre minimum.
        var max = Number(prompt("Choisir nombre maximum"));//saisi du nombre maximum.
        if (min >= max || min < 0 || isNaN(min) || isNaN(max)) {//si le nombre min est supérieur ou égale au max ou le nombre min est inférieur à 0 ou les saisi ne sont pas des nombres
            alert("Vos saisi sont incorectes");//message d'erreur.
        } else {//sinon
            while(error2){//on rentre dans la boucle pour la saisi du nombre de tentatives.
                var tentatives = Number(prompt("Choisir un nombre de tentatives"));//on la saisi.
                if (tentatives <= 0 || isNaN(tentatives)){//si tentative inférieur à 0 ou pas un nombre
                    alert('Le nombre de tentatives doit être positif !'); //message d'erreur.
                }else {//sinon
                    var randomNumber = Math.floor(Math.random() * (max - min) + min);//on genère le nombre aléatoire entre les saisis choisi.
                    error2 = false;//et on sort de la boucle.
                }    
            }
            error = false;//on sort également de la précédente boucle.
        }
    }
    for (i = 0; i < tentatives;i++ ) {//une boucle qui se lance le nombre de tentatives demandées.
        var input = Number(prompt(`Quel est le nombre mystère ? Vous avez ${tentatives - i} tentatives restantes`));//saisi du nombre par le joueur (affiche le nombre de tentatives restantes)
        if (input > randomNumber && input <= max) {//si la saisi est supérieur au nombre généré et inférieur ou égale au max alors
            alert("Il est plus petit");//il affiche plus petit.
        } else if (input < randomNumber && input >= min) {//si il est plus petit et plus grand que le min alors
            alert("Il est plus grand");//il affiche plus grand.
        } else if (input > max || input < min) {//si il est plus grand que le max ou plus petit que le min
            alert("Votre saisi n'est pas contenu entre votre min et max défini plus tôt.");//message d'erreur
            i--;//et on recommence l'essai.
        } else {//sinon
            alert("Bravo Vous avez trouvé");//victoire.
            i = tentatives;//on sort de la boucle for.
        }
    }
    continu = false;//et de la boucle du jeu.
}

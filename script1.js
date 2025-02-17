function startGame() {
    alert("Bienvenue dans le jeu du Chiffre Caché !");
    
    let difficulty = prompt("Choisissez la difficulté :\n1 - Facile (1-10, 5 essais)\n2 - Intermédiaire (1-50, 7 essais)\n3 - Difficile (1-100, 10 essais)");

    let maxNumber, maxAttempts;

    switch (difficulty) {
        case "1":
            maxNumber = 10;
            maxAttempts = 5;break;
        case "2":
            maxNumber = 50;
            maxAttempts = 7;break;
        case "3":
            maxNumber = 100;
            maxAttempts = 10;break;
        default:
            alert("Choix invalide. Redémarrage du jeu.");
            return startGame();
    }

    alert(`Un nombre entre 1 et ${maxNumber} a été généré. Vous avez ${maxAttempts} essais pour le deviner !`);

    let randomNumber = Math.floor(Math.random() * maxNumber) + 1;

    let attempts = 0;

    while(attempts<maxAttempts){
        let guess = prompt(`Entrez un nombre entre 1 et ${maxNumber} : (Essais restants: ${maxAttempts - attempts})`);
        if(guess === null){
            alert("Le jeu a été annulé.");
            return;
        }
        guess = parseInt(guess);
        if(isNaN(guess) || guess < 1 || guess > maxNumber){
            alert("Veuillez entrer un nombre valide !");
            continue;
        }
        if(guess === randomNumber){
            alert(`Bravo ! Vous avez trouvé le nombre caché en ${attempts + 1} essai(s) !`);
            break;
        }else if (attempts== maxAttempts - 1){
            alert(`Perdu ! Le nombre caché était : ${randomNumber}`);
            break;
        }    
        if(guess < randomNumber){
            alert("C'est plus !");
        }else{
            alert("C'est moins !");
        }
        attempts++;

    }

    let replay = confirm("Voulez-vous rejouer ?\n 1 - Yes\n 2 - No");
    if(replay){
        startGame();
    }else{
        alert("Merci d'avoir joué !");
    }
    
}
startGame();


users = {
    nom: String,
    prenom: String,
    dateNaissance: Date,
    numTelephone: Number,
}
users.nom = prompt("Entrez votre nom :");
users.prenom = prompt("Entrez votre prénom :");
users.dateNaissance = prompt("Entrez votre date de naissance :");
users.numTelephone = prompt("Entrez votre numéro de téléphone :");  

console.log(users.nom);

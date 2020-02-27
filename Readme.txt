falcon ress une application web élaborée avec react js 

frontend : reactjs (npm i react)

server: expressjs (npm i express)
si vous effectuez des changements au fichier serveur.js vous aurez besoin du module nodemon
pour rafraichir le serveur
install nodemon (npm install -g nodemon)
de plus vous aurez besoin du body-parser pour lire les fichiers json
npm i body-parser

installer robo3T pour visualiser la base de données

backend : mongodb (npm i mongodb)
database name : FalconData
database collection name : experts


la collection experts contients les variables suivantes:
{
    "_id" : ObjectId("*********"),
    "name" : "", nom expert 
    "lastname" : "", prénom expert
    "phone" : "", numéro portable expert
    "email" : "", email expert
    "visa" : "", si un expert a une visa
    "carteSud" : "", si un expert a une carte sud
    "aptMedicale" : "", si un expert a un aptitude médicale
    "visaExpire" : "", date d'expiration visa
    "carteexpire" : "",date d'expiration carte sud
    "aptexpire" : "",date d'expiration aptitude médicale
    "education" : "", résumé à propos le parcours universitaire
    "expYear" : "", années d'experience
    "experience" : "", résumé à propos l'experience
    "expertiseArr" : [ 
        {
            "id" : number,
            "value" : titre d'expertise,
            "checked" : valeur booléene
        }
    ],
    "certfiArr" : [ 
        {
            "id" : number,
            "value" : titre de certificat
            "checked" : valeur booléene
        }
    ],
    "InspecteurNDTMT" : "N/A", note d'évaluation 
    "InspecteurNDTPT" : "N/A",
    "InspecteurNDTUT" : "N/A",
    "InspecteurNDTRT" : "N/A",
    "InspecteurNDTVT" : "N/A",
    "InspecteurPeinture" : "N/A",
    "InspecteurEnSoudage" : "N/A",
    "InspecteurEnLevage" : "N/A",
    "InspecteurInstallation" : "N/A",
    "InspecteurInstallationElèctrique" : "N/A",
    "InspecteurInstallationdeGaz" : "N/A",
    "InspecteurAppareilàPression" : "N/A",
    "ExpertTechnique" : "N/A",
    "ExpertInspecteurProtectionCathodique" : "N/A",
    "ExpertRBI" : "N/A",
    "InspecteurStorageTank" : "N/A",
    "InspecteurPipeline" : "N/A",
    "InspecteurIncendie" : "N/A",
    "isChooseVisa" : "notSelected",
    "isChooseCarteSud" : "notSelected",
    "isChooseAptmedic" : "notSelected"
}

 
pour démarrer le serveur on a 2 commandes :
acceder au dossier du projet avec la commande 'cd': cd /path
puis executer la commande 'node server'
ou bien 'nodemon server.js' // si on va effectuer des changements au fichier serveur

database name : FalconData
database collection name : experts

styling :
on a 3 fichiers de styling

App.css pour tout les classe sauf modal.js et expertCard.js

modal.css correspond au class modal.js
expertCard.css correspond au class expertCard.js



Component Grille
	classe pour la grille de compétence

Component EditGrille
	classe pour modifier la grille de compétence

Component EditProfileExpert
	classe pour modifier le profil d'expert

Component expertCard
	profile card qui correspond a un expert

Component expertContainer
	classe qui contient tout les expert

Component home
	classe pour la page d'acceil 

Component modal
	classe pour le formulaire ajouter un expert

Component modalDelete
	classe pour supprimer un expert

Component Navbar
	classe pour la barre de navigation

Component printProfile
	classe pour générer un cv

Component search
	classe pour filtrer les expert selon leurs expertise et compétences



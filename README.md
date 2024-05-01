Cette application est le modele que vous devez utiliser pour faire une API REST.
L'authentification et la partie register sont  déjà effectuées.
Voici les routes actuelles de l'application:

routes servant a tester les roles utilisateurs:
/api/test/user 
/api/test/mod 
/api/test/admin 

route pour l'enregistrement d'un compte:
/api/auth/signup

route pour s'authentifier
/api/auth/signin

Cet travail est à réaliser en binome.

A partir du modele (musique, football, plantes ...) de votre choix, vous devez realiser les opération CRUD sur ce modele.
Pour realiser ces opérations CRUD de ce modele il est necessaire d'être authentifié en étant en posession d'un token.
Vous devez réaliser des tests à partir du framework Jest couplé à la dépndance  Supertest deja configurés dans l'application. 
Dans le dossier tests, vous dévez réaliser les tests en fonction des focntionnalités de l'application:
auth :-authentification et enregistrement d'un nouvel utilisateur
crud :-opérations CRUD du modele.
roles: tests sur les 3 roles (user,mod,admin)

Vous devez publier votre application sur un repository privé sur gitlab.lamy.mobi, et configurer le fichier .gitlab-ci.yml pour éxécuter les tests automatiquement.

Les soutenances autont lieu en date du 15 Mai.
Vous devrez présenter un anglais le fonctionnement de votre application et la réalisation de vos tests.

La soutenance comptera pour 40% de la note finale.







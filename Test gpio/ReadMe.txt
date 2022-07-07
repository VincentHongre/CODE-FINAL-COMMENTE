Ceci est le code utilisé afin de lire les passages sur les tourniquets de métro et afficher les informations souhaitées par les clients en conséquence.

Ce code consiste en plusieurs parties : 

- La partie lecture des pins du raspberry, afin de capter les passages et d'envoyer cette information au serveur
- La partie écriture des pins du raspberry, utilisés reliés aux pins de lecture afin de simuler un passage lorsque nous n'avions pas les tourniquets à disposition
- La partie serveur, qui capte les informations des pins et les envoie au front de notre site
- Notre site, qui affiche les informations selon le nombre de passages



TUTORIEL :

Pour activer ces parties, vous devrez vous rendre, dans une invite de commande, dans /home/raspberry/scripts et exécuter tous les scripts des read, ainsi que les scripts du serveur et du front. 
Exemple de commande : "sh NOM_DU_SCRIPT.sh"
Ces scripts sont composés des commandes à exécuter pour lancer les programmes nécessaires au bon fonctionnement du site. Cela simplifie grandement le processus de lancement du programme.
Il faut lancer chacun des scripts dans une invite de commande différente, donc si nous voulons surveiller les 6 tourniquets, nous aurons les 6 fenêtres avec les programmes des read, la fenêtre avec le serveur, et la fenêtre avec le site.



DESCRIPTION :

La partie lecture des pins se trouve dans /home/raspberry/Desktop/'Test gpio'/New/read/ 
Vous y trouverez les programmes "readgpioXX.js" (XX étant le numéro du pin que l'on veut surveiller).
Tous les programmes de lecture sont exactement les mêmes, excepté leur numéro de pin à lire. Vous trouverez "readgpio12.js" commenté.

La partie écriture se trouve dans /home/raspberry/Desktop/'Test gpio'/New/write/
Vous y trouverez les programmes "writeYY_to_XX.js" (XX étant le numéro du pin sur lequel on veut écrire (est présent uniquement dans le titre pour se remémorer où le brancher), et YY étant le numéro du pin que l'on va mettre à 1)
Tous les programmes d'écriture sont exactement les mêmes, excepté leur numéro de pin à écrire. Vous trouverez "write7_to_12.js" commenté.

La partie serveur se trouve dans /home/raspberry/Desktop/'Test gpio'/New/backend/
Vous y trouverez le programme "server.js", qui sert à recevoir les infos des programmes de read, ainsi qu'à renvoyer les compteurs de passages au site. 
Vous trouverez "server.js" commenté.

La partie site se trouve dans /home/raspberry/Desktop/'Test gpio'/Yes-Tourniquet-main/
Vous y trouverez le back et le front de notre site.
Dans le back se trouve la configuration de notre site, qui est créé sur notre réseau local. C'est là que l'on va aussi gérer la liaison avec notre serveur intermédiaire.
Dans frontend/src/ nous trouverons le site, "App.js" et "Moove.js".
"App.js" est notre site, que nous créons, pour afficher ensuite le Moove dedans (nous avons gardé plus ou moins la disposition des programmes du groupe de projet Yes précédent).
C'est dans le "Moove.js" que nous allons récupérer les informations envoyées par le serveur intermédiaire pour les utiliser en fonction du nombre total de passages.
Une option demandée par les clients était qu'une animation ne s'affiche que s'il y a un nouveau passage, puis que ça se remette les animations des paliers franchis après un délai, ce qui a été réalisé. Les paliers sont appelés "box", et c'est ces box que nous faisons disparaître quand un nouveau passage est détecté.
L'affichages des animations est fait selon le nombre de passages. On va afficher telle ou telle animation en mettant une condition à l'affichage, de sorte à créer les paliers voulus par les clients. Le nombre des passages est centré selon les animations fournies par les clients
Vous trouverez "App.js" et "Moove.js" commentés.

Ces programmes ne sont pas une liste exhaustive des fichiers utiles du code, simplement les fichiers importants sur lesquels nous avons le plus travaillé. Nous avons aussi des programmes comme "App.css", "packages.json" (liste non exhaustive) qui sont utiles dans le code.
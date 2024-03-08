# Get the YouTube channel Feed RSS
Module pour récupérer le Feed RSS d'une chaîne YouTube nativement en Vanilla JS qui utilise l'API publique de YouTube.

Utilisation de corsproxy.io pour bypass les restrictions de Cross-origin resource sharing (CORS) en local.![1](https://raw.githubusercontent.com/thisiskeanyvy/youtube-feed-rss-vanilla-js/main/demo/1.png)

## ![2](https://raw.githubusercontent.com/thisiskeanyvy/youtube-feed-rss-vanilla-js/main/demo/2.png)YouTube channel XML

YouTube génère par défaut un Feed RSS pour chaque chaîne YouTube pour le récupérer il suffit de connaître l'endpoint et de remplacer le channel_id par votre channel_id que vous pouvez obtenir facilement avec ce site.

Trouver mon channel_id : https://commentpicker.com/youtube-channel-id.php

![4](https://raw.githubusercontent.com/thisiskeanyvy/youtube-feed-rss-vanilla-js/main/demo/4.png)

![5](https://raw.githubusercontent.com/thisiskeanyvy/youtube-feed-rss-vanilla-js/main/demo/5.png)

Ensuite il vous suffit de le remplacer dans le paramètre channel_id de l'uri de l'endpoint pour récupérer votre feed.

Endpoint : https://www.youtube.com/feeds/videos.xml?channel_id=UCsT0YIqwnpJCM-mx7-gSA4Q

![3](https://raw.githubusercontent.com/thisiskeanyvy/youtube-feed-rss-vanilla-js/main/demo/3.png)

## Intégration sur un site

Le fichier main.js contient l'appel à la méthode fetch qui récupère le contenu du Feed RSS pour pouvoir intégrer les données directement sur un site.

L'endpoint est appelé à travers corsproxy.io pour bypass les erreurs de CORS policy en local, il suffit donc de modifier le channel_id dans le fichier main.js pour récupérer les données.

```javascript
const url = 'https://corsproxy.io/?' + encodeURIComponent('https://www.youtube.com/feeds/videos.xml?channel_id=UCsT0YIqwnpJCM-mx7-gSA4Q');
```

Chaque paramètre du Feed RSS est récupéré à partir de son nom dans le fichier xml.

```javascript
xml.getElementsByTagName('entry')[i].getElementsByTagName('yt:videoId')[0].textContent; //id de vidéo
xml.getElementsByTagName('entry')[i].getElementsByTagName('title')[0].textContent; //titre de vidéo
xml.getElementsByTagName('author')[i].getElementsByTagName('name')[0].textContent; //auteur de la vidéo
xml.getElementsByTagName('entry')[i].getElementsByTagName('published')[0].textContent; //date de publication de la vidéo
xml.getElementsByTagName('entry')[i].getElementsByTagName('updated')[0].textContent; //date de modification de la vidéo
xml.getElementsByTagName('media:group')[i].getElementsByTagName('media:description')[0].textContent; //description
```

## Problèmes potentiels

Pour bypass les erreurs de CORS Policy le code utilise corsproxy.io or si celui-ci ne fonctionne pas alors l'appel ne peut pas être réalisé, il existe de nombreux autres Proxys CORS mais celui-ci est plutôt fiable en matière d'uptime.

Si uns des paramètres est renommé côté Feed RSS / API YouTube il faudra également renommer ce paramètre dans le fichier main.js pour que le code continue de fonctionner correctement.

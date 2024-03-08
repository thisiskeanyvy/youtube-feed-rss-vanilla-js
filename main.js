function get_feed() {
	const url = 'https://corsproxy.io/?' + encodeURIComponent('https://www.youtube.com/feeds/videos.xml?channel_id=UCsT0YIqwnpJCM-mx7-gSA4Q'); //changer le channel_id par le vôtre
	fetch(url)
	.then(response => response.text())
	.then(data => {
		const parser = new DOMParser();
		const xml = parser.parseFromString(data, "application/xml") //contenu du feed rss au format xml
		for(var i = 0; i < xml.getElementsByTagName('entry').length; i++) {
			var video_id = xml.getElementsByTagName('entry')[i].getElementsByTagName('yt:videoId')[0].textContent; //id de vidéo
			var video_title = xml.getElementsByTagName('entry')[i].getElementsByTagName('title')[0].textContent; //titre de vidéo
			var video_author = xml.getElementsByTagName('author')[i].getElementsByTagName('name')[0].textContent; //auteur de la vidéo
			var video_published = xml.getElementsByTagName('entry')[i].getElementsByTagName('published')[0].textContent; //date de publication de la vidéo
			var video_modified = xml.getElementsByTagName('entry')[i].getElementsByTagName('updated')[0].textContent; //date de modification de la vidéo
			var video_description = xml.getElementsByTagName('media:group')[i].getElementsByTagName('media:description')[0].textContent; //description de la vidéo
			document.querySelector("#data").innerHTML += 'Id de la vidéo : '+video_id+'<br>Titre de la vidéo : '+video_title+'<br>Autheur de la vidéo : '+video_author+'<br>Publication de la vidéo : '+video_published+'<br>Dernière modification de la vidéo : '+video_modified+'<br>description de la vidéo : '+video_description+'<br><br>--------------<br><br>';
		}
	})
	.catch(console.error);
}

get_feed();
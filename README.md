# BCGJ

The website is made of simple HTML and CSS. It has a bit of Javascript which are for opening/closing menus and fixing the background image. All the main content are in the top folder: index.html, scripts.js, styles.css.

The structure of the folders is quite simple: they’re based on URLs. Since this is a purely HTML site, the URL extension is defined by the name of each folder. Each folder has an index.html file which is the content of that URL.

The only folders that don’t follow this convention are images and lightslider/dist. Images is the folder that holds all the assets (like logos, pictures of the winners, etc) and lightslider is the slider being used in the gallery. Using the [instructions](http://sachinchoolur.github.io/lightslider/) provided by lightslider the gallery is defined to show a simple list of pictures. Every picture is being imported individually and manually (instead of, for example, writing a script to go through the pictures and add them automatically).

The 2017 folder is just last year’s content. The folders inside of it follow the above conventions.

Each folder may have needed extra styling, so another styles.css file can be found in the same folder that is being imported alongside the main one.

The website is being hosted on GitHub, which means every push to master updates the live site.

Honestly, there’s nothing else notable to add. The whole thing is as simple as it gets. ^_^

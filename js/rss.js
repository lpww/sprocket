google.load("feeds", "1");

function initialize() {
  var feed = new google.feeds.Feed("http://widget.websta.me/rss/n/sprocketblog");
  feed.setNumEntries(4);
  feed.load(function(result) {
    if (!result.error) {
      var container = document.getElementById("feed");
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        var cardDiv = document.createElement("cardDiv");
        var imageDiv = document.createElement("imageDiv");
        var textDiv = document.createElement("textDiv");
        var commentsAndLikesDiv = document.createElement("commentsAndLikesDiv");
        var data = entry.content.slice(entry.content.indexOf("@sprocketblog</a></p>") + 24, entry.content.indexOf("<img src=\"http://websta.me/img/tags_mono.png")).replace('width="306" height="306"', "").replace("_a.", "_n.");
        var rssData = data.split("</p>");
        imageDiv.innerHTML = rssData[0];
        textDiv.innerHTML = rssData[1];
        commentsAndLikesDiv.innerHTML = rssData[2].replace("http://websta.me/img/comments.png", "img/SVGic_comments.svg").replace("http://websta.me/img/likes.png", "img/SVGic_likes.svg");
        cardDiv.appendChild(imageDiv);
        cardDiv.appendChild(textDiv);
        cardDiv.appendChild(commentsAndLikesDiv);
        container.appendChild(cardDiv);
        cardDiv.id = "card";
      }
    }
  });
}
google.setOnLoadCallback(initialize);

//code below loads images, likes, comments, description into seperate divs.
        //var image = entry.content.slice(324, 475);
        //var imageDiv = document.createElement("imageDiv");
        //var descriptionDiv = document.createElement("descriptionDiv");
        //var miscDiv = document.createElement("miscDiv");
        //image = image.slice(0, image.indexOf(">") + 1).replace("_a.", "_n.");
        // imageDiv.innerHTML = image;
        //descriptionDiv.appendChild(document.createTextNode(entry.title));
        //var likes = entry.content.slice(entry.content.indexOf("<span"), entry.content.indexOf("</span"));
        //var comments = entry.content.slice(entry.content.indexOf('COMMENTS:">'));//, entry.content.indexOf("<p>"));
        //console.log(comments);
        //miscDiv.innerHTML = likes + " LIKES " + comments + " COMMENTS";
        //cardDiv.appendChild(imageDiv);
        //cardDiv.appendChild(descriptionDiv);
        //cardDiv.appendChild(miscDiv);
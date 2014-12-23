//formats the rss feed

google.load("feeds", "1");

function initialize() {
  var feed = new google.feeds.Feed("http://widget.websta.me/rss/n/sprocketblog");
  feed.setNumEntries(2);
  feed.load(function(result) {
    if (!result.error) {
      var container = document.getElementById("feed");
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
        console.log(entry);

        var cardDiv = document.createElement("div");
        cardDiv.className = "card";
        
        var imageDiv = document.createElement("div");
        imageDiv.className = "image";
        
        var textDiv = document.createElement("div");
        textDiv.className = "text";
        
        var commentsAndLikesDiv = document.createElement("div");
        commentsAndLikesDiv.className = "commentsAndLikes"
        
        var data = entry.content.slice(entry.content.indexOf("@sprocketblog</a></p>") + 24, entry.content.indexOf("<img src=\"http://websta.me/img/tags_mono.png")).replace('width="306" height="306"', "").replace("_a.", "_n.");
        var rssData = data.split("</p>");
        imageDiv.innerHTML = rssData[0];
        var arr = rssData[1].slice(rssData[1].indexOf("#"));
        arr = arr.slice(0, arr.length - 9);
        rssData[1] = rssData[1].replace(arr, '');
        textDiv.innerHTML = rssData[1] + "<br><br>" + arr;
        var x = rssData[2].replace("http://websta.me/img/comments.png", "img/SVGic_comments.svg").replace("http://websta.me/img/likes.png", "img/SVGic_likes.svg").replace("red", "").replace('alt="COMMENTS:">', 'alt="COMMENTS:"> ');
        var commentsBorder = document.createElement("div");
        commentsBorder.className = "iconBorder";
        commentsBorder.innerHTML = x.slice(x.indexOf("<img"), x.indexOf("</span>"));
        var likesBorder = document.createElement("div");
        likesBorder.className = "iconBorder";
        likesBorder.innerHTML = "<span>" + x.slice(x.indexOf('<img src="img/SVGic_comments.svg"')) + "</span>";
        
        cardDiv.appendChild(imageDiv);
        cardDiv.appendChild(textDiv);
        cardDiv.appendChild(commentsAndLikesDiv);
        commentsAndLikesDiv.appendChild(commentsBorder);
        commentsAndLikesDiv.appendChild(likesBorder);
        container.appendChild(cardDiv);
      }
      container.appendChild(document.getElementById('footerContainer'));
      $('#footerContainer').removeClass('invisible');
    }
  })
 loaded = true;
};

google.setOnLoadCallback(initialize);
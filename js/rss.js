google.load("feeds", "1");

var loaded = false;

function initialize() {
  //Load feed
  var feed = new google.feeds.Feed("http://widget.websta.me/rss/n/sprocketblog");
  
  //Set number of entries
  feed.setNumEntries(21);
  
  //Once loaded, run this function
  feed.load(function(result) {

    if (!result.error) {
      //Load container div
      var container = document.getElementById("feed");
      
      //Loop through all entries
      for (var i = 0; i < result.feed.entries.length; i++) {
        //Load entry
        var entry = result.feed.entries[i];
        
        //Create divs
        var cardDiv = document.createElement("div");
        cardDiv.className = "card";
        var imageDiv = document.createElement("div");
        imageDiv.className = "image";
        var textDiv = document.createElement("div");
        textDiv.className = "text";
        var commentsAndLikesDiv = document.createElement("div");
        commentsAndLikesDiv.className = "commentsAndLikes"
        
        //Format image
        var data = entry.content.slice(entry.content.indexOf("@sprocketblog</a></p>") + 24, entry.content.indexOf("<img src=\"http://websta.me/img/tags_mono.png")).replace('width="306" height="306"', "").replace("_a.", "_n.");
        var rssData = data.split("</p>");
        
        //Load image into image div
        imageDiv.innerHTML = rssData[0];
        
        //Format text
        var arr = rssData[1].slice(rssData[1].indexOf("#"));
        arr = arr.slice(0, arr.length - 9);
        rssData[1] = rssData[1].replace(arr, '');
        
        //Load text into text div
        textDiv.innerHTML = rssData[1] + "<br><br>" + arr;
        
        //Format comments
        var x = rssData[2].replace("http://websta.me/img/comments.png", "img/SVGic_comments.svg").replace("http://websta.me/img/likes.png", "img/SVGic_likes.svg").replace("red", "").replace('alt="COMMENTS:">', 'alt="COMMENTS:"> ');
        var commentsBorder = document.createElement("div");
        commentsBorder.className = "iconBorder";
        
        //Load comments into comments div
        commentsBorder.innerHTML = x.slice(x.indexOf("<img"), x.indexOf("</span>"));
        
        //Format likes
        var likesBorder = document.createElement("div");
        likesBorder.className = "iconBorder";
        
        //Load likes into likes div
        likesBorder.innerHTML = "<span>" + x.slice(x.indexOf('<img src="img/SVGic_comments.svg"')) + "</span>";
        
        //Append comments and likes into their container
        commentsAndLikesDiv.appendChild(commentsBorder);
        commentsAndLikesDiv.appendChild(likesBorder);
        
        //Append content to main card div
        cardDiv.appendChild(imageDiv);
        cardDiv.appendChild(textDiv);
        cardDiv.appendChild(commentsAndLikesDiv);
        container.appendChild(cardDiv);
      }

      //After entries are loaded, append footer underneath
      container.appendChild(document.getElementById('footerContainer'));
      $('#footerContainer').removeClass('invisible');
    }
  })
 loaded = true;
};

google.setOnLoadCallback(initialize);

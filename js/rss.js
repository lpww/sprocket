google.load("feeds", "1");

var loaded = false;

function initialize() {
  var feed = new google.feeds.Feed("http://widget.websta.me/rss/n/sprocketblog");
  feed.setNumEntries(21);
  feed.load(function(result) {
    if (!result.error) {
      var container = document.getElementById("feed");
      for (var i = 0; i < result.feed.entries.length; i++) {
        var entry = result.feed.entries[i];
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
        imageDiv.innerHTML = rssData[0] + rssData[1];
        // textDiv.innerHTML = rssData[1];
        commentsAndLikesDiv.innerHTML = rssData[2].replace("http://websta.me/img/comments.png", "img/SVGic_comments.svg").replace("http://websta.me/img/likes.png", "img/SVGic_likes.svg");
        cardDiv.appendChild(imageDiv);
        cardDiv.appendChild(textDiv);
        cardDiv.appendChild(commentsAndLikesDiv);
        container.appendChild(cardDiv);
      }
    }
  })
 loaded = true;
};

google.setOnLoadCallback(initialize);

disableScroll();

var keys = [37, 38, 39, 40];

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function keydown(e) {
  for (var i = keys.length; i--;) {
    if (e.keyCode === keys[i]) {
        preventDefault(e);
        return;
        }
    }
}

function wheel(e) {
  preventDefault(e);
}

function disableScroll() {
  if (window.addEventListener) {
      window.addEventListener('DOMMouseScroll', wheel, false);
  }
  window.onmousewheel = document.onmousewheel = wheel;
}

function enableScroll() {
    if (window.removeEventListener) {
        window.removeEventListener('DOMMouseScroll', wheel, false);
    }
    window.onmousewheel = document.onmousewheel = null;  
}

setInterval(function(){ if(loaded === true){enableScroll(); clearInterval(); }}, 100);
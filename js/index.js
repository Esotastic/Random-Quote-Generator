function getQuote() {
  
  var url =
    "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&";
  $.ajax({
    url: url,
    type: "GET",
    cache: false,
    success: function(data) {
      var post = data.shift(); 
      currentAuthor = post.title;
      currentQuote = post.content;
      $("#author").text(post.title);
      $("#quote-text").html(post.content);
    }
  });
}

//Tweets out current quote.//
function sendTweet() { 
window.open("https://twitter.com/intent/tweet?text=" + currentQuote + " " + currentAuthor);
  
}

var colorArr = ["#191919",
"#DFE2DB",
"#FFF056",
"#FFFFFF",
"#C63D0F",
"#3B3738",
"#FDF3E7",
"#7E8F7C",
"#005A31",
"#A8CD1B",
"#CBE32D",
"#F3FAB6",
"#558C89",
"#74AFAD",
"#D9853B",
"#ECECEA",
"#2B2B2B",
"#DE1B1B",
"#F6F6F6",
"#E9E581",
"#7D1935",
"#4A96AD",
"#F5F3EE",
"#FFFFFF"
];
$(document).ready(function() {

    $("#newquote").on("click", function(){
      var num = Math.random();
      var col = Math.floor(num*colorArr.length);
      $.getJSON("quotes.json", function(data) {
        num = Math.floor(num*data.length);
        $("#quote").html(JSON.stringify(data[num].quoteText));
        $("#author").html("- "+JSON.stringify(data[num].quoteAuthor));
          });
          $("body").css('background-color', colorArr[col]);
    });
  });


function tweetIt(){
  var phrase = document.getElementById("quote").textContent;
  var author = document.getElementById("author").textContent;
  var url = 'https://twitter.com/share?text='+phrase+" by "+author;
  window.open(url);
}

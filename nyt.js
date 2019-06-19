//initial variables for pulling from the api
$("<button>").appendTo("body").text("search")
const queryURL = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=d2cPepavANvAE81Lc28tk5FBv9eaRrbl";

$.ajax({
  url: queryURL,
  method: "GET"
})
  .then(function (response) {
    // var records=$(".js-records")

    for (let i = 0; i < 5; i++) {
      var div = $("<div>")
      div.append(response.results.title).addClass("css-results");


    }
    $("button").on("click", function () {
      $(".js-search").val().trim();
      
    });


    console.log(response);
    console.log(response.results);
  });
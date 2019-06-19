//initial variables for pulling from the api
const queryURL = "https://api.nytimes.com/svc/topstories/v2/science.json?api-key=d2cPepavANvAE81Lc28tk5FBv9eaRrbl";

$.ajax({
    url: queryURL,
    method: "GET"
  })
  .then(function(response){
      
      for (let i = 0; i < records; i++){
          var div = $("<div>")
          div.append(response.title);

        }
      
      

  console.log(response.title);
  console.log(response.url);
  });
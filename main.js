// on the form, I need to get the user's submission
    // event.preventDefault()
    // jquery to grab the field value
    // array to store the list of values
    // localstorage for that list of values
        // stringify the array
    // loop through the array and make buttons - reusable function
    // maybe some sort of data value to represent the city
    // put those buttons on the page
    // initial API call for the submission
// when I refresh the page
    // get everything from the local storage
    // put it on the page - reusable function
// Top block
    // refer to the bujumbura activity, see how the API call is structured.
    // get the info you need from the call based on the acceptance criteria
    // Show what you need to show on the screen (name, wind speed, temp, etc.)
    // Show appropriate icons
// Bottom part
    // Five day forecast, different API call https://openweathermap.org/forecast5
    // Get information for next 5 days
    // loop through the days
        // create element, put info in it, append it
// Reusable function to make both the top block and bottom block whenever you click button or search new place
    // do it on search load for the last searched location
// Click event for the left buttons
    // $(".buttonContainer").on("click", "button", function() {
    // })
    // <!DOCTYPE html>
    // <html lang="en">
    // <head>
    //     <meta charset="UTF-8">
    //     <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //     <title>Document</title>
    // </head>
    // <body>
    //     <!-- Header -->
    //     <!-- Search Box -->
    //     <!-- Empty element for button list -->
    //     <!-- Empty element for top part of right side -->
    //     <!-- Empty element fro bottom part of right side -->
    //     <script src="main.js"></script>
    // </body>
    // </html>
    var apiKey = "0e2be3afb35a7a6d862acc7f9115708e";
    $("#find-city").on("click", function(event) {       
    event.preventDefault();
       
   var citySearch = $("#city-input").val()
   console.log(citySearch)
   var queryURL= "https://api.openweathermap.org/data/2.5/weather?q=" + citySearch + "&appid=" + apiKey;

    
    
    $.ajax({
            url: queryURL,
            method: "GET"
          })
            // We store all of the retrieved data inside of an object called "response"
            .then(function(response) {
                    console.log(response)
             
      
              // Transfer content to HTML
              $(".city").html("<h1>" + response.name + " Weather Details</h1>");
              $(".wind").text("Wind Speed: " + response.wind.speed);
              $(".humidity").text("Humidity: " + response.main.humidity);
              
              // Convert the temp to fahrenheit
            //   var tempF = (response.main.temp - 273.15) * 1.80 + 32;
      
              // add temp content to html
              $(".temp").text("Temperature (K) " + response.main.temp);
              
      
              // Log the data in the console as well
              console.log("Wind Speed: " + response.wind.speed);
              console.log("Humidity: " + response.main.humidity);
              console.log("Temperature (F): " + tempF);
            }); });
    








$(document).ready(function() {
    $("#search-button").on("click", function(){
        var city = $("#search-value").val();
        $("#search-value").val("");
        searchWeather(city);
    });

function searchWeather(city) {
    $.ajax({
      type: "GET", 
      url: "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=ae0e9dd8e81cdd32913bb5d61689f375&units=imperial",
      dataType: "json",
      success: function(response){
          console.log(response);
        $("#today").empty();
        var card = $("<div>").addClass("card");
        var cardBody = $("<div>").addClass("card-body");
        var wind = $("<p>").addClass("card-text").text("windspeed:" + response.wind.speed);
        var temp = $("<p>").addClass("card-text").text("temperature:" +response.main.temp);
        var humid = $("<p>").addClass("card-text").text("humidity:" + response.main.humidity);
        var icon 
        var titleDate

        cardBody.append(temp, humid, wind); //put icon and titleDate
        card.append(cardBody);
        $("#today").append(card);
        getForcast(city);
        //get uv index would go here

    }      
    })
}
 function getForcast (city) {
    $.ajax({
        type: "GET", 
        url: "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=ae0e9dd8e81cdd32913bb5d61689f375&units=imperial",
        dataType: "json",
        success: function(response){
            console.log(response);

}})}

})















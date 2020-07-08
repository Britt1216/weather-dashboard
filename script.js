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
    $("#forecast").html("<h4 class=\"mt-3\">5-Day Forecast:</h4>").append("<div class=\"row\">");            
            for (i=0; i < response.list.length; i++) {
                if (response.list[i].dt_txt.indexOf("15:00:00")!== -1) {
                    var col = $("<div>").addClass("col-md-2");
                    var card = $("<div>").addClass("card bg-primary text-white");
                    var body = $("<div>").addClass("card-body p-2");
                    var temp = $("<p>").addClass("card-text").text("temp:" + response.list[i].main.temp_max);
                    var humid = $("<p>").addClass("card-text").text("humidity:" + response.list[i].main.humidity);
                    //if want icon and titleDate they would go here
                    col.append(card.append(body.append(temp, humid)));
                    $("#forecast .row").append(col);
                }
            }
}})}

})















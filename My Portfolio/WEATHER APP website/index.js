var apiKey = "aec2d78488bb3c8559fb9fb23e3836d5"
//var apiKey = "eb383da36e425d5a96eeelf2832ef014"
//https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid= + apiKey

$(document).ready(function() {
  $('#search_again').hide()
  $('#imgi').hide()
  $('#weather_Bar').on('submit', function(event) {
  $("html").css("background-image", "url(https://images.unsplash.com/photo-1555693092-e4af9cf60b38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)")

    event.preventDefault()
    console.log("A Submission Occurred!")
    var userInput = $('input').val()
    $.get('https://api.openweathermap.org/data/2.5/weather?units=metric&q=' + userInput + '&appid=' + apiKey,function(responseObject){
      newFuntion(responseObject)
      console.log(responseObject)
      changeBackground(responseObject.weather[0].description)


    })

  })

  function newFuntion(responseObject){

     $('.newappends').append("Here is the weather in " + responseObject.name + ",")
     $('.newappends').append(responseObject.sys.country + "   ")

     $('.newappends').append("It looks like we're going to have " + responseObject.weather[0].description + "   ")

     $('.newappends').append("Today's Temperature is " + responseObject.main.temp + "   ")
     $('.newappends').append("High of " + responseObject.main.temp_max + "    ")

     $('.newappends').append("Low of "+ responseObject.main.temp_min + "   ")

     $('.newappends').append("With a humidity of " + responseObject.main.humidity)
     $('#search_again').show()
     $('.weather_Bar').hide()
      var iconcode = responseObject.weather[0].icon;
     //$('#imgi').src = ("http://openweathermap.org/img/wn/" + responseObject.weather[0].icon + "@2x.png")
     var iconurl = "http://openweathermap.org/img/wn/" + iconcode + "@2x.png";
     console.log("http://openweathermap.org/img/wn/" + iconcode + "@2x.png")
          $('#imgi').show()
           $('#imgi').attr('src', iconurl);
      console.log(imgi.src)
  }
  $('#search_again').on('click',function(){
    $('#search_again').hide()
    $('.weather_Bar').show()
    $('.newappends').html(' ')
    $('input').val('')
      $('#imgi').hide()
  $("html").css("background-image", "url(https://images.unsplash.com/photo-1555693092-e4af9cf60b38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60)")
  })

function changeBackground(description){
  var backgroundImage
  console.log(description)
  switch (description) {
    case "thunderstorm with light rain":
    case "thunderstorm with rain":
    case "thunderstorm with heavy rain":
    case "light thunderstorm":
    case "thunderstorm":
    case "heavy thunderstorm":
    case "ragged thunderstorm":
    case "thunderstorm with light drizzle":
    case "thunderstorm with drizzle":
    case "thunderstorm with heavy drizzle":
      backgroundImage = "https://images.unsplash.com/photo-1472145246862-b24cf25c4a36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      break;
    case "light intensity drizzle":
    case "drizzle":
    case "heavy intensity drizzle":
    case "light intensity drizzle rain":
    case "drizzle rain":
    case "heavy intensity drizzle rain":
    case "shower rain and drizzle":
    case "heavy shower rain and drizzle":
    case "shower drizzle":
      backgroundImage = "https://i.ytimg.com/vi/LbAigABOm_E/maxresdefault.jpg"
      break;
    case "light rain":
    case "moderate rain":
    case "heavy intensity rain":
    case "very heavy rain":
    case "extreme rain":
    case "freezing rain":
    case "light intensity shower rain":
    case "shower rain":
    case "heavy intensity shower rain":
    case "ragged shower rain":
        backgroundImage = "https://images.unsplash.com/photo-1433863448220-78aaa064ff47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80"
      break;
    case "light snow":
    case "Snow":
    case "Heavy snow":
    case "Sleet":
    case "Light shower sleet":
    case "Shower sleet":
    case "Light rain and snow":
    case "Rain and snow":
    case "Light shower snow":
    case "Shower snow":
    case "Heavy shower snow":
      backgroundImage = "https://images.unsplash.com/photo-1511131341194-24e2eeeebb09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
      break;
    case "mist":
      backgroundImage = "https://images.unsplash.com/photo-1485236715568-ddc5ee6ca227?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      break;
    case "Smoke":
      backgroundImage = "https://images.unsplash.com/photo-1503217195339-397eb18024e1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      break;
    case "haze":
      backgroundImage = "https://images.unsplash.com/uploads/1412612985680bf8dc817/c3aacb90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      break;
    case "sand/ dust whirls":
    case "sand":
    case "dust":
      backgroundImage = "https://images.unsplash.com/photo-1489493887464-892be6d1daae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      break;
    case "fog":
      backgroundImage = "https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      break;
    case "volcanic ash":
      backgroundImage = "https://images.unsplash.com/photo-1475776408506-9a5371e7a068?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      break;
    case "squalls":
      backgroundImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8l72dplTW1orvSlbvdO3MMYuOv-q0ZXyEORJIlKr14q1V0zPP"
      break;
    case "tornado":
      backgroundImage = "https://images.unsplash.com/flagged/photo-1552483570-019b7f8119b2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      break;
    case "clear sky":
      backgroundImage = "https://images.unsplash.com/photo-1438129460879-8f5868d4a802?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
      break;
    case "few clouds":
    case "scattered clouds":
    case "broken clouds":
    case "overcast clouds":
      backgroundImage = "https://images.unsplash.com/photo-1443694910004-3567042689f5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
      break;

    default:
    backgroundImage = "https://images.unsplash.com/photo-1555693092-e4af9cf60b38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

  }
$("html").css("background-image", "url(" + backgroundImage + ")")
}
})

  //http://openweathermap.org/img/wn/10d@2x.png
//  document.getElementById("img").src =
//'https://media.geeksforgeeks.org/wp-content/uploads/20190529122826/bs11.png';

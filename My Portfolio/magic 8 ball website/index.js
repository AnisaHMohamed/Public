$(document).ready(function() {
  $('#fortune_again').hide()
  $("html").css("background-image", "url(https://images.unsplash.com/photo-1477093782505-e10aaeb27c6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)")


  $('#magicButton').on('submit', function(event) {
   event.preventDefault()
   console.log("A Submission Occurred!")
   magicBall()
   $('#magicButton').hide()
   $('#fortune_again').show()
   $("html").css("background-image", "url(http://ixd0339.firebird.sheridanc.on.ca/wordpress/wp-content/uploads/2018/03/magic8-300x300.png)")
   $('.askQuestion').hide()
   $("header").css("color", "red");
   $(".subContact").css("color", "grey");
   $('.secondTitle').html(' The Magic 8 Ball Predicts:')
   $('.introTitle').hide()




})
 $('#fortune_again').on('click',function(){
   $('#fortune_again').hide()
   $('.newappends').html(' ')
   $('#magicButton').show()
   $("html").css("background-image", "url(https://images.unsplash.com/photo-1477093782505-e10aaeb27c6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80)")
   $("header").css("color", "white");
   $(".subContact").css("color", "white");
   $('.secondTitle').html('')
   $('.introTitle').show()




 })





let eightBall = '';
const magicBall = ()=>{
  const randomNumber = Math.floor(Math.random()*20);
  switch(randomNumber){
    case 0:
      eightBall = 'As I see it, yes';
      console.log(eightBall);
      $('.newappends').append(eightBall);
      $(".newappends").css("color", "green");

      break;
    case 1:
      eightBall = ' Ask again later.';
      console.log(eightBall);
      $('.newappends').append(eightBall);
      $(".newappends").css("color", "orange");

      break;
    case 2:
      eightBall =  'Better not tell you now';
      $('.newappends').append(eightBall);
      console.log(eightBall);
      $(".newappends").css("color", "orange");

      break;
    case 3:
      eightBall = 'Cannot predict now';
      $('.newappends').append(eightBall);
      console.log(eightBall);
      $(".newappends").css("color", "orange");

      break;
    case 4:
      eightBall = ' Concentrate and ask again';
      $('.newappends').append(eightBall);
      console.log(eightBall);
      $(".newappends").css("color", "orange");

      break;
    case 5:
      eightBall = 'Don’t count on it';
      $('.newappends').append(eightBall);
      console.log(eightBall);
      $(".newappends").css("color", "red");

      break;
    case 6:
      eightBall = 'It is certain.';
      $('.newappends').append(eightBall);
      console.log(eightBall);
      $(".newappends").css("color", "green");

      break;
    case 7:
      eightBall = 'It is decidedly so';
      $('.newappends').append(eightBall);
      console.log(eightBall);
      $(".newappends").css("color", "green");

      break;

      case 8:
        eightBall = 'Most likely';
        $('.newappends').append(eightBall);
        console.log(eightBall);
        $(".newappends").css("color", "orange");

        break;
        case 9:
          eightBall = 'My reply is no';
          $('.newappends').append(eightBall);
          console.log(eightBall);
          $(".newappends").css("color", "red");

          break;
          case 10:
            eightBall = 'My sources say no';
            $('.newappends').append(eightBall);
            console.log(eightBall);
            $(".newappends").css("color", "red");

            break;
            case 11:
              eightBall = 'Outlook not so good';
              $('.newappends').append(eightBall);
              console.log(eightBall);
              $(".newappends").css("color", "red");

              break;
              case 12:
                eightBall = 'Outlook good.';
                $('.newappends').append(eightBall);
                console.log(eightBall);
                $(".newappends").css("color", "green");

                break;
                case 13:
                  eightBall = 'Reply hazy, try again';
                  $('.newappends').append(eightBall);
                  console.log(eightBall);
                  $(".newappends").css("color", "orange");

                  break;
                  case 14:
                    eightBall = 'Signs point to yes';
                    $('.newappends').append(eightBall);
                    console.log(eightBall);
                    $(".newappends").css("color", "green");

                    break;
                    case 15:
                      eightBall = 'Very doubtful';
                      $('.newappends').append(eightBall);
                      console.log(eightBall);
                      $(".newappends").css("color", "red");

                      break;
                      case 16:
                        eightBall = 'Without a doubt';
                        $('.newappends').append(eightBall);
                        console.log(eightBall);
                        $(".newappends").css("color", "green");

                        break;
                        case 17:
                          eightBall = 'Yes';
                          $('.newappends').append(eightBall);
                          console.log(eightBall);
                          $(".newappends").css("color", "green");

                          break;
                          case 18:
                            eightBall = 'Yes – definitely';
                            $('.newappends').append(eightBall);
                            console.log(eightBall);
                            $(".newappends").css("color", "green");

                            break;
                            case 19:
                              eightBall = 'You may rely on it';
                              $('.newappends').append(eightBall);
                              console.log(eightBall);
                              $(".newappends").css("color", "green");

                              break;
  }};
console.log(eightBall)

})

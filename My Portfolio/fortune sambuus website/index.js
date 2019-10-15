$(document).ready(function() {
  $('#fortune_again').hide()
  $("html").css("background-image", "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgU_Vv_DG53kvnY8A2rQaTiYsFLeOXEgxGvpcoOl8JQ_tAURIUwQ)")


  $('#magicButton').on('submit', function(event) {
   event.preventDefault()
   console.log("A Submission Occurred!")
   getRandomFortune()
   $('#magicButton').hide()
   $('#fortune_again').show()
   $("html").css("background-image", "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoFFnjD70Gdkrv7t4Oj0pWuvLcxUxB_PVDaMTJX3aNZ-ejL8o7)")
   $('.askQuestion').hide()
   $("header").css("color", "black");
   $(".subContact").css("color", "white");

})
 $('#fortune_again').on('click',function(){
   $('#fortune_again').hide()
   $('.newappends').html(' ')
   $('#magicButton').show()
   $("html").css("background-image", "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgU_Vv_DG53kvnY8A2rQaTiYsFLeOXEgxGvpcoOl8JQ_tAURIUwQ)")
   $("header").css("color", "black");
   $(".subContact").css("color", "red");



 })




 const randomNumber = Math.floor(Math.random()*8);
 const sambuusFortunes = ["A beautiful, smart, and loving person will be coming into your life.","A dubious friend may be an enemy in camouflage.","A faithful friend is a strong defense.", "A feather in the hand is better than a bird in the air.","A fresh start will put you on your way.","A friend asks only for your time not your money.","A friend is a present you give yourself.","A gambler not only will lose what he has, but also will lose what he doesn’t have.","A golden egg of opportunity falls into your lap this month.","A good friendship is often more important than a passionate romance.","A good time to finish up old tasks.","A hunch is creativity trying to tell you something.","A lifetime friend shall soon be made.","A lifetime of happiness lies ahead of you.","Advice, when most needed, is least heeded.","All the effort you are making will ultimately pay off.","Allow compassion to guide your decisions.","An acquaintance of the past will affect you in the near future.","Any decision you have to make tomorrow is a good decision.","At the touch of love, everyone becomes a poet.","Be careful or you could fall for some tricks today.","Beauty in its various forms appeals to you.","Because you demand more from yourself, others respect you deeply.","Believe in yourself and others will too.","Better ask twice than lose yourself once.","Bide your time, for success is near.","Carve your name on your heart and not on marble.","Change is happening in your life, so go with the flow!","Congratulations! You are on your way.","Could I get some directions to your heart?","Courtesy begins in the home.","Courtesy is contagious.","Emulate what you admire in your parents. ","Every flower blooms in its own sweet time.","Everyday in your life is a special occasion.","Everywhere you choose to go, friendly faces will greet you.","Failure is the chance to do better next time.","Fear and desire – two sides of the same coin.","Fearless courage is the foundation of victory.","Feeding a cow with roses does not get extra appreciation.","First think of what you want to do; then do what you have to do.","For hate is never conquered by hate. Hate is conquered by love.","Fortune Not Found: Abort, Retry, Ignore?","From listening comes wisdom and from speaking repentance.","Help! I’m being held prisoner in a chinese bakery!","How you look depends on where you go.","I learn by going where I have to go.","If you’re feeling down, try throwing yourself into your work.","Imagination rules the world.","In order to take, one must first give.","It is better to be an optimist and proven a fool than to be a pessimist and be proven right.","Love truth, but pardon error.","Man is born to live and not prepared to live.","Miles are covered one step at a time.","Pennies from heaven find their way to your doorstep this year!","Say hello to others. You will have a happier day.","Self-knowledge is a life long process.","Share your joys and sorrows with your family.","Sift through your past to get a better idea of the present.","Success is failure turned inside out.","The night life is for you.","The one that recognizes the illusion does not act as if it is real.","Welcome” is a powerful word.","Well done is better than well said.","What’s yours in mine, and what’s mine is mine.","When more become too much. It’s same as being not enough.","Wish you happiness.","With age comes wisdom.","You always bring others happiness.","Your reputation is your wealth.","Your work interests can capture the highest status or prestige."]
let fortune = '';
const getRandomFortune = ()=>{
const randomNumber = Math.floor(Math.random()*8);
 fortune = sambuusFortunes[randomNumber];
 $('.newappends').append(fortune);

}

console.log(fortune)

})

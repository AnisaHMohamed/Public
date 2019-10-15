$(document).ready(function() {
  $("html").css("background-image", "url(https://images.unsplash.com/photo-1484901501439-0cb16843a1f8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9)")
  $('#anotherQuoteButton').hide()
  $('.newappends').hide()

  $('#womenButton').on('submit', function(event) {
    event.preventDefault()
   console.log("A Submission Occurred!")
   getQuote('women');
   $('#randomButton').hide();
   $('#womenButton').hide();
   $('#menButton').hide();
   $('.newappends').show()
   $('#anotherQuoteButton').show();
   $('.info').hide();

})
$('#menButton').on('submit', function(event) {
 event.preventDefault();
 console.log("A Submission Occurred!");
 getQuote('men');
 $('#randomButton').hide();
 $('#womenButton').hide();
 $('#menButton').hide();
 $('.newappends').show()
 $('#anotherQuoteButton').show();
 $('.info').hide();

})
$('#randomButton').on('submit', function(event) {
 event.preventDefault()
 console.log("A Submission Occurred!")
 getQuote('random')
 $('#randomButton').hide()
 $('#womenButton').hide()
 $('#menButton').hide()
 $('.newappends').show()
 $('#anotherQuoteButton').show()
 $('.info').hide();

})

 $('#anotherQuoteButton').on('click',function(){
   $('#anotherQuoteButton').hide()
   $('.newappends').html(' ')
   $('#womenButton').show()
   $('#menButton').show()
   $('#randomButton').show()
   $('.newappends').hide()
   $('.info').show();


 })

 const womenQuotes = [["When we do the best we can, we never know what miracle is wrought in our life, or in the life of another","-Helen Keller"],["Any woman who understands the problems of running a home will be nearer to understanding the problems of running a country.","-Margaret Thatcher"],["If you obey all the rules, you miss all the fun.","-Katharine Hepburn"],["Life is not measured by the number of breaths we take, but by the moments that take our breath away.", "-Maya Angelou"],["Being an intellectual creates a lot of questions and no answers. You can fill your life up with ideas and still go home lonely. All you really have that really matters are feelings. That’s what music is to me. ","-Janis Joplin"],["Life shrinks or expands in proportion to one’s courage.","-Anais Nin"],["If you don’t like being a doormat then get off the floor.","-Al Anon"],["Whatever you do, be different – that was the advice my mother gave me, and I can’t think of better advice for an entrepreneur. If you’re different, you will stand out.","-Anita Roddick"],["A lot of people are afraid to say what they want. That’s why they don’t get what they want.","-Madonna"],["A woman is like a tea bag – you never know how strong she is until she gets in hot water.","-Eleanor Roosevelt"],["I know God will not give me anything I can’t handle. I just wish that He didn’t trust me so much.","-Mother Teresa"],["Destiny is a name often given in retrospect to choices that had dramatic consequences.","-J. K. Rowling"],["I’ve come to believe that each of us has a personal calling that’s as unique as a fingerprint – and that the best way to succeed is to discover what you love and then find a way to offer it to others in the form of service, working hard, and also allowing the energy of the universe to lead you.","-Oprah Winfrey"],["A man’s got to do what a man’s got to do. A woman must do what he can’t.","-Rhonda Hansome"],["Woman must not accept; she must challenge.She must not be awed by that which has been built up around her; she must reverence that woman in her which struggles for expression.","-Margaret Sanger"],["If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.","-Oprah Winfrey"]]
 const menQuotes = [["Imagination is more important than knowledge.","-Albert Einstein"],["It does not matter how slowly you go as long as you do not stop.","-Confucius"],["All our dreams can come true, if we have the courage to pursue them.","Walt Disney"],["Difficulties in your life do not come to destroy you but to help you realise your hidden potential and power. Let difficulties know that you too are difficult.","-Avul Pacir Zainulabidin Abdul Kalam"],["There is nothing more powerful in the world than the idea that came in time.","-Victor Hugo"],["We are what we repeatedly do. Excellence, then, is not an act, but a habit.","-Aristotle"],["Begin to be now what you will be hereafter.","-William James"],["You can’t give up! When you give up, you're like everybody else!","-Chris Evert"],["He can who thinks he can, and he can't who thinks he can't. This is an inexorable, indisputable law.","-Pablo Picasso"],["I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. ","-Nelson Mandela"],["Victory is not always winning the battle...but rising every time you fall.","-Napoleon Bonaparte"],["Reality is created by the mind, we can change our reality by changing our mind.","-Plato"],["It is not in the stars to hold our destiny but in ourselves.","-William Shakespeare"],["Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.","-Mark Twain"],["The limits of the possible can only be defined by going beyond them into the impossible.","-Arthur C. Clarke"],["One is not born a genius, one becomes a genius","-Simone de Beauvoir"]]
 const randomQuotes =[["When we do the best we can, we never know what miracle is wrought in our life, or in the life of another","-Helen Keller"],["Any woman who understands the problems of running a home will be nearer to understanding the problems of running a country.","-Margaret Thatcher"],["If you obey all the rules, you miss all the fun.","-Katharine Hepburn"],["Life is not measured by the number of breaths we take, but by the moments that take our breath away.", "-Maya Angelou"],["Being an intellectual creates a lot of questions and no answers. You can fill your life up with ideas and still go home lonely. All you really have that really matters are feelings. That’s what music is to me. ","-Janis Joplin"],["Life shrinks or expands in proportion to one’s courage.","-Anais Nin"],["If you don’t like being a doormat then get off the floor.","-Al Anon"],["Whatever you do, be different – that was the advice my mother gave me, and I can’t think of better advice for an entrepreneur. If you’re different, you will stand out.","-Anita Roddick"],["A lot of people are afraid to say what they want. That’s why they don’t get what they want.","-Madonna"],["A woman is like a tea bag – you never know how strong she is until she gets in hot water.","-Eleanor Roosevelt"],["I know God will not give me anything I can’t handle. I just wish that He didn’t trust me so much.","-Mother Teresa"],["Destiny is a name often given in retrospect to choices that had dramatic consequences.","-J. K. Rowling"],["I’ve come to believe that each of us has a personal calling that’s as unique as a fingerprint – and that the best way to succeed is to discover what you love and then find a way to offer it to others in the form of service, working hard, and also allowing the energy of the universe to lead you.","-Oprah Winfrey"],["A man’s got to do what a man’s got to do. A woman must do what he can’t.","-Rhonda Hansome"],["Woman must not accept; she must challenge.She must not be awed by that which has been built up around her; she must reverence that woman in her which struggles for expression.","-Margaret Sanger"],["If you look at what you have in life, you’ll always have more. If you look at what you don’t have in life, you’ll never have enough.","-Oprah Winfrey"],["Imagination is more important than knowledge.","-Albert Einstein"],["It does not matter how slowly you go as long as you do not stop.","-Confucius"],["All our dreams can come true, if we have the courage to pursue them.","Walt Disney"],["Difficulties in your life do not come to destroy you but to help you realise your hidden potential and power. Let difficulties know that you too are difficult.","-Avul Pacir Zainulabidin Abdul Kalam"],["There is nothing more powerful in the world than the idea that came in time.","-Victor Hugo"],["We are what we repeatedly do. Excellence, then, is not an act, but a habit.","-Aristotle"],["Begin to be now what you will be hereafter.","-William James"],["You can’t give up! When you give up, you're like everybody else!","-Chris Evert"],["He can who thinks he can, and he can't who thinks he can't. This is an inexorable, indisputable law.","-Pablo Picasso"],["I learned that courage was not the absence of fear, but the triumph over it. The brave man is not he who does not feel afraid, but he who conquers that fear. ","-Nelson Mandela"],["Victory is not always winning the battle...but rising every time you fall.","-Napoleon Bonaparte"],["Reality is created by the mind, we can change our reality by changing our mind.","-Plato"],["It is not in the stars to hold our destiny but in ourselves.","-William Shakespeare"],["Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover.","-Mark Twain"],["The limits of the possible can only be defined by going beyond them into the impossible.","-Arthur C. Clarke"],["One is not born a genius, one becomes a genius","-Simone de Beauvoir"]]
 let quote = '';
 const getQuote = (type) =>{
   const randomNumber = Math.floor(Math.random()*30);
 switch (type) {
   case 'women':
     quote = womenQuotes[Math.floor(randomNumber/2)];
      $('.newappends').append(quote);
     break;
     case 'men':
       quote = menQuotes[Math.floor(randomNumber/2)];
        $('.newappends').append(quote);
       break;
   default:
       quote = randomQuotes[randomNumber];
        $('.newappends').append(quote);
 }};

// getQuote();

console.log(quote);

})

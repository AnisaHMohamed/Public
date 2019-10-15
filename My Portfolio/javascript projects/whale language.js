// Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.
//
// There are a few simple rules for translating text to whale language:
//
// There are no consonants. Only vowels excluding “y”.
// The u‘s and e‘s are extra long, so we must double them in our program.
//


const input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
const resultsArray = [];
 for (let i =0; i<input.length; i++){
   for (let j = 0; j < vowels.length; j++){
     if (input[i] === vowels[j]){
       if ((input[i]==='e')||(input[i]==='u')){
          resultsArray.push(input[i]);

       }
       resultsArray.push(input[i]);
      // console.log(input[i] + vowels[j]);

     }
   }


  }
console.log(resultsArray.join('').toUpperCase());
//}

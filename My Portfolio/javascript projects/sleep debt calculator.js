const getSleepHours = day =>{
  day = day.toLowerCase()
  switch(day){
    case 'monday':
      return 6;
      break;
    case 'tuesday':
      return 7;
      break;
    case 'wednesday':
      return 5;
      break;
    case 'thursday':
      return 5;
      break;
    case 'friday':
      return 6;
      break;
    case 'saturday':
     return 9;
     break;
    case 'sunday':
      return 8;
      break;
    default:
      console.log('enter valid day');
}};
const getActualSleepHours = () =>{
return  getSleepHours('monday')+
  getSleepHours('tuesday')+
  getSleepHours('wednesday')+
  getSleepHours('thursday')+
  getSleepHours('friday')+
  getSleepHours('saturday')+
  getSleepHours('sunday')

};
const getIdealSleepHours = () =>{
  const idealHours = 8;
  return idealHours*7;
};
const calculateSleepDebt = ()=>{
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours){

    console.log('Congrats!You\'ve been getting ideal amount of sleep' )
  }
  else if(idealSleepHours>actualSleepHours){
    console.log('You\'ve got '+(idealSleepHours-actualSleepHours)+ ' hours of sleep less than you should have! You haven\'t been getting enough sleep! Get some rest!')
  }
  else{
    console.log('You\'ve got '+(actualSleepHours-idealSleepHours)+ ' more hours of sleep than you should have! You\'ve been getting more than the ideal amount of sleep!')
  }
};


// console.log(getSleepHours('TuesDay'));
// console.log(getActualSleepHours());
// console.log(getIdealSleepHours());
calculateSleepDebt();

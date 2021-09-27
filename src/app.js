//Progression 1 - create a Manager array and return it
let managerName = "Alex Ferguson";
let managerAge = 78;
let currentTeam = "Manchester FC";
let trophiesWon = 27;

//Write your function here
let createManager = (managerName, managerAge, currentTeam, trophiesWon) => {
  let managers = [managerName, managerAge, currentTeam, trophiesWon];
  return managers;
}
// Don't edit the following code
try {
  var manager = createManager(
    managerName,
    managerAge,
    currentTeam,
    trophiesWon
  );
} catch (e) {
  // do nothing - expected error
}

//Progression 2 - create a formation object and return it
var formation = [4, 4, 3];

//write your function here
let createFormation = (formation) => {
  if(formation.length == 0){
    return null;
  }
  else{
    return { defender: formation[0], midfield: formation[1], forward: formation[2] };
  }
}
// Dont edit the following code

try {
  var formationObject = createFormation(formation);
} catch (e) {
  //do nothing
}

//Progression 3 - Filter players that debuted in ___ year
let filterByDebut = (year) => {
  let array = [];
  for(var i = 0; i < players.length; i++){
    if(players[i].debuts == year){
      array.push(players[i]);
    }
  }
  return array;
}

//Progression 4 - Filter players that play at the position _______
let filterByPosition = (position) => {
  let array1 = [];
  for(var i=0; i<players.length;i++)
  {
    if(players[i].position == position){
      array1.push(players[i]);
    }
  }
  return array1;
}
//Progression 5 - Filter players that have won ______ award
let filterByAward = (awardName) => {
  let array2 = [];
  for(let i=0; i < players.length; i++)
  {
    for(let j=0; j < players[i].awards.length; j++) {
      if(players[i].awards[j].name == awardName) {
        array2.push(players[i]);
      }
    }
  }
  return array2;
}
//Progression 6 - Filter players that won ______ award ____ times
let filterByAwardxTimes = (awardName, noOfTimes) => {
  let array3 = [];
  for(let i=0; i < players.length; i++){
    let count = 0;
     for(let j=0; j < players[i].awards.length; j++) {
       if(players[i].awards[j].name == awardName) {
         count++;
       }
     }
     if(count == noOfTimes)
      array3.push(players[i]);
  }
  return array3;
}
//Progression 7 - Filter players that won ______ award and belong to ______ country
let filterByAwardxCountry = (awardName, country) => {
  let array4 = [];
    for(let i = 0; i < players.length; i++)
    {
      for(let j = 0; j < players[i].awards.length; j++) {
        if(players[i].awards[j].name == awardName && players[i].country == country) {
          array4.push(players[i]);
        }
      }
    }
    return array4;
}
//Progression 8 - Filter players that won atleast ______ awards, belong to ______ team and are younger than ____
let filterByNoOfAwardsxTeamxAge = (noOfAwards, team, age) => {
  var array5 = [];
  for(var i = 0; i < players.length; i++) {
    if(players[i].awards.length >= noOfAwards && players[i].team == team && players[i].age < age) {
      array5.push(players[i]);
    }
  }
  return array5;
}
//Progression 9 - Sort players in descending order of their age

//Progression 10 - Sort players beloging to _____ team in descending order of awards won

//Challenge 1 - Sort players that have won _______ award _____ times and belong to _______ country in alphabetical order of their names

//Challenge 2 - Sort players that are older than _____ years in alphabetical order
//Sort the awards won by them in reverse chronological order

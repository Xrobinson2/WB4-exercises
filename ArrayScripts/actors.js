"use strict"




let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
    {
        memID: 203,
        name: "BOBbie X",
        films: ["Walking Boots", "Hiking Boots",
        "Cowboy Boots"]
        },
    
   ];



// Who is the Academy Member whose ID is 187?

// Who has have been in at least 3 films?

// Who has a name that starts with "Bob"?

// HARDER: Which Academy Members have been in a film

// that starts with "A"

function getName( ) {
    let numItems = academyMembers.length 
    let matching = [] // empty array

              // go over the length
    for(let i = 0; i < numItems; i++ ) {
        // while you loop, check to see if
        if(academyMembers[i].memID === 187){
           matching.push(academyMembers[i].name)
           
        }
         
    }

    return matching.toString()
}

console.log(getName()) 

function getFilms() {
    let numFilms = academyMembers.length;
    let matching = [];

    for( let i = 0; i < numFilms; i++ ){
        if(academyMembers[i].films.length >= 3  ){
             matching.push(academyMembers[i].name)
        }
    }
      return matching
}
console.log("These people have atleast 3 films: " + getFilms())

function getNameStartsWithBob (){
    let lengthOfMemberArray = academyMembers.length;
    let matching = [];

    for( let i = 0; i < lengthOfMemberArray; i++ ){
        if(academyMembers[i].name.length >= 3 && academyMembers[i].name[0].toLowerCase() === "b" && academyMembers[i].name[1].toLowerCase() === "o" && academyMembers[i].name[2].toLowerCase() === "b"){
            matching.push(academyMembers[i].name)
        }
    };
return matching
}
console.log("Name:" + getNameStartsWithBob())



/*// Who is the Academy Member whose ID is 187?
function whoseIdAtAcademyIs() {
    let whoseId = [];
    for (let i = 0; i < academyMembers.length; i++) {
    if (academyMembers[i].memID === 187) {
    whoseId.push(academyMembers[i].name)
    }
    }
    return whoseId;
    }
    console.log("Who is the Academy Member whose ID is 187? \n" + whoseIdAtAcademyIs()) */
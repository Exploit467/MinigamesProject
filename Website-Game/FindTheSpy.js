//Script for FindTheSpy Minigame
//global variables
var game_len = "german";

const getLocation = async () => {
    const results = await fetch("./FindTheSpy.json");
    const data = await results.json();
    if(game_len == "german"){
        const roles = data.german;
        for(i=0; i<=roles.length; i++){
            if(roles[i].location == "Krankenhaus"){
                console.log(roles[i]);
                return roles[i];
            }
        }
    }
    else{
        const roles = data.german;
        return roles[i];
    }
}
const getSpecificRole = async (random) => {
    return null;
}

//wait until page is loaded
window.addEventListener("DOMContentLoaded", async function(){
    game()
})

//global variables
const players = new Array()
var role = getRandomRole()
const locate = getLocation()
var print_location = printlocation()

//game
function getPlayers(){
    //create Array with all Players 
}
function getRandomRole(){
    var random = Math.floor(Math.random()*8+1);
    if(random == 1){
        return "spy"
    }
    else{
        return getSpecificRole(random)
    }
}
function printlocation(){
    if(role == "spy"){
        return "????"
    }
    else{
        console.log(locate);
        return locate
    }
}

//Screen methods
function lobby(){
    document.querySelector(".content").innerHTML=
                `

                `
}
function game(){
    document.querySelector(".content").innerHTML=
                `
    <div class="textfield_role"><a>Your Role: ${role}</a></div>
    <div class="textfield_location><a>Your Location: ${print_location}</a></div>
                `
}
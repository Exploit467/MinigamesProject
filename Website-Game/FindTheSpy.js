//Script for FindTheSpy Minigame
//global variables
var game_len = "german"

const getLocation = async (game_loc) => {
    try {
        const results = await fetch("./FindTheSpy.json");
        const data = await results.json();
        if(game_len == "german"){
            const roles = data.german;
            const location = roles.map(
                loc => function(){
                    if(loc.location = game_loc){
                        return loc;
                    }
                }
            )
            return null;
        }
      } catch (err) {
        console.log(err);
      }
}

const getSpecificRole = async () => {

}
//wait until page is loaded
window.addEventListener("DOMContentLoaded", async function(){
    game()
})
//global variables
var players = new Array()
var role = getRandomRole()
var location = getLocation()
var print_location = printlocation()

//game
function getPlayers(){
    //return the amount of players
    return 8
}
function getRandomRole(){
    var random = Math.floor(Math.random()*8+1);
    console.log(random)
    if(random == 1){
        return "spy"
    }
    else{
        return getSpecificRole()
    }
}
function printlocation(){
    if(role == "spy"){
        return "????"
    }
    else{
        return location[0]
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
const express = require('express');
const cors = require ('cors');
const PORT = 8000
const app = express()

//this is used so there is no cross browser issue
app.use(cors())

//empty array for my data to be stored 
const char = {
    "Blossom" :{
    "animeName" : "Momoko Akatsumi",
    "Accessories":"Red Bow",
    "Hair Color" : "Orange",
    "SuperPowers": "Flight, Super Strength, Ice Breath",
    "Arch Nemesis": "Mojo Jojo, Ruffle ToughEm Boys, Him",
    "Phrase Said": "I guess we shouldn't judge people by what they look like",
    "Voiced By" : "Cathy Cavadini"
    },
    "Buttercup" :{
    "Anime Name" : "Kaoru Matsubara",
    "Accessories":"None",
    "Hair Color" : "Black",
    "SuperPowers": "Flight, Super Strength, FireBalls",
    "Arch Nemesis": "Mojo Jojo, Ruffle ToughEm Boys, Him",
    "Phrase Said": "",
    "Voiced By" : "E.G. Daily"
    },
    "Bubbles":{
    "Anime Name" : "Miyako Gotokuji",
    "Accessories":"Purple Octopus",
    "Hair Color" : "Blonde",
    "SuperPowers": "Flight, Super Strength, Multilingual",
    "Arch Nemesis": "Mojo Jojo, Ruffle ToughEm Boys, Him",
    "Phrase Said": "I'm going to be the prettiest girl at the party",
    "Voiced By" : "Tara Strong"
    },
    /*"Mojo Jojo: {},
    "Professor" :{},
    "The Mayor":{},
    "Him":{}*/
}
    


//how to send information to the user from the html
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/main.html')
})
app.get('/main.js', (request, response) => {
    response.sendFile(__dirname + '/main.js')
})
// this sends back json data
app.get('api/:name',(request,response)=>{// : states that char ia a parameter 
    const charName = request.params.name.toLowerCase() //this extracts the name parameter
    console.log(charName);

    // write a conditional to check if the paramater(name) is inside of the char object
    if(char[charName]){
        response.json(char[charName])
    }else {
        response.json(char['message'])
    }
})
//way for server to be connected 
app.listen(process.env.PORT || PORT,()=> {
    console.log(`You're on the ${PORT} babyeee`)
})
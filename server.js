const express = require('express');
const cors = require ('cors');
const PORT = 8000
const app = express()

//this is used so there is no cross browser issue
app.use(cors())


//empty array for my data to be stored 
const char = {
    "blossom" :{
    "name" : "Blossom",
    "animeName" : "Momoko Akatsumi",
    "accessories":"Red Bow",
    "hairColor" : "Orange",
    "superPowers": "Flight, Super Strength, Ice Breath",
    "archNemesis": "Mojo Jojo, Ruffle ToughEm Boys, Him",
    "phraseSaid": "I guess we shouldn't judge people by what they look like",
    "voicedBy" : "Cathy Cavadini"
    },
    "buttercup" :{
    "name": "Buttercup",
    "animeName" : "Kaoru Matsubara",
    "accessories":"None",
    "hairColor" : "Black",
    "superPowers": "Flight, Super Strength, FireBalls",
    "archNemesis": "Mojo Jojo, Ruffle ToughEm Boys, Him",
    "phraseSaid": "",
    "voicedBy" : "E.G. Daily"
    },
    "bubbles":{
    "animeName" : "Miyako Gotokuji",
    "accessories":"Purple Octopus",
    "hairColor" : "Blonde",
    "superPowers": "Flight, Super Strength, Multilingual",
    "archNemesis": "Mojo Jojo, Ruffle ToughEm Boys, Him",
    "phraseSaid": "I'm going to be the prettiest girl at the party",
    "voicedBy" : "Tara Strong"
    },
    /*"Mojo Jojo: {},
    "Professor" :{},
    "The Mayor":{},
    "Him":{}*/
}
    


// how to send information to the user from the html
app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})
app.get('/main.js', (request, response) => {
    response.sendFile(__dirname + 'js/main.js')
})
app.get('/css/style.css', (req,res)=>{
    res.sendFile(__dirname + '/css/style.css')
  })
// this sends back json data
app.get('/api/:name',(request,response) =>{// : states that char ia a parameter 
    const char = request.params.charName.toLowerCase() //this extracts the name parameter
    console.log(charName);

    // write a conditional to check if the paramater(name) is inside of the char object
    if(char[charName]){
        response.json(char[charName])
    }else {
        response.json(char['unknown'])
    }
})
//way for server to be connected 
app.listen(process.env.PORT || PORT,()=> {
    console.log(`You're on ${PORT} babyeee`)
})
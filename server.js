const express = require("express");
const cors = require('cors')
const PORT = 8000;
const app = express();

app.use(cors())
app.use(express.static(__dirname +'/public'));

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

//empty array for my data to be stored
const char = {
  'blossom': {
    "name": "Blossom",
    "animeName": "Momoko Akatsumi",
    "accessories": "Red Bow",
    "hairColor": "Orange",
    "superPowers": "Flight, Super Strength, Ice Breath",
    "archNemesis": "Mojo Jojo, Ruffle ToughEm Boys, Him",
    "phraseSaid": "I guess we shouldn't judge people by what they look like",
    "voicedBy": "Cathy Cavadini"
  },
  'buttercup': {
    "name": "Buttercup",
    "animeName": "Kaoru Matsubara",
    "accessories": "She has none",
    "hairColor": "Black",
    "superPowers": "Flight, Super Strength, FireBalls",
    "archNemesis": "Mojo Jojo, Ruffle ToughEm Boys, Him",
    "phraseSaid": "Yeah, but it's a skill that you cant do. And you cant do",
    "voicedBy": "E.G. Daily"
  },
  'bubbles': {
    "name" : "Bubbles",
    "animeName": "Miyako Gotokuji",
    "accessories": "Purple Octopus",
    "hairColor": "Blonde",
    "superPowers": "Flight, Super Strength, Multilingual",
    "archNemesis": "Mojo Jojo, Ruffle ToughEm Boys, Him",
    "phraseSaid": "I'm going to be the prettiest girl at the party",
    "voicedBy": "Tara Strong"
  }
};



app.get('/api/:charName', (request, response) => {
    const charsName = request.params.charName.toLowerCase()
    if(char[charsName]){ 
      console.log(char[charsName])
        response.json(char[charsName])
    } else {
       response.json(['unknown'])
   }
})


//way for server to be connected
app.listen(process.env.PORT || PORT, () => {
  console.log(`You're on ${PORT} babyeee`);
});


const express = require("express");
const PORT = 8000;
const app = express();
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
    "voicedBy": "Cathy Cavadini",
  },
  'buttercup': {
    "name": "Buttercup",
    "animeName": "Kaoru Matsubara",
    "accessories": "None",
    "hairColor": "Black",
    "superPowers": "Flight, Super Strength, FireBalls",
    "archNemesis": "Mojo Jojo, Ruffle ToughEm Boys, Him",
    "phraseSaid": "",
    "voicedBy": "E.G. Daily",
  },
  "bubbles": {
    "name" : "bubbles",
    "animeName": "Miyako Gotokuji",
    "accessories": "Purple Octopus",
    "hairColor": "Blonde",
    "superPowers": "Flight, Super Strength, Multilingual",
    "archNemesis": "Mojo Jojo, Ruffle ToughEm Boys, Him",
    "phraseSaid": "I'm going to be the prettiest girl at the party",
    "voicedBy": "Tara Strong",
  }
};

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})
// app.get('/', (request, response) => {
//   response.sendFile(__dirname + '/public/js/main.js')
// })

app.get('/api/:charName', (request, response) => {
    const names = req.params.names.toLowerCase()


    if(char[names]){ 
        res.json(char[charsName])
    } else {
       res.json(['unknown'])
   }
})
//way for server to be connected
app.listen(process.env.PORT || PORT, () => {
  console.log(`You're on ${PORT} babyeee`);
});

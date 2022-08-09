// bring in all necessary dependecies 
const express = require("express");// middleware
const cors = require('cors'); // middleware - protection across sites 
// port my server will be working on 
const PORT = 8000;
const app = express();

app.use(cors());

// serves up html page 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});

//empty array for my data to be stored
//'blossom': {
  //     "name": "Blossom",
  //     "animeName": "Momoko Akatsumi",
  //     "accessories": "Red Bow",
  //     "hairColor": "Orange",
  //     "superPowers": "Flight, Super Strength, Ice Breath",
  //     "archNemesis": "Mojo Jojo, Ruffle ToughEm Boys, Him",
  //     "phraseSaid": "I guess we shouldn't judge people by what they look like",
  //     "voicedBy": "Cathy Cavadini"
//   'buttercup': {
//     "name": "Buttercup",
//     "animeName": "Kaoru Matsubara",
//     "accessories": "She has none",
//     "hairColor": "Black",
//     "superPowers": "Flight, Super Strength, FireBalls",
//     "archNemesis": "Mojo Jojo, Ruffle ToughEm Boys, Him",
//     "phraseSaid": "Yeah, but it's a skill that you cant do. And you cant do",
//     "voicedBy": "E.G. Daily"
//   },
//   'bubbles': {
//     "name" : "Bubbles",
//     "animeName": "Miyako Gotokuji",
//     "accessories": "Purple Octopus",
//     "hairColor": "Blonde",
//     "superPowers": "Flight, Super Strength, Multilingual",
//     "archNemesis": "Mojo Jojo, Ruffle ToughEm Boys, Him",
//     "phraseSaid": "I'm going to be the prettiest girl at the party",
//     "voicedBy": "Tara Strong"
//   }
// };

// class constuctor to input data more efficiently 
class Char {
  constructor (name,animeName,accessories,hairColor,superPowers,archNemesis,phraseSaid,voicedBy){
  this.name = name;
  this.animeName = animeName;
  this.accessories = accessories;
  this.hairColor = hairColor;
  this.superPowers = superPowers;
  this.archNemesis = archNemesis;
  this.phraseSaid = phraseSaid;
  this.voicedBy = voicedBy;
}
}
// initializing new instances of each character
const buttercup = new Char('Buttercup','Kaoru Matsubara','She has none','Black','Flight,Super Strength,FireBalls','Mojo Jojo, Ruffle ToughEm Boys, Him',`Yeah, but it's a skill that you can't do`),
      bubbles = new Char('Bubbles', 'Stuffed Octopus'),
      // storing new objects in chars object
      chars = {buttercup,bubbles}

// will return whatever name is put after the api/
app.get('/api/:name', (req,res) => {
// put the param targeting the name attribute in a variable and making it case insensitive
  const charName = req.params.name.toLowerCase()
  if(chars[charName]){ 
    console.log(chars[charName])
        res.json(chars[charName])
    } else {
        res.json('unknown to this universe')
       }
});
app.get('/characters', (req,res) => {
  res.json(chars)
});
//tells me that the port has successfully connected
app.listen(process.env.PORT || PORT, () => {
  console.log(`You're on ${PORT} babyeee`);
});

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

// class constuctor to input data more efficiently 
class Char {
  constructor(name, accessories, hairColor, superPowers, archNemesis, phraseSaid, voicedBy) {
    this.name = name;
    this.accessories = accessories;
    this.hairColor = hairColor;
    this.superPowers = superPowers;
    this.archNemesis = archNemesis;
    this.phraseSaid = phraseSaid;
    this.voicedBy = voicedBy;
  }
}
// initializing new instances of each character
const buttercup = new Char('Buttercup', 'She has none', 'Black', 'Flight,Super Strength,FireBalls', 'Mojo Jojo, Ruffle ToughEm Boys, Him', `Yeah, but it's a skill that you can't do`, 'E.G Daily'),
  bubbles = new Char('Bubbles', 'Purple Octopus', 'Blonde', 'Flight,Super Strength,Multilingual', 'Mojo Jojo,Ruffle ToughEm Boys,Him', `I'm going to be the prettiest girl at the party`, 'Tara Strong'),
  blossom = new Char('Blossom', 'Red Bow', 'Orange', 'Flight,Super Strength, Ice Breath', `I guess we shouldn't judge people by what they look like`, 'Cathy Cavadini'),
  professor = new Char('Professor Utonium', 'Black Pipe', 'Black', 'None', 'Girls!', 'Mojo Jojo', 'Tom Kane'),
  mayor = new Char('Mayor/Barney', 'Monocole & Small top hat', 'None', 'None', '', 'He has none technically', 'Tom Kenny, Jim Cunnings'),
  msbellum = new Char('Miss Sara Bellum', 'The mayor', 'Red'),
  mskeane = new Char('Miss Keane'),
  narrator = new Char('Narrator'),
  talkingdog = new Char('Talking Dog'),
  mitchmitchelson = new Char('Mitch Mitchelson'),
  thederbytantes = new Char('The Derbytantes'),
  donny = new Char('Donny'),
  mojojojo = new Char('Mojo Jojo'),
  him = new Char('HIM'),
  fuzzylumpkins = new Char('Fuzzy Lumpkins'),
  princessmorbucks = new Char('Princess Morbucks'),
  ace = new Char('Ace - Ganggreen Member'),
  snake = new Char('Snake - Ganggreen Member'),
  lilarturo = new Char('Lil Arturo'),
  grubber = new Char('Grubber'),
  bigbilly = new Char('Big Billy'),
  bossman = new Char('Bossman'),
  junior = new Char('junior'),
  slim = new Char('Slim - an Aneoba boy'),
  sedusa = new Char('Sedusa'),
  brick = new Char('Brick'),
  boomer = new Char('Boomer'),
  butch = new Char('butch'),
  packrat = new Char('packrat'),
  allegro = new Char('Allegro'),
  manboy = new Char('Manboy'),
  silico = new Char('Silico'),
  unknown = 'unknown',

  // storing new objects in chars object
  chars = {
    buttercup,
    bubbles,
    blossom,
    professor,
    mayor,
    msbellum,
    mskeane,
    narrator,
    talkingdog,
    mitchmitchelson,
    thederbytantes,
    donny,
    mojojojo,
    him,
    fuzzylumpkins,
    princessmorbucks,
    ace,
    snake,
    lilarturo,
    grubber,
    bigbilly,
    bossman,
    junior,
    slim,
    sedusa,
    brick,
    boomer,
    butch,
    packrat,
    allegro,
    manboy,
    silico, 
    unknown
  }

// will return whatever name is put after the api/
app.get('/api/:name', (req, res) => {
  // put the param targeting the name attribute in a variable and making it case insensitive
  const charName = req.params.name.toLowerCase()
  if (chars[charName]) {
    console.log(chars[charName])
    res.json(chars[charName])
  } else {
    res.json('unknown to this universe')
  }
});
// to retrieve general api data 
app.get('/characters', (req, res) => {
  res.json(chars)
});
//tells me that the port has successfully connected
app.listen(process.env.PORT || PORT, () => {
  console.log(`You're on ${PORT} babyeee`);
});

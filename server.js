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
// grabs css file 

// app.express(static )
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
  professor = new Char('Professor Utonium', 'Black Pipe', 'Black', 'None', 'Mojo Jojo', 'Girls!','Tom Kane'),
  mayor = new Char('Mayor/Barney', 'Monocole & Small top hat', 'N/A', 'None','He has none technically', 'Hello this is the mayor','Tom Kenny, Jim Cunnings'),
  msbellum = new Char('Miss Sara Bellum', 'The mayor', 'Red','None','None',`I knew you'd do just fine`,'Jennifer Martin'),
  mskeane = new Char('Miss Keane','None', 'Black','None','None','No fighting','Jennifer Hale & Kath Soucie'),
  narrator = new Char('Narrator','None','None','None','None','None','Thanks to the PowerPuff Girls','Tom Kenny'),
  talkingdog = new Char('Talking Dog','Red collors and yellow tag','White and black spots','Ability to speak','Everyone to be fair',`You sure don't throw like a girl`,'Tom Kenny and Paul Mercier'),
  mitchmitchelson = new Char('Mitch Mitchelson','None','Brown','None','Everyone but buttercup','In yo face, baby','Tom Kenny'),
  mojojojo = new Char('Mojo Jojo','purple cape, white boots, tall helmet','Black','Super Intelligence','Professor and the PowerPuff Girls','I am Mojo Jojo!','Roger L. Jackson'),
  him = new Char('HIM','Red jacket,skirt and black heels','Black?','Supernatural and Demon abilities','the PowerPuff Girls',`Oh, I'm sorry! But nobody does evil THE WAY I DO`,'Tom Kane'),
  fuzzylumpkins = new Char('Fuzzy Lumpkins','Banjo and brown boots','Pink','Lumpkins Creature','Anyone who steps on his property',`I'm Fuzzy Lumpkins. I live here. This is my territory... Don't enter without permission!`,'Jim Cummings'),
  princessmorbucks = new Char('Princess Morbucks','yellow Powerpuff-style dress,black gloves and boots, and a tiara','Had powers similar to PPG at one point','The PowerPuff Girls',`"Why, you - you can't do this to me! I'm the Princess! Do you know who my daddy is?`,'Jennifer Hale',),
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

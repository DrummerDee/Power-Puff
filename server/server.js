const express = require("express");
const cors = require('cors')
const PORT = 8000;
const app = express();

app.use(cors())

class Char {
  constructor(name,animeName,accessories,hairColor,superPowers,archNemesis,phraseSaid,voiceBy){
    this.name = name
    this.animeName = animeName
    this.accessories = accessories
    this.hairColor = hairColor
    this.superPowers = superPowers
    this.archNemesis = archNemesis
    this.phraseSaid = phraseSaid
    this.voiceBy = voiceBy
  }
}
const char = {
  'blossom': new Char ('blossom','Momoko Akatsum','Red Bow','Orange','Flight,Super Strength,Ice Breath','Mojo Jojo,Ruffle ToughEm Boys, HIm','I guess we shouldn\'t judge people by what they look like','Cathy Cadvini')
}


app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/index.js', (request, response)=>{
  response.sendFile(__dirname + '/index.js')
})

app.get('/api/:charName', (request, response) => {
    const charsName = request.params.charName.toLowerCase()
    if(Char[charsName]){ 
      console.log(Char[charsName]);
        response.json(Char[charsName])
    } else {
       response.json(['message'])
   }
})




//way for server to be connected
app.listen(process.env.PORT || PORT, () => {
  console.log(`You're on ${PORT} babyeee`);
});


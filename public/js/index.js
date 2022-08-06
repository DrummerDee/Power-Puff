let container = document.querySelector('container')
let button = document.getElementById('button')
document.querySelector('button').addEventListener('click', apiRequest);
// ability to submit with enter for preference/ web accessability
let input = document.getElementById('input')
input.addEventListener('keypress', (e)=> {
    if(e.key == 'Enter'){
        e.preventDefault()
        document.getElementById('button').click()
    }
})





async function apiRequest() {
    const charsName = document.querySelector('input').value
    try {
        const response = await fetch(`https://power-puff.herokuapp.com/api/${charsName}`)
        const data = await response.json()
        console.log(data)
function doc(param){
   return document.getElementById(param).innertext
}
doc('charName') = `Name: ${data.name}`

        document.getElementById('charName').innerText = `Name : ${data.name}` //grabs name from obj and inserts it into DOM
        document.getElementById('charAnime').innerText = `Anime Name: ${data.animeName}`
        document.getElementById('charAcces').innerText = `Accessories: ${data.accessories}`
        document.getElementById('HairColor').innerText = "Hair Color:"
        document.getElementById('charHair').innerText = data.hairColor
        document.getElementById('SuperPowers').innerText = "Super Powers:"
        document.getElementById('charSuper').innerText = data.superPowers
        document.getElementById('ArchNemesis').innerText = "Arch Nemesis:"
        document.getElementById('charNemesis').innerText = data.archNemesis
        document.getElementById('Phrase').innerText = "Phrase:"
        document.getElementById('charPhrase').innerText = data.phraseSaid
        document.getElementById('VoiceActor').innerText = "Voice Actor:"
        document.getElementById('charVoice').innerText = data.voicedBy
    }
    catch (error) {
        console.log(error);
    };
}


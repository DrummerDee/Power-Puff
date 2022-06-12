
document.querySelector('button').addEventListener('click', apiRequest);


async function apiRequest() {
    const charsName = document.querySelector('input').value
    try {
        const response = await fetch(`https://power-puff.herokuapp.com/api/${charsName}`)
        const data = await response.json()
        console.log(data)
        document.getElementById('Container').innerText = "Name :"
        document.getElementById('name').innerText = "Name:"
        document.getElementById('charName').innerText = data.name
        document.getElementById('AnimeName').innerText = "Anime Name:"
        document.getElementById('charAnime').innerText = data.animeName
        document.getElementById('Accessories').innerText = "Accesories:"
        document.getElementById('charAcces').innerText = data.accesories
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
        console.log('Something\'s wrong');
    };
    document.body.style.backgroundImage = "url('/public/images/city.jpeg')";

    document.getElementById('btn').style.color = "white"
    document.getElementById('btn').style.backgroundColor = "blue"
    

    

}


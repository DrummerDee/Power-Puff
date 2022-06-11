document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const charsName = document.querySelector('input').value
    try{
        const response = await fetch(`https://power-puff.herokuapp.com/api/${charsName}`)
        const data = await response.json()
        console.log(data)
        document.getElementById('charName').innerText = data.name
        document.getElementById('charAnime').innerText = data.animeName
        document.getElementById('charAcces').innerText = data.accesories
        document.getElementById('charHair').innerText = data.hairColor
        document.getElementById('charSuper').innerText = data.superPowers
        document.getElementById('charNemesis').innerText = data.archNemesis
        document.getElementById('charPhrase').innerText = data.phraseSaid
        document.getElementById('charVoice').innerText = data.voicedBy
    }
    catch(error){
        console.log('Something\'s wrong');
    }
}

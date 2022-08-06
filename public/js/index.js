//IIFE - self evaluating function
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(() => {
// local variables
    let container = document.querySelector('container')
    let button = document.getElementById('button')
    let input = document.getElementById('input')

// Event listeners
    document.querySelector('button').addEventListener('click', apiRequest());
// ability to submit with enter for preference/ web accessibility
    input.addEventListener('keypress', (e)=> {
        if(e.key == 'Enter'){
            e.preventDefault()
            document.getElementById('button').click()
        }
    });


// Functions
    async function apiRequest() {
        const inputValue = document.querySelector('input').value;

        try {
            const response = await fetch(`https://power-puff.herokuapp.com/api/${inputValue}`);
            const responseToJson = response.json();
            updateDOMList(responseToJson);
            console.log('Expect data to be in a json format: ', responseToJson);

        } catch (err) {
            console.err('API Request failure: ', err)
        }

    };

    function updateDOMList(data) {
        if (!data) {
            console.error('No data to update the dom');
            return; // exit out of the function
        }
        if (data) {
            document.getElementById('charName').innerText = `Name : ${data.name}`; //grabs name from obj and inserts it into DOM
            document.getElementById('charAnime').innerText = `Anime Name: ${data.animeName}`;
            document.getElementById('charAcces').innerText = `Accessories: ${data.accessories}`;
            document.getElementById('HairColor').innerText = "Hair Color:";
            document.getElementById('charHair').innerText = data.hairColor;
            document.getElementById('SuperPowers').innerText = "Super Powers:";
            document.getElementById('charSuper').innerText = data.superPowers;
            document.getElementById('ArchNemesis').innerText = "Arch Nemesis:";
            document.getElementById('charNemesis').innerText = data.archNemesis;
            document.getElementById('Phrase').innerText = "Phrase:";
            document.getElementById('charPhrase').innerText = data.phraseSaid;
            document.getElementById('VoiceActor').innerText = "Voice Actor:";
            document.getElementById('charVoice').innerText = data.voicedBy;
        }
    }
})();




// async function apiRequest() {
//     const charsName = document.querySelector('input').value
//     try {
//         const response = await fetch(`https://power-puff.herokuapp.com/api/${charsName}`)
//         const data = await response.json()
//         console.log(data)
// function doc(param){
//    return document.getElementById(param).innertext
// }
// doc('charName') = `Name: ${data.name}`
//
//         document.getElementById('charName').innerText = `Name : ${data.name}` //grabs name from obj and inserts it into DOM
//         document.getElementById('charAnime').innerText = `Anime Name: ${data.animeName}`
//         document.getElementById('charAcces').innerText = `Accessories: ${data.accessories}`
//         document.getElementById('HairColor').innerText = "Hair Color:"
//         document.getElementById('charHair').innerText = data.hairColor
//         document.getElementById('SuperPowers').innerText = "Super Powers:"
//         document.getElementById('charSuper').innerText = data.superPowers
//         document.getElementById('ArchNemesis').innerText = "Arch Nemesis:"
//         document.getElementById('charNemesis').innerText = data.archNemesis
//         document.getElementById('Phrase').innerText = "Phrase:"
//         document.getElementById('charPhrase').innerText = data.phraseSaid
//         document.getElementById('VoiceActor').innerText = "Voice Actor:"
//         document.getElementById('charVoice').innerText = data.voicedBy
//     }
//     catch (error) {
//         console.log(error);
//     };


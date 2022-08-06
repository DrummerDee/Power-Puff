//IIFE - self evaluating function
// https://developer.mozilla.org/en-US/docs/Glossary/IIFE
(() => {
    // local variables
    let button = document.getElementById('button');
    let searchQuery = document.getElementById('input');
    console.log('INITIALIZE APP: ', searchQuery.value, ' this will be null');

    // Event listeners
    button.addEventListener('click', apiRequest);

    // ability to submit with enter for preference/ web accessibility
    input.addEventListener('keypress', (e)=> {
        if(e.key == 'Enter'){
            e.preventDefault()
            document.getElementById('button').click()
        }
    });


    // Functions
   function apiRequest() {
        let searchQueryValue = searchQuery.value;
        // if (!inputValue.length) {
        //     alert('PLEASE INPUT VALUE');
        // }

       if (searchQueryValue.length) { // either 0 or greater; if 0 = false if +1 true
            console.log('API Request');
            return fetch(`https://power-puff.herokuapp.com/api/${searchQueryValue}`)
                .then(resp => resp.json())
                .then(data => updateDOMList(data))
                .catch(err => {
                    console.error('ERROR: ', err);
                });
        }

       // try {
       //      responseToJson = response.json();
       //
       //      if (!response) {
       //          console.error('No data to show');
       //      }
       //
       //      if (response) {
       //          console.log('Expect data to be in a json format: ', responseToJson);
       //          updateDOMList(responseToJson);
       //      }
       //  } catch (err) {
       //      console.err('API Request failure: ', err)
       //  }

        //return responseToJson;
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


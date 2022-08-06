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

        if (!searchQueryValue.length) {
            // TODO implement something visually nicer
            alert('Please input value');
        }

       if (searchQueryValue.length) { // either 0 or greater; if 0 = false if +1 true
            console.log('API Request');
            return fetch(`https://power-puff.herokuapp.com/api/${searchQueryValue}`)
                .then(resp => resp.json())
                .then(data => updateDOMList(data))
                .catch(err => {
                    console.error('ERROR: ', err);
                });
        }
    };

    function updateDOMList(data) {
        if (!data) {
            console.error('No data to update the dom');
            return; // exit out of the function
        }
        if (data) {
            const elements = [
                {
                    id: 'charName',
                    label: 'Name',
                    value: data.name
                },
                {
                    id: 'charAnime',
                    label: 'Anime Name',
                    value: data.animeName
                },
                {
                    id: 'charAcces',
                    label: 'Accessories',
                    value: data.accessories
                },
                ///....
            ];

            elements.forEach(value => {
                if (value.id, value.label, value.value) {
                    document.getElementById(value.id).innerText = `${value.label}: ${value.value}`;
                }
            });




            // document.getElementById('charName').innerText = `Name : ${data.name}`; //grabs name from obj and inserts it into DOM
            // document.getElementById('charAnime').innerText = `Anime Name: ${data.animeName}`;
            // document.getElementById('charAcces').innerText = `Accessories: ${data.accessories}`;
            // document.getElementById('HairColor').innerText = "Hair Color:";
            // document.getElementById('charHair').innerText = data.hairColor;
            // document.getElementById('SuperPowers').innerText = "Super Powers:";
            // document.getElementById('charSuper').innerText = data.superPowers;
            // document.getElementById('ArchNemesis').innerText = "Arch Nemesis:";
            // document.getElementById('charNemesis').innerText = data.archNemesis;
            // document.getElementById('Phrase').innerText = "Phrase:";
            // document.getElementById('charPhrase').innerText = data.phraseSaid;
            // document.getElementById('VoiceActor').innerText = "Voice Actor:";
            // document.getElementById('charVoice').innerText = data.voicedBy;
        }
    }
})();

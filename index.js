document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const charsName = document.querySelector('input').value
    try{
        const response = await fetch(`https://power-puff.herokuapp.com//api/${charsName}`)
        const data = await response.json()
        console.log(data)
        document.querySelector('h2').innerText = data.animeName
    }
    catch(error){
        console.log('Something\'s wrong');
    }
}


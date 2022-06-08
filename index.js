document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const charsName = document.querySelector('input').value
    try{
        const response = await fetch(`https://simple-ppg.herokuapp.com/api/${names}`)
        const data = await response.json()
        document.querySelector('h2').innerText = data.name
        console.log(data)
    }catch(error){
        console.log('Something\'s wrong');
    }
  }

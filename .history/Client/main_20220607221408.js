document.querySelector('button').addEventListener('click',getRequest)

async function getRequest(){
    // get content of input box and assign it to a variable to pass along to other things
    const charNames = document.querySelector('input').value

    // now do fetch function with try catch 
    try {
        const response = await fetch (`https://simple-ppg.herokuapp.com/api/${charNames}`) // have to use template literal in to get api from url
        const data = await response.js()
        console.log
    }catch {

    }

}
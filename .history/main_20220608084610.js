document.querySelector("button").addEventListener("click", getRequest);

async function getRequest() {
  // get content of input box and assign it to a variable to pass along to other things
  const charName = document.querySelector("input").value;
  // now do fetch function with try catch
  try {
    const response = await fetch(
      `https://simple-ppg.herokuapp.com/api/${charName}`
    ); // have to use template literal in to get api from url
    const data = await response.js();
    //display information
    document.querySelector("h1").innerText = data.animeName;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

document.querySelector("button").addEventListener("click", getRequest);

async function getRequest() {
  // get content of input box and assign it to a variable to pass along to other things
  const charName = document.querySelector("input").value;
  // now do fetch function with try catch
  try {
    const response = await fetch(
      `https://simple-ppg.herokuapp.com/api/${charName}`
    ); // have to use template literal in to get api from url
    const data = await response.json();
    //display information
    document.querySelector("h2").innerText = data.name;
    document.getElementById("characterNation").innerText = data.nation;
    document.getElementById("characterBending").innerText = data.bending;
    document.getElementById("characterSkills").innerText = data.skills;
    document.getElementById("characterWeapon").innerText = data.weapon;
    document.getElementById("characterNickname").innerText = data.nickname;
    document.getElementById("characterFacts").innerText = data.notableFact;
    document.getElementById("characterImage").src = data.image;
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

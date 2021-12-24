const scoresList = document.querySelector('#scores-list');

const savedScores = JSON.parse(localStorage.getItem('all-score')) || [];

console.log(savedScores);

for (let i = 0; i < savedScores.length; i++) {

    const newLi = document.createElement('li');
    
    let string = `
        <h3>${savedScores[i].name}</h3>
        <h4>${savedScores[i].score}</h4>
    `
    newLi.innerHTML = string


    scoresList.append(newLi)
    
}
document.getElementsByTagName("h1")[0].style.fontSize = "6vw";


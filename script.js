const leaderboard = document.querySelector("#leaderboard tbody");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const countrySelect = document.getElementById("country");
const scoreInput = document.getElementById("score");
const addScoreBtn = document.getElementById("addScoreBtn");

let players = [];

function updateLeaderboard() {
  leaderboard.innerHTML = "";
  players
    .sort((a, b) => b.score - a.score)
    .forEach((player, i) => {
      leaderboard.innerHTML += `
      <tr>
        <td>${i + 1}</td>
        <td>${player.firstName} ${player.lastName}</td>
        <td>${player.country}</td>
        <td>${player.score}</td>
      </tr>`;
    });
}

addScoreBtn.addEventListener("click", () => {
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const country = countrySelect.value;
  const score = parseInt(scoreInput.value.trim(), 10);

  if (firstName && lastName && country && !isNaN(score)) {
    players.push({ firstName, lastName, country, score });
    updateLeaderboard();
    firstNameInput.value = lastNameInput.value = scoreInput.value = "";
    countrySelect.value = "";
  } else {
    alert("Fill in all fields correctly.");
  }
});

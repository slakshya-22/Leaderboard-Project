const leaderboard = document.querySelector("#leaderboard tbody");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const countrySelect = document.getElementById("country");
const scoreInput = document.getElementById("score");
const addScoreBtn = document.getElementById("addScoreBtn");

let players = [];

function renderLeaderboard() {
  leaderboard.innerHTML = "";

  players
    .sort((a, b) => b.score - a.score)
    .forEach((player, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${index + 1}</td>
        <td>${player.firstName} ${player.lastName}</td>
        <td>${player.country}</td>
        <td>${player.score}</td>
        <td class="actions">
          <button class="action-btn increase-btn" title="Increase Score">+</button>
          <button class="action-btn decrease-btn" title="Decrease Score">−</button>
          <button class="action-btn delete-btn" title="Delete Entry">🗑</button>
        </td>
      `;

      // Add event listeners for each button
      row.querySelector(".increase-btn").addEventListener("click", () => {
        player.score += 5;
        renderLeaderboard();
      });

      row.querySelector(".decrease-btn").addEventListener("click", () => {
        player.score -= 5;
        renderLeaderboard();
      });

      row.querySelector(".delete-btn").addEventListener("click", () => {
        players.splice(index, 1);
        renderLeaderboard();
      });

      leaderboard.appendChild(row);
    });
}

addScoreBtn.addEventListener("click", () => {
  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const country = countrySelect.value;
  const score = parseInt(scoreInput.value.trim(), 10);

  if (firstName && lastName && country && !isNaN(score)) {
    players.push({ firstName, lastName, country, score });
    renderLeaderboard();
    firstNameInput.value = lastNameInput.value = scoreInput.value = "";
    countrySelect.value = "";
  } else {
    alert("Please fill in all fields correctly.");
  }
});

interface User {
  id: number;
  name: string;
  balance: number;
  riskTolerance: number;
}

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function fetchUsers(): Promise<User[]> {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const usersData = await response.json();
  return usersData.map((userData: any) => ({
    id: userData.id,
    name: userData.name,
    balance: 100,
    riskTolerance: Math.random()
  }));
}

async function startMatch(
  user1: User,
  user2: User,
  gameDiv: HTMLElement
): Promise<HTMLDivElement> {
  const matchupDiv = document.createElement("div");
  matchupDiv.classList.add("matchup");
  matchupDiv.innerHTML = `<p>${user1.name} vs ${user2.name}</p>`;
  gameDiv.appendChild(matchupDiv);

  // Create a container for dynamic content
  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");
  gameDiv.appendChild(contentDiv);

  await delay(2000); // Display time for the matchup

  matchupDiv.classList.add("animate-away"); // Trigger the animate-away effect
  await delay(1000); // This should match the duration of the animate-away animation

  return contentDiv;
}

function calculateBetAmount(user: User): number {
  // Complex adaptive algorithm for dynamic adjustment
  const randomBet = (function getRandomBet() {
    return Math.floor(Math.random() * 50) + 1; // Random bet between 1 and 50
  })();

  if (randomBet) return randomBet;
  // Random base for low balance strategy
  let lowBalanceBase = Math.floor(Math.random() * 5) + 1; // Random base between 1 and 5

  // Random base for moderate balance strategy
  let moderateBalanceBase = Math.floor(Math.random() * 6) + 5; // Random base between 5 and 10

  // Random base for high balance strategy
  let highBalanceBase = Math.floor(Math.random() * 20) + 10; // Random base between 10 and 30

  // Random factor for all strategies
  let randomFactor = Math.random();

  // Low balance strategy: cautious but variable bets
  if (user.balance < 50) {
    return Math.max(1, lowBalanceBase + randomFactor * 5); // Bet varies between 1 and (base + 5)
  }

  // Moderate balance strategy: standard but variable bets
  if (user.balance >= 50 && user.balance <= 100) {
    return moderateBalanceBase + randomFactor * 5; // Bet varies around a moderate base
  }

  // High balance strategy: wild and variable bets
  if (user.balance > 100) {
    const randomMultiplier = 2 + randomFactor * 3; // Random multiplier between 2 and 5
    return highBalanceBase * randomMultiplier; // Bet amount is a multiple of the random base
  }

  // Fallback bet amount with a random factor
  return 10 + randomFactor * 5; // Default bet with added variability
}

function pickChoice(
  user1: User,
  user2: User
): { chooser: User; choice: string } {
  const chooser = Math.random() > 0.5 ? user1 : user2;
  const choice = Math.random() > 0.5 ? "heads" : "tails";
  return { chooser, choice };
}

function coinToss(choice: string): boolean {
  const result = Math.random() > 0.5 ? "heads" : "tails";
  return result === choice;
}

async function simulateGame(users: User[], rounds: number): Promise<void> {
  const logElement = document.getElementById("gameLog") as HTMLDivElement;

  for (let round = 1; round <= rounds; round++) {
    const roundDiv = document.createElement("div");
    roundDiv.classList.add("round");
    roundDiv.innerHTML = `<h3>Round ${round}</h3>`;
    logElement.appendChild(roundDiv);

    for (let i = 0; i < users.length; i += 2) {
      if (i + 1 >= users.length) break;

      const user1 = users[i];
      const user2 = users[i + 1];

      if (user1.balance === 0 || user2.balance === 0) continue;

      const gameDiv = document.createElement("div");
      gameDiv.classList.add("game");
      roundDiv.appendChild(gameDiv);

      const contentDiv = await startMatch(user1, user2, gameDiv); // Display "X vs Y" message

      const { chooser, choice } = pickChoice(user1, user2);
      contentDiv.innerHTML += `<p>${chooser.name} to choose...</p>`;
      await delay(1000); // Wait for the fade-out effect to complete
      contentDiv.innerHTML += `<p>${chooser.name} chooses ${choice}...</p>`;

      const betAmount1 = calculateBetAmount(user1);
      const betAmount2 = calculateBetAmount(user2);
      contentDiv.innerHTML += `<p>${
        user1.name
      } (Risk tolerance: ${user1.riskTolerance.toFixed(
        2
      )}) bets $${betAmount1}</p>`;
      contentDiv.innerHTML += `<p>${
        user2.name
      } (Risk tolerance: ${user2.riskTolerance.toFixed(
        2
      )}) bets $${betAmount2}</p>`;

      const betAmount = Math.min(betAmount1, betAmount2);
      contentDiv.innerHTML += `<p>The bet is $${betAmount} based on the lower of the two bets</p>`;

      await delay(1500);

      const tossResult = coinToss(choice) ? "heads" : "tails";
      contentDiv.innerHTML += `<p>The coin lands on ${tossResult}!</p>`;

      const winner =
        tossResult === choice ? chooser : chooser === user1 ? user2 : user1;
      const loser = winner === user1 ? user2 : user1;

      winner.balance += betAmount;
      loser.balance -= betAmount;

      contentDiv.innerHTML += `<p>${winner.name} wins! ${winner.name} balance: $${winner.balance}, ${loser.name} balance: $${loser.balance}</p>`;
    }
  }

  // Update the results table after all rounds
  updateResultsTable(users);
}

function updateResultsTable(users: User[]): void {
  const resultsTable = document.getElementById(
    "resultsTable"
  ) as HTMLTableElement;
  const tbody = resultsTable.getElementsByTagName("tbody")[0];
  tbody.innerHTML = ""; // Clear previous results

  users.forEach((user) => {
    const row = tbody.insertRow();
    row.insertCell(0).innerText = user.name;
    row.insertCell(1).innerText = `$${user.balance}`;
  });
}

const startGameButton = document.getElementById(
  "startGame"
) as HTMLButtonElement;
startGameButton.onclick = async () => {
  console.log("fetching users");
  const users = await fetchUsers();
  simulateGame(users, 5); // Simulate 5 rounds

  const resultsTable = document.getElementById(
    "resultsTable"
  ) as HTMLTableElement;
  const tbody = resultsTable.getElementsByTagName("tbody")[0];
  tbody.innerHTML = ""; // Clear previous results

  users.forEach((user) => {
    const row = tbody.insertRow();
    row.insertCell(0).innerText = user.name;
    row.insertCell(1).innerText = `$${user.balance}`;
  });
};

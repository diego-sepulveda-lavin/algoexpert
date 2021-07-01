/* 
    There's an algorithms tournament taking place in which teams of programmers
    compete against each other to solve algorithmic problems as fast as possible.
    Teams compete in a round robin, where each team faces off against all other
    teams. Only two teams compete against each other at a time, and for each
    competition, one team is designated the home team, while the other team is the
    away team. In each competition there's always one winner and one loser; there
    are no ties. A team receives 3 points if it wins and 0 points if it loses. The
    winner of the tournament is the team that receives the most amount of points.

    Given an array of pairs representing the teams that have competed against each
    other and an array containing the results of each competition, write a
    function that returns the winner of the tournament. The input arrays are named
    "competitions" and "results", respectively. The
    "competitions" array has elements in the form of
    "[homeTeam, awayTeam]", where each team is a string of at most 30
    characters representing the name of the team. The "results" array
    contains information about the winner of each corresponding competition in the
    "competitions" array. Specifically, "results[i]" denotes
    the winner of "competitions[i]", where a "1" in the
    "results" array means that the home team in the corresponding
    competition won and a "0" means that the away team won.


    It's guaranteed that exactly one team will win the tournament and that each
    team will compete against all other teams exactly once. It's also guaranteed
    that the tournament will always have at least two teams.

*/

/* 
    Sample Input:

    competitions = [
        ["HTML", "C#"],
        ["C#", "Python"],
        ["Python", "HTML"],
    ]
   
    results = [0,0,1]

    Sample Output:

    "Python"
    // C# beats HTML, Python Beats C#, and Python Beats HTML.
    // HTML - 0 points 
    // C# -  3 points
    // Python -  6 points

*/

const competitions = [
  ["HTML", "C#"],
  ["C#", "Python"],
  ["Python", "HTML"],
];

const results = [0, 0, 1];

export function tournamentWinner(competitions: string[][], results: number[]): string {
  //create empty scoreBoard
  let scoreBoard: { [team: string]: number } = {};
  //iterate over competitions array
  for (let i = 0; i < competitions.length; i++) {
    const match = competitions[i];
    // if results[i] == 1 team at index 0 wins, if results[i] == 0 team at index 1 wins
    if (results[i] === 1) {
      // team index 0 in Scoreboard ? if yes increase 3 points, else init 3 points
      match[0] in scoreBoard ? (scoreBoard[match[0]] += 3) : (scoreBoard[match[0]] = 3);
    } else {
      // team index 1 in Scoreboard ? if yes increase 3 points, else init 3 points
      match[1] in scoreBoard ? (scoreBoard[match[1]] += 3) : (scoreBoard[match[1]] = 3);
    }
  }
  let winner = "None";
  let maxScore = 0;
  //iterate over scoreBoard to find maxScore
  for (let team in scoreBoard) {
    //if current score > 0 set maxScore to current score and winner to current team with maxScore
    if (scoreBoard[team] > maxScore) {
      maxScore = scoreBoard[team];
      winner = team;
    }
  }
  return winner;
}

export function tournamentWinnerImproved(competitions: string[][], results: number[]): string {
  let winner = "";
  //create empty scoreBoard
  let scoreBoard: { [team: string]: number } = { currentBestTeam: 0 };
  //iterate over competitions array
  for (let i = 0; i < competitions.length; i++) {
    const match = competitions[i];
    // if results[i] == 1 team at index 0 wins, if results[i] == 0 team at index 1 wins
    if (results[i] === 1) {
      // team index 0 in Scoreboard ? if yes increase 3 points, else init 3 points
      match[0] in scoreBoard ? (scoreBoard[match[0]] += 3) : (scoreBoard[match[0]] = 3);
      // if not current winner, set winner to current match winner
      !winner && (winner = match[0]);
      //check if current winner score is higher than leader score and update winner
      scoreBoard[match[0]] > scoreBoard[winner] && (winner = match[0]);
    } else {
      // team index 1 in Scoreboard ? if yes increase 3 points, else init 3 points
      match[1] in scoreBoard ? (scoreBoard[match[1]] += 3) : (scoreBoard[match[1]] = 3);
      // if not current winner, set winner to current match winner
      !winner && (winner = match[1]);
      //check if current winner score is higher than leader score and update winner
      scoreBoard[match[1]] > scoreBoard[winner] && (winner = match[1]);
    }
  }
  return winner;
}

console.log(tournamentWinnerImproved(competitions, results)); //O(N)T
console.log(tournamentWinner(competitions, results)); // O(2*N)T

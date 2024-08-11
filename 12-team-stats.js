// Step 1: Create a team object
const team = {
    // Step 2: Add _players and _games properties
    _players: [
      { firstName: 'John', lastName: 'Doe', age: 25 },
      { firstName: 'Jane', lastName: 'Smith', age: 28 },
      { firstName: 'Joe', lastName: 'Johnson', age: 30 }
    ],
    _games: [
      { opponent: 'Warriors', teamPoints: 90, opponentPoints: 85 },
      { opponent: 'Knights', teamPoints: 88, opponentPoints: 90 },
      { opponent: 'Kings', teamPoints: 92, opponentPoints: 88 }
    ],
  
    // Step 6: Create a getter method for players
    get players() {
      return this._players;
    },
  
    // Step 7: Create a getter method for games
    get games() {
      return this._games;
    },
  
    // Step 8: Add a method to add a new player
    addPlayer(newFirstName, newLastName, newAge) {
      const player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge
      };
      this._players.push(player);
    },
  
    // Step 11: Add a method to add a new game
    addGame(newOpponent, newTeamPoints, newOpponentPoints) {
      const game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this._games.push(game);
    }
  };
  
  // Step 9: Add a new player to the team
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players); // Check that Bugs Bunny was added to the team
  
  // Step 12: Add a new game to the team's record
  team.addGame('Titans', 100, 98);
  console.log(team.games); // Check that the new game was added
  
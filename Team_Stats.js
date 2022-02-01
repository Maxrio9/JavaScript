let team = {
  _players: [{
    firstName: 'Pablo',
    lastName: 'Sanchez',
    age: 11
  }, {
    firstName: 'Rick',
    lastName: 'Sanchez',
    age: 78
  }, {
    firstName: 'Morty',
    lastName: 'Summers',
    age: 14
  }],
  _games: [{
    opponent: 'Bronzos',
    teamPoints: 99,
    opponentPoints: 23
  }, {
    opponent: 'Lappen',
    teamPoints: 42,
    opponentPoints: 33
  }, {
    opponent: 'Maulers',
    teamPoints: 81,
    opponentPoints: 3
  }],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer (firstName, lastName, age) {
    player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this.players.push(player);
  },
  addGame (opponentName, teamPoints, opponentPoints) {
    game = {
      opponent: opponentName,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints
    }
    this.games.push(game);
  }
}
team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);
console.log(team.players);

team.addGame('Intentor', 30, 42);
team.addGame('Haulers', 21, 22);
team.addGame('Zubbys', 55, 32);
console.log(team.games);
class Result {
  constructor(team) {
    this.team = team;
    this.for = 0;
    this.against = 0;
    this.won = 0;
    this.drawn = 0;
    this.lost = 0;
  }

  getPoints(rules) {
    return (this.won * rules.pointsForWin) + (this.drawn * rules.pointsForDraw);
  }
}

const createResult = (team) => {
  return new Result(team.teamName);
}

export default (matches, rules) => {
  const results = {};

  matches.forEach((match) => {
    if (!results[match.team1.teamName]) {
      results[match.team1.teamName] = createResult(match.team1);
    }
    if (!results[match.team2.teamName]) {
      results[match.team2.teamName] = createResult(match.team2);
    }

    const result1 = results[match.team1.teamName];
    const result2 = results[match.team2.teamName];

    result1.for += match.team1.score;
    result1.against += match.team2.score;
    result2.for += match.team2.score;
    result2.against += match.team1.score;


    if (match.team1.score > match.team2.score) {
      result1.won++;
      result2.lost++;
    }
    else if (match.team1.score < match.team2.score) {
      result1.lost++;
      result2.won++;
    }
    else {
      result1.drawn++;
      result2.drawn++;
    }
  });

  const resultList = [];
  for (let key in results) {
    let result = results[key];
    result.points = result.getPoints(rules);
    resultList.push(result);
  }

  return resultList.sort((a, b) => b.points - a.points);
}

function getMembers(teams) {
    const membersByTeam = {};
    teams.forEach(team => {
      membersByTeam[team.team] = team.members.join(', ');
    });
    return membersByTeam;
  }
  
  function getSensei(teams) {
    const sensei = teams.reduce((acc, team) => {
      acc[team.team] = team.sensei;
      return acc;
    }, {});
    return sensei;
  }
  
  function teamDetails(teams, number) {
    const team = teams.find(team => team.team === number);
    if (team) {
      return `Team ${team.team} is made up of ${team.members.join(', ')} and is led by ${team.sensei}.`;
    }
    return `Team number ${number} not found.`;
  }
  
  fetch("teams.json")
    .then((response) => response.json())
    .then(teams => {
      console.log("The five main teams in Naruto are:");
      teams.forEach(teamData => console.log(`Team ${teamData.team}`));
      console.log("Members by team:");
      console.log(getMembers(teams));
      console.log("Sensei by team:");
      console.log(getSensei(teams));
  
      teamsIntro = "There are a number of teams in the show Naruto and they all contribute something to the story, but the five main teams are as follows: ";
      teamsInfo = `
        <h1>Naruto Teams</h1>
        <p>${teamsIntro}</p>
        <p>${teamDetails(teams, 7)}</p>
        <p>${teamDetails(teams, 8)}</p>
        <p>${teamDetails(teams, 9)}</p>
        <p>${teamDetails(teams, 10)}</p>
        <p>${teamDetails(teams, 11)}</p>
      `;
  
      html = teamsInfo
      document.body.innerHTML = html
    })
    .catch(error => {
      console.error("Error fetching teams data:", error);
    });
  
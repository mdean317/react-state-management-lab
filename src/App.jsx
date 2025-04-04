import { useState } from 'react';


const App = () => {

  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState(
    [
      {
        id: 1,
        name: 'Survivor',
        price: 12,
        strength: 6,
        agility: 4,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
      },
      {
        id: 2,
        name: 'Scavenger',
        price: 10,
        strength: 5,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
      },
      {
        id: 3,
        name: 'Shadow',
        price: 18,
        strength: 7,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
      },
      {
        id: 4,
        name: 'Tracker',
        price: 14,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
      },
      {
        id: 5,
        name: 'Sharpshooter',
        price: 20,
        strength: 6,
        agility: 8,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
      },
      {
        id: 6,
        name: 'Medic',
        price: 15,
        strength: 5,
        agility: 7,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
      },
      {
        id: 7,
        name: 'Engineer',
        price: 16,
        strength: 6,
        agility: 5,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
      },
      {
        id: 8,
        name: 'Brawler',
        price: 11,
        strength: 8,
        agility: 3,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
      },
      {
        id: 9,
        name: 'Infiltrator',
        price: 17,
        strength: 5,
        agility: 9,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
      },
      {
        id: 10,
        name: 'Leader',
        price: 22,
        strength: 7,
        agility: 6,
        img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
      },
    ]
  );

 
  const handleAddFighter = (zombieFighter) => {
    
    if (money > zombieFighter.price) {
      
      // Get copy of state variables 
      const copyOfZombieFighters = [...zombieFighters]
      const copyOfTeam = [...team]

      // Add zombie fighter to copy of team
      copyOfTeam.push(zombieFighter);

      // Set state with the updated copy. 
      setTeam(copyOfTeam);

      // Get the index of the Zombie fighter to remove. 
      const matchID = (fighter) => fighter.id === zombieFighter.id;
      const indexToRemove = copyOfZombieFighters.findIndex(matchID);

      // Remove Zombie Fighter from copy of state. 
      copyOfZombieFighters.splice(indexToRemove, 1);

      // Set state with the updated copy. 
      setZombieFighters(copyOfZombieFighters);

      // Update money state
      setMoney(money - zombieFighter.price);


    } else {

      console.log("Not enough money");
    
    }
   
  };

  const handleRemoveFighter = (teamMember) => {
  
    // Get copy of state variables 
    const copyOfZombieFighters = [...zombieFighters]
    const copyOfTeam = [...team]

    // Add removed team member to copy of zombie fighters
    copyOfZombieFighters.push(teamMember);

    // Set state with the updated copy. 
    setZombieFighters(copyOfZombieFighters);

    // Get the index of the team member  to remove. 
    const matchID = (fighter) => fighter.id === teamMember.id;
    const indexToRemove = copyOfTeam.findIndex(matchID);

    // Remove team member from copy of Team. 
    copyOfTeam.splice(indexToRemove, 1);

    // Set Team state with the updated copy. 
    setTeam(copyOfTeam);

    // Update money state
    setMoney(money + teamMember.price);

  };

  const teamStrength = team.reduce((teamStrength, fighter) => teamStrength + fighter.strength, 0);
  const teamAgility = team.reduce((teamAgility, fighter) => teamAgility + fighter.agility, 0);

  return (
    <>
    <h3>Money:{money} </h3>
        <h3>Team Strength:{teamStrength} </h3>
        <h3>Team Agility:{teamAgility} </h3>
    <h3>Zombie Fighters </h3>
    <ul> 
        {zombieFighters.map((zombieFighter) => 
          <li key={zombieFighter.id}>
            <img src={zombieFighter.img}></img>
            <p>Name: {zombieFighter.name}</p>
            <p>Price: {zombieFighter.price}</p>
            <p>Strength: {zombieFighter.strength}</p>
            <p>Agility: {zombieFighter.agility}</p>
            <button onClick={() => handleAddFighter(zombieFighter)}>Add</button>
          </li>
        )}
    </ul>
   
    {(team.length === 0) ? <h3>Pick some team members!</h3> : <h3>Your Team</h3>}
    <ul> 
        {team.map((teamMember) => 
          <li key={teamMember.id}>
            <img src={teamMember.img}></img>
            <p>Name: {teamMember.name}</p>
            <p>Price: {teamMember.price}</p>
            <p>Strength: {teamMember.strength}</p>
            <p>Agility: {teamMember.agility}</p>
            <button onClick={() => handleRemoveFighter(teamMember)}>Remove</button>
          </li>
        )}
    </ul>  
  </>
  )
}


export default App
import { useState } from "react";
import NewsFeed from "./compoents/NewsFeed";
import NavBar from "./compoents/NavBar";
import RightColumn from "./compoents/RightColumn";
import LeftColumn from "./compoents/LeftColumn";

function App() {
  const [sport, setSport] = useState('football')
  const [league, setLeague] = useState('nfl')
  const updateSport = (newState) => {
    setSport(newState)
  }
  const updateLeague = (newState) => {
    setLeague(newState)
  }

  return (
    <>
    <div>
      <div className="flex justify-center">
        <NavBar sport={sport} updateSport={updateSport} league={league} updateLeague={updateLeague} />
      </div>
      <div className="grid grid-flow-row-dense grid-cols-3 gap-6">
        <LeftColumn />
        <NewsFeed sport={sport} league={league}/>
        <RightColumn  />
      </div>
    </div>
    </>
  );
  
}

export default App;

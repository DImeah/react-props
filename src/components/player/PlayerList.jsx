// Players List
// Importing the Player component and playersData from external file
import Player from "./Player";
import { playersData } from "../../players";

// PlayersList component definition
const PlayersList = () => {
  return (
    <div
      // Container div with background styling for the players list
      className="has-bg-img bg-secondary bg-blend-screen bg-img bg-cover"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        backgroundImage: `url(${"/images/Uefa-bg.png"})`,
        backgroundSize: "cover",
        gap: "20px",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      {/* Mapping through the playersData array and rendering Player components */}
      {playersData.map((player, id) => (
        <Player key={id} {...player} /> // Used a spread operator to pass player details as props
      ))}
    </div>
  );
};

// Exporting the PlayersList component as the default export
export default PlayersList;

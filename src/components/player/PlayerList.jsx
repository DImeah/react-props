// Players List
import Player from "./Player";
import { playersData } from "../../players";

const PlayersList = () => {
  return (
    <div
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
      {playersData.map((player, id) => (
        <Player key={id} {...player} />
      ))}
    </div>
  );
};

export default PlayersList;

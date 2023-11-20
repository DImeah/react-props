// Importing Bootstrap CSS for styling
import "bootstrap/dist/css/bootstrap.min.css";

// Importing the PlayersList component
import PlayersList from "./components/player/PlayerList";

// Importing the main App stylesheet
import "./App.css";

// Main App component
function App() {
  return (
    <>
      {/* Container div with background image and styling */}
      <div
        className="has-bg-img bg-secondary bg-blend-screen bg-img bg-cover"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          backgroundImage: `url(${"/images/Uefa-bg.png"})`,
          backgroundSize: "cover",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        }}
      >
        <PlayersList />
      </div>
    </>
  );
}

// Exporting the App component as the default export
export default App;

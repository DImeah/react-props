// Player Card
// Importing necessary dependencies and components
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

// Player component definition
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  return (
    <div
      className="has-bg-img bg-primary bg-blend-screen bg-img bg-cover"
      style={{
        // backgroundImage: `url(${"/images/Uefa-bg.png"})`, // Set your background image
        backgroundSize: "cover",
        padding: "20px", // Added some padding to create space around the card
      }}
    >
      {/* Bootstrap Card component for displaying player information */}
      <Card
        className="card-custom"
        style={{
          // Background styling for the player card container
          width: "18rem",
          margin: "10px",
          borderRadius: "15px",
          overflow: "hidden", // Hide overflow to make sure the rounded corners are visible
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Player image */}
        <Card.Img
          variant="top"
          src={imageUrl}
          alt={name}
          style={{
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
            objectFit: "cover", // Make sure the image covers the entire container
            height: "220px", // Set a fixed height for the image
            paddingBottom: "5px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        />
        {/* Player information */}
        <Card.Body
          style={{
            textAlign: "center",
            backgroundColor: "#34495e", // Dark background color
            color: "#ecf0f1",
            padding: "20px",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <Card.Title
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "15px",
              color: "#e74c3c", // Red FIFA color for the title
            }}
          >
            {name}
          </Card.Title>
          <Card.Text style={{ fontSize: "18px" }}>
            <span style={{ display: "block", marginBottom: "5px" }}>
              Team: {team}
            </span>
            <span style={{ display: "block", marginBottom: "5px" }}>
              Nationality: {nationality}
            </span>
            <span style={{ display: "block", marginBottom: "5px" }}>
              Jersey Number: {jerseyNumber}
            </span>
            <span style={{ display: "block", marginBottom: "5px" }}>
              Age: {age}
            </span>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

// PropTypes for type-checking and documentation
Player.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  team: PropTypes.string,
  nationality: PropTypes.string,
  jerseyNumber: PropTypes.number,
  age: PropTypes.number,
  imageUrl: PropTypes.string,
};

// Exporting the Player component as the default export
export default Player;

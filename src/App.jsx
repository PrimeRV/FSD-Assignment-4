import "./App.css";

function ProfileCard({ name, image, description }) {
  function handleProfileClick() {
    alert(`Welcome to ${name}'s profile!`);
  }

  return (
    <div className="profile-card">
      <div className="image-container">
        <img src={image} alt={name} className="profile-image" />
      </div>

      <h2>{name}</h2>
      <p>{description}</p>

      <button onClick={handleProfileClick}>
        View Profile
      </button>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1>My Profile</h1>

      <ProfileCard
        name="Rohit Verma"
        image={`${import.meta.env.BASE_URL}profile.jpeg`}
        description="MCA student passionate about web development and learning new technologies."
      />
    </div>
  );
}

export default App;
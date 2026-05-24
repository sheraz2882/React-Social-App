import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <div className="home-card">
        <h2 className="create-account-title">Welcome Home</h2>
        <p className="create-account-subtitle">
          Your account is now created. Start exploring your social feed and connecting with others.
        </p>
        <Link to="/" className="create-account-button">
          Back to Login
        </Link>
      </div>
    </div>
  );
}

export default Home;

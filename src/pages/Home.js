import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {

  return (
    <div className="container mt-5">
      <h1>Welcome Home!</h1>
      <p>This is the home page content that users see after successful login.</p>
      {/* Add more content for the home page as needed */}
    </div>
  );
}

export default Home;

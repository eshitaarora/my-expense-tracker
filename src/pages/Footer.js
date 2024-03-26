import React from 'react';
import Navbar from './Navbar';

function Footer() {
  return (
    <>
    <Navbar></Navbar>
<footer className="footer">
<div className="footer-content">
<div className="footer-section">
<h3>About</h3>
<p>This expense tracker app helps you manage your finances effectively. Track income and expenses, categorize spending, and gain insights into your financial habits.</p>
</div>
<div className="footer-section">
<h3>Contact Us</h3>
<p>
            Have questions or feedback? Feel free to reach out!
<br />
<a href="mailto:youremail@example.com">youremail@example.com</a>
</p>
</div>
<div className="footer-copyright">
<p>&copy; {new Date().getFullYear()} Your App Name</p>
</div>
</div>
</footer>
</>
  );
}
 
function App() {
  return (
<div className="app">
      {/* Your other expense tracker components here */}
<Footer />
</div>
  );
}
 
export default App;
 
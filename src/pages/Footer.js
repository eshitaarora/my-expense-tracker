import React from 'react';
import Navbar from './Navbar';
import './Footer.css';
 
function Footer() {
  return (
<>
<Navbar />
<footer className="footer" style={{borderTop: '2px solid #40423f'}}>
    <div className="footer-content">
    <div className="footer-section">
    <h2>About</h2>
    <h4>This Expense Tracker tool helps you manage your finances effectively. Track income and expenses, categorize spending, and gain insights into your financial habits.</h4>
    </div>
    <div className="footer-section">
    <h4>Contact Us: Have questions or feedback? Feel free to reach out!<>  </>
    <a href="mailto:esarora@deloitte.com">esarora@deloitte.com</a></h4>
    </div>
    <div className="footer-copyright">
    <p>&copy; {new Date().getFullYear()} Expense Tracker</p>
    </div>
    </div>
</footer>
</>
  );
}
 
function App() {
  return (
<div className="app" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end' }}> {/* Enhanced Flexbox approach */}
      {/* Your other expense tracker components here */}
<Footer />
</div>
  );
}
 
export default App;
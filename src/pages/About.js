import React from 'react';
import './About.css';
import Navbar from './Navbar';
import Footer from './Footer';
 
function About() {
  return (
    <>
      <Navbar></Navbar>
<div className="about-page">
<div className="navbar-brand2" to="/">Expense Tracker</div>
  <div className="about-content">
  <p>
            This expense tracker app is designed to help you manage your finances effectively. 
            It allows you to track your income and expenses, categorize your spending, and gain insights into your financial habits.
  </p>
  <p><u>
            Here are some key features:
  </u></p>

  <p> 1. Track income and expenses <br/>
  2.Categorize your spending (e.g., groceries, rent, entertainment) <br/>
  3.View transaction history <br/>
  4.Generate reports to analyze your spending patterns <br/>
  5.Set budget goals (optional) <br/> <br/>
  
            With this app, you can take control of your finances and make informed decisions about your spending. 
            Get started by adding your income and expenses!
  </p>
  
</div>

</div>
<Footer></Footer>
    </>
  );
}
 
function App() {
  return (
<div className="app">
      {/* Your other expense tracker components here */}
<About />
</div>
  );
}
 
export default App;
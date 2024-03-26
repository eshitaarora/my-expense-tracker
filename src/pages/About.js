import React from 'react';
import './About.css';
import Navbar from './Navbar';
 
function About() {
  return (
<div className="about-page">
<h1 className="about-title">About Your Expense Tracker</h1>
<div className="about-content">
<p>
          This expense tracker app is designed to help you manage your finances effectively. 
          It allows you to track your income and expenses, categorize your spending, and gain insights into your financial habits.
</p>
<p>
          Here are some key features:
</p>
<ul className="about-features">
<li>Track income and expenses</li>
<li>Categorize your spending (e.g., groceries, rent, entertainment)</li>
<li>View transaction history</li>
<li>Generate reports to analyze your spending patterns</li>
<li>Set budget goals (optional)</li>
</ul>
<p>
          With this app, you can take control of your finances and make informed decisions about your spending. 
          Get started by adding your income and expenses, and see how it helps you achieve your financial goals!
</p>
</div>
</div>
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
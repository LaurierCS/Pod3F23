import React, { useState } from 'react';
import './Header.css'; // Import the CSS file


const Header = () => {
    const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement your search functionality here
    alert(`Searching for: ${searchTerm}`);
  };

  return (
    <header>
        <div className="WLUGO">
            <span>WLUGO</span>
        </div>
    <nav>
      <ul>
        <li><a href="#">Login</a></li>
        <li><a href="#">Sign Up</a></li>
      </ul>
    </nav>
    <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
  </header>
  )
}

export default Header
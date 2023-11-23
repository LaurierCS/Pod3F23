import React, { useState } from 'react';
import {Link} from 'react-router-dom';
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
        <div className='navname'>
          <Link to="/">
            <span className="WLUGO">wlu</span>
            <span className="GO">go</span>
          </Link>
        </div>
    <nav>
      <ul className='navlist'>
        <li className='login'><Link to="/login">Login</Link></li>
        <li className='signup'><Link to="/course">Course</Link></li>
        <li className='signup'><Link to="/reviews">Reviews</Link></li>
      </ul>
    </nav>
    {/* <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form> */}
  </header>
  )
}

export default Header
import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar ">
      {/* bg color is E4E9F9*/}
  
    <div className="flex-1 text-3xl font-semibold ml-5">

      <Link to="/">
        <div className="flex">
          <p>WLU</p>
          {/* text colour #94AAED*/}
          <p>GO</p>
          {/* text colour #2B57F7*/}
        </div>

      </Link>



    </div>


  <div className="flex-none gap-2 font-semibold mr-2">
    <div className="flex text-xl">
    <Link to="/table"><p className="mr-5 ">Table</p></Link>
    <Link to="/course"><p className="mr-5">Courses</p></Link>
    <Link to="/reviews"><p className="mr-10 ">Reviews</p></Link>

    </div>


    <div className="form-control">
      <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto bg-white" />
    </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><Link to="/login"><a>Login</a></Link></li>
        <li><Link to="/signup"><a>SignUp</a></Link></li>
      </ul>
    </div>
  </div>
</div>
  );
};

export default Header;

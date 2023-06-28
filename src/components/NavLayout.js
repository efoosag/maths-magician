import { NavLink, Outlet } from 'react-router-dom';
import './NavLayout.css';

function NavLayout() {
  return (
    <>
      <div className="container">
        <div className="Nav-con">
          <h1>Math Magicians</h1>
          <div className="Nav-link">
            <NavLink to="/">Home</NavLink>
            <span>|</span>
            <NavLink to="calculator">Calculator</NavLink>
            <span>|</span>
            <NavLink to="quote">Quote</NavLink>
          </div>
        </div>

        <Outlet />
      </div>

    </>
  );
}

export default NavLayout;

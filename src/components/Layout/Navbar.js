import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const { user, signOut } = useContext(AuthContext);

    return (
        <nav>
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
            {user && <Link to="/todos">Todos</Link>}
            {user && <button onClick={signOut}>Sign Out</button>}
        </nav>
    );
};

export default Navbar;

import { Link } from "react-router-dom";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import bookBranchLogo from './assets/bookBranchLogo.png';


const NavBar = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user); // Update state when user logs in or out
        });

        return () => unsubscribe(); // Cleanup listener on unmount
    }, [auth]);

    const handleSignOut = () => {

        signOut(auth).then(() => {
            navigate("/");
            window.location.reload();
        }).catch((error) => {
            console.error("Sign-out error:", error);
        });
    }

    return (
        <nav>
            <ul>
                <li id="homeButton">
                    <Link to="/" ><img src={bookBranchLogo} alt="Logo" className="bookBranchLogo"></img>Home</Link>
                </li>
                <div>
                <li>
                    <Link to="/about">About</Link>
                </li>                
                <li>
                    <Link to="/browse">Browse</Link>
                </li>
                <li>
                    <Link to="/search">Search</Link>
                </li>
                <li>
                    {user ? 
                    (<><Link to="/profile">Profile</Link>
                    <button onClick={handleSignOut} className="signOutButton" title="Sign out"><i className="fa-solid fa-arrow-right-from-bracket"></i></button>
                    </>)
                    :
                    (<Link to="/login">Login</Link>)
                    }
                </li>
                </div>
            </ul>
        </nav>
    )
}

export default NavBar;

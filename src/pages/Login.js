import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();
    const auth = getAuth();

    const logIn = async () => {
        try{
        await signInWithEmailAndPassword(getAuth(), email, password);
        navigate('/home');
        } catch (e) {
            setError(e.message);
        }
    }

    const handleSignOut = () => {

        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            console.error("Sign-out error:", error);
        });
    }

    return (
        <>
        <h1>Login Page</h1>
        {error && <p className="error">{error}</p>}
        <label htmlFor="email">Email</label>
        <input 
        type="text" 
        id="email" 
        name="email" 
        placeholder='Your email address'
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password</label>
        <input 
        type="password"
        id="password"
        name="password"
        placeholder='Your password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
        <button onClick={logIn} >Log In</button>
        <br></br>
        <Link to="/register">Don't have an account? Click here to register.</Link>
        <button onClick={handleSignOut} >Sign Out</button>
        </>
    );
}

export default Login;
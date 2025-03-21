import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

    const logIn = async () => {
        try{
        await signInWithEmailAndPassword(getAuth(), email, password);
        navigate('/home');
        } catch (e) {
            setError(e.message);
        }
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
        <Link to="/register" className='loginLink'>Don't have an account? Click here to register.</Link>
        </>
    );
}

export default Login;
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const register = async() => {
        try{
            if (password !== confirmPassword) {
                setError('Password and confirm password do not match');
                return;
            }
            await createUserWithEmailAndPassword(getAuth(), email, password);
            navigate('/home');
        } catch (e) {
            setError(e.message)
        }
    }

    return (
        <>
        <h1>Register an Account with Book Branch</h1>
        {error && <p className="error">{error}</p>}
        <label for="username">Username</label>
        <input 
        type="text" 
        id="username" 
        name="username" 
        placeholder='Your email address'
        value={email}
        onChange={e => setEmail(e.target.value)}
        />
        <label for="password">Password</label>
        <input 
        type="password"
        id="password"
        name="password"
        placeholder='Your password'
        value={password}
        onChange={e => setPassword(e.target.value)}
        />
        <label for="confirmPassword">Re-enter your password</label>
        <input 
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder='Re-enter your password'
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        />
        <button onClick={register} >Register</button>
        <br></br>
        <Link to="/lgoin">Already have an account? Click here to log in.</Link>
        </>
    );
}

export default Register;
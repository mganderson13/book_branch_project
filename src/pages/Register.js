import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const register = async () => {
        try {
            if (password !== confirmPassword) {
                setError('Passwords do not match');
                return;
            }

            // Create user in Firebase Authentication
            await createUserWithEmailAndPassword(getAuth(), email, password);

            // Send user data to your backend
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error("Failed to register user");
            }

            navigate('/login'); // Redirect to login page after successful registration
        } catch (e) {
            setError(e.message);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        await register(); // Calls register when the form is submitted
    };

    return (
        <>
        <h1>Register an Account with Book Branch</h1>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
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
        <label htmlFor="confirmPassword">Re-enter your password</label>
        <input 
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        placeholder='Re-enter your password'
        value={confirmPassword}
        onChange={e => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        </form>
        <br></br>
        <Link to="/login">Already have an account? Click here to log in.</Link>
        </>
    );
}

export default Register;
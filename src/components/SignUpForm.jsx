import { useState } from 'react'

function SignUpForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const { setToken } = props;

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/signup',
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        username: { username },
                        password: { password }
                    }
                    )
                })
            const result = await response.json();
            setToken(result.token)
        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <>
            <h2>Sign Up!</h2>
            {error && <p>{error}</p>}
            <form onSubmit={ handleSubmit }>
                <label>
                    Username: {" "}
                    <input
                        value={username}
                        onChange={(event) => {
                            setUsername(event.target.value)
                        }} />
                </label><br />
                <label>
                    Password: {" "}
                    <input
                        type='password'
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }} />
                </label><br/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default SignUpForm

import { useState } from 'react'

function SignUpForm(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const { setToken } = props;

    const handleSubmit = async (event) => {
        event.preventDefault();

        function validateForm() {
            let unCheck = document.forms['signUp']['un'].value;
            let pwCheck = document.forms['signUp']['pw'].value;
            if (unCheck.length < 8) {
                alert("Username must be at least 8 characters");
                return false;
            } else if (pwCheck.length < 8) {
                alert("Password must be at least 8 characters")
                return false;
            }
            else {
                return true;
            }
        }
        validateForm();
        // could also just disable button
        // <button disabled={username.length < 8 || password.length < 8 ? true:false}>

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
                    })
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
            <form name='signUp' onSubmit={handleSubmit}>
                <label>
                    Username: {" "}
                    <input
                        name='un'
                        value={username}
                        onChange={(event) => {
                            setUsername(event.target.value)
                        }} />
                </label><br />
                <label>
                    Password: {" "}
                    <input
                        name='pw'
                        type='password'
                        value={password}
                        onChange={(event) => {
                            setPassword(event.target.value)
                        }} />
                </label><br />
                <button>Submit</button>
            </form>
        </>
    )
}

export default SignUpForm

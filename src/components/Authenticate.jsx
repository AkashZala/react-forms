import { useState } from 'react'

function Authenticate(props) {
    const { token } = props;

    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleClick = async () => {
        try {
            const response = await fetch('https://fsa-jwt-practice.herokuapp.com/authenticate',
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${token}`
                    }
                })
            const result = await response.json();
            setSuccess(result.message)
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <>
            <h2>Authenticate!</h2>
            {error && <p>{error}</p>}
            {success && <p>{success}</p>}
            <button onClick={handleClick}>
                Authenticate Token
            </button>
        </>
    )
}

export default Authenticate
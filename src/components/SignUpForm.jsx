import { useState } from "react"

const SignUpForm = (props) => {
  // use states for username, pw and error
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  // async function to handle form submission
  const handleSubmit = async(event) => {
    event.preventDefault();
    try {
      // post username/pw
      const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: 'POST',
        headers : {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      });
      const goodSignup = await response.json();
      // set new token
      props.setToken(goodSignup.token);
      
    } catch(error) {
      // show error
      setError(error.message);
    }
   
  }

  return (
    <section>
      <h2>Sign Up</h2>
      { error && <p>{ error }</p> }
      <form onSubmit={ handleSubmit }>
        <input placeholder="username" value={ username } onChange={(event) => { setUsername(event.target.value) }}/>
        <input placeholder="password" type="password" value={password} onChange={(event) => { setPassword(event.target.value) }}/>
        <button>Submit</button>
      </form>
    </section>
  )
  
}

export default SignUpForm
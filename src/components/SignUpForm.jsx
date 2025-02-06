import { use, useState } from "react"

const SignUpForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault();
    console.log("pizzaaaaaaa!");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="username" value={username} onChange={(event) => { setUsername(event.target.value) }}/>
      <input placeholder="password" type="password" value={password} onChange={(event ) => { setPassword(event.target.value) }}/>
      <button>Submit</button>
    </form>
  )
}

export default SignUpForm
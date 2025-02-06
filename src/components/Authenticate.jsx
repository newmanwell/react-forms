import { useState } from "react"

const Authenticate = (props) => {
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  // on click async function
  const handleClick = async() => {
   try {
    // get token success message
    const response = await fetch("https://fsa-jwt-practice.herokuapp.com/authenticate", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${props.token}`
      }
    });
    const goodToken = await response.json();
    // change the success message
    setSuccessMessage(goodToken.message);
   } catch(error){
    setError(error.message);
   }
  } 

  return (
    <section>
      <h2>Authenticate</h2>
      { error && <p>{ error }</p> }
      { successMessage && <p>{ successMessage }</p> }
      <button onClick={ handleClick }>Authenticate</button>
    </section>
  )
}

export default Authenticate
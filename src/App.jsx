import { useState } from "react"

import SignUpForm from "./components/SignUpForm"
import Authenticate from "./components/Authenticate"

const App = () => {
const [token, setToken] = useState(null);

  return (
    <>
      <SignUpForm token={token} setToken={setToken}/>
      <Authenticate token={token} setToken={setToken}/>
    </>
  )
}

export default App

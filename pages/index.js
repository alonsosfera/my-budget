import { signOut } from "next-auth/react"
import { withAuth } from "../middlewares"

function Home() {
  return (
    <div>
      Welcome user<br />
      <button onClick={() => signOut()}>
        Sign out
      </button>
    </div>
  )
}

export default withAuth(Home)

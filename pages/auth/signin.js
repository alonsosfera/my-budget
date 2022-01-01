import { signIn } from "next-auth/react"

export default function SignIn() {
  return (
    <div>
      <h1>SIGNIN</h1>
      <button onClick={() => signIn("google")}>
        LOG-IN
      </button>
    </div>
  )
}

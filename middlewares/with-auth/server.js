import { getSession } from "next-auth/react"

const serviceAuth = handler => async (req, res) => {
  const session = await getSession({ req })

  if (!session) {
    return res.status(401).end()
  }
  return handler(req, res)
}

export default serviceAuth

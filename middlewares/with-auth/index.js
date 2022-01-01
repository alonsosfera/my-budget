import Router from "next/router"
import { useSession } from "next-auth/react"

export function withAuth(func) {
  return function Component(props) {
    const { status } = useSession()

    if (status === "loading") {
      return <div>LOADING</div>
    }

    if (status === "unauthenticated") {
      Router.push("/auth/signin").then()
      return <div>LOADING</div>
    }

    return func({ ...props })
  }
}

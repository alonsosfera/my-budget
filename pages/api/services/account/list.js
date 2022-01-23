import withAuth from "../../../../middlewares/with-auth/server"
import { prisma } from "../../../../utils/prisma"

const listAccounts = async (req, res) => {
  try {
    const accounts = await prisma.account.findMany()
    res.status(200).json({ accounts })
  } catch (error) {
    res.status(400).json({ error })
  }
}

export default withAuth(listAccounts)

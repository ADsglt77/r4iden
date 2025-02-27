import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    return await prisma.view.count()
})
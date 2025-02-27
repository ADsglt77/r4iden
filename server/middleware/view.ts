import prisma from "~/lib/prisma"

export default defineEventHandler(async (event) => {
    console.log('view middleware');
    
    const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown'
    console.log('ip', ip);
    // const fingerprint = getHeader(event, 'user-agent') || 'unknown'
    
    if (!ip) return 
    if (await prisma.view.findFirst({ where: { ip } })) return
    const view = await prisma.view.create({
        data: {
            ip
        }
    })
})

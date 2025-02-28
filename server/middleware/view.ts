export default defineEventHandler(async (event) => {
    const ip = getRequestIP(event, { xForwardedFor: true }) || 'unknown'
    
    if (!ip) return console.error('No IP found in request');
    if (ip === 'unknown') return console.error('IP is unknown');
    if (await event.context.db.view.findFirst({ where: { ip } })) return console.log('IP already exists in database');
    await event.context.db.view.create({
        data: {
            ip
        }
    })
})

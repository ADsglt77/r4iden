export default defineEventHandler(async (event) => {
	return await event.context.db.view.count()
});

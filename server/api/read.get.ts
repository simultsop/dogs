export default defineEventHandler(async (event): Promise<any> => {
    const query = getQuery(event)
    return String(query.key) ? useStorage().getItem(`redis:${query.key}`) : null
})
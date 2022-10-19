export default defineEventHandler(async (event): Promise<any> => {
    const query = getQuery(event)
    return useStorage().getItem(`redis:${query.key}`)
})
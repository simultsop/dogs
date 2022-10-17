export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const data = await useStorage().getItem(`redis:${query.key}`)
    return data
})
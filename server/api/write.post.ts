export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    const body = await useBody(event)
    console.log('Writing')
    console.log(query.key)
    console.log(body)
    await useStorage().setItem(`redis:${query.key}`, body)
    return `${query.key} stored successfully`;
})
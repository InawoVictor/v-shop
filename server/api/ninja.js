export default defineEventHandler(async (event) => {
    
    //Handle Query Params
    // const {name} = getQuery(event)
    
    //Handle Post Data
    // const {age} = await readBody(event)

    //APi call with Private Key
    const {currencyKey} = useRuntimeConfig()
    const { data } = await $fetch(`https://api.currencyapi.com/v3/latest?apikey=${API_KEY}`)

    return data
})
    
let token = 'a37d73ecc862ac8ab5902a92258b8b8341f1230d8db5a32f'

export const serverCalls = {
    get: async () => {
        const response = await fetch('https://anime-87.herokuapp.com/api/animes',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        })
    }
}
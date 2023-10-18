// вариант 1 (вымученный)
async function getJoke1() {
    // let url = 'https://api.chucknorris.io/jokes/random&quot' // ???
    let url = 'https://api.chucknorris.io/jokes/random'
    try {
        const answer = await fetch(url)
        if (!answer.ok) {
            throw new Error('Чак Норис занят')
        }
        const info = await answer.json()
        return info.value
    } catch (error) {
        console.error('Error:', error)
        return 'Ошибка'
    }
}


// вариант 2 (как на лекции)
async function getJoke2() {
    // let url = 'https://api.chucknorris.io/jokes/random&quot' // ???
    url = 'https://api.chucknorris.io/jokes/random'
    try {

        let response = await fetch(url, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        response = await response.json()
        return response.value // добавила value
    }
        catch (error) {
        console.error('Error:', error)
        return 'Ошибка'
    }
}


// главная функция
async function getChuckNorrisJoke() {
    // const result = await getJoke1() // тоже работает
    const result = await getJoke2()
    console.log(result)
}


// запуск главной функции
getChuckNorrisJoke()
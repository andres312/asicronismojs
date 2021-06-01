const someThingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Hey! ok')
        } else {
            reject('Whooooops!')
        }
    })
}

someThingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))

const someThingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('True')
            }, 500);
        } else {
            const error = new Error('Whoops')
            reject(error)
        }
    })
}

someThingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.log(err))

Promise.all([someThingWillHappen(), someThingWillHappen2()])
    .then(response => {
        console.log('Array of results', response)        
    })
    .catch(err => {
        console.error(err)
    })
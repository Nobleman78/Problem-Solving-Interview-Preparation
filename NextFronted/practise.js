// Resolve promises after a button clicked
function resolvePromise() {
    return new Promise((resolve) => {
        const button = document.getElementById('resolveButton')

        button.addEventListener('click', () => {

            resolve('Promise Resolved')
        }, { once: true })

    })
}

// Create promises after a button clicked
function createPromises() {
    const button = document.getElementById('button')
    button.addEventListener('click', () => {
        const promise = new Promise((resolve) => {
            setTimeout(() => resolve('Promise Resolved'), 1000)
        })
        promise.then(result => console.log(result))
    })
}

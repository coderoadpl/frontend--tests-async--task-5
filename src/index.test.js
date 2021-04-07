const makePromiseResolving = (data) => {
    return new Promise((resolve) => setTimeout(() => resolve(data), 0))
}

const makePromiseRejecting = (error) => {
    return new Promise((resolve, reject) => setTimeout(() => reject(error), 0))
}

it('should resolve promise with right data v1', () => {
    expect.assertions(1)

    const promise = makePromiseResolving('some data')

    // return promise.then((data) => {
    //     expect(data).toBe('some data')
    // })

    // these lines above have the same effect as this line below

    return expect(promise).resolves.toBe('some data')
})

it('should resolve promise with right data v2', () => {
    expect.assertions(1)

    return expect(makePromiseResolving('some data')).resolves.toBe('some data')
})

it('should reject wit right error v1', () => {
    expect.assertions(1)

    const promise = makePromiseRejecting('some error')

    return expect(promise).rejects.toBe('some error')
})

it('should reject wit right error v2', () => {
    expect.assertions(2)

    const promise = makePromiseRejecting(new Error('some error'))

    // return promise.catch((error) => {
    //     expect(error).toBeInstanceOf(Error)
    //     expect(error.message).toBe('some error')
    // })

    expect(promise).rejects.toBeInstanceOf(Error)

    return expect(promise).rejects.toThrow('some error')
})

it.only('should resolve with right data and not catch', () => {
    expect.assertions(1)

    const promise = makePromiseResolving('some data')

    // return promise
    //     .then((data) => {
    //         expect(data).toBe('some data')
    //     })
    //     .catch((error) => {
    //         expect(error).toBe('some error')
    //     })

    expect(promise).rejects.toBe('some error')

    return expect(promise).resolves.toBe('some data')
})
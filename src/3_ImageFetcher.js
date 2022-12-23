const { createMachine, interpret, assign } = window.XState;

const ImageFetcherMachine = createMachine({
    initial: "idle",
    context: {
        image: null,
        error: null
    },
    states: {
        idle: {
            on: { FETCH: "loading" }
        },
        loading: {
            invoke: {
                src: () => fetchImage(),
                onDone: {
                    target: "success",
                    actions: assign({
                        image: (_, event) => {
                            // eslint-disable-next-line no-debugger
                            // debugger
                            document.querySelector('#randomImage').src = event.data.url

                            return event.data.url
                        }
                    })
                },
                onError: {
                    target: "failure",
                    actions: assign({ error: (_, event) => event.data })
                }
            },
            on: { CANCEL: "idle" }
        },
        success: {
            on: { FETCH: "loading" }
        },
        failure: {
            on: { FETCH: "loading" }
        }
    }
})

const fetchImage = () => {
    return fetch('https://picsum.photos/200/300', {
        method: 'get',
        headers: {
            "Content-Type": "application/json"
        }
    })
}

const ImageFetcher = interpret(ImageFetcherMachine)
// 啟動 service
ImageFetcher.start();
window.ImageFetcher = ImageFetcher;

document.querySelector('#btnGenerateRandomImage').addEventListener('click', () => {
    window.ImageFetcher.send('FETCH')
})

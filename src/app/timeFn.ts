export interface ITimeFn<T> {
    start: () => boolean
    stop: () => boolean
    reset: () => void

    get value(): T
    get running(): boolean
}

export interface ITimeFnGetArgs {
    startTime: number | null
    endTime: number | null
}

export interface ITimeFnOptions<T> {
    get: ({ startTime, endTime }: ITimeFnGetArgs) => T
}

export const timeFn = <T>({ get }: ITimeFnOptions<T>): ITimeFn<T> => {
    let startTime: number | null = null
    let endTime: number | null = null
    let running: boolean = false

    const start = () => {
        if (!running) {
            if (!startTime) {
                startTime = performance.now()
            } else {
                startTime += performance.now() - endTime!
            }
            endTime = null
            running = true
            return true
        } else {
            return false
        }
    }

    const stop = () => {
        if (running) {
            endTime = performance.now()
            running = false
            return true
        } else {
            return false
        }
    }

    const reset = () => {
        startTime = running ? performance.now() : null
        endTime = null
    }

    return {
        start,
        stop,
        reset,
        get value() { return get({ startTime, endTime }) },
        get running() { return running }
    }
}



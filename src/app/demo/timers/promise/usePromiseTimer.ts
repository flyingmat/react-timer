import { useEffect, useRef } from "react"
import { ITimeFn, ITimeFnOptions, timeFn } from "../../../timeFn"

export interface IPromiseTimerArgs<T, K> extends ITimeFnOptions<K> {
    promise: Promise<T> | null
}

export const usePromiseTimer = <T, K>({ promise, get }: IPromiseTimerArgs<T, K>): ITimeFn<K> => {

    const timer = useRef<ITimeFn<K>>(timeFn({ get })).current

    useEffect(() => {
        timer.reset()
        if (promise) {
            timer.start()
            promise.then(() => timer.stop())
        }
    }, [promise, timer])

    return timer

}
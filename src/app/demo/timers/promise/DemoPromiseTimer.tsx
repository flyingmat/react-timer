import { useEffect, useRef, useState } from "react";
import { msDeltaTimeFn } from "../../../msDeltaTimeFn";
import { DemoTimer } from "../../DemoTimer";
import { fn } from "../msDeltaToSMs";
import { usePromiseTimer } from "./usePromiseTimer";

export const DemoPromiseTimer = () => {

    const [delta, setDelta] = useState(0);
    const [promise, setPromise] = useState<Promise<number> | null>(null);
    const interval = useRef<number | null>(null)
    const promiseTimeout = useRef<number | null>(null)
    const timer = usePromiseTimer({ promise: promise, get: msDeltaTimeFn })


    useEffect(() => {
        if (interval.current !== null) window.clearInterval(interval.current)
        interval.current = window.setInterval(() => setDelta(timer.value))
    }, [timer])

    const spawnPromise = () => {
        if (promiseTimeout.current !== null) window.clearTimeout(promiseTimeout.current)
        setPromise(new Promise((resolve) => {
            promiseTimeout.current = window.setTimeout(() => {
                resolve(1000)
            }, 1000)
        }))
    }

    return (
        <div className="demo-promise">
            <DemoTimer {...{ value: fn(delta), subtitle: 'Promise (1s)' }} />
            <button className="demo-button" onClick={spawnPromise}>Spawn promise</button>
        </div>
    )

}

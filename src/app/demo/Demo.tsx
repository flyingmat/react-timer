import './Demo.css'

import { useEffect, useRef, useState } from "react"
import { ITimeFn, timeFn } from "../timeFn"
import { msDeltaTimeFn } from "../msDeltaTimeFn"
import { DemoMillisecondsTimer } from "./timers/linear/DemoMillisecondsTimer"
import { DemoSecondsMsTimer } from './timers/linear/DemoSecondsMsTimer'
import { DemoTimestampTimer } from './timers/linear/DemoTimestampTimer'
import { DemoBPMTimer } from './timers/bpm/DemoBPMTimer'
import { DemoSMsSepTimer } from './timers/linear/DemoSMsSepTimer'
import { DemoPromiseTimer } from './timers/promise/DemoPromiseTimer'


export const Demo = () => {
    const [delta, setDelta] = useState(0)
    const timer = useRef<ITimeFn<number>>(timeFn({ get: msDeltaTimeFn })).current
    const interval = useRef<number | null>(null)

    useEffect(() => {
        if (interval.current !== null) window.clearInterval(interval.current)
        interval.current = window.setInterval(() => setDelta(timer.value))
    }, [timer])

    return (
        <div id="demo">
            <div id="controls">
                <button className='demo-button' onClick={() => timer.start()}>START </button>
                <button className='demo-button' onClick={() => timer.stop()}>STOP</button>
                <button className='demo-button' onClick={() => timer.reset()}>RESET</button>
            </div>
            <div id="demo-timers">
                <div className="demo-section">
                    <h1 className='demo-section-title'>Standard</h1>
                    <div className='demo-section-timers'>
                        <DemoMillisecondsTimer {...{ delta }} />
                        <DemoSecondsMsTimer {...{ delta }} />
                        <DemoSMsSepTimer {...{ delta }} />
                        <DemoTimestampTimer {...{ delta }} />
                    </div>
                </div>
                <div className="demo-section">
                    <h1 className='demo-section-title'>Multipliers</h1>
                    <div className='demo-section-timers'>
                        <DemoTimestampTimer {...{ delta, multiplier: 2 }} />
                        <DemoTimestampTimer {...{ delta, multiplier: 5 }} />
                        <DemoTimestampTimer {...{ delta, multiplier: 20 }} />
                        <DemoTimestampTimer {...{ delta, multiplier: 50 }} />
                    </div>
                </div>
                {/* <div className="demo-section">
                    <h1 className='demo-section-title'>Quadratic</h1>
                    <div className='demo-section-timers'>
                        <DemoTimer4 {...{ delta }} />
                    </div>
                </div> */}
                <div className="demo-section">
                    <h1 className='demo-section-title'>BPM</h1>
                    <div className='demo-section-timers'>
                        <DemoBPMTimer {...{ delta, bpm: 60 }} />
                        <DemoBPMTimer {...{ delta, bpm: 90 }} />
                        <DemoBPMTimer {...{ delta, bpm: 120 }} />
                        <DemoBPMTimer {...{ delta, bpm: 140 }} />
                    </div>
                </div>
                <div className="demo-section">
                    <h1 className='demo-section-title'>Promise</h1>
                    <div className='demo-section-timers'>
                        <DemoPromiseTimer />
                    </div>
                </div>
            </div>
        </div>
    )
}

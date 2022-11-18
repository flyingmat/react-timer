import { DemoTimer } from "../../DemoTimer";
import { ICustomDemoTimerProps } from "../ICustomDemoTimerProps";

export const DemoSMsSepTimer = ({ delta }: ICustomDemoTimerProps) => {

    const fn = (delta: number) => {
        const milliseconds = delta % 1000
        const seconds = Math.floor(delta / 1000)
        return `${seconds}s ${milliseconds.toString().padStart(3, '0')}ms`
    }

    return <DemoTimer {...{ value: fn(delta), subtitle: 'Seconds, milliseconds' }} />
}

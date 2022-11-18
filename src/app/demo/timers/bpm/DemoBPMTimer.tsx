import { DemoTimer } from '../../DemoTimer'
import { ICustomDemoTimerProps } from '../ICustomDemoTimerProps'


export interface IDemoBPMTimerProps extends ICustomDemoTimerProps {
    bpm: number
}

export const DemoBPMTimer = ({ delta, bpm }: IDemoBPMTimerProps) => (
    <DemoTimer {...{ value: Math.floor(delta / 1000 * (bpm / 60)).toString(), subtitle: `${bpm} BPM` }} />
)

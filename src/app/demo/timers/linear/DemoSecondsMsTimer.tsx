import { DemoTimer } from '../../DemoTimer'
import { ICustomDemoTimerProps } from '../ICustomDemoTimerProps'
import { fn } from '../msDeltaToSMs'

export const DemoSecondsMsTimer = ({ delta }: ICustomDemoTimerProps) => (
    <DemoTimer {...{ value: fn(delta), subtitle: 'Seconds, ms precision' }} />
)

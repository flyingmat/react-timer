import { DemoTimer } from '../../DemoTimer'
import { ICustomDemoTimerProps } from '../ICustomDemoTimerProps'
import { fn } from '../TimestampFn'

export interface IDemoTimestampTimerProps extends ICustomDemoTimerProps {
    multiplier?: number
}

export const DemoTimestampTimer = ({ delta, multiplier }: IDemoTimestampTimerProps) => (
    <DemoTimer {...{ value: fn(delta * (multiplier ?? 1)), subtitle: `Timestamp${multiplier ? ` (${multiplier}x)` : ''}` }} />
)

import { DemoTimer } from '../../DemoTimer'
import { ICustomDemoTimerProps } from '../ICustomDemoTimerProps'


export const DemoMillisecondsTimer = ({ delta }: ICustomDemoTimerProps) => (
    <DemoTimer {...{ value: `${delta}ms`, subtitle: 'Milliseconds' }} />
)

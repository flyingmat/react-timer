import './DemoTimer.css'


export interface IDemoTimerProps {
    value: string
    subtitle?: string
}

export const DemoTimer = ({ value, subtitle }: IDemoTimerProps) => {
    return (
        <div className='demo-timer-container'>
            <div className='demo-timer'>
                <div className='demo-timer-value'>{value}</div>
            </div>
            {!!subtitle && <div className='demo-timer-subtitle'>{subtitle}</div>}
        </div>
    )
}

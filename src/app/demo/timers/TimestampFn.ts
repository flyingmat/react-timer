export const fn = (delta: number) => {
    const milliseconds = delta % 1000
    const seconds = Math.floor(delta / 1000) % 60
    const minutes = Math.floor(delta / 60000) % 60
    const hours = Math.floor(delta / 3600000)
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`
}

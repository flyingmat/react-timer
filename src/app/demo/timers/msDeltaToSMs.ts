export const fn = (delta: number) => {
    const milliseconds = delta % 1000
    const seconds = Math.floor(delta / 1000)
    return `${seconds}.${milliseconds.toString().padStart(3, '0')}s`
}

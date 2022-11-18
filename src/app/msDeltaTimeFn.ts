import { ITimeFnGetArgs } from "./timeFn";


export const msDeltaTimeFn = ({startTime, endTime}: ITimeFnGetArgs): number => {
    if (startTime === null) {
        return 0;
    } else if (endTime === null) {
        const now = performance.now();
        return now - startTime;
    } else {
        return endTime - startTime;
    }
}

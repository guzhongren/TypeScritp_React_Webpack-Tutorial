interface ClockInterface {
    currentDate: Date;
    setTime(dataTime: Date);
}

class Clock implements ClockInterface {
    currentDate: Date;
    setTime(d: Date) {
        this.currentDate = d;
    }
    constructor(h: number, m: number) {
        // this.setTime
    }
}

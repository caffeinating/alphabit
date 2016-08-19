import * as D from "./dates";

export default class DateRange {
    constructor(from = Date.now(), to = from) {
        this.from = from;
        this.to = to;
    }
    toString() {
        const from = new Date(this.from);
        const to = new Date(this.to);
        return D.isoDate(from) + "|" + D.isoDate(to);
    }
}
const padNum = num => num.toString().padStart(2, "0");

export class Dob extends Date {
    constructor(dateString) {
        super(dateString);
    }

    get formattedDate() {
        const str = `${this.getFullYear()}-${padNum(this.getMonth() + 1)}-${padNum(this.getDate())}`;
        return str;
    }
}